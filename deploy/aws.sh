#!/bin/bash
# Deploy to AWS App Runner
# Prerequisites: AWS CLI installed and configured, Docker running

APP_NAME="crave-app"
AWS_REGION="us-east-1"
ECR_REPO_NAME="crave-repo"

echo "🚀 Starting AWS Deployment for $APP_NAME..."

# 1. Authenticate Docker to ECR
echo "🔑 Logging in to ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $(aws sts get-caller-identity --query Account --output text).dkr.ecr.$AWS_REGION.amazonaws.com

# 2. Create Repository if it doesn't exist
echo "📦 Checking ECR Repository..."
aws ecr describe-repositories --repository-names $ECR_REPO_NAME --region $AWS_REGION || aws ecr create-repository --repository-name $ECR_REPO_NAME --region $AWS_REGION

# 3. Build Docker Image
echo "🔨 Building Docker Image..."
docker build -t $APP_NAME .

# 4. Tag and Push
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_URI="$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME"

echo "🏷️ Tagging image as $ECR_URI:latest..."
docker tag $APP_NAME:latest $ECR_URI:latest

echo "⬆️ Pushing to ECR..."
docker push $ECR_URI:latest

# 5. Create/Update App Runner Service
echo "🚀 Deploying to App Runner..."
echo "NOTE: This steps creates a service if strictly new, or you can update an existing one via the console."
echo "Running create-service command..."

aws apprunner create-service \
    --service-name $APP_NAME-service \
    --source-configuration "AuthenticationConfiguration={ConnectionArn='',AccessRoleArn=''},AutoDeploymentsEnabled=true,ImageRepository={ImageIdentifier=$ECR_URI:latest,ImageRepositoryType=ECR,ImageConfiguration={Port=3000}}" \
    --region $AWS_REGION

echo "✅ Deployment triggered! Monitor status in AWS Console."
