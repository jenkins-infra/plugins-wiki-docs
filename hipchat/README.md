
For detailed instructions on how to use this plugin please see the
[GitHub
README](https://github.com/jenkinsci/hipchat-plugin/blob/master/README.markdown)
page.

# Changelog

## Version 2.2.1 (Sep 25, 2018)

-   Fix security issues:
    [one](https://jenkins.io/security/advisory/2018-09-25/#SECURITY-984%20(1)),
    [two](https://jenkins.io/security/advisory/2018-09-25/#SECURITY-984%20(2))

## Version 2.2.0 (Aug 20, 2018)

The plugin documentation has been updated and improved in general.

New Features:

-   BUILD\_DESCRIPTION macro is now supported (\#88)
-   Support custom card icons per notifications (\#101)

Bugfixes:

-   First successful build should always result in SUCCESS notifications
    (\#105)
-   Handle missing macro implementations more gracefully (\#106, \#108)
-   Straighten out Jenkins version dependency (\#102)
-   Ensure configuration is only migrated during plugin upgrade
    (JENKINS-44790)

## Version 2.1.1 (Feb 15, 2017)

Bugfixes:

-   BUILD\_DURATION in pipeline builds always displayed "0 ms"
    (JENKINS-41861)
-   The HipChat cards should use HTTPS to display the Jenkins logo
    (\#94) - Note: the cards only work when v2 API is enabled.
-   HIPCHAT\_CHANGES\_OR\_CAUSE and COMMIT\_MESSAGE variables weren't
    working at all in pipeline builds (JENKINS-41861)

## Version 2.1.0 (Feb 7, 2017)

-   The $PRINT\_FULL\_ENV variable is no longer supported.
-   Several tokens that were possible to use in previous versions, are
    now deprecated and eventually will not be supported. To remain
    backwards compatible, the plugin still supports all the old tokens,
    but their replacement to the new tokens are recommended

    | Deprecated token       | Supported replacement           |
    |------------------------|---------------------------------|
    | $DURATION              | $BUILD\_DURATION                |
    | $JOB\_DISPLAY\_NAME    | $PROJECT\_DISPLAY\_NAME         |
    | $TEST\_COUNT           | ${TEST\_COUNTS,var=\\"total\\"} |
    | $FAILED\_TEST\_COUNT   | ${TEST\_COUNTS,var=\\"fail\\"}  |
    | $SKIPPED\_TEST\_COUNT  | ${TEST\_COUNTS,var=\\"skip\\"}  |
    | $SUCCESS\_TEST\_COUNT  | ${TEST\_COUNTS,var=\\"pass\\"}  |
    | $URL                   | $BUILD\_URL                     |
    | $COMMIT\_MESSAGE\_TEXT | ${COMMIT\_MESSAGE,escape=false} |
    | $CHANGES               | $HIPCHAT\_CHANGES               |
    | $CHANGES\_OR\_CAUSE    | $HIPCHAT\_CHANGES\_OR\_CAUSE    |

New Features:

-   Support for HipChat cards (\#85, JENKINS-32083)
-   Support for token-macro-plugin tokens (\#59, \#65, \#88, \#90,
    JENKINS-34934)

Bugfixes:

-   Plugin fails with NPE if changeset cannot be computed (\#89)
-   Very long notification messages caused HTTP 400 errors (\#87)
-   Need ability to turn off blue ocean URLs (\#92) -\>
    $BLUE\_OCEAN\_URL has been introduced to represent these URLs
    instead. $URL/$BUILD\_URL now always results in classic UI links
-   BUILD\_DURATION token renders "and counting" messages in pipeline
    jobs (JENKINS-40461)

## **Version 2.0.0 (Oct 27, 2016)**

The plugin now requires JDK 7 runtime.

New Features:

-   Blue Ocean UI support - the HipChat plugin should now generate URLs
    that are compatible with Blue Ocean (\#82)
-   Expose commit message as a variable, $COMMIT\_MESSAGE (when using
    HTML format) and $COMMIT\_MESSAGE\_TEXT (when using text format)
    variables have been added
-   Display "No changes" if no SCM change happened between builds
-   v1/v2 API/OAuth2 tokens are now stored in Jenkins using the
    Credential API. Existing keys will be migrated across to the new
    format as part of Jenkins upgrade (JENKINS-27303)
-   Expose $SUCCESS\_TEST\_COUNT and $SKIPPED\_TEST\_COUNT as message
    template variables

Bugfixes:

-   Fix incorrect link for help text (\#76)
-   Small updates to logging statement to make the plugin a bit less
    verbose
-   Made the help text for message templates more available, should be
    harder to miss the available variables
-   Plugin ignored proxy authentication settings (JENKINS-33214)

## Version 1.1.0 (Oct 27, 2016)

The release build was terminated half-way in the process due to a socket
timeout. Usage of 1.1.0 version is NOT recommended.

## Version 1.0.0 (Jan 9, 2016)

The plugin now requires at least Jenkins 1.609.2.

New Features:

-   Flexible notification configuration:
    -   allow setting room notification, message template and
        notification color for each notification type (JENKINS-18127,
        JENKINS-28314, JENKINS-26974, \#16, \#54)
    -   introduce default notifications (can be set under Global
        settings), which are only triggered if a job has no
        notifications set up (\#30)
    -   configuration stored in old format will keep on working
-   Expose failed and total test count in message templates, use
    $FAILED\_TEST\_COUNT and $TEST\_COUNT respectively (\#18)
-   Workflow plugin support (\#60, JENKINS-27202)
-   Text format support (\#47)

Bugfixes:

-   Potential NPE when collecting changeset information from git
    repositories (\#55)

## Version 0.2.0 (Sept 14, 2015)

Bugfixes:

-   Fix help message for v2 setting (\#41, JENKINS-27304)
-   space in room name resulted in failure with v2 API (\#52)
-   ABORTED-\>SUCCESS didn't result in a BACK\_TO\_NORMAL notification
    (\#51)
-   noProxyHost setting is not obeyed (JENKINS-29057)

New Features:

-   Improve error handling, output messages to build logs (\#9)
-   Room name now can be parameterized (\#44, JENKINS-22723)
-   Added extra validation for the "Send As" field with helpful error
    messages (\#46)
-   Improved support for matrix builds, now it's possible to select how
    and when should the plugin send notifications for Matrix builds
    (\#50)
-   JOB\_DISPLAY\_NAME macro is now available, should contain the
    project's display name similarly to pre 0.1.9 notifications
    (JENKINS-27712)
-   Explicitly enable TLSv\* protocols for the outgoing SSL connections
    (\#49)

## Version 0.1.9 (Mar 9, 2015)

Bugfixes:

-   Room setting and notification selection should be per post-build
    task, not per build (\#29, JENKINS-25908)
-   Job configuration won't get updated when global configuration
    changes (\#31, \#33, JENKINS-19184, JENKINS-26845)
-   No HipChat notification sent when build status change from
    "Unstable" to "Back To Normal" (JENKINS-25714)
-   The plugin should set HTTP connect/read timeouts (\#22)
-   Incorrect path to help files for config pages (\#35)

New Features:

-   Support for HipChat v2 & per-project auth token settings (\#11)
-   Allow customization of notification messages (\#25)
-   Use full project display name in notifications (\#12)
-   Introduce a Test Configuration button on global config page (\#24)
-   The configuration pages are now localizable
