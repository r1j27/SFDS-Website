pipeline {
    agent any
    
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
        
        stage('Deploy Development') {
            when {
                branch 'main'
            }
            steps {
                echo "Build and deployment successful!"
                echo "Build number: ${BUILD_NUMBER}"
                echo "To deploy manually, run: ./deploy.sh dev ${BUILD_NUMBER}"
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
} 