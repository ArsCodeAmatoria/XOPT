#!/bin/bash

# Exit on error
set -e

echo "🚀 Initializing XOPT Protocol..."

# Install Rust and Cargo
if ! command -v rustc &> /dev/null; then
    echo "Installing Rust..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source $HOME/.cargo/env
fi

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
cd frontend
npm install
cd ../crowdloan-ui
npm install
cd ../subquery
npm install

# Build SubQuery project
echo "Building SubQuery project..."
npm run build

# Return to root directory
cd ..

echo "✅ Project initialization complete!"
echo "
Next steps:
1. Build the chain: cd chain && cargo build
2. Start the frontend: cd frontend && npm run dev
3. Start the crowdloan portal: cd crowdloan-ui && npm run dev
4. Start SubQuery: cd subquery && npm run dev
" 