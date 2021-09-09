The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-1031)

This plugin creates a Jabber-Server for your builtin-users using the
Jenkin's Domainname (you need a .jks-File).

#### Target Audience

This Document is for Administrators and for all who are able to install
Plug-ins into a already installed Jenkins-CI.

#### Feedback

Feel free to ask questions that are emerged by this Pages, i will try to
find a matching answer and the right place for.

#### Preparation to Installation

Get sure that the Plug-in is not yet installed and you have the right to
install plug-ins. Get sure you can claim a open Socket for the
connection, favored is the **port 5222**.

# Installation

The installation will be easy.

1.  **Log in** into Jenkins.

&nbsp;

1.  Open the **Manage Jenkins** page.

&nbsp;

1.  Open the **Manag Plugins** page.

&nbsp;

1.  Open the **Available** tab.

&nbsp;

1.  Filter for **Jabber** (the **filter** is available on the upper
    right side of the Plugin-Adminstration-Page).

&nbsp;

1.  Check the "install" Box right to the Jabber-Server-Plugin.

&nbsp;

1.  Press **Install without restart** or **Download now and install
    after restart**.

[See the
Jabber-Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Jabber+Plugin)

## Preparation to Integration

Get sure that the Plug-in is successfully installed (See \#Installation)
and you have either a .jks-File for the server, or you have access to
the Shell of the Server.  
Get sure that Jenkins has **security enabled** via the **Configure
Global Security**-Page. The "Jenkin's standard user
database":<https://wiki.jenkins-ci.org/display/JENKINS/Standard+Security+Setup> must
be activated.

**Integration**

The integration unfortunately is not such easy as the Installation was.
To create the key (Step 2) is only neccessary if you do not already have
a .jks-File for the Server.

1.  **Log in** into the Server's shell.
2.  Create a keystore for the self-signed SSL-Encryption (optional). Use
    in example the  
    @keytool -genkey -keyalg RSA -alias SERVER-NAME -keystore
    REPLACEME.jks -storepass password -validity 360 -keysize 2048@
3.  Copy the absolute path of the generated REPLACEME.jks-File and
    update the Jabber-Server-Configuration, update password in the
    Plug-in's configuration to the Storepass.
