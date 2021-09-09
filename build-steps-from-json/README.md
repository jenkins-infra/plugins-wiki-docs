This plugin enables a builder which takes build steps from json and
executes them in freestyle project.

## Usage

This plugin enables a builder which takes build steps from json data and
executes them in freestyle project.

Snippet generator also provided to user what and how to define builder
in formatted code.

This avoids the large listing of build steps in configuration screen
with long scrollable.

### Example

``` syntaxhighlighter-pre
[
  {
    "stepClass": "hudson.tasks.BatchFile",
    "stepDetails": [
      {
        "command": "echo \"test\""
      },
      {
        "command": "echo \"test1\""
      }
    ]
  },
  {
    "stepClass": "sp.sd.fileoperations.FileOperationsBuilder",
    "stepDetails": [
      {
        "fileOperations": [
          {
            "$class": "FileCreateOperation",
            "fileContent": "test",
            "fileName": "test.txt"
          }
        ]
      }
    ]
  }
]
```

### Note

This plugin is in starting stages and testing with various builders,
builders with complex object may not support.

### Release 1.0 (10 August 2016)

-   First public release
