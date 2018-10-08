//Jenkinsfile (Declarative Pipeline)
node{
    pipeline {
        agent any
        stages {
            stage('build') {
                steps {
                    sh 'protractor conf.js'
                    sh 'make check || true' (1)
                    junit '**/target/*.xml' (2)
                }
            }
        }
    }
}
