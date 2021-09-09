This plugin integrates Jenkins with Microsoft Visual SourceSafe .  

# Changelog

### Version 1.9 (2011/8/8)

-   Added support for multiple paths in SourceSafe
    ([JENKINS-810](https://issues.jenkins-ci.org/browse/JENKINS-810))

### Version 1.8 (2010/9/19)

-   Fixed a ClassCastException with Maven projects
    ([JENKINS-5404](https://issues.jenkins-ci.org/browse/JENKINS-5404))

### Version 1.7 (2009/4/23)

-   Fixed a bug that caused invalid channgelog generation if comments
    include non-ASCII characters.
    ([report](http://www.nabble.com/VSS%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%A7%E3%81%AE%E3%82%BD%E3%83%BC%E3%82%B9%E5%8F%96%E5%BE%97%E3%81%8C%E3%81%86%E3%81%BE%E3%81%8F%E8%A1%8C%E3%81%8B%E3%81%AA%E3%81%84-td23173615.html))

### Version 1.6 (2009/4/22)

-   If run on Unix, report an error message pointing out that it only
    runs on Windows.
-   Improved error diagnosis when changelog.xml fails to parse
    ([report](http://www.nabble.com/VSS%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%A7%E3%81%AE%E3%82%BD%E3%83%BC%E3%82%B9%E5%8F%96%E5%BE%97%E3%81%8C%E3%81%86%E3%81%BE%E3%81%8F%E8%A1%8C%E3%81%8B%E3%81%AA%E3%81%84-td23173615.html))

### Version 1.5 (2009/3/25)

-   Improved error diagnosis
    ([report](http://www.nabble.com/problem-with-vss-plugin-td22703202.html))

### Version 1.4 (2009/2/25)

-   Fixed a bug in the error check
    ([JENKINS-3110](https://issues.jenkins-ci.org/browse/JENKINS-3110))

### Version 1.3 (2009/2/18)

-   Fixed a ClassCastException used with Maven projects.
