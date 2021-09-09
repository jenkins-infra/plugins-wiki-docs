# Usage

This plugin builds on top of [deployment notification
plugin](http://localhost:8085/display/JENKINS/Deployment+Notification+Plugin)
and lets Puppet users track when/where/what files are deployed, and
trigger other activities after deployments have happened. See
[deployment notification
plugin](http://localhost:8085/display/JENKINS/Deployment+Notification+Plugin)
for more details.

This plugin adds the ability to parse the YAML report format from
Puppet. The easiest way to do this is to use the built-in HTTP reporter
and have it sent to your Jenkins at '/puppet/report'. The `APITOKEN` is
the [API token](http://localhost:8085/display/JENKINS/API+token) of a
valid Jenkins user:

    $ puppet apply --reports http --reporturl=http://USER:APITOKEN@server/jenkins/puppet/report

With CSRF protection enabled, the above will fail because puppet will
try to POST the content without proper crumb. So alternatively, you can
use the `jenkinstracking` report processor from
[puppet-jenkinstracking](https://github.com/jenkinsci/puppet-jenkinstracking/)
module:

    $ puppet apply --reports jenkinstrcking --reporturl=http://USER:APITOKEN@server/jenkins/

.. or use `store` report processor, which writes the YAML report as a
file, and then send them over [Jenkins
SSH](http://localhost:8085/display/JENKINS/Jenkins+SSH) like this:

    $ puppet apply --reports store --reportdir=/var/log/puppet
    $ for f in (ls /var/log/puppet/*/*); do cat $f | ssh -p PORT user@jenkins submit-puppet-report && rm $f; done

Instead of Jenkins SSH, you can also use [Jenkins
CLI](http://localhost:8085/display/JENKINS/Jenkins+CLI):

    cat $f | java -jar jenkins-cli.jar -s http://server/jenkins/puppet/report submit-puppet-report

The latter two approach can be combined with remote file transfer, which
would be convenient for deployments where these servers cannot see
Jenkins due to the network topology.

### Recognized resource type

This plugin currently tracks the use of
[file](http://docs.puppetlabs.com/references/latest/type.html#file)
resources and pick up fingerprints from there automatically.

Our plan is to auto-recognize other resources where it makse sense, and
also provide a custom puppet resource for recording fingerprints of
arbitrary files.

### Tracking files explicitly

If the resource type auto-recognition is insufficient and you want
Jenkins to explicitly track fingerprints of specific files, use the
`tracking` resource from
[puppet-jenkinstracking](https://github.com/jenkinsci/puppet-jenkinstracking/)
in your manifest like this:

    track { '/usr/share/foo/foo.war'}

# Changelog

### Version 1.1 (Dec 21, 2015)

-   Improve logging for troubleshooting purposes
-   Puppet plugin compatible with deployment-notification-1.2
-   PuppetEvent support for the "Track" events
-   Add a Plugin name/description

### Version 1.0 (Feb 17, 2014)

-   Initial release
