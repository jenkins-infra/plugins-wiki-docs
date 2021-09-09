Zapper is a Jenkins Continuous Integration system plugin that helps you
run OWASP ZAP as part of your automated security assessment regime. The
plugin can use a pre-installed version of ZAP when given the path to the
ZAP installation. Alternatively, it can automatically download and build
a version of ZAP to be used by your security tests.

# Release Notes

**Version 1.0.7**

-   Adds support for configurable ZAP source checkout directory during
    automated ZAP build.
-   Zapper now maintains a clone of the latest (at the time of Zapper
    release) OWASP ZAP trunk on GitHub. This clone is tested and
    guaranteed to build successfully. This is necessary because the
    current trunk may not actually build. Of course the ZAP repository
    to use by Zapper is settable, and can be set to the official trunk
    or any branch or release from the official OWASP ZAP repository.

**Version 1.0.0**  
Initial release.
