This plugin displays pitmutation report statistics.

## Usage

Set up as a post-build step, after the PIT mutation tests have been run.

Configure report path, e.g. target/pit-reports/\*\*/mutations.xml for a
maven build.

The plugin needs the XML and HTML output from PIT. Also make sure that a
clean target is executed before building, otherwise PIT will keep all of
the old reports and it may not pick up the right one.

The report shows mutation statistics with the change since the last
successful build, and you can drill down to the annotated source code at
class level to see what mutations happened on each line.
