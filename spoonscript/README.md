The TurboScript plugin for Jenkins allows to automatically build Spoon
images and push them to the Turbo.net Hub or local repository.

  
The TurboScript Jenkins plugin includes the following capabilities:

-   Build an image with TurboScript
-   Push the resulting image to the Turbo.net Hub
-   Export an image to the local repository
-   Trigger a build job using webhooks

### Quick Tour

#### Build an image with TurboScript

1.  Create a new Jenkins item and select a **Turbo Project** as its
    type.  
    ![](docs/images/jenkins_project_configure_1.png)
2.  Add **Execute TurboScript** build step.  
    ![](docs/images/jenkins_project_configure_2.png)
3.  By convention, the default name for a TurboScript file
    is **turbo.me**. It should be located in the Jenkins project
    workspace which corresponds to the root directory of a GitHub
    project.  
    ![](docs/images/jenkins_project_configure_3.png)
4.  Write a TurboScript to define how a new image should be created. For
    more information about TurboScript refer to the [language
    reference](https://turbo.net/docs/reference/turboscript) or take a
    look at sample scripts
    in [GitHub](https://github.com/turboapps/turbome).
5.  Provide credentials to a Turbo.net account. If no credentials are
    provided, the TurboScript will be run as the currently logged on
    user.  
    ![](docs/images/jenkins_project_configure_4.png)
6.  For enterprise deployments you may be interested in building images
    that target a specific version of the Turbo VM. To gain access to
    this and other optional settings, click **Advanced** button. For
    more information about specific options, click buttons with help
    content or refer to the [online
    documentation](https://turbo.net/docs/reference#build).  
    ![](docs/images/jenkins_configure_5.png)
7.  Save your changes and test the script by triggering the job
    manually. In the next sections you will learn how to push new images
    to the Turbo.net Hub.

#### Push an image to the Spoon.net Hub

Pushing images to the Turbo.net Hub is available as post-build action:

         
![](docs/images/jenkins_push.png)

There are three options for naming the new remote image:

1.  Use the same name as the local image.
2.  Generate the remote image name from the Git information for your
    project (organization, project, branch, and current head version).
    Note that you cannot publish images from an organization to which
    you do not belong. For example, if your Spoon.net account name
    is **JimmyKimmel** then you won’t be allowed to push images
    as **OprahWinfrey**. If this is required, then overwrite the name of
    the GitHub organization with your account name.  
    ![](docs/images/jenkins_push_overwrite_organization.png)
3.  Use a fixed remote image name hardcoded in the job definition.
    Optionally, you may append a suffix from the date and time in order
    to keep old images available in the Spoon.net Hub.  
    ![](docs/images/jenkins_push_fixed_image_name.png)

#### Export an image to the local repository

Exporting images to the local repository is available as post-build
action:

         
![](docs/images/jenkins_export_image.png)  
         
![](docs/images/jenkins_export_image_outputfile.png)

#### Remove an image from the local repository

New images will remain in the local repository unless they are deleted
using the `spoon rmi <image_name>` command. This step can be included in
the job definition using the post-build action **Remove local Turbo
image**.

         
![](docs/images/jenkins_remove_local_image.png)

#### Trigger a build job using webhooks

You may decide to build a Turbo container image whenever the source code
changes for your project. To facilitate this, a Turbo Jenkins job can be
triggered using an HTTP POST request. The request content is required to
be compatible with the structure of [GitHub webhook
events](https://developer.github.com/webhooks/).

         
![](docs/images/jenkins_webhook_setup.png)

Webhook messages are sent to Jenkins\_URL/turbo-webhook endpoint as POST
with `Content-Type` set to `application/x-www-form-urlencoded`.

         
![](docs/images/jenkins_webhook_endpoint.png)

Enjoy and please send any feedback or questions
to [@turbohq](https://twitter.com/turbohq)!

### Change Log

##### Version 1.2 (Jan 4, 2016)

-   Build and profile streaming models
-   Take snapshots using Studio, Vagrant, VirtualBox

##### Version 1.1 (Oct 10, 2015)

-   Rename and update to work with Turbo.net

##### Version 1.0 (Apr 21, 2014)

-   Build an image with TurboScript
-   Push the resulting image to the Turbo.net Hub
-   Export an image to the local repository
-   Trigger a build job using webhooks
-   Integration with Credentials plugin
-   Integration with Git plugin
