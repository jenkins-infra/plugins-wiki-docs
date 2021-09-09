 

 A Jenkins plugin that provides a way to execute `sh` and `bat` Pipeline
DSL commands within a specified Python virtualenv.

## Setup

1.  Install [Pyenv
    Pipeline](https://github.com/jenkinsci/pyenv-pipeline-plugin)
2.  (Optional)
    Install [ShiningPanda](https://wiki.jenkins.io/display/JENKINS/ShiningPanda+Plugin)

## Why did you make this?

The `sh` and `bat` steps in the Jenkinsfile Pipeline DSL reset
environmental information after every execution. For simple
environmental variable needs, one can simply utilize the `withEnv` step,
and execute the commands as needed within the block. The Python
virtualenv, however, requires a fairly complicated set of environmental
steps, and it is much easier and more reliable to fallback on the
behavior of the virtualenv project. However, for this to work, a `sh` or
`bat` command to be executed within the virtualenv must be prefiex with
a command that first activates the virtualenv; for every single command
to be ran within the virtualenv. This is verbose, repetitive and
error-prone.

## Usage

This plugin provides 1 new Pipeline DSL method:

-   `withPythonEnv`: Specifies a Python virtualenv to execute
    any `sh` and `bat` DSL commands contained within its block.

    `withPythonEnv` takes a single String argument, which specifies the
    Python executable to use for the virtualenv. pyenv-pipeline will use
    the executable to generate a corresponding virtualenv. At runtime,
    it will take a snapshot of environmental variables with and without
    the virtualenv active. From this it generates a diff, and applies
    the environmental variable changes within the `withPythonEnv` block
    (reverting them after the block completes)

    The argument provided to `withPythonEnv` will first attempt to match
    it against the name of a `ToolInstallation` that is described by
    a `ToolDescriptor` with an ID that is contained within a pre-defined
    list of known Jenkins Python Tool plugin IDs. Currently, this plugin
    only looks to see
    if [ShiningPanda](https://wiki.jenkins.io/display/JENKINS/ShiningPanda+Plugin) is
    installed. If a `ToolInstallation` is matched, the location of that
    tool is used as the Python executable to generate the virtualenv.

    **Example: ShiningPanda Installation**

    ``` syntaxhighlighter-pre
    withPythonEnv('CPython-2.7'){
        // Uses the ShiningPanda registered Python installation named 'CPython-2.7'
        ...
    }
    ```

    If no `ToolInstallation` is matched, then the argument is treated as
    the literal location of the Python executable to be used. This can
    be used to specify a specific Python installation (if the location
    is known beforehand), or to fallback and use the systems default
    Python installation.

    **Example: Default Python Installation**

    ``` syntaxhighlighter-pre
    withPythonEnv('python') {
        // Uses the default system installation of Python
        // Equivalent to withPythonEnv('/usr/bin/python') 
        ...
    }
    ```

    **Example: Specific Python executable**

    ``` syntaxhighlighter-pre
    withPythonEnv('/usr/bin/python3.5') {
        // Uses the specific python3.5 executable located in /usr/bin
        ...
    }
    ```

    When `withPythonEnv` is called with an argument for the first time,
    it creates the virtualenv needed. Whenever `withPythonEnv` is called
    with the same argument, the previously created virtualenv is used
    again.

    **Example: Differentiating between virtualenvs**

    ``` syntaxhighlighter-pre
    withPythonEnv('some-python-installation') {
        // Creates the virtualenv before proceeding
        sh 'pip install nose'
    }
    withPythonEnv('some-other-python-installation') {
        // Creates a new virtualenv here. The following line will fail, since nose has not been installed in this env
        sh 'nosetests'
    }
    withPythonEnv('some-python-installation') {
        // Using the same virtualenv we created with the first block. The following line here will work
        sh 'nosetests'
    }
    ```

 
