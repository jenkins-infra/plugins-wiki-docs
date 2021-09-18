Allow you to run eXtensive Testing tests before or after a build.

Log test steps into log file on the project workspace.  
Show results in HTML page.  
Store results into the project workspace.

More informations about [eXtensive
Testing](http://www.extensivetesting.org/) by Denis Machard.

## Configuration

Go to configuration page  /job/\<jobname\>/configure

In the "Build" section, Add a build step : select eXtensive Testing

Enter the following parameters (don't forget a "/"):

-   Extensive Testing ProjectName : the project name in xtc server *ex:
    Common*

&nbsp;

-   Extensive Testing Test Path : the path to the test in xtc  *ex:
    /Basics/00\_Wait.tux*

&nbsp;

-   Extensive Testing Login : xtc user

&nbsp;

-   Extensive Testing Password : xtc user's password

&nbsp;

-   Extensive Testing Rest API Url : Rest API URL \_ex:
    http://192.168.51.246/rest/\_

&nbsp;

-   Debug Mode : Enable or Disable advanced logs

## Changelog
