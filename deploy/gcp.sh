#!/bin/bash
# Deploy to Google Cloud Run
# Prerequisites: gcloud CLI installed and initialized

PROJECT_ID=$(gcloud config get-value project)
APP_NAME="crave-app"
REGION="us-central1"

echo "🚀 Starting GCP Deployment for project $PROJECT_ID..."

if [ -z "$PROJECT_ID" ]; then
    echo "❌ No default project set. Please run 'gcloud config set project [YOUR_PROJECT_ID]'"
    exit 1
fi

# 1. Enable Services
echo "🔌 Enabling Cloud Build and Cloud Run APIs..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# 2. Build and Submit to Container Registry (Cloud Build)
echo "🔨 Building Image with Cloud Build..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$APP_NAME

# 3. Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $APP_NAME \
  --image gcr.io/$PROJECT_ID/$APP_NAME \
  --platform managed \
  --region $REGION \
  --port 3000 \
  --allow-unauthenticated

echo "✅ Deployment Complete!"
