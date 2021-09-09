The API Fortress plugin allows you to add an API testing build step in
your Jenkins CI. There are multiple testing modes you can choose from,
depending on your needs.

The key parameter that you need to retrieve from API Fortress for any
mode is the Webhook URL, a uniquely generated URL representing a
project. You can create them in the company settings of your API
Fortress account.

 

## [Modes](https://github.com/jenkinsci/apifortress-plugin/#modes)

There are 4 testing modes available. "Run single test" will run a single
test, while the others will run suites of tests.

### [Run single test](https://github.com/jenkinsci/apifortress-plugin/#run-single-test)

You can run a single test by providing a test ID. Test IDs can be found
in test interstitial pages.

### [Run automatch](https://github.com/jenkinsci/apifortress-plugin/#run-automatch)

You can run our "automatch" mode by providing a URL representing a
certain endpoint. You can configure automatch patterns in the
"Automatch" section of each test. Read more about automatch
[Here](http://apifortress.com/doc/automatch/) .

### [Run by tag](https://github.com/jenkinsci/apifortress-plugin/#run-by-tag)

By running "by tag" you can run multiple tests, marked with a certain
tag. Tags can be added and edited in the test details.

### [Run project](https://github.com/jenkinsci/apifortress-plugin/#run-project)

By running a full project, you'll be running all tests contained in the
project.

## [Options](https://github.com/jenkinsci/apifortress-plugin/#options)

The following options can apply to any mode.

### [Blocking](https://github.com/jenkinsci/apifortress-plugin/#blocking)

The plugin can silently run (blocking = false), let the build continue
with a success and inform you if the test failed using the various
methods available. Or it can be actively determining the build success
(blocking=true) so that the build will wait for the tests result and
stop the build if the tests fail.

### [Dry-run](https://github.com/jenkinsci/apifortress-plugin/#dry-run)

If checked no events will be stored within API Fortress. To be used in
conjunction with "blocking".

### [Silent](https://github.com/jenkinsci/apifortress-plugin/#silent)

If checked no alerts will be sent if the tests fail.

### [Parameters override](https://github.com/jenkinsci/apifortress-plugin/#parameters-override)

You can override up to 3 parameters in the test scope. These variables
will appear within the test scope just like any other variable. Pretty
useful if you're willing to override the domain of the service being
tested (Ie. staging vs production).

 

### Changelog

#### Version 1.0 (Jul 12, 2017)

-   Initial release
