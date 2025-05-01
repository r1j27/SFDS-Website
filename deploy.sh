#!/bin/bash

# Simple deployment script for SFDS-Website
# This script can be called from Jenkins or manually

# Usage: ./deploy.sh [dev|prod] [version]
# Example: ./deploy.sh prod 42

set -e

ENVIRONMENT=$1
VERSION=$2
IMAGE_NAME="ch1it1ny1r1j/sfds-website"

if [ -z "$ENVIRONMENT" ]; then
  echo "Error: Environment not specified"
  echo "Usage: ./deploy.sh [dev|prod] [version]"
  exit 1
fi

if [ -z "$VERSION" ]; then
  echo "No version specified, using 'latest'"
  VERSION="latest"
fi

echo "🚀 Deploying SFDS-Website to $ENVIRONMENT environment (version: $VERSION)"

if [ "$ENVIRONMENT" == "dev" ]; then
  # Development deployment configuration
  CONTAINER_NAME="sfds-website-dev"
  PORT=8080
  echo "Deploying to development environment on port $PORT"

elif [ "$ENVIRONMENT" == "prod" ]; then
  # Production deployment configuration
  CONTAINER_NAME="sfds-website-prod"
  PORT=80
  echo "Deploying to production environment on port $PORT"

else
  echo "Error: Invalid environment '$ENVIRONMENT'. Use 'dev' or 'prod'"
  exit 1
fi

# Pull the latest image
echo "Pulling Docker image: $IMAGE_NAME:$VERSION"
docker pull $IMAGE_NAME:$VERSION

# Stop and remove any existing container
echo "Stopping existing container if running..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Start the new container
echo "Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p $PORT:80 \
  --restart unless-stopped \
  $IMAGE_NAME:$VERSION

echo "✅ Deployment complete! The application is now running on port $PORT"
echo "To view logs: docker logs -f $CONTAINER_NAME" 