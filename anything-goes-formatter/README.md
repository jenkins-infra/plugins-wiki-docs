This plugin allows you to use JavaScript inside your project
description.

# Caution

When JavaScript is added inside the description, it effectively has
access to the user's session of the Jenkins, which can be then used to
do operations on behalf of the user. There's an inherent security risk
in this. Use with caution, only when you can trust all the users of your
installation.

It's not sufficient to be able to trust users who are able to configure
Jenkins itself, views, or projects, or update builds. Any logged in user
can edit their own description (`/user/username/configure`) and could
add unsafe JavaScript to their user profile.

# Changelog

### Version 1.0 (Mar 14 2012)

-   Initial version
