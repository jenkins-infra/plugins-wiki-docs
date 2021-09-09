Adds a post build configuration option to bring the executing node
offline if the build fails.

This can be very useful if you need to examine the environment where the
build failed. It can also be used to bring cloud nodes offline (and
eventually destroyed) to ensure test never run on a 'dirty' node.

###### Failsafe

This plugin contains a failsafe that makes it ignore the master node.
This means that the master node will never be taken offline.

# Changelog

### Version 1.0

First public release
