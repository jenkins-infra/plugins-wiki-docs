This plugin allows you to run HTTP proxy on slaves and forward this HTTP
proxy to the master. In the environment where the master and the slave
runs on different network (e.g., the master on the internet and the
slave inside the firewall), this allows the master to see the both
worlds.

The forwarded proxy service can be restricted to bind to 127.0.0.1 only
to prevent the open proxy problem.

By using a label, you can run the proxy service in multiple slaves. In
this mode, the forwarded HTTP proxy port on the master would be
intelligent to automatically switch over to available slave if the
active one fails.

# Changelog

### Version 1.1 (Jun 11, 2013)

-   Newer version with littleproxy 0.5.3

### Version 1.0 (Jan 16, 2013)

-   Initial release
