This plug-in adds a publisher that posts build links to Trac tickets
referenced in built scm revisions.

#### Changes

-   1.3
    -   Removed local build server URL config, now using Jenkins-wide
        setting.
    -   Updated to use more recent core (1.424).
-   1.2
    -   Enable XML-RPC access by digest authentication (courtesy of
        akihirox)
-   1.1
    -   Add support for publishing references for 'corrected' issues
        (ones referenced on prior unsuccessful builds)
-   1.0
    -   Support for successful builds through XML-RPC  (using HTTP Basic
        Auth)
