This plugin counts source steps.

This plugin bundles [stepcounter
3.0.3](https://github.com/takezoe/stepcounter)

## Pipeline example

-   simply counting
    ``` syntaxhighlighter-pre
    stepcounter settings: [[encoding: 'UTF-8', filePattern: 'src/main/**/*.java', filePatternExclude: '', key: 'Java'], [encoding: 'UTF-8', filePattern: 'src/test/**/*.java', filePatternExclude: 'src/test/java/sample/*.java', key: 'TestCode']]
    ```

-   output excel(xls) format file
    ``` syntaxhighlighter-pre
    stepcounter outputFile: 'sample.xls', outputFormat: 'excel', settings: [[encoding: 'UTF-8', filePattern: 'src/main/**/*.java', filePatternExclude: '', key: 'Java'], [encoding: 'UTF-8', filePattern: 'src/test/**/*.java', filePatternExclude: 'src/test/java/sample/*.java', key: 'TestCode']]
    ```

-   output json format file
    ``` syntaxhighlighter-pre
    stepcounter outputFile: 'sample.json', outputFormat: 'json', settings: [[encoding: 'UTF-8', filePattern: 'src/main/**/*.java', filePatternExclude: '', key: 'Java'], [encoding: 'UTF-8', filePattern: 'src/test/**/*.java', filePatternExclude: '', key: 'TestCode']]
    ```

# Version history

## Version 2.0.0 (06/01/2017)

Pipeline support.

## Version 1.3.2 (03/03/2013)

GUI improved.

## Version 1.0 (02/28/2012)

Initial release
