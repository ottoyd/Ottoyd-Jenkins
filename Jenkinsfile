pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm run test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Hello Deploy'
            }
        }
    }

    post {
        always {
            echo 'im always'
        }
        success {
            echo 'im success'
        }
        failure {
            echo 'im failure'
        }
        cleanup {
            echo 'im cleanup like always'
        }
    }
}
