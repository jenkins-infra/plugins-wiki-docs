# Stack Hammer Plugin

This plugin integrates Jenkins with [Cloudsmith Stack
Hammer](http://www.cloudsmith.com/) to validate and/or deploy Puppet
configurations (stacks) stored in a repository at GitHub.

## Validation

Add the Stack Hammer Validation build step to a Jenkins project and
specify the GitHub repository name and [Stack
Hammer](http://www.cloudsmith.com/) API key (available from the Stack
Hammer UI). You can optionally specify a branch.

When the job runs, Stack Hammer will fetch the Puppet configuration from
GitHub and check it for errors and warnings using
[Geppetto](http://cloudsmith.github.com/geppetto/) and
[puppet-lint](http://puppet-lint.com/). The resulting report will
contain a list of errors and/or warnings and a full dependency graph of
the stack.

## Testing

Add the Stack Hammer Testing build step to a Jenkins project and specify
the GitHub repository name and Stack Hammer API key (available from the
Stack Hammer UI). You can optionally specify which tests to run and
whether to undeploy the test harness when done.

When the job runs, Stack Hammer will fetch the Puppet configuration from
GitHub and run the [rspec-puppet](http://rspec-puppet.com/) tests in it
on a test harness machine at Amazon AWS. The resulting report will
contain output for each test that was run.

## Deployment

Add the Stack Hammer Deployment build step to a Jenkins project and
specify the GitHub repository name and Stack Hammer API key (available
from the Stack Hammer UI). You can optionally specify a branch and
whether to deploy in dry-run mode.

When the job runs, Stack Hammer will fetch the Puppet configuration from
GitHub and deploy it to Amazon AWS. The resulting report will contain a
list of logs and catalog graph for each host that was deployed.

## Change Log

##### Version 1.0.6 (Sep 24, 2012)

Diagnostic type added to validation diagnostic display

##### Version 1.0.5 (Sep 06, 2012)

A Test Runner build step was added

##### Version 1.0.4 (Jun 15, 2012)

Fixed bug that caused NPE when no global configuration had been stored

##### Version 1.0.3 (Jun 15, 2012)

*Release failed half way though but cannot be removed. Don't use this
version.*

##### Version 1.0.2 (Jun 9, 2012)

This is the initial release
