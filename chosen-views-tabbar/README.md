
Do you have too many views in your Jenkins? Do you get the dreaded
horizontal scrolling? Then this plugin is for you!

# Description

This plugin introduce a new *Views Tab Bar* that display the views using
the excellent [Chosen Drop Down](http://harvesthq.github.io/chosen/) to
choose the views and, additionally, keeps the most recent chosen views
to the left as tabs.  
This is a case where an image is worth more than a thousand words:
![](docs/images/chosen_views_tabbar.png)  
There are two parts in the above screenshot:

1.  The Recently Opened Views tabs, listing all views tha have been
    chosen recently, up to 5 by default.
2.  A "Chosen" select box, which allows you to filter the view list by
    typing any part of the view name.

Everytime a view is open in Jenkins, it will be "remembered" in the left
set of tabs. The amount of views to remember can be changed through the
global configurations:
![](docs/images/chosen_views_tabbar_globalconfig.png)

# Changelog

## Version 1.2

-   Introducing the possibility to set up a hotkey to focus the dropdown
