//Jenkinsfile (Declarative Pipeline)
node{
    pipeline {
        //agent { docker { image 'node:6.3' } }
        stages {
            stage('build') {
                steps {
                    sh 'protractor conf.js'
                }
            }
        }
    
        post {
            always {
                junit 'build/reports/**/*.xml'
            }
        }
    }

}
