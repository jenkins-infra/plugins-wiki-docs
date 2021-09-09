# Short Workspace Path Plugin

Use shallow directory hierarchy for build workspaces to avoid build
failures on filesystems with constrained path length.

The plugin detects path length limitation for given node automatically
and chooses to either use default (and potentially long) workspace path
or hash based one with controlled length.

Plugin accepts Jenkins-wide configuration property
`org.jenkinsci.plugins.shortwspath.BUILD_PATH_LENGTH` (defaults to 512)
representing the desired minimal path length available in the workspace
(regardless of the path length to the workspace itself). Whenever
default workspace will not leave enough room in path name for the build,
workspace path is shortened. Note that this plugin does not provide
strong guarantee that `BUILD_PATH_LENGTH` will be always available, but
it tries its best when it would not with the default algorithm.

The plugin has currently no effect on master node and never places short
workspaces out of slave's workspace root.
