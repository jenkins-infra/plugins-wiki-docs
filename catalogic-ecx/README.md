ECX Jenkins plugin allows the user to integrate ECX APIs with Jenkins
Continuous Integration system. With this plugin, the user is able to run
pre-defined ECX jobs as part of the Jenkins build process. 

Before starting, install the ECX Copy Data Management Plugin into
Jenkins Continuous Integration system.

To run an ECX job from Jenkins, do the following:

1.On the Jenkins page, click New Item and create a project.  If you are
integrating with an existing project, skip this step

2.Click the Configure option for that project. A dialog opens.

3\. For the Add Build Step option, click Catalogic ECX CDM Integration.

4.Populate the Catalogic ECX CDM Integration dialog as follows

a)Enter the Username and Password for the ECX appliance.

b)Select the production checkbox if using a valid certificate.

c)Enter the URL of the ECX appliance.   For example, https://:8443
(https://\#:8443)

d)Click the "Test Connection" button in order to verify connectivity to
the ECX appliance and to ensure the credentials are correct. 

e)Once the connection is successful, select the job from the dropdown
list.

f)After selecting the job, enter the job ID.The job ID is found within
brackets in the job selection.

5.Save the configuration.

6.Build the project.  The Console Output shows the ECX job as Active and
then Completed.  Note the status message. 
