The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [API key stored in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-1063)

A Jenkins CI plugin for uploading dSYM files to Crittercism.

# crittercism-dsym-plugin

This Jenkins CI plugin allows for a post build step that uploads dSYM
files via Crittercism's API. The dSYM files are used for symbolication
of iOS binaries in Crittercism crash logs. As such, this plugin is only
helpful for Mac OSX hosts.

**USING THE CRITTERCISM-DSYM-PLUGIN:**

1.  After installation, add a post-build step with the option 'Upload
    dSYM to Crittercism'.
2.  The plugin requires three fields:  
    \* **API Key** - Retrieve this from Crittercism's app dashboard,
    under 'Settings'.  
    \* **App ID** - Also available from the Crittercism app
    'Settings'.  
    \* **dSYM zip** file - Path to the dSYM zip file to be uploaded. You
    may use environment variables. Ex:
    '${WORKSPACE}/build/MyApp-dSYM.zip'.

The plugin may encounter the following errors while uploading the dSYM
file:

**Error 400**: There was a problem with the dSYM file. **Error 404**:
App was not found or the given tokens are incorrect.

**Note:** Depending on your configuration, the dSYM zip file generated
in your build steps may be named something like 'MyApp-1.0-dSYM.zip',
where 1.0 is your version number and may change with each build. To make
things easier for the post-build steps, you can rename your dSYM zip
file to something static, such as 'MyApp-dsym.zip'. To accomplish this,
add a build step that executes shell commands, such as:

``` syntaxhighlighter-pre
mv ${WORKSPACE}/build/*dSYM.zip ${WORKSPACE}/build/MyApp-dSYM.zip
```

### Changelog

#### 1.1 (released 2013-03-20)

-   initial release
