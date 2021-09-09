DTKit is a set of libraries and tools for converting input files (from
different tools) into output files with a standard formats (JUNIT or
TUSAR).  

DTKit stands for Data Transformation Kit.It includes a set of default
transformation.

Extensible

The DTKit architecture is extensible so that he end user can extend it
with his own tools.  
Have a look at the [DTKit
Design](http://localhost:8085/display/JENKINS/DTKit+Design)

JUnit

JUNIT is the standard Java xUnit framework. Running JUnit framework
provides result files in a JUnit format. Hudson can record JUnit test
results and provide useful information about test results, such as the
historical test result trends, web UI for viewing test reports, tracking
failures, and so on.  
DTKit provides conversion in JUnit files with a set of xUnit result
files (from C/C++,.NET or Ada xUnit frameworks) and the recording is
performed by the Hudson xUnit plugin.

TUSAR

TUSAR stands for Thales Unified Sofware Analysis Report.  
It’s a generic metric format composed of 4 categories:

-   Coverage
-   Measure
-   Test
-   Violations

TUSAR is defined by an XSD and a set of associated JAVA files.  
The TUSAR XSD can be found [in the Hudson
trunk](http://fisheye.jenkins-ci.org/browse/Hudson/trunk/hudson/dtkit/dtkit-frmk/dtkit-tusar-model/src/main/resources/com/thalesgroup/dtkit/tusar/model/xsd).

# I. Content

## 1. DTKIT FRMK

DTKIT is a set of API. It is composed of a standard XSD for JUnit and
TUSAR outputs.  
DTKIT FRMK will be used if you want to add conversion for your own
tools.

### Changelog

##### Version 0.12

\* Upgraded to Jenkins 1.396 API

##### Version 0.11

\* Conversions make it possible to take parameters for XSL
transformations

##### Version 0.10

\* Internal Refactoring

##### Version 0.9

\* Internal Refactoring

##### Version 0.8

\* Internal Refactoring

##### Version 0.7

\* Internal Refactoring

##### Version 0.6

\* Internal Refactoring

##### Version 0.5

\* Internal technical refactoring  
\* Added some JAXB and Jackson annotations to use DTKIT FRMK objects in
a web service layer

##### Version 0.4

\* Fixed some regressions introduced on DTKIT FRMK 0.3

##### Version 0.3

\* Internal Technical Refactoring

##### Version 0.2

\* Fixed package name for JUNIT model

##### Version 0.1

\* Initial release

### Compatibility version

| DTKIT FRMK Version / Hudson Core | Hudson 1.355                                                                                                                    | Jenkins 1.396                                                                                                                   |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| 0.12                             | ![(question)](docs/images/help_16.svg) | ![(tick)](docs/images/check.svg)       |
| 0.11                             | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.10                             | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.9                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.8                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.7                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.6                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.5                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.4                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.3                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.2                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |
| 0.1                              | ![(tick)](docs/images/check.svg)       | ![(question)](docs/images/help_16.svg) |

## 2. DTKIT Hudson Maven Plugin

DTKIT Maven Hudson Plugin makes its possible to convert generic POJOs
from DTKIT into Hudson Java files so that they can be processed by xUnit
Hudson plugin and TusarNotifier Hudson plugin.

### Changelog

##### Version 0.10

\* Upgraded to Jenkins 1.396 API

##### Version 0.9

\* Upgraded its dependency to DTKIT FRMK 0.10

##### Version 0.8

\* Upgraded its dependency to DTKIT FRMK 0.8

##### Version 0.7

\* Upgraded its dependency to DTKIT FRMK 0.7

##### Version 0.6

\* Upgraded its dependency to DTKIT FRMK 0.6

##### Version 0.5

\* Upgraded its dependency to DTKIT FRMK 0.5

##### Version 0.4

\* Upgraded its dependency to DTKIT FRMK 0.4

##### Version 0.3

\* The generated DESCRIPTOR for each type returns a singleton

##### Version 0.2

\* Added test phases in the plugin life-cycle

##### Version 0.1

\* Initial release

### Compatibility version

| DTKIT Hudson Maven Plguin Version | CI Core       | Default FRMK version |
|-----------------------------------|---------------|----------------------|
| 0.10                              | Jenkins 1.396 | 0.12                 |
| 0.9                               | Hudson 1.355  | 0.10                 |
| 0.8                               | Hudson 1.355  | 0.8                  |
| 0.7                               | Hudson 1.355  | 0.7                  |
| 0.6                               | Hudson 1.355  | 0.6                  |
| 0.5                               | Hudson 1.355  | 0.5                  |
| 0.4                               | Hudson 1.355  | 0.4                  |
| 0.3                               | Hudson 1.355  | 0.1                  |
| 0.2                               | Hudson 1.355  | 0.1                  |
| 0.1                               | Hudson 1.355  | 0.1                  |

## 3. DTKIT Processor

This module makes it possible to declare metrics by annotation.

### Changelog

##### Version 0.2

\* Upgraded to Jenkins 1.396 API

##### Version 0.1

\* Initial version

### Compatibility version

| DTKIT Default Version / | Core Version  |
|-------------------------|---------------|
| 0.2                     | Jenkins 1.396 |
| 0.1                     | Hudson 1.355  |

## 4. DTKIT Default

This module provides default outputs for the DTKIT.

### Changelog

##### Version 0.14

\* Integrated with DTKIT-Processor 0.1

##### Version 0.13

\* Upgraded to DTKT FRMK 0.11

##### Version 0.12

\* Upgraded to DTKT FORMAT JUNIT 0.12

##### Version 0.11

\* Upgraded to DTKT FORMAT JUNIT 0.11

##### Version 0.10

\* Upgraded to DTKT FRMK 0.10  
\* Upgraded to DTKIT Maven Plugin 0.9

##### Version 0.9

\* Upgraded to DTKT FRMK 0.8  
\* Upgraded to DTKIT Maven Plugin 0.8

##### Version 0.8

\* Internal Enhancement

##### Version 0.7

\* Upgraded to DTKT FRMK 0.7  
\* Upgraded to DTKIT Maven Plugin 0.7

##### Version 0.7

\* Upgraded to DTKT FRMK 0.6  
\* Upgraded to DTKIT Maven Plugin 0.6

##### Version 0.5

\* Upgraded to DTKT FRMK 0.5  
\* Upgraded to DTKIT Maven Plugin 0.5

##### Version 0.4

\* Upgraded to DTKT FRMK 0.4  
\* Upgraded to DTKIT Maven Plugin 0.4

##### Version 0.3

\* Upgraded to DTKIT FRMK 0.3

##### Version 0.2

\* Upgraded to DTKIT Hudson Maven Plugins 0.2

##### Version 0.1

\* Initial release

### Compatibility version

| DTKIT Default Version / | Hudson Core Version | Default FRMK Version | Default Hudson Maven Plugin |
|-------------------------|---------------------|----------------------|-----------------------------|
| 0.14                    | 1.355               | 0.11                 | 0.9                         |
| 0.13                    | 1.355               | 0.11                 | 0.9                         |
| 0.12                    | 1.355               | 0.10                 | 0.9                         |
| 0.11                    | 1.355               | 0.10                 | 0.9                         |
| 0.10                    | 1.355               | 0.10                 | 0.9                         |
| 0.9                     | 1.355               | 0.8                  | 0.8                         |
| 0.8                     | 1.355               | 0.7                  | 0.7                         |
| 0.7                     | 1.355               | 0.7                  | 0.7                         |
| 0.6                     | 1.355               | 0.6                  | 0.6                         |
| 0.5                     | 1.355               | 0.5                  | 0.5                         |
| 0.4                     | 1.355               | 0.4                  | 0.4                         |
| 0.3                     | 1.355               | 0.2                  | 0.2                         |
| 0.2                     | 1.355               | 0.1                  | 0.1                         |
| 0.1                     | 1.355               | 0.1                  | 0.1                         |

## DTKIT JUNIT Default

By, the default-supported tools are:

-   Aunit
-   BoostTest
-   CppTest
-   CppUnit
-   FPCUnit
-   MSTest
-   Nunit
-   PHPUnit
-   TUSAR (output)
-   UnitTest

For some tools, we supports a predefined version; and for other
versions, the tool version is not determined (N/A) due to a lack of
knowledge (Any help is welcome!).

We try to validate user inputs by an XSD file for each supported tool.  
The role of the XSD is to validate the end users input files before
being processed by DTKIT through the associated xUnit plugin and its
derived plugins (Gallio, CppTest, CppUnit, Gnat).

| Tool/Format  | Default supported version | Input XSD                                                                                                                  | JUnit output format |
|--------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------|---------------------|
| AUNIT        | 3.1.1                     | ![(tick)](docs/images/check.svg)  | 1.0                 |
| BOOSTTEST    | 1.43.0                    | ![(tick)](docs/images/check.svg)  | 1.0                 |
| CPPTEST      | 7.3                       | ![(error)](docs/images/error.svg) | 1.0                 |
| CPPUNIT      | 1.12.1                    | ![(tick)](docs/images/check.svg)  | 1.0                 |
| FPCUNIT      | 2.0                       | ![(error)](docs/images/error.svg) | 1.0                 |
| MSTEST       | N/A                       | ![(error)](docs/images/error.svg) | 1.0                 |
| NUNIT        | N/A                       | ![(error)](docs/images/error.svg) | 1.0                 |
| PHPUNIT      | 3.4                       | ![(tick)](docs/images/check.svg)  | 1.0                 |
| TUSAR Format | 1.0                       | ![(error)](docs/images/error.svg) | 1.0                 |
| UNITTEST     | 1.4                       | ![(error)](docs/images/error.svg) | 1.0                 |

### Changelog

##### Version 0.17

\* Fixed C++Test Unit

##### Version 0.16

\* Fixed somme minor issues

##### Version 0.15

\* No dependency with dtkit-default  
\* Fixed
[JENKINS-8492](https://issues.jenkins-ci.org/browse/JENKINS-8492) -
NUnit test suites is not parsed correctly  
\* Fixed
[JENKINS-8553](https://issues.jenkins-ci.org/browse/JENKINS-8553) -
BoostTest output coverting to JUnit format can't be recognized if
contains Exceptions in boostTest result

##### Version 0.14

\* Integrated with DTKIT-Processor 0.1

##### Version 0.13

\* pgraded to DTKT FRMK 0.11

##### Version 0.12

\* Fixed
[JENKINS-7335](https://issues.jenkins-ci.org/browse/JENKINS-7335) - Test
function name containing \< and \> is not considered valid.  
\* Fixed
[JENKINS-8003](https://issues.jenkins-ci.org/browse/JENKINS-8003) -
xUnit plugin fails to parse simple xml output from unittest++

##### Version 0.11

\* No changes. Release attached to Default Tusar

##### Version 0.10

\* Fixed internal transformers

##### Version 0.9

\* Fixed internal transformers

##### Version 0.8

\* Added internal transformers

##### Version 0.7

\* Internal Refactoring

##### Version 0.6

\* Fixed
[JENKINS-7039](https://issues.jenkins-ci.org/browse/JENKINS-7039) - New
XSD and XSL for Boost Test - Thanks to under2x  
\* Fixed
[JENKINS-7255](https://issues.jenkins-ci.org/browse/JENKINS-7039) -
Enhanced XSD and XSL for Boost Test

##### Version 0.5

\* Fixed
[JENKINS-7012](https://issues.jenkins-ci.org/browse/JENKINS-7012) -
Fixed CppUnit XSD - Thanks to qinqon  
\* Upgraded to DTKIT Default 0.4

##### Version 0.4

\* Fixed reopened
[JENKINS-6951](https://issues.jenkins-ci.org/browse/JENKINS-6951)
(PHPUnit XSD)  
\* Enhanced version name

##### Version 0.3

\* Fixed
[JENKINS-6951](https://issues.jenkins-ci.org/browse/JENKINS-6951)
(PHPUnit XSD)

##### Version 0.2

\* Fixed PHPUnit XSL and added PHPUnit testcases

#### Version 0.1

\* Initial release

### Compatibility version

| DTKIT Default JUnit Verion | DTKIT Default Version |
|----------------------------|-----------------------|
| 0.17                       | x                     |
| 0.16                       | x                     |
| 0.15                       | x                     |
| 0.14                       | 0.14                  |
| 0.13                       | 0.13                  |
| 0.12                       | 0.12                  |
| 0.11                       | 0.11                  |
| 0.10                       | 0.10                  |
| 0.9                        | 0.9                   |
| 0.8                        | 0.8                   |
| 0.7                        | 0.7                   |
| 0.6                        | 0.6                   |
| 0.5                        | 0.4                   |
| 0.4                        | 0.3                   |
| 0.3                        | 0.2                   |
| 0.2                        | 0.1                   |
| 0.1                        | 0.1                   |

From 0.15, DTKit Default JUnit is independent.

## DTKIT TUSAR Default

By, the default-supported tools are:

-   Checkstyle
-   Cobertura
-   Cppcheck
-   Cpptest
-   Junit
-   Klockwork

### Changelog

##### Version 0.22

\* Updated to Tusar model 0.16

##### Version 0.21

\* Update the Klocwork XSD

##### Version 0.20

\* Fixed metrics tools (klockwork, C++Test)

##### Version 0.19

\* Fixed metrics tools

##### Version 0.18

\* Fixed metrics tools

##### Version 0.17

\* Fixed metrics tools

##### Version 0.16

\* Upgraded to Jenkins 1.396 API

##### Version 0.15

\* Integrated with DTKIT-Processor 0.1

##### Version 0.14

\* Fixed boostest

##### Version 0.13

\* Updated to DTKIT FRMK 0.13

##### Version 0.12

\* No changes. Release attached to Default JUnit

##### Updated to TUSAR Format 0.11

\* Fixed internal transformers

##### Version 0.10

\* Introduced a new TUSAR 3 format

##### Version 0.9

\* Fixed internal transformers

##### Version 0.8

\* Fixed internal transformers

##### Version 0.7

\* Added the support of Gnatmetric  
\* Internal Refactoring

##### Version 0.6

\* Enhanced the C++Test XSL

##### Version 0.5

\* Upgraded to DTKIT Default 0.4

##### Version 0.4

\* Enhanced version name

##### Version 0.3

\* Technical Release

##### Version 0.2

\* Fixed wrong artifact spelling

##### Version 0.1

\* Initial release

### Compatibility version

| DTKIT Default TUSAR Verion | DTKIT Default Version |
|----------------------------|-----------------------|
| 0.22                       | x                     |
| 0.21                       | x                     |
| 0.20                       | x                     |
| 0.19                       | x                     |
| 0.18                       | x                     |
| 0.17                       | x                     |
| 0.16                       | x                     |
| 0.15                       | 0.14                  |
| 0.14                       | 0.13                  |
| 0.13                       | 0.13                  |
| 0.12                       | 0.12                  |
| 0.11                       | 0.11                  |
| 0.10                       | 0.10                  |
| 0.9                        | 0.9                   |
| 0.8                        | 0.8                   |
| 0.7                        | 0.7                   |
| 0.6                        | 0.6                   |
| 0.5                        | 0.4                   |
| 0.4                        | 0.3                   |
| 0.3                        | 0.2                   |
| 0.2                        | 0.1                   |
| 0.1                        | 0.1                   |

From 0.16, DTKit Default Tusar is independent.

## 5. DTKIT RS

is module provides RESTful web services for DTKIT.  
You are able to add transformers (metrics), validate input files against
an existing metric, convert input files against a supported format.  
There are also generic services for validating and converting any input
files.

DTKIT-RS contains a set of default transformers (the embbedded mode,
given by the module dtkit-default-junit and dtkit-default-tusar).  
Additionaly, you are able to add your own tramsformer (a metric
associated with a name, a version, an XSL and an optional XSD).  
For storing new metrics, we use a NoSQL datastore MongoDB.

The services are:

-   **GET /inputMetrics** returns all the metrics (or transformers).  
    The response is sent in XML or JSON according the client request
    header.
    Example

    curl -X GET -H "Accept:application/json"
    <http://localhost:8080/inputMetrics>

&nbsp;

-   **GET /inputMetrics;{filter}** returns all the information for the
    current metrics (matching the criterion given by the user with the
    filter).  
    The response is sent in XML or JSON according the client request
    header.
    Example

    curl -X GET -H "Accept:application/json"
    <http://localhost:8080/inputMetrics;name=boosttest;format=junit>

&nbsp;

-   **GET /inputMetrics/xsd;{filter}** returns the XSD content for the
    current metrics (matching the criterion given by the user with the
    filter).  
    If there are no XSD for the selected metric, a 404 status is
    returned.
    Be Careful

    The request header must be application/xml

    Example

    curl -X GET
    <http://localhost:8080/inputMetrics/xsd;name=boosttest;format=junit>

&nbsp;

-   **POST /inputMetricsValidation;{filter}** validates an input file
    (sent in the request body) against XSD of the current metrics
    (matching the criterion given by the user with the filter).  
    If the metric, doesn't have an XSD, the validation is OK and the
    status code is 200.  
    The response is sent in XML or JSON according the client request
    header.
    Example

    curl -X POST -H "Accept:application/json"
    -F"file=@testlog-no-valid.xml"
    <http://localhost:8080/inputMetricsValidation;name=boosttest;format=junit>

&nbsp;

-   **POST /inputMetricsValidation** validates a given input file
    against an input xsd (sent in the request body).  
    The method returns a validation string in XML or JSON according the
    client request header.
    Saxon library is used for the validation

    Example

    curl -X POST -H "Accept:application/json" -F"xsd=@boosttest-1.0.xsd"
    -F"file=@testlog-no-valid.xml"
    <http://localhost:8080/inputMetricsValidation>

&nbsp;

-   **POST /inputMetricsConversion/{filter}** converts the input file
    (sent in the request body) with the associated conversion method
    (provided programmatically by the metric or via its XSL) for the
    current metrics (matching the criterion given by the user with the
    filter).  
    The method returns the converted file.  
    The converted file is in the output format associated to the input
    metric.
    Be Careful

    The request header must be application/xml

    Example

    curl -X POST -F"file=@testlog.xml"
    <http://localhost:8080/inputMetricsConversion;name=boosttest;format=junit>

&nbsp;

-   **POST /inputMetricsConversion/** converts a given input file againt
    a given input xsl (both files in the request body).  
    The method returns the converted file.  
    The converted file is in the output format associated to the input
    metric.
    Be Careful

    The request header must be application/xml

    Example

    curl -X POST -F"xsl=@boosttest-1.0-to-junit-1.0.xsl"
    -F"file=@testlog.xml" <http://localhost:8080/inputMetricsConversion>

&nbsp;

-   **PUT /inputMetrics** inserts a metric with the form parameters
    'name, version, format and type'
    Example

    curl -X PUT -F name=newMeric -F version=2.0 -Ftype=TEST
    -Fformat=tusar -F xsl=@newXSL.xsl
    <http://localhost:8080/inputMetrics>

&nbsp;

-   \*DELETE /inputMetrics/{filter}\* delete the current metrics
    (matching the criterion given by the user with the filter).
    Example

    curl -X DELETE
    <http://localhost:8080/inputMetrics;name=metricSelected>

For each request, the {filter} is the conbinaison betweem the a name, a
version, a format and a type, as such:

-   GET /inputMetrics;name=cpptest
-   GET /inputMetrics;name=cpptest;version=7.3
-   GET /inputMetrics;name=cpptest;version=7.3;format=junit
-   GET
    /inputMetrics;name=cpptest;version=7.3;format=tusar;type=violation

The supported format for the embedded mode are:

-   JUNIT
-   TUSAR

For the peristance store, it can be any value inserted in the datastore.

The supported type are the following values:

-   MEASURE
-   TEST
-   VIOLATION
-   COVERAGE

### Roadmap

\* Adding a persistence layer with PUT REST services

### Changelog

##### Version 0.6

\* Upgraded to Jenkins 1.396 API  
\* Fixed text output without xml declaration

##### Version 0.5

\* Updated to dtkit-default-junit 0.13  
\* Updated to dtkit-default-tusar 0.13  
\* Updated internal technical versions

##### Version 0.4

\* Fixed DELETE AND GET XSD operations

##### Version 0.3

\* Updated to DTKIT FRMK 0.8  
\* Updated to DTKIT DEFAULT JUNIT and DEFAULT TUSAR 0.9  
\* Added a NoSQL datastore with MongoDB

##### Version 0.2

\* Upgraded the internal metrics to DTKIT DEFAULT 0.7  
\* Added generic web service for converting and validating input files

##### Version 0.1

\* Initial release

### Compatibility version

| DTKIT RS | DTKIT JUNIT Default Version | DTKIT TUSAR Default Version | Default FRMK Version |
|----------|-----------------------------|-----------------------------|----------------------|
| 0.6      | 0.15                        | 0.16                        | 0.12                 |
| 0.5      | 0.13                        | 0.13                        | 0.11                 |
| 0.4      | 0.9                         | 0.9                         | 0.8                  |
| 0.3      | 0.9                         | 0.9                         | 0.8                  |
| 0.2      | 0.7                         | 0.7                         | 0.7                  |
| 0.1      | 0.6                         | 0.6                         | 0.6                  |

# II. Adding Tool for the embedded part

DTKIT is an extensible solution and lets the users to add its own
tools.  
The new tools will be available in the [xUnit Hudson
plugin](http://localhost:8085/display/JENKINS/DTKit#) (for xUnit tools)
and in the TusarNotifier Hudson plugin (for all other metric tools)
without a new version of these plugins.

Adding a new tool can be done in two ways:

-   by making a new Hudson plugin
-   by making to make a new DTKIT project and you have to generate an
    Hudson archive with all Hudson generated classes and meta-data.

## Making a new Plugin

This is the case of the following plugin:
[Gallio](http://localhost:8085/display/JENKINS/DTKit#),
[Gnat](http://localhost:8085/display/JENKINS/DTKit#),
[CppTest](http://localhost:8085/display/JENKINS/DTKit#),
[CppUnit](http://localhost:8085/display/JENKINS/DTKit#).

These plugins are 'a plugin of a plugin', i.e a plugin that extends
another plugin.

You have to perform the following steps:

1.  Creating a template plugin
2.  Defining a netric class
3.  Defining a class that extends one the Metrics extension point
4.  Bundling and deploying the plugin

#### 1.Creating a template plugin

With the Hudson archetype or manually, create the Hudson plugin layout
with its dedicated Maven descriptor

**pom.xml**

``` syntaxhighlighter-pre
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.jvnet.hudson.plugins</groupId>
        <artifactId>plugin</artifactId>
        <version>1.355</version>
        <relativePath>../pom.xml</relativePath>
    </parent>

    <artifactId>gallio</artifactId>
    <packaging>hpi</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>Hudson Gallio plugin</name>
    <url>http://wiki.jenkins-ci.org/display/HUDSON/Gallio+Plugin</url>

    <dependencies>

        <dependency>
            <groupId>org.jvnet.hudson.plugins</groupId>
            <artifactId>xunit</artifactId>
            <version>1.5</version>
        </dependency>
    </dependencies>
</project>
```

Your maven descriptor extends the xUnit plugin for adding additional
testing tools.  
By transitivity, you will get all the DTKIT API and external
dependencies.

You have to extend the tusarnotifier plugin if you would like to add
metrics tools with a TUSAR output.

#### 2.Defining a metric class

This metric class provides all conversion and validation informations.

**GallioInputMetric.java**

``` syntaxhighlighter-pre
public class GallioInputMetric extends InputMetricXSL {

    @Override
    public InputType getToolType() {
        return InputType.TEST;
    }

    @Override
    public String getToolName() {
        return Messages.gallio_toolName();
    }

    @Override
    public String getToolVersion() {
        return "N/A";
    }

    @Override
    public String getXslName() {
        return "gallio-1.0-to-junit-1.0.xsl";
    }

    @Override
    public String getInputXsd() {
        return null;
    }

    @Override
    public OutputMetric getOutputFormatType() {
        return JUnitModel.OUTPUT_JUNIT_1_0;
    }
}
```

You can extend 'InputMetricXSL' class or either extend
'InputMetricOther' class.  
Extending InputMetricXSL lead to define all the metric informations
(XSL, XSD, Tool Version, ...).

XSD

The XSD for validating input files are optional.  
If you don't have XSD, you have to return null to the overridden
'getInputXsd' method. In this case, the input validation will be
ignored.

Extending InputMetricOther lets you define your own conversion and
validation methods in case your tool outputs is not in XML or is too
complex to set up an XSL.

#### 3.Defining a class that extends one of the Hudson Metrics extension point

The Metrics extension point can be found in
'com.thalesgroup.dtkit.metrics.hudson.api.type' package. The possible
values are:

-   TestType,
-   MeasureType,
-   ViolationType
-   CoverageType

**GallioInputMetric.java**

``` syntaxhighlighter-pre
public class GallioPluginType extends TestType {

    @DataBoundConstructor
    public GallioPluginType(String pattern, boolean faildedIfNotNew, boolean deleteOutputFiles) {
        super(pattern, faildedIfNotNew, deleteOutputFiles);
    }

    public TestTypeDescriptor<?> getDescriptor() {
        return new GallioPluginType.DescriptorImpl();
    }

    @Extension
    public static class DescriptorImpl extends TestTypeDescriptor<GallioPluginType> {

        public DescriptorImpl() {
            super(GallioPluginType.class, GallioInputMetric.class);
        }

        public String getId() {
            return GallioPluginType.class.getCanonicalName();
        }

    }
}
```

You have to define also the associated descriptor.

#### 4.Bundling and deploying the plugin

With Maven, launch the Maven packaging command (mvn package) and you
will get an hpi plugin file.  
Then deploy it into your Hudson $HUDSON\_HOME/plugins directory.
