Test website performance as a Jenkins build step using [Rigor
Optimization](http://rigor.com/features) (Application
[login](https://optimization.rigor.com/))

## Features

-   Launch performance scans of your website as a distinct build step
    using Rigor Optimization
    -   Launch multiple performance tests in parallel
-   Optionally fail the build based on any of the following criteria:
    -   Number of critical performance defects rises above a threshold
    -   Performance score falls below a threshold
    -   Specific performance defects found
-   Configure test timeout and build failure behavior
-   Tags build details directly inside Rigor Optimization so you can
    easily cross reference failures

## Requirements

-   Requires a paid license to the Rigor Optimization application, [More
    Information](http://rigor.com/features)

## Setup

#### Install plugin

Install this plugin via the Jenkins plugin manager.

#### Configure plugin

Create plugin using your [Rigor Optimization API
Key.](https://optimization.rigor.com/Settings/API) For more information,
check out this [Knowledge Base
Article](https://help.rigor.com/hc/en-us/articles/115004526087-How-to-Run-Optimization-Tests-from-a-Jenkins-Build)

## Version history

### Version 1.04 (May 7, 2019)

-   Add failure on performance budgets option

### Version 1.02 (September 13, 2016)

-   Initial release
