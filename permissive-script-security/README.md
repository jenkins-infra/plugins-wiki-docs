Turn on permissive mode of Script Security Plugin. Problematic
signatures will be logged but access will not be rejected.

This plugin enables execution of unsecured groovy scripts on Jenkins
master. Do not use it unless you know what you are doing.

Suppressing the security put in place in several Jenkins plugins is
discouraged though sometimes useful practice. For example, migrating
configuration from a plugin version that allows unsecured script
execution to the secured version. Enabling this temporarily, will not
block on potentially unsafe signatures so they can be evaluated and
whitelisted and the plugin can be uninstalled again.

The plugin is disabled after installation. It can be enabled providing
`-Dpermissive-script-security.enabled=true` property to Jenkins master
JVM. Since 0.3, value **no\_security** is supported to permit not
whitelisted signatures without any logging. Note that this is not secure
at all.
