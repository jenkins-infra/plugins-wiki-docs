This is a work in progress and semantics may change.  
For users of Jenkins Pipeline.

This (preview release) plugin provides a Pipeline DSL extension that
should be familiar to people used to things like travisci. It is
declarative and takes care of common tasks. It works well with
pipeline-as-code and docker.

Some examples:

This is a simple Jenkinsfile. Put it in your repo as a Jenkinsfile and
create a new multibranch project pointing to it:

    simpleBuild {
      env = [
        FOO : 42,
        BAR : "YASS"
      ]

      before_script = 'echo before'
      script = 'echo after $FOO'
      after_script = 'ls -lah'

      notifications = [
        email : "mneale@cloudbees.com"
      ]
    }

This sets 2 environment variables (env), and runs those scripts. Should
it fail, it will notify those mentioned in the email (can be a list) of
the failure and some details. This should be almost intuitive.

Some more features:

    simpleBuild {
      machine = "hi-speed"
      script = 'make install'
    }

This will look for a "label" and run the build on a node that has that
label. This is like saying "restrict where this can run" on freestyle.

Wait, there's more:

    simpleBuild {
      docker_image = "java:1.9"
      script = 'make install'
    }

This will run the build inside a docker container that matches the image
specified (using docker-pipeline plugin).

If you don't want to use Jenkinsfile in a repo, you can do this:

    simpleBuild {
      git_repo = "git@..."
      script = 'make install'
    }

It will then be like a normal pipeline Job, and clone the repo
specified.

Remember this is a pipeline DSL, so it IS PIPELINE SCRIPT! So you can
use other pipeline steps and constructs alongside it (some things make
more sense than others...) but the idea of simpleBuild is to make a
simple build... uh... simple. You can "graduate" to richer pipeline
scripts if and when you need them.

See the
[README](https://github.com/jenkinsci/simple-build-for-pipeline-plugin)
for more details.
