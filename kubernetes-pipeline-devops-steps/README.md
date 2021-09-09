# Kubernetes Pipeline Plugin

Kubernetes Pipeline is Jenkins plugin which extends [Jenkins
Pipeline](https://github.com/jenkinsci/pipeline-plugin) to allow
building and testing inside Kubernetes Pods reusing kubernetes features
like pods, build images, service accounts, volumes and secrets while
providing an elastic slave pool (each build runs in new pods).

## Features

-   Kubernetes Steps
    -   Build steps inside Kubernetes Pods
        -   Service Accounts
        -   Volumes
        -   Secrets
-   Building, Pushing and using Docker Images
-   Devops Steps
    -   Apply Kubernetes/Openshift configuration
    -   Elastic search integration
-   Aggregator

### Further Reading

-   [Kubernetes
    Steps](https://github.com/jenkinsci/kubernetes-pipeline-plugin/tree/master/kubernetes-steps/readme.md)
-   [DevOps
    Steps](https://github.com/jenkinsci/kubernetes-pipeline-plugin/tree/master/devops-steps/readme.md)
