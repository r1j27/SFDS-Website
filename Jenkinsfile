pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = 'r1j27/sfds-website'
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
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
        
        stage('Docker Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
                sh 'docker tag $DOCKER_IMAGE:$BUILD_NUMBER $DOCKER_IMAGE:latest'
            }
        }
        
        stage('Docker Push') {
            steps {
                sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
                sh 'docker push $DOCKER_IMAGE:latest'
            }
        }
        
        stage('Deploy Development') {
            when {
                branch 'main'
            }
            steps {
                sh 'chmod +x ./deploy.sh'
                sh "./deploy.sh dev ${BUILD_NUMBER}"
            }
        }
    }
    
    post {
        always {
            sh 'docker logout'
            cleanWs()
        }
    }
} 