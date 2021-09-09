Allows managing webjars for javascript and css libraries from within
Jenkins

This plugin allow managing webjars for javascript and css libraries from
within Jenkins

Jenkins HTML Resource plugin

This plugin allow managing webjars for javascript and css libraries from
within Jenkins  
Currently there is no easy way to add a javascript or css library to
jenkins to use them for theming, creating custom widgets etc.

Below are a few screenshots of how the plugin works, (I borrowed many
concepts from the scriptler plugin)

This screenshot shows that the plugin provides a new management like
called 'Manage HTML resources' for managing webjars  
![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot1.png)

Clicking on the Manage HTML Resources Link will take you to a page that
lists all the webjars that are currently added to Jenkins

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot2.png)

Here two webjars are already added: jquery-2.2.1.jar and
datatables-1.10.11.jar

To add a new webjar click on the 'Add new Webjar Link' on the left pane.
This link takes you to the following sceen

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot3.png)

I've added bootstrap webjar in the screenshot below

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot4.png)

Clicking on upload will take you back to the page that lists all the
webjars

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot5.png)

Clicking on the edit link will take you to a page that allows you to
choose the js and css libraries that you want to include in Jenkins

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot6.png)

Below is a screenshot of jquery webjar. The initialization script is
optional. It can be used to ad custom javascript code to the header.  
In the screenshot below some custom initialization code has been added
to prevent jQuery from conflicting with prototype.js

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot7.png)

Below is a screenshot showing the chrome debugger that the js libraries
have been downloaded from webjar

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot8.png)

Below is screenshot showing the chrome debugger that the js libraries
are added to the header section of html page

![](https://raw.githubusercontent.com/jenkinsci/htmlresource-plugin/master/docs/images/screenshot9.png)
