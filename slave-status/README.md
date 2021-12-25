Monitor the status of Jenkins slaves.

## Basic usage

Visit a url like `http:``//myslave:3141` to see whether a slave is
running and how much memory it is using. Configure the port used by
clicking Manage Jenkins on the dashboard.

## Monitoring with Nagios

You can monitor your slaves using [Nagios](http://www.nagios.org/) and
its remote monitoring tool NRPE. To do this on a Linux slave:

1.  Install Nagios on a monitoring server and NRPE on the slave.
    Instructions are on the Nagios site.
2.  Verify that you are monitoring basics like CPU usage and disk space
    by visiting the Nagios Service page.
3.  Edit your Nagios config file (typically `/etc/nagios/nrpe.cfg`). Add
    a line like the one below. If you have changed the default port used
    by the slave-status plugin, replace 3141 with your port number.
    |                                                                                                              |
    |--------------------------------------------------------------------------------------------------------------|
    | `command[check_slave]=/usr/lib/nagios/plugins/check_http -H localhost -p 3141 -r '<status>Running</status>'` |

4.  Check that running this command on the monitoring server gives
    output about HTTP:
    |                                                                            |
    |----------------------------------------------------------------------------|
    | `/usr/lib/nagios/plugins/check_nrpe -H [slave server name] -c check_slave` |

5.  Edit the per-server config file on the monitoring server (on Ubuntu
    this is in `/etc/nagios3/conf.d`). Add a section like the one below.
        define service{
                  use   generic-service
                  host_name     [server name]
                  service_description   Hudson Slave
                  check_command check_nrpe_1arg!check_slave
                  }

6.  Restart Nagios (with a command like
    `sudo /etc/init.d/nagios3 restart`) and check you can see a
    Jenkins Slave line for your server on the Service page.

Note this just monitors that your slave is up. You can use a more
complex matching rule in the check\_slave command, or write your own, if
you also want to monitor memory usage.

## To Do

1.  Use new extensibility tools to allow easy addition of more
    monitoring (threads used, garbage collection, and so on). See
    [Defining a new extension
    point](https://wiki.jenkins.io/display/JENKINS/Defining+a+new+extension+point).
2.  Add functional tests. See [Unit
    Test](https://wiki.jenkins.io/display/JENKINS/Unit+Test) (misnamed).

## Change Log

##### Version 1.6 (02 November 2011)

-   JENKINS-11590

##### Version 1.5 (02 November 2011)

-   release in error

##### Version 1.4 (10 February 2010)

-   Update code for more recent Hudson.

##### Version 1.3 (15 May 2009)

-   Fix bug: immediately after installation, port number was zero. Now
    defaulted to 3141.
-   Fix bug: serialising Logger inadvertently.

##### Version 1.2 (23 April 2009)

-   Initial release.
