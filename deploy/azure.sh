#!/bin/bash
# Deploy to Azure Container Apps
# Prerequisites: Azure CLI (az) installed and logged in

RESOURCE_GROUP="crave-rg"
ACR_NAME="craveacr"
APP_NAME="crave-app"
LOCATION="eastus"

echo "🚀 Starting Azure Deployment..."

# 1. Create Resource Group
echo "📦 Creating Resource Group $RESOURCE_GROUP..."
az group create --name $RESOURCE_GROUP --location $LOCATION

# 2. Create Container Registry
echo "📦 Creating ACR $ACR_NAME..."
az acr create --resource-group $RESOURCE_GROUP --name $ACR_NAME --sku Basic --admin-enabled true

# 3. Build and Push Image using ACR Build (No local Docker needed!)
echo "🔨 Building and Pushing Image to ACR..."
az acr build --registry $ACR_NAME --image $APP_NAME:latest .

# 4. Create Container App Environment
echo "🌍 Creating Container Apps Environment..."
az containerapp env create --name $APP_NAME-env --resource-group $RESOURCE_GROUP --location $LOCATION

# 5. Deploy Container App
echo "🚀 Deploying Container App..."
az containerapp create \
  --name $APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --environment $APP_NAME-env \
  --image $ACR_NAME.azurecr.io/$APP_NAME:latest \
  --target-port 3000 \
  --ingress 'external' \
  --query properties.configuration.ingress.fqdn

echo "✅ Deployment Complete!"
