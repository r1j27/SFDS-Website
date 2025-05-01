# SFDS-Website

## CI/CD Pipeline Setup with Jenkins

This project includes a fully configured CI/CD pipeline using Jenkins. The pipeline automates building, testing, and deploying the application.

### Prerequisites

1. Jenkins server with the following plugins installed:
   - Docker Pipeline
   - Git
   - Pipeline
   - Job DSL
   - Blue Ocean (optional, for better UI)

2. Docker installed on the Jenkins server
3. Node.js and npm installed on the Jenkins server

### Jenkins Credentials Setup

Create the following credentials in Jenkins:

1. **GitHub Credentials**:
   - ID: `github-pat`
   - Type: Username with password
   - Description: GitHub Personal Access Token

2. **Docker Hub Credentials**:
   - ID: `dockerhub-creds`
   - Type: Username with password
   - Description: Docker Hub Credentials

### Setting Up the Pipeline

#### Option 1: Using the Jenkins UI

1. Create a new Pipeline job in Jenkins
2. Configure the Pipeline to use SCM and point to your GitHub repository
3. Set the Script Path to `Jenkinsfile`
4. Save and run the pipeline

#### Option 2: Using Job DSL (Recommended)

1. Create a new Jenkins job of type "Pipeline"
2. In the Pipeline script, paste:
   ```groovy
   jobDsl scriptText: '''
       pipelineJob('SFDS-Website-Pipeline') {
           definition {
               cpsScm {
                   scm {
                       git {
                           remote {
                               url('https://github.com/sai-chaitanya-raj/sfds-website.git')
                               credentials('github-pat')
                           }
                           branch('*/main')
                       }
                   }
                   scriptPath('Jenkinsfile')
               }
           }
           triggers {
               scm('H/15 * * * *')
           }
       }
   '''
   ```
3. Run this job once to create the actual pipeline job

### Pipeline Stages

The pipeline includes the following stages:

1. **Clone**: Clones the repository
2. **Install Dependencies**: Installs npm dependencies
3. **Lint**: Runs ESLint to check code quality
4. **Test**: Runs tests (if configured)
5. **Build**: Builds the Vite app
6. **Security Scan**: Performs npm audit for security vulnerabilities
7. **Docker Build**: Builds the Docker image
8. **Docker Push**: Pushes the Docker image to Docker Hub
9. **Deploy to Development/Production**: Deploys to the appropriate environment based on branch

### Webhook Setup (Optional)

To trigger the pipeline automatically on code changes:

1. Go to your GitHub repository settings
2. Navigate to Webhooks and add a new webhook
3. Set the Payload URL to `http://your-jenkins-server/github-webhook/`
4. Choose content type: `application/json`
5. Select "Just the push event"
6. Save the webhook
