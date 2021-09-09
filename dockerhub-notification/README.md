This plugin provides integration between Jenkins and Docker Hub,
utilizing a Docker Hub hook to trigger one (or more) Jenkins job(s).
This allows you to implement continuous delivery pipelines based on
Docker in Jenkins.

Upon receiving a notification of an updated image as web-hook from
Docker Hub, Jenkins will trigger all jobs that have the Docker Hub
trigger enabled that also use the Docker image as part of the build. A
Docker Hub Pull build step is provided to retrieve the latest image from
Hub.

# Configuration

For configuration of this plugin see
[README.md](https://github.com/jenkinsci/dockerhub-notification-plugin/blob/master/README.md)

# Version History

For changes version changes in this plugin see
[CHANGES.md](https://github.com/jenkinsci/dockerhub-notification-plugin/blob/master/CHANGES.md)
