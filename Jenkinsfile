pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup Node') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm use 16 || nvm install 16
                    node -v
                    npm -v
                '''
            }
        }
        
        stage('Install') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    npm install
                '''
            }
        }
        
        stage('Lint') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    npm run lint || true
                '''
            }
        }
        
        stage('Build') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    npm run build
                '''
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