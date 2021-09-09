# Unique Id Plugin

This plugin provides an API to create and store persistent permanently
unique id's for Jenkins model objects. This is useful when those objects
need to be stored in an external database.

There are currently identity stores for items of type PersistenceRoot
which covers Runs/Builds, Jobs/Projects and Folders among other Items.
Additional stores can be added via the
org.jenkinsci.plugins.uniqueid.IdStore extension point.

## Usage

To create an id for a supported object, just call
org.jenkinsci.plugins.uniqueid.IdStore\#makeId(Object o). To get the id
(if any) call org.jenkinsci.plugins.uniqueid.IdStore\#getId(Object o)

**If you copy folders or jobs manually then you will need to ensure that
you remove any** `unique-id.txt` **files that are present in the
destination after the copy.**

## Upgrading to 2.0+ from 1.x

Prior to 2.0 the plugin stored the unique ID inside Jobs or Folders
configuration. What this meant was that if you copied items (either via
the UI/ CLI or manually) you would end up with dupliate "unique" ids.

Version 2 solves this by separating the storing of the unique id into a
side file.

When you first install 2.0 or higher the plugin will scan all folders,
jobs and Runs for IDs and will move them out into a side file along side
the items configuration. (`unique-id.txt)`.

**What the migration does not do is validate that the IDs are still
unique** (if you previously copied a job for example you will have
duplicated). Therefor post migration if you really do require uniqueness
you will need to manually inspect these files for duplicates. This is
not performed by default as it can give a false sense of security as
jobs may have been copied across different masters.

If you find duplicates - then all you need to do is to remove the
`unique-id.txt` files and a new id will be generated when next
requested.

## Change History

### Version 2.2.0 (March 8th, 2019)

-   The plugin now requires Jenkins 2.60.3 and Java 8 ([PR
    \#12](https://github.com/jenkinsci/unique-id-plugin/pull/12))

### Version 2.1.3 (August 30th, 2016)

-   Upgrade optional dependency on folders plugin minimum version from
    4.0 to 5.0 to restore binary compatibility
    ([JENKINS-37816](https://issues.jenkins-ci.org/browse/JENKINS-37816))

### Version 2.1.2 (July 1st, 2016)

-   migration to new parent POM
    ([JENKINS-35014](https://issues.jenkins-ci.org/browse/JENKINS-35014))

### Version 2.0.2 (June 15th, 2015)

-   ![(error)](docs/images/error.svg)
    unique ids where not persisted correctly for new ids attached to
    items
    ([JENKINS-28913](https://issues.jenkins-ci.org/browse/JENKINS-28913))

### Version 2.0.1 (June 12th, 2015)

-   ![(error)](docs/images/error.svg)
    Jenkins startup fails if there's an unsupported item in unique-id
    migration
    ([JENKINS-28883](https://issues.jenkins-ci.org/browse/JENKINS-28883))

### Version 2.0.0 (June 11th, 2015)

-   ![(plus)](docs/images/add.svg)
    Major rework of storage mechanisms (see above)
-   requires Java 7 or higher to run
