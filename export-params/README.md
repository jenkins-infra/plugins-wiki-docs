# Description

This plugin can export Jenkins provided parameters to file with various
formats.

# Usage

If you install this plugin, you can select **"Export parameters to
file"** item from *Add build step* dropdown list in job configuration.

| Field      | Description                                                                     |
|------------|---------------------------------------------------------------------------------|
| File path  | The path of exported file.                                                      |
| Format     | Exported file format. you can select one of them.                               |
| Keys       | The list of parameter keys you want to export. they should be delimited by ",". |
| Use regexp | You can use regular expression as Keys if checked.                              |

# Contributed build parameters

| Name                   | Description                   |
|------------------------|-------------------------------|
| EXPORT\_PARAMS\_FILE   | The path to parameters file   |
| EXPORT\_PARAMS\_FORMAT | The format of parameters file |

# Formats

| Name                                                                                 | Extension   |
|--------------------------------------------------------------------------------------|-------------|
| [Properties](http://docs.oracle.com/javase/1.5.0/docs/api/java/util/Properties.html) | .properties |
| [XML](http://www.w3.org/XML/)                                                        | .xml        |
| [JSON](http://www.json.org/)                                                         | .json       |
| [YAML](http://yaml.org/)                                                             | .yml        |

# Example of exported file

### Parameters

[TABLE]

### Properties

``` syntaxhighlighter-pre
#Mon Apr 03 23:00:00 JST 2014
PARAM_TEXT=orange\napple\ngrape
PARAM_BOOL=true
PARAM_STRING=foobar
```

### XML

``` syntaxhighlighter-pre
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
<properties>
<entry key="PARAM_TEXT">orange
apple
grape</entry>
<entry key="PARAM_BOOL">true</entry>
<entry key="PARAM_STRING">foobar</entry>
</properties>
```

### JSON

``` syntaxhighlighter-pre
[{"key":"PARAM_BOOL","value":"true"},{"key":"PARAM_STRING","value":"foobar"},{"key":"PARAM_TEXT","value":"orange\napple\ngrape"}]
```

### YAML

``` syntaxhighlighter-pre
- key: PARAM_BOOL
  value: 'true'
- key: PARAM_STRING
  value: foobar
- key: PARAM_TEXT
  value: |-
    orange
    apple
    grape
```

# License

MIT License.

# Version history

## Version 1.9 (10/13/2016)

-   Fix JENKINS-38917: Version 1.8 stopped working with remote agents

## Version 1.8 (07/26/2016)

-   Contribute plugin specific parameters safely (Fix SECURITY-170)
-   Note that this plugin still exports safe parameters only.

## Version 1.5 (07/29/2014)

-   Fix JENKINS-23849: Relative path "/../" in "File path" are ignored
-   Ver. 1.2-1.4 was wrong release. Please ignore.

## Version 1.1 (04/09/2014)

-   Fix typo.

## Version 1.0 (04/09/2014)

-   First release.
