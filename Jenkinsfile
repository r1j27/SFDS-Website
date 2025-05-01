pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = 'r1j27/sfds-website'
        DOCKER_CREDENTIALS_ID = 'dockerhub-creds'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint || true'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    app = docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", DOCKER_CREDENTIALS_ID) {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
        stage('Deploy Development') {
            when {
                branch 'main'
            }
            steps {
                sh 'chmod +x ./deploy.sh'
                sh "./deploy.sh dev ${env.BUILD_NUMBER}"
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
} 