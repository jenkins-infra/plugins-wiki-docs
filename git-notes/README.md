## Overview

This is a [pure Ruby Jenkins
plugin](https://github.com/cowboyd/jenkins.rb) which annotates git
commits with Jenkins build information using the awesome
[git-notes](http://man.github.com/git/git-notes.html) functionality.

|                                                                                             |                                                                                             |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| ![](https://github.com/swipely/jenkins-git-notes-plugin/raw/master/.README/publish-box.png) | ![](https://github.com/swipely/jenkins-git-notes-plugin/raw/master/.README/github-view.png) |

For more information, see the [project page on
GitHub](https://github.com/swipely/jenkins-git-notes-plugin).

## Version History

### 0.0.4 (2012.04.20)

-   Fixed: can't fetch refs/notes/jenkins before it exists

### 0.0.3 (not released)

-   Fixed: force pushed notes lose history

### 0.0.2 (2012.03.30)

-   Fixed: [does not work on slave
    nodes](https://github.com/swipely/jenkins-git-notes-plugin/issues/2)

### 0.0.1 (2012.03.29)

-   Initial release
