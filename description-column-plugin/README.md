# Description Column Plugin

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Stored XSS
    vulnerability](https://www.jenkins.io/security/advisory/2020-09-16/#SECURITY-1916)

  

Provide job description column for views.

## Configuration

Create a new view by clicking on the "+" tab, select list view as type
and name it. At the bottom of the configuration page of the new view you
can add the Description column.  
If you want to add columns to the **All** view, follow the guide on the
[Editing or Replacing the All
View](https://wiki.jenkins-ci.org/display/JENKINS/Editing+or+Replacing+the+All+View)
wiki page.

You can optionnaly choose to trim the description to a certain amount of
lines by checking the appropriate checkbox and setting the request
amount.  
The trimming is done on \<br/\> tags

## Screenshots

Coming soon.

  

------------------------------------------------------------------------

  

## Changelog

### **1.3 (26 Aug, 2011)**

-   Allow to display the job name above the description.
-   Added french localization.

### 1.2 (20 Aug, 2011)

-   Allow to limit the number of lines to display.
-   Display the full description as tooltip.
-   Added help on configuration.
-   Added some basic tests.

### 1.1 (14 Aug, 2011)

-   Fix pom.xml

### 1.0 (13 Aug, 2011)

-   initial implementation
