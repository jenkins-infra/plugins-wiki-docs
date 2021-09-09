This plugin creates an extra Git Plugin Behaviour, thus helping you use
AWS Credentials (keys and/or Instance Profiles) when checking out from
[AWS CodeCommit](https://aws.amazon.com/codecommit/) Service, thus
avoiding the need to [customize your
\~/.gitconfig](http://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-https-unixes.html)
for usage with the awscli tool.

# Overview

Once you install, set the URL of your Git Repository to the one you got
from the AWS CodeCommit Console
e.g. <https://git-codecommit.us-east-1.amazonaws.com/v1/repos/sample-codecommit-repository>,
and under Behaviours, add "AWS CodeCommit URL Helper". Also, set the AWS
Credential ID on it. Ignore the 403 error, as the plugin behaves only on
runtime.

Note that Git binary [might need some patching due to
gnutls](http://askubuntu.com/questions/186847/error-gnutls-handshake-failed-when-connecting-to-https-servers).
Alternatively, set your git path to 'jgit' (Manage Jenkins \| Configure
\| git \| Git Installations \| Path to git executable) in order to
switch to the embedded jgit backend. (Ignore the warning on the missing
binary)

The plugin detects all matching HTTPS codecommit Repository URLS and
once found, adds a generated credential token when needed.

# Troubleshooting

Use the beanstalker-users mailing list on google groups
([link](https://groups.google.com/forum/#!forum/beanstalker-users)) if
you have questions. Of course, there's the github issues
(<https://github.com/ingenieux/codecommit-url-helper/issues>[ingenieux/awseb-deployment-plugin](https://github.com/ingenieux/awseb-deployment-plugin/issues)) 

# Credits

This is a logical step from our [ingenieux
Beanstalker](http://docs.ingenieux.com.br/project/beanstalker/) project,
and we hope it helps you to get your stuff done. You can see the full
list of credits
on [docs.ingenieux.com.br](http://docs.ingenieux.com.br/project/beanstalker/) (under
"Huge Thanks goes To")

And if you're reading this far, [why not
donate](http://beanstalker.ingenieux.com.br/donate.html) to our parent
project, beanstalker?
