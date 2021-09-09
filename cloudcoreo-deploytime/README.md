| Plugin Information                                                                                                      |
|-------------------------------------------------------------------------------------------------------------------------|
| View CloudCoreo DeployTime [on the plugin site](https://plugins.jenkins.io/cloudcoreo-deploytime) for more information. |

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-960)

 

# CloudCoreo DeployTime

Allows for inspection of cloud objects at time of deploy against
contexts on the CloudCoreo platform. Fails builds that are in violation
of user-defined CloudCoreo context rules.

## Requirements

-   [CloudCoreo](https://www.cloudcoreo.com/) account
-   A connected cloud account for the CloudCoreo account

## Usage

1.  Create a CloudCoreo access key in your CloudCoreo account
2.  In Jenkin's global configuration settings, add a team and fill out
    all necessary fields
3.  Under "Build Environment" for job configuration, select "CloudCoreo
    Enabled for Workload Analysis" and choose a team
4.  Add a post-build action for "Analyze CloudCoreo Results"

## Tips & Customizations

Use CloudCoreo to edit the contexts for which new deployed objects are
checked against. You can edit the default rules, adding to them or
defining a new default context altogether, as well as individually
select rules within a broader context.
