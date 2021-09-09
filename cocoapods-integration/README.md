  

This plugin provides a very basic build step for projects which use
CocoaPods.

This adds a "Update CocoaPods" build step, which runs `pod repo update`
and then `pod install` in the root of your workspace.  
Optionally, by checking the `Clean "Pods" folder` option, the `Pods`
folder will first be deleted.

Note: there currently isn't any advantage to installing this plugin,
compared to using an "Execute shell" step to run these commands
yourself.

## Version History

#### Version 0.1 (Oct 29, 2012)
