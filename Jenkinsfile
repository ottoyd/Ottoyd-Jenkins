pipeline {
    agent any

    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello World'
            }
        }
    }
    post {
        always {
            echo "im always"
        }
        success {
            echo "im success"
        }
        failure {
            echo "im failure"
        }
        cleanup {
            echo "im cleanup like always"
        }

    }
}