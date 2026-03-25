pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Sana2309/devops-assignment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 9090:8080 devops-app || true'
            }
        }
    }
}
