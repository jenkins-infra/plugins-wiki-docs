Dumpling plugin for Jenkins brings [Dumpling
DSL](http://olivergondza.github.io/dumpling/) capabilities into Jenkins

This plugin make [Dumpling DSL](http://olivergondza.github.io/dumpling/)
available for:

-   Groovy scripts all over Jenkins
-   Other plugins

Capturing current Jenkins thread state should be as easy as calling
`Dumpling.runtime` in script console/scriptler/groovy plugin step to
investigate or periodically monitor Jenkins threads. See [Dumpling DSL
tutorial](http://olivergondza.github.io/dumpling/tutorial.html) for more
information on how to use dumpling. Note that the DSL differs a bit in
Jenkins Groovy interpreters as the ability to configure is a bit
limited.

#### Useful scripts

General jstack-like threadddump:

    println D.runtime.threads
    // Or before 2.2
    println Dumpling.runtime.threads

Detailed thread blockage report:

    D.runtime.query(D.query.blockingTree().showStackTraces())
    // Or before 2.2
    import com.github.olivergondza.dumpling.query.*;

    println Dumpling.runtime.query(new BlockingTree().showStackTraces());

Brief blockage report focused on HTTP handling threads:

    import com.github.olivergondza.dumpling.query.*;

    println Dumpling.runtime.threads.grep { it.name =~ /^Handling / }.query(new BlockingTree())

Capture threaddump of different java process (most likely on agent):

    // List processes
    println 'jps -l'.execute().text

    // Print runtime
    D.load.process(PID_NUMBER)
    // Or before 2.2
    new com.github.olivergondza.dumpling.factory.PidRuntimeFactory().fromProcess(PID_NUMBER);
