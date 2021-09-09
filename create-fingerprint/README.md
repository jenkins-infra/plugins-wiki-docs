Adds the ability to generate fingerprints as build steps instead of
waiting for a build to complete.

This is useful when the files used to create the fingerprint are
generated before the end of the build since the owner of a fingerprint
is based on the file age. It is also useful when using a plugin such as
Join where you can call other jobs within the build steps. By generating
the fingerprints prior calling the other jobs, the upstream build will
really be the owner of the fingerprint.

## **Change Log**

##### Version 1.0 (Nov 18, 2011)

-   Initial version
