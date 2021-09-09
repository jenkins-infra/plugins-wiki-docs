  

    {jenkins-plugin-info:in-toto}

  

This plugin exposes a "post build" entry in the task menu to create
in-toto link metadata for a specific build. Likewise, it can be used in
declarative pipelines by using the in\_toto\_wrap keyword

  

    pipeline { 
     agent none 
     
     stages { 
       stage('Build') { 
         agent { label 'worker 1' } 
     
         steps { 
           in_toto_wrap(['stepName': 'Build', 
                     'credentialId': 'keyId01', 
                        'transport': 'redis://redis']){ 
             echo 'Building..' 
           } 
         } 
       } 
     } 

    } 

This will produce a piece of link metadata and post it to a redis
server.
