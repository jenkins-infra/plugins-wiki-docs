  
This is a Jenkins plugin that will publish Jenkins Job run events  
(start, complete, finish) to a ZMQ PUB socket. By default the PUB  
socket is on TCP port 8888 and no Job events will be published.  
You can choose to enable event publishing for all jobs in the  
Jenkins' global config or enable the plugin on a per job basis.

This plugin uses jeromq to satisfy the dependency on ZMQ. It is  
possible to use jzmq instead if you need the features that jeromq  
is lacking; however, it is a pain to get jzmq built and is less  
portable. If you really really want jzmq look back in the git  
history and you will find the old versions of this plugin that  
depended on jzmq.

TODO:

-   Avoid reading in the global config for each event if possible.
-   Need to allow ZMQRunnable thread to die if something truly  
    unexpected happens. The RunListener should then start a new  
    DaemonThread to handle further events.
-   Cleanup config.jelly for the non global Job config.

This plugin borrows heavily from the Jenkins Notification
Plugin<https://github.com/jenkinsci/notification-plugin>. That plugin  
does much of the same work and where applicable I have gone the  
easy route and copied the work they have done.

Contributing  
------------

To browse the latest code,
see:<https://git.openstack.org/cgit/openstack-infra/zmq-event-publisher/tree/>  
To clone the latest code, use  
\`git clone
git://git.openstack.org/openstack-infra/zmq-event-publisher\`

Bugs are handled at:
[https://storyboard.openstack.org/\#!/project/750\|https://storyboard.openstack.org/\#!/project/750](https://storyboard.openstack.org/#!/project/750)

Code reviews are handled by gerrit. The gerrit in  
use is [http://review.openstack.org](http://review.openstack.org/)

Developer docs: <http://docs.openstack.org/infra/manual/developers.html>
