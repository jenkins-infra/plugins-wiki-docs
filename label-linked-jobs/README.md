A plugin to facilitate maintenance when using numerous/complex labels.

## Download & Installation

You can download the [latest
.hpi](http://updates.jenkins-ci.org/latest/label-linked-jobs.hpi) and
install it from the Plugin Manager Advanced page, or install this plugin
directly from the Plugin Manager Available page.

## Screenshots

[TABLE]

## Usage

### Label's Linked Jobs page

Activate the plugin in the Configure page from a label page
(/label/\<your label\>). A new Linked Jobs link will be shown in the
left-hand menu for that label. Use it to get to the Linked Jobs page.

In the Linked Jobs page you will see all jobs linked to this particular
label, either directly or via complex label expression. So let's say
you're on the Linked Jobs page of the "macos" label. You will see jobs
configured with "macos", those configured with "macos&&jdk7", those
configured with "jdk7 -\> !macos", etc.

-   jobs are grouped by their full label
-   first group shown is always the atomic label of the Linked Jobs page
    (if applicable, as no job may be using it as is)
-   other groups are sorted alphabetically by the full label
-   in each group, the nodes where the jobs could be running are listed.
    There may be none, in that case you have to review your
    configuration :-)
-   there's a plugin option in the Jenkins Configuration System page
    that can be unchecked to display a condensed view of the jobs groups
    (jobs are just shown by name)
-   if the Jenkins instance has at least one cloud defined, information
    about the clouds (potentially) supporting each label is shown

### Node's Linked Jobs page

A new link is available for Nodes in the left side menu: "Linked Jobs".
Following pieces of information are available on this new page:

-   list of the labels assigned to this node
-   Linked jobs section: list of all jobs that could run on this node,
    based on label's configuration. Jobs are grouped by their full label
-   Exclusive jobs: list of all jobs that can run only on this node,
    based on label's configuration. Jobs are grouped by their full
    label. This section can be deactivated in the plugin's settings

### Labels Dashboard page

This global page, accessible from a new option in Jenkins root left-side
menu, is made of five sections.

-   Labels
    -   this section lists all atomic labels used on this jenkins
        instance, considering labels defined by all nodes (as well as
        clouds if applicable) and labels used by all jobs, but not
        nodes' self-label (see following section)
    -   each sub-section is an atomic label, with information about
        -   how many jobs use it
        -   how many nodes define it
        -   if the Jenkins instance has at least one defined Cloud, how
            many clouds can provision the label
-   Nodes
    -   this section lists all nodes and indicates for each of them how
        many jobs are using their self-label
-   Orphaned Jobs
    -   This section lists all jobs that cannot run on any node, based
        on label configuration. For instance:
        -   a job configured with a label defined on no nodes
        -   a job configured with a labels combination defining a
            condition that no nodes meet
        -   a job defining no labels, **and** all nodes on the jenkins
            instance use the "Only build jobs with label restrictions
            matching this node" usage option
            (`hudson.model.Node.Mode.EXCLUSIVE`)
-   Single-node Jobs
    -   this section is optional and can be deactivated in the plugin's
        settings
    -   this section lists all jobs that can run, based on label's
        configuration, on only one node. This is useful to make sure
        that no jobs will be unable to run in case a particular node
        goes down
    -   jobs are grouped by their "exclusive" node. To know more about
        the label's configuration of these jobs, click on the node's
        link and go to its "Linked Jobs" page to check its "Exclusive
        Jobs" section
-   Label-less jobs
    -   this section is optional and can be deactivated in the plugin's
        settings
    -   this section lists all jobs that have no labels defined (option
        "Restrict where this project can be run" is not used)

### Compatibility with NodeLabel Parameter & Parameterized Trigger plugins

For more information and original discussion about this feature you can
refer to
[JENKINS-27588](https://issues.jenkins-ci.org/browse/JENKINS-27588).

In all pages described above, in addition to jobs that are configured
*directly* with labels (via their **Restrict where this project can be
run** setting), the plugin pages list jobs that are configured with
labels using the [NodeLabel Parameter
Plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeLabel+Parameter+Plugin)
settings and the [Parameterized Trigger
Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Trigger+Plugin)
settings. There are two main situations:

-   if a job uses the **This build is parameterized** setting and is
    configured with a **Label** parameter (from the NodeLabel Parameter
    plugin) with a Default Value, this default label is taken into
    account by the Label Linked Jobs Plugin. Such jobs are listed in the
    appropriate label section with the mention "This label is used by NN
    jobs as a default value for their Label parameter" ; or "Job(s)
    using this label as default value for a Label parameter:" (following
    by the list of these jobs).
