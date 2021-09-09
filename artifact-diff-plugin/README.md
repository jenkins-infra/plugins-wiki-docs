  

# Artifact diff plugin

Plugin can compare content of an artifact identified by its relative
path among different builds.

## URL format

Plugin introduces transient build action using `artifact-diff` url name.
Action itself consumes build number to compare against followed by an
artifact path.

*\<buildUrl\>*`/artifact-diff/`*\<otherBuildNumber\>*`/`*\<artifactPath\>*

The `output` argument is used to switch between the `html` (the default)
and `plain` text output.

-   output = html\|plain

## Output format

-   Plugin uses the Unified diff format to represent artifact
    difference.
-   `/dev/null` placeholder filename is used to represent an artifact
    that could not be read, such artifact is then treated as empty.
-   An empty diff sequence is used when both artifacts equal.

## Changelog

### 1.2

-   Fix RunList related regression
