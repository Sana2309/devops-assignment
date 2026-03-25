pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f devops-container || true'
                sh 'docker run -d -p 9090:8080 --name devops-container devops-app'
            }
        }

    }
}
