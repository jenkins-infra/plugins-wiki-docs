
# Tinfoil Security Plugin

Allows you to run web security tests from the cloud using [Tinfoil
Security](https://www.tinfoilsecurity.com/).  

## Setup

### Global Configuration

If you navigate to 'Manage Jenkins \> Configure System', you should see
a section labeled Tinfoil Security. Here, you'll be able to set your
Tinfoil API keys, as well as optionally set a hostname of your Tinfoil
Security installation if you are using the Tinfoil appliance and proxy
information if needed.

  

![](docs/images/jenkinsConfigWSCAN1.png){height="212"}

First though, you'll need to get your API keys. To generate a set of API
keys, log in to your Tinfoil Security account and navigate to
<https://www.tinfoilsecurity.com/add_ons>. From there, you can select
the checkbox to enable the Tinfoil API and create an API key. Make sure
you create a 'Full Access' API key pair, since 'Read-Only' API keys
cannot start scans. Keep in mind you won't see the actual values of your
API keys until you've clicked 'Save'.

  

![](docs/images/add_ons_page.png)

Then hit the 'add' button on the credentials line and select the context
you want to add the credentials to ('Jenkins' is the default)

![](docs/images/jenkinsConfigWSCAN1.png){height="212"}

Choose the 'Username with password' kind and fill in your Access Key as
the username and Secret Key as the password.

![](docs/images/jenkinsConfigWSCAN2.5.png){height="250"}

### Per-Project Configuration

For each project in your Jenkins installation. You can configure a
Tinfoil Security Post-build Action which allows you to specify a Tinfoil
Site ID for the site you want to scan at the end of your Jenkins build.

![](docs/images/project_settings.png)

To find your Site ID, you need to log in to your Tinfoil Security
account and navigate to the settings panel for the site you want to
scan. Underneath the site name and URL, you should see the
auto-generated Site ID for that site.

![](docs/images/site_id.png)

## Usage

To use the Tinfoil Security plugin, just run a build. When Jenkins
performs the Tinfoil Security post-build action, you will see a message
like this in your console output telling you everything is working.

Tinfoil Security scan started! Log in to
<https://www.tinfoilsecurity.com/sites> to view its progress.

## Support

For support, please e-mail us at support@tinfoilsecurity.com

## Changelog

### 3.0 (Jul 9 2019)

-   ![(plus)](docs/images/add.svg) Added
    support for the Tinfoil Security API Scanner.

### 2.0 (Jul 30 2018)

-   [Fix security
    issue](https://jenkins.io/security/advisory/2018-07-30/#SECURITY-840):
    The plugin now integrates with [Credentials
    Plugin](https://plugins.jenkins.io/credentials). Existing
    configurations are not migrated and will need to be reconfigured.

### 1.6 (Mar 1 2017)

-   ![(plus)](docs/images/add.svg)
     Add the ability to configure a proxy to access the Tinfoil Security
    service.

### 1.5 (Jul 1 2016)

-   ![(plus)](docs/images/add.svg)
    API Access Key and API Secret Key can include environment variables,
    specified as ${VARIABLE} in the text fields.

### 1.4 (Mar 2 2016)

-   ![(plus)](docs/images/add.svg)
    Reduced minimum Jenkins version to 1.479

### 1.3 (Nov 17 2015)

-   ![(error)](docs/images/error.svg)
    Fixed an issue where the plugin refused to connect to Tinfoil hosts
    that use self-signed certificates.
-   ![(plus)](docs/images/add.svg)
    Tinfoil hosts can now be configured per-project as well as globally.

### 1.2 (Oct 16 2015)

-   ![(plus)](docs/images/add.svg)
    API Keys can now be configured per-project as well as globally.

### 1.1 (Oct 6 2015)

-   ![(plus)](docs/images/add.svg)
    Added a global configuration to allow you to specify a root URL for
    your Tinfoil installation (if you are using the Tinfoil appliance).

### 1.0 (Oct 2 2015)

-   First release!
-   ![(plus)](docs/images/add.svg)
    Allow you to run an asynchronous Tinfoil Security scan on your site
    as a post build action.

  

  

  
