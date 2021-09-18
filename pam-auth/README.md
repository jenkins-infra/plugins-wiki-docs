Adds Unix Pluggable Authentication Module (PAM) support to Jenkins.

## Version History

### Version 1.6 (2019-10-08)

-   Use HTTPS URLs in `pom.xml`
-   Replace use of libc native code bindings using
    [JNA](https://github.com/java-native-access/jna) framework to
    instead use simpler [jnr-posix](https://github.com/jnr/jnr-posix)
    library.
-   Various minor code cleanups to use Jenkins core changes up to
    version 2.138.4.

### Version 1.5.1 (2019-05-21)

-   [Fix security
    issue](https://jenkins.io/security/advisory/2019-05-21/#SECURITY-1316)

### Version 1.5 (2019-04-05)

-   No release notes recorded

### Version 1.4.1 (2019-05-21)

-   [Fix security
    issue](https://jenkins.io/security/advisory/2019-05-21/#SECURITY-1316)
    (backport)

### Version 1.4 (2018-08-22)

-   [PR 7](https://github.com/jenkinsci/pam-auth-plugin/pull/7) Upgrade
    libpam4j to version 1.11.
