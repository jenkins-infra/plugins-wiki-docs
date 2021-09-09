  

This Plugin provides to load benchmark data to Jenkins.

The plugin persists the data and decides on success or failure of the
evaluated build. Therefor, Service Level Agreements, software
specifications, or relative thresholds can be set in a simple graphical
interface.

The Visual Interface visualizes the benchmarking results for human
users. It can plot individual runs or the development of aggregates
across versions, e.g., as line charts.

Currently the plugin only reads CSV and YCSB data. Using small shell
scripts the benchmark results of different tools can be converted into
csv files. Classes for new data types can be easily integrated via an
interface.

  

# How to use this Plugin

1.) Add a "Benchmark" build step. Specify the file path to the benchmark
results.  
  
[![alt
text](https://github.com/jenkinsci/benchmark-evaluator-plugin/raw/master/readme_images/build_step.JPG){width="577"
height="214"}](https://github.com/jenkinsci/benchmark-evaluator-plugin/blob/master/readme_images/build_step.JPG)  
The files can be located locally or on the Internet and can be available
via http/https, as well as on an ftp server. Also in the second case it
is important that the URL ends with the type (e.g.
<http://www.example.com/benchmark_results.csv>). The file type must
always be specified locally and on ftp as well.  
A CSV-file must be structured according to the following schema:

| Metric name    | Value |
|----------------|-------|
| ExampleMetric1 | 40.1  |
| ExampleMetric2 | -42.4 |

  

Optinal a line can be "name;\[Build specific name\]"  
  
  
2.) "Benchmark Results" and "Benchmark Configuration" will be added to
the project overview.  
  
[![alt
text](https://github.com/jenkinsci/benchmark-evaluator-plugin/raw/master/readme_images/project_overview.JPG){width="600"}](https://github.com/jenkinsci/benchmark-evaluator-plugin/blob/master/readme_images/project_overview.JPG)  
  
  
3.) Specify the thresholds after the first run or by using the add
button.  
  
[![alt
text](https://github.com/jenkinsci/benchmark-evaluator-plugin/raw/master/readme_images/config.JPG){width="1500"
height="277"}](https://github.com/jenkinsci/benchmark-evaluator-plugin/blob/master/readme_images/config.JPG)  
  
  
4) There is a detailed overview for each build.  
  
[![alt
text](https://github.com/jenkinsci/benchmark-evaluator-plugin/raw/master/readme_images/detail_page.JPG){width="900"
height="280"}](https://github.com/jenkinsci/benchmark-evaluator-plugin/blob/master/readme_images/detail_page.JPG)  
  
  
5) The results are visualized for all builds in line diagrams.  
  
[![alt
text](https://github.com/jenkinsci/benchmark-evaluator-plugin/raw/master/readme_images/line_graph.JPG){width="1600"}](https://github.com/jenkinsci/benchmark-evaluator-plugin/blob/master/readme_images/line_graph.JPG)  
  
How the plugin can be used can be seen in our paper [Continuous
Benchmarking: Using System Benchmarking in Build
Pipelines](http://dbermbach.github.io/publications/2019-squeet.pdf).
