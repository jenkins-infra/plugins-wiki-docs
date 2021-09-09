Every now and then your Jenkins cluster will get slow for the users.
Usually this happens because of the increase in utilization due to added
projects, team members or added supported platforms. Then starts
whining. Cluster is slow, not enough executors, long builds etc. From
higher up it is difficult to assess if we need more computing power or
less whining. Hence, Jenkins Cluster Statistics Plugin was conceived.

The plugin will measure the time in queue, time in build and show these
statistics per node. Hopefully this will give you an indication if you
need to invest in more Jenkins nodes. Want more statistics? Download the
data in CSV format and run your own analysis in Excel.

#### How to get started

Once you install the plugin and at least one of your jobs have run you
will statistics under **Manage Jenkins** » **Cluster Statistics**. See
the screenshot for more details.

![](https://raw.github.com/jenkinsci/cluster-stats/master/etc/shot001.png)
