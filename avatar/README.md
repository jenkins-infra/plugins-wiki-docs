The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Missing permission check allows changing avatars of other
    users](https://jenkins.io/security/advisory/2019-08-07/#SECURITY-1099)

This plugin allows avatar images to be uploaded and associated with
Jenkins users.

# Usage

A new section appears in the user configuration page. You can upload any
image type that Java ImageIO understands (JPEG, PNG, BMP, GIF).
Transparency (in image formats that support it) is preserved. Animated
image formats (GIF, PNG) are respected (requires display support by
browser).

Once an avatar has been attached to a user the avatar is displayed on
the user page (e.g. `http``://[jenkins-root]/user/<username>`)`.`

The avatar is also available directly for use by other plugins and pages
at:

``` syntaxhighlighter-pre
 http://[jenkins-root]/user/<username>/avatar/image
```

To remove an avatar simply click upload with no file selected.

###### WARNING: Avatar images are held in heap memory. Keep image sizes to a minimum to avoid memory issues.

# Tips

-   You can quickly create a new user simply by going directly to that
    user's profile configuration page:

``` syntaxhighlighter-pre
 http://[jenkins-root]/user/<username>/configure
```

### Changelog

#### Version 1.2 (June 23rd 2013)

-   Reworked to retain original image format. Provides more flexibility
    to user (animated GIFs can now be uploaded), but puts more
    responsibility on user not to exhaust heap memory.

#### Version 1.1 (May 24th, 2012)

-   Integrate with Jenkins standard avatars

#### Version 1.0 (Aug 7th, 2011)

-   Initial release
