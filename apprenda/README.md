This plugin enables development teams that are using the Apprenda Cloud
Platform the ability to deploy their Jenkins projects to Apprenda
seamlessly. These Jenkins projects consist of legacy and cloud native
applications that can be deployed and managed by Apprenda. For more
information, read the documentation on Apprenda applications
at <http://docs.apprenda.com/current/app-fundamentals>. 

  

 

The Apprenda integration into Jenkins CI is designed to extend
application development functionality within the Jenkins CI environment.
This plugin has the capability of performing:

-   SMART VERSION DETECTION – To minimize downtime for production
    applications, the plugin communicates with the Apprenda Platform to
    determine whether the application is already published, and it will
    create a new version at the target lifecycle stage.

-   TARGET STAGE DEPLOYMENTS – For software engineers with short
    development cycles that demand rapid changes, the Apprenda plugin
    deploys the version of the application into Definition, Sandbox (Dev
    & Test), or Published (Production).

-   CUSTOM VERSIONING – Developers can provide a custom prefix for the
    application version, allowing for branched development and testing.

 

Additional documentation is available on our Github repo
at <https://github.com/jenkinsci/apprenda-plugin>
