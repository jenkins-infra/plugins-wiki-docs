The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-955)

Allows users to upload build artifacts to a [Minio](https://minio.io/)
server  

##### Plugin Configuration

-   Navigate to Manage Jenkins \>\> Configure System \>\> Minio upload
    configuration. Enter the Minio server URL, AccessKey and SecretKey
    (available during Minio server installation) and click *Save*.
-   Then configure project specific details. Open the Jenkins project
    whose build artifacts you want to upload to Minio. Click *Configure*
    on the left menu bar. In the next page, you'll find a new Post-build
    Action called *Upload build artifacts to Minio server*. Select the
    post build action and enter the relevant details in the document.
-   Now, all the artifacts as matching the entry under the Source field
    will be uploaded to your Minio server once a build is completed.  

##### Making your build artifacts public

You can make your build artifacts public by making your Minio bucket
public. You can follow this guide to do so: [Minio Client Policy
Guide](https://github.com/minio/mc/blob/master/docs/minio-client-complete-guide.md#command-policy---manage-bucket-policies).
You can also share files in your bucket via Pre-signed URLs. [Pre-signed
URL
Guide](http://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html)
