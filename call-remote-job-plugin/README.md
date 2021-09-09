The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-09-25/#SECURITY-1548)

# Description

Call Remote Job Plugin is for call remote jenkins job.  
Word starts With "$" in name, password and parameter is able to replace
with build parameter.  
ex: parameter is "param1=$buildParam1&param2$buildParam2" and build
parameter "param1:value1" and "param2:value2",  
parameter is replaced as param1=value1&param2=value2 on execute.

Call Remote Job PluginはリモートのJenkins
Jobを呼び出すためのプラグインです。

nameとpasswordとparameter中に$で始まる文字があると、同名のbuild
parameterで置換します。  
Call Remote Job
Pluginのパラメーターに　"param1=$buildParam1&param2$buildParam2"　というのがあって、  
ビルドパラメータに"param1:value1" と、
"param2:value2"　というのがあると、  
リモートのJobを呼び出すときにはパラメータは
"param1=value1&param2=value2" になります。

# Version history

[TABLE]
