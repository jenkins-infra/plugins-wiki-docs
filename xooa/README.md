{jenkins-plugin-info:xooa-plugin}

Xooa plugin allows user to automatically upgrade a blockchain
application deployed on Xooa Platform. It can be added as a build
pipeline step. The plugin supports apps deployed on both Hyperledger
fabric and Ethereum networks.

  

Steps to get started with:

1.  Install plugin 
    1.  Go to "Manage Jenkins" section. 
    2.  Click on "Manage Plugins".
    3.  Search for "Xooa" and install the plugin.
2.  Add Xooa deployment token 
    1.  Go to "Manage Jenkins" section. 
    2.  Click on "Configure System".
    3.  Under "Xooa Configuration" section, paste deployment token
        obtained from Xooa dashboard.
    4.  Click "Save".
3.  Use Xooa plugin in a project 
    1.  Create new "Freestyle project" or go to existing one.
    2.  Scroll to "Build" section.
    3.  Click on "Add build step" dropdown and select "Upgrade Xooa
        app".
    4.  Enter "Smart contract folder name" which contains smart
        contract(s) within Jenkins' workspace.
    5.  Enter "App Id" which should be upgraded.
    6.  Click "Save".

On next successful build, given application will  be upgraded
automatically.

Console output can be monitored during application upgrade.

View upgrade information in the "App Upgrade Info" section of a
particular build.

  
