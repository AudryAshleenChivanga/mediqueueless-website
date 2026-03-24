#!/bin/bash
# Mediqueueless Website - Setup Script
# This script sets up the development environment

echo "================================"
echo "Mediqueueless Website Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "================================"
echo "Setup Complete! 🎉"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Build for production:"
echo "   npm run build"
echo ""
echo "3. Deploy to GitHub Pages:"
echo "   See DEPLOYMENT.md for instructions"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview"
echo "   - DEPLOYMENT.md - Deployment guide"
echo "   - CONTRIBUTING.md - How to contribute"
echo ""
