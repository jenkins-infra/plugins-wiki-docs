/* eslint-env node */
/* eslint "require-jsdoc":0 */
const mkdirp = require('mkdirp').sync;
const {basename, dirname} = require('path');
const path = require('path');
const fs = require('fs');
const axios = require('./axios');
const {getRawConfluenceContent, getContentFromConfluencePage} = require('./confluence.js');
const {checkUrl, convertBody, decodeEntities, findImages, getFormatType, getUrlAsStream, replaceAsync} = require('./utils.js');

const validWikiDomains = [
  'wiki.jenkins-ci.org', // primary
  'wiki.jenkins.io',
  'localhost:8085',
];

async function getConfluencePageFromId(url) {
  try {
    const fragment = await getRawConfluenceContent(url);
    return getContentFromConfluencePage(url, fragment);
  } catch (e) {
    if (e.isAxiosError) {
      if (e.response) {
        console.log(e.response.data.message);
        return '';
      }
    }
  }
}

function replaceUrl(value) {
  return value.replace(
      /https:\/\/wiki.jenkins-ci.org|https:\/\/wiki.jenkins.io/,
      'http://localhost:8085',
  );
}

async function main() {
  const docs = await axios.get('https://updates.jenkins.io/current/plugin-documentation-urls.json').then((response) => response.data);
  for (const [key, value] of Object.entries(docs)) {
    if (value.url.includes('github.com')) {
      continue;
    }
    const url = replaceUrl(value.url);
    await processContent(key, url);
  }
}

async function processContent(pluginId, pluginWikiUrl) {
  mkdirp(path.join('content', pluginId));
  const extension = 'md';

  const wikiContent = await getConfluencePageFromId(pluginWikiUrl);
  if (!wikiContent) {
    return;
  }

  const outputType = getFormatType(extension);
  const {stdout} = await convertBody(console, wikiContent, outputType);

  const files = [];
  const images = findImages(wikiContent).map(decodeEntities);
  const urlRE = new RegExp('(' + images.map((i) => i.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|') + ')', 'gi');

  const content = await replaceAsync(stdout, urlRE, async function(val, grab) {
    if (!images.includes(val)) {
      return val;
    }

    try {
      checkUrl(validWikiDomains, grab);
    } catch (e) {
      // not a wiki image url, so leave it where it is
      return val;
    }
    grab = replaceUrl(grab);

    const dir = 'docs/images/';
    const filename = decodeURIComponent(basename(new URL(grab).pathname)).replace(/\s+/g, '_').substr((250-dir.length)*-1);
    if (!filename) {
      return val;
    }
    try {
      files.push({content: await getUrlAsStream(grab), filename: `${dir}${filename}`});
      return val.replace(grab, `${dir}${filename}`);
    } catch (e) {
      console.error(e);
      return val;
    }
  });

  files.push({
    content: Buffer.from(content),
    filename: 'README.' + extension,
  });
  for (const file of files) {
    const fullfilename = path.join('.', 'content', pluginId, file.filename);
    mkdirp(dirname(fullfilename));
    try {
      fs.writeFileSync(fullfilename, file.content);
    } catch (e) {
      console.log({file, e});
      throw e;
    }
  }
}

main().then(console.log, console.log);
