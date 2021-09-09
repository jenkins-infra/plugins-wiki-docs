This plugin allows you to add some links from a text file to the sidebar
at every build.

  
The data are obtained from a user selected file in a working directory.
The structure of the file is as follows:

-   each line in file describes one link to be added to the sidebar
-   each line must contain three fields divided by tabs: **name, url,
    icon**. One can omit icon field to use default.

AnchorChain complains to console log for any issues.
