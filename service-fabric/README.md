  
A Jenkins Plugin for Linux Azure Service Fabric projects

## Installation

You can install/update this plugin in Jenkins update center (Manage
Jenkins -\> Manage Plugins, search Service Fabric Plugin).  
  
You can also manually install the plugin if you want to try the latest
feature before it's officially released.

To manually install the plugin:

1.   Clone the repo and build:

&nbsp;

          mvn package

     2. Open your Jenkins dashboard, go to Manage Jenkins -\> Manage
Plugins.

     3. Go to Advanced tab, under Upload Plugin section, click Choose
File.  
     4. Select **service-fabric.hpi** in **target** folder of your repo,
click Upload.  
     5. Restart your Jenkins instance after installation is completed.

## Usage

You can have a look at our
[documentation ](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-cicd-your-linux-applications-with-jenkins)to
understand more about building and deploying Linux Service Fabric
applications using Jenkins.

## Contributing

  
This project welcomes contributions and suggestions.  Most contributions
require you to agree to a  
Contributor License Agreement (CLA) declaring that you have the right
to, and actually do, grant us  
the rights to use your contribution. For details, visit
[https://cla.microsoft.com](https://cla.microsoft.com/).  
  
When you submit a pull request, a CLA-bot will automatically determine
whether you need to provide  
a CLA and decorate the PR appropriately (e.g., label, comment). Simply
follow the instructions  
provided by the bot. You will only need to do this once across all repos
using our CLA.  
  
This project has adopted the [Microsoft Open Source Code of
Conduct](https://opensource.microsoft.com/codeofconduct/).  
For more information see the [Code of Conduct
FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or  
contact [mailto:opencode@microsoft.com](mailto:opencode@microsoft.com)
with any additional questions or comments.