-   if a job, in its **Trigger/call builds on other projects**
    sub-section (in the **Build** section), triggers other jobs via a
    **Predefined parameters**, or **All Nodes for Label Factory**, or
    **NodeLabel parameter**, and makes use of labels in these sections,
    then the *triggered* jobs are taken into account in the Label Linked
    Jobs plugin pages. They are listed with the mention "Triggered jobs
    (triggering job(s)):" followed by a list of the triggered jobs, with
    the triggering job(s) indicated in parenthesis.

There is an important **restriction** to this feature: for technical and
functional reasons, any label containing token or macro (with the
${TOKEN\_NAME} syntax or with the $TOKEN\_NAME syntax) is ignored.

## Change Log

#### Future

-   localization
-   deal with multi-configuration/matrix projects
-   [Jenkins-27907](https://issues.jenkins-ci.org/browse/JENKINS-27907),
    UI rework

#### 5.1.2 (released 2016-11-19)

-   [Jenkins-38342](https://issues.jenkins-ci.org/browse/JENKINS-38342),
    show all available labels provided by clouds in Labels Dashboard

#### 5.0.1 (released 2016-05-08)

-   [Jenkins-32445](https://issues.jenkins-ci.org/browse/JENKINS-32445),
    make plugin compatible with Jenkins Clouds' definition

#### 4.0.3 (released 2015-12-26)

-   fix for
    [Jenkins-32049](https://issues.jenkins-ci.org/browse/JENKINS-32049),
    Labels Dashboard is not showing any Labels and any Nodes

#### 4.0.2 (released 2015-04-28)

-   following the 4.0.1 release, ignore the $TOKEN\_NAME syntax in
    labels in NodeLabel Parameter plugin settings and Parameterized
    Trigger plugin settings, in addition to the ${TOKEN\_NAME} syntax

#### 4.0.1 (released 2015-04-23)

-   [Jenkins-27588](https://issues.jenkins-ci.org/browse/JENKINS-27588),
    make plugin compatible with [NodeLabel Parameter
    Plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeLabel+Parameter+Plugin)
    and [Parameterized Trigger
    Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Parameterized+Trigger+Plugin),
    to show "triggered jobs", based on their label configuration, on the
    various pages of Label Linked Jobs Plugin

#### 3.0.3 (released 2014-10-20)

-   [Jenkins-25163](https://issues.jenkins-ci.org/browse/JENKINS-25163),
    add "Jobs with no labels" section in Labels Dashboard
-   [Jenkins-25188](https://issues.jenkins-ci.org/browse/JENKINS-25188),
    orphaned jobs do not show jobs without label when all nodes set to
    Label restrictions

#### 2.0.4 (released 2014-09-24)

-   [Jenkins-20035](https://issues.jenkins-ci.org/browse/JENKINS-20035),
    new "Linked Jobs" page per node (including master) to list all jobs
    linked, per label configuration, to this specific node. Can also
    list jobs that can run exclusively on the given node because of
    label configuration
-   [Jenkins-24615](https://issues.jenkins-ci.org/browse/JENKINS-24615),
    new "Labels Dashboard" to have a global view of all labels defined
    and used in jobs & nodes, list orphaned jobs, list single-node jobs
-   [Jenkins-24641](https://issues.jenkins-ci.org/browse/JENKINS-24641),
    see what could be reused (ideas and/or code) from [Daniel's similar
    plugin](https://github.com/daniel-beck/better-labels-plugin)
-   requires Jenkins 1.554 (subsequent LTS) to use new icon

#### 1.0.1 (release 2014-09-04)

-   initial release to address
    [Jenkins-23333](https://issues.jenkins-ci.org/browse/JENKINS-23333)
-   thanks to Daniel Beck for his feedback and support :-)
-   requires Jenkins 1.532
