This plugin lets you remotely inspect/alter running Jenkins instance
through [pry](http://pry.github.com/). Think of it as the Ruby version
of the Groovy shell console

# Usage

This plugin adds the "pry" command to [Jenkins
CLI](http://localhost:8085/display/JENKINS/Jenkins+CLI), which allows
you to connect to Jenkins from a remote machine and execute a pry
session remotely. Type "help" in the prompt to get the list of available
pry commands. A sample session below:

    $ java -jar cli.jar -s http://localhost:8080/ pry
    [1] pry(Launcher)> jenkins.items.map { |j| j.display_name }
    => ["foo"]

Note that the Ruby code is executed on the server, and the CLI client is
used merely to display output and read input. So code like
`puts "Hello"` will end up printing to the server's stdout, not to your
CLI. To show something to CLI stdout, use "output" object, like
`output.puts "Hello"`.

The pry session exposes 3 variables:

| Name    | Description                                       |
|---------|---------------------------------------------------|
| jenkins | the Jenkins instance, the root of the object tree |
| input   | IO object connected to the CLI client's stdin     |
| output  | IO object connected to the CLI client's stdout    |

The plugin preserves the readline support in pry, so auto-completion,
command history, and all the other goodies in pry will work as expected.

# Changelog

### Version 1.1

-   Exposed input and output.

### Version 1.0

-   Initial release
