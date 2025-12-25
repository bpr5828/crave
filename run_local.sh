#!/bin/bash

# Crave Local Startup Script

echo "🧞‍♂️ Awakening Crave..."

# 1. Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in your PATH."
    echo "Please install Node.js (v18 or higher) from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# 2. Check/Install Dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 node_modules not found. Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to install dependencies."
        exit 1
    fi
else
    echo "✅ Dependencies already installed."
fi

# 3. Start Development Server
echo "🚀 Starting Next.js development server..."
npm run dev
