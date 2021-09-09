Maintain the localization process in sync with OneSky

# Features

-   Downloading of 'ready to be published' translation files from one
    sky
-   Creation of the downloaded files over in your workspace
-   Pipeline support

# Usage

To use this plugin 4 things need to be configured:  
 

1.  The target translation project Id as found on the url of the onesky
    app
2.  Secret key - This is where equivalent to a password for accessing
    the api
3.  Public Key - This is the equivalent to a username for accessing the
    api
4.  Resources Path - This is the relative path, inside your workspace,
    where your translation files will be output to 

# Configuration

To retrieve the **project Id** head over to the project definitions in
your onesky app and copy and pate the ending of your URL:

![](docs/images/Screen_Shot_2016-11-28_at_17.07.34.png)  
(88106 this example)

To the settings in your job: 

![](docs/images/Screen_Shot_2016-11-28_at_17.22.42.png)

Or your pipeline:

![](docs/images/Screen_Shot_2016-11-28_at_17.23.42.png)

The **Resources Path** will be configured in the same place:

on your job:  
![](docs/images/Screen_Shot_2016-11-28_at_17.27.39.png)

and on your pipeline:

![](docs/images/Screen_Shot_2016-11-28_at_17.26.43.png)

Finally, both the **API Secret** and **API key** should be taken from
the onesky app settings page:

![](docs/images/settings.png)

and saved in the global jenkins configuration:

![](docs/images/Screen_Shot_2016-11-28_at_17.29.45.png)
