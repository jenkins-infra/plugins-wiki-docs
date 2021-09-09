Provides various credential types for OSF Builder Suite For Salesforce
Commerce Cloud plugins

-   [OSF Builder Suite For Salesforce Commerce Cloud ::
    Deploy](https://plugins.jenkins.io/osf-builder-suite-for-sfcc-deploy)

 

# Two Factor Authentication

## Introduction

Two-factor authentication for code deployment is a PCI requirement, to
be used on the Staging instance only. Code deployment is not possible to
Production. However, standard one-factor code deployment can be used to
all other instances, including Development and Sandbox instances.

The Staging instance has the following hostnames:

|                                    Hostname| To be used...                                                                                 |
|-------------------------------------------:|-----------------------------------------------------------------------------------------------|
|  `cert.staging.web.customer.demandware.net`| for code deployments.                                                                         |
|       `staging-web-customer.demandware.net`| by merchants, developer, etc. to work with the Business Manager or preview in the storefront. |

## Two factor authentication Certificate.zip file

The **Certificate.zip** file is attached to a SFCC support case for the
customer who originated the request to enable two-factor authentication.

This file contains:

-   $name.key
-   $name.crt
-   $name.srl
-   $name.txt

**$name** is an identifier unique to a particular customer. For example,
it can reflect the instance or company name. These files should be
considered highly sensitive. While they are only part of what is needed
to upload SSL customization to the SFCC system, they should be provided
to a single trusted employee within your organization, typically the
administrator of your SFCC instances.

**$name.txt** contains the pass phrase that was used to create the
certificate. You must provide this pass phrase every time you sign a key
request.

For example:

    cert.merchant.sitename.net_01.key  
    cert.merchant.sitename.net_01.crt  
    cert.merchant.sitename.net.srl  
    cert.merchant.sitename.net_01.txt  

 

## Creating and using certificates

### 1. Create a new key and request using OpenSSL

#### 1.1 Extract the Certificate.zip file in a new empty folder.

#### 1.2 Open the command prompt and cd to the folder above.

#### 1.3 Enter the following command to generate a request:

>     openssl req -new -sha256 -newkey rsa:2048 -nodes -out $user.req -keyout $user.key

**$user** indicates the user that this key is for. We recommend that it
be the same as the Business Manager user they are authenticating
against. For example, if the SFCC instance username is jsmith, the
certificate should be named jsmith.

 **Note:** When prompted for information to be included in the
certificate request, please provide information for the user that will
be using the certificate (for example, jsmith). 

**CAUTION:** Do not use generic names such as Release Team.

The output should be as follows:

>     Generating a 2048 bit RSA private key  
>     ....................++++++++++++  
>     ........++++++++++++  
>     writing new private key to '$user.key'  
>     -----  
>     You are about to be asked to enter information that will be incorporated into your certificate request.  
>     What you are about to enter is what is called a Distinguished Name or a DN.  
>     There are quite a few fields but you can leave some blank  
>     For some fields there will be a default value, If you enter '.', the field will be left blank.  
>     -----  
>     Country Name (2 letter code) [AU]:  
>     State or Province Name (full name) [Some-State]:  
>     Locality Name (city) []:  
>     Organization Name (company) [Internet Widgits Pty Ltd]:  
>     Organizational Unit Name (section) []:  
>     Common Name (YOUR name) []:  
>     Email Address []:  
>     Please enter the following 'extra' attributes  
>     to be sent with your certificate request  
>     A challenge password []:  
>     An optional company name []:  

**Note:** The last two fields are optional. We recommend that you leave
them blank. The challenge password is not used.

#### 1.4 Fill out the request with your company name information and a valid email address.

This should be the valid email address of the person using the
certificate.

For example:

>     Country Name (2 letter code) [AU]: US  
>     State or Province Name (full name) [Some-State]: Massachusetts  
>     Locality Name (city) []:  
>     Organization Name (company) [Internet Widgits Pty Ltd]: Your Organizational Unit Name (section) []:  
>     Customer Services  
>     Common Name (YOUR name) []: John Smith  
>     Email Address []: jsmith@domain.com  
>     Please enter the following 'extra' attributes to be sent with your certificate request  
>     A challenge password []:  
>     An optional company name []:

**Note:** SFCC supports OpenSSL ( <http://www.openssl.org/> )
certificates.

### 2. Sign the certificate request ($user.req) with your certificate

#### 2.1 Enter the following OpenSSL command into the command prompt:

>     openssl x509 -CA $name.crt -CAkey $name.key -CAserial $name.srl -req -in $user.req -out $user.pem -days $days

**$days** - the number of valid days for this client certificate
following creation

**$name** - the name provided by SFCC

**$user** - the user of the client certificate you are signing. For
example: jsmith

Note: The $name portion of the $name.srl file may be slightly different
from other $name files. Make sure you enter the file name correctly.

For example:

>     openssl x509 -CA cert.staging.web.customer.demandware.net_01.crt -CAkey cert.staging.web.customer.demandware.net_01.key -CAserial cert.staging.web.customer.demandware.net.srl -req -in jsmith.req -out jsmith.pem -days 365

The certificate will be valid until it expires or you ask SFCC to revoke
all certificates. Therefore you must plan carefully when assigning
certificates to users.

The output of this command should look as follows:

>     Signature ok  
>     subject=/C=XX/ST=XX/L=XX/O=XX/OU=XX/CN=XX/emailAddress=user@co.com  
>     Getting CA Private Key  
>     Enter pass phrase for $name.key:  

#### 2.2 Enter the pass phrase (contained in $name.txt) to sign the certificate.

### 3. Export the certificate and client information to pkcs12 format.

#### 3.1 Enter the following command into the command prompt:

>     openssl pkcs12 -export -in $user.pem -inkey $user.key -certfile $name.crt -name "$user" -out $user.p12

**$name** is the name provided by SFCC.

**$user** is the user of the client certificate you are signing.

For example:

>     openssl pkcs12 -export -in jsmith.pem -inkey jsmith.key -certfile cert.staging.web.customer.demandware.net_01.crt -name "jsmith" -out jsmith.p12

#### 3.2 Specify an export password for this file.

This password must be provided to the end user who will be loading the
certificate into Studio or another keystore.

The pkcs12 certificate can be used to connect to a Staging instance via
Eclipse. The certificate can also be used with other WebDAV clients,
such as the Windows built in WebDAV client.

 

# Version history

<https://github.com/jenkinsci/osf-builder-suite-for-sfcc-credentials-plugin/releases>
