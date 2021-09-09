This plugin provides the ability to define Infrastructure as Code.
Create, update and tear down clusters of related docker containers for
builds, testing or continuous delivery.

 

Snowglobe plugin for Jenkins

This allows Jenkins jobs to control a SnowGlobe instance
(see <https://nirima.github.io/SnowGlobe/>).

## [](https://github.com/nirima/snowglobe-plugin#operations)Operations

The operations are relatively simple:

### [](https://github.com/nirima/snowglobe-plugin#clone)Clone

    snowglobe_clone createAction: true, sourceId: 'ci-template', targetId: 'new-globe-name'

### [](https://github.com/nirima/snowglobe-plugin#set-variables)Set Variables

    snowglobe_set_variables globeId: 'my-globe', variables: 'key="value"'

### [](https://github.com/nirima/snowglobe-plugin#get-variables)Get Variables

    data = snowglobe_get_variables  globeId: 'my-globe'

### [](https://github.com/nirima/snowglobe-plugin#apply)Apply

    snowglobe_apply createAction: true, globeId: 'my-globe'

### [](https://github.com/nirima/snowglobe-plugin#state)State

    data = snowglobe_state createAction: false, globeId: 'my-globe'

### [](https://github.com/nirima/snowglobe-plugin#destroy)Destroy

    snowglobe_clone remove: true, globeId: 'my-globe'

Remove: set to true to also remove the SnowGlobe after destruction.

In all cases - createAction controls whether to add an action to the
build, which will also remove the globe when the CI build is complete.
