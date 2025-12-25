#!/bin/bash

# Deploy to Vercel using the CLI
# Requires Vercel CLI: npm i -g vercel

echo "Deploying to Vercel..."

if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI could not be found. Installing..."
    npm install -g vercel
fi

vercel deploy
