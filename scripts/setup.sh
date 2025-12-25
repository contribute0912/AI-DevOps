#!/bin/bash
# AI-Generated Development Environment Setup Script
# Prompt: "Create comprehensive setup script for new developers"

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Emojis for better UX
CHECK="✅"
WARNING="⚠️"
ERROR="❌"
ROCKET="🚀"
WRENCH="🔧"
PACKAGE="📦"

echo -e "${BLUE}${ROCKET} AI-Powered DevOps Demo Setup${NC}"
echo -e "${BLUE}=====================================
${NC}"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check Node.js version
check_node_version() {
    if command_exists node; then
        NODE_VERSION=$(node --version | cut -d'v' -f2)
        REQUIRED_VERSION="16.0.0"
        
        if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" = "$REQUIRED_VERSION" ]; then
            echo -e "${GREEN}${CHECK} Node.js version $NODE_VERSION is compatible${NC}"
            return 0
        else
            echo -e "${RED}${ERROR} Node.js version $NODE_VERSION is too old. Required: >= $REQUIRED_VERSION${NC}"
            return 1
        fi
    else
        echo -e "${RED}${ERROR} Node.js not found${NC}"
        return 1
    fi
}

# Check prerequisites
echo -e "${YELLOW}${WRENCH} Checking prerequisites...${NC}"

if ! check_node_version; then
    echo -e "${YELLOW}${WARNING} Please install Node.js >= 16.0.0 from https://nodejs.org${NC}"
    exit 1
fi

if ! command_exists npm; then
    echo -e "${RED}${ERROR} npm not found. Please install Node.js with npm${NC}"
    exit 1
fi

if ! command_exists git; then
    echo -e "${RED}${ERROR} Git not found. Please install Git${NC}"
    exit 1
fi

echo -e "${GREEN}${CHECK} All prerequisites satisfied${NC}\n"

# Install dependencies
echo -e "${YELLOW}${PACKAGE} Installing dependencies...${NC}"
npm ci
echo -e "${GREEN}${CHECK} Dependencies installed successfully${NC}\n"

# Setup environment file
echo -e "${YELLOW}${WRENCH} Setting up environment configuration...${NC}"
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo -e "${GREEN}${CHECK} Created .env file from template${NC}"
    echo -e "${YELLOW}${WARNING} Please update .env with your actual configuration values${NC}"
else
    echo -e "${YELLOW}${WARNING} .env file already exists, skipping...${NC}"
fi
echo

# Run initial tests
echo -e "${YELLOW}${WRENCH} Running initial tests...${NC}"
npm test
echo -e "${GREEN}${CHECK} Tests passed successfully${NC}\n"

# Run linting
echo -e "${YELLOW}${WRENCH} Running code quality checks...${NC}"
npm run lint
echo -e "${GREEN}${CHECK} Code quality checks passed${NC}\n"

# Check formatting
echo -e "${YELLOW}${WRENCH} Checking code formatting...${NC}"
npm run format:check
echo -e "${GREEN}${CHECK} Code formatting is correct${NC}\n"

# Security audit
echo -e "${YELLOW}${WRENCH} Running security audit...${NC}"
npm audit --audit-level moderate
echo -e "${GREEN}${CHECK} Security audit completed${NC}\n"

# Setup Git hooks (if available)
if [ -d ".git" ]; then
    echo -e "${YELLOW}${WRENCH} Setting up Git hooks...${NC}"
    
    # Create pre-commit hook
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# AI-Generated pre-commit hook
echo "🔍 Running pre-commit checks..."

# Run linting
echo "📝 Checking code style..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Please fix the issues and try again."
    exit 1
fi

# Check formatting
echo "🎨 Checking code formatting..."
npm run format:check
if [ $? -ne 0 ]; then
    echo "❌ Code formatting issues found. Run 'npm run format' to fix."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Please fix the failing tests."
    exit 1
fi

echo "✅ Pre-commit checks passed!"
EOF
    
    chmod +x .git/hooks/pre-commit
    echo -e "${GREEN}${CHECK} Git pre-commit hook installed${NC}"
else
    echo -e "${YELLOW}${WARNING} Not a Git repository, skipping Git hooks setup${NC}"
fi
echo

# Final setup summary
echo -e "${GREEN}${ROCKET} Setup completed successfully!${NC}"
echo -e "${GREEN}=================================${NC}"
echo
echo -e "${BLUE}Next steps:${NC}"
echo -e "1. Update .env file with your configuration"
echo -e "2. Review the documentation in docs/"
echo -e "3. Run 'npm start' to start the development server"
echo -e "4. Open VS Code and install recommended extensions"
echo -e "5. Create a new branch: git checkout -b feature/your-feature"
echo
echo -e "${BLUE}Useful commands:${NC}"
echo -e "• npm start          - Start the application"
echo -e "• npm test           - Run tests"
echo -e "• npm run lint       - Check code quality"
echo -e "• npm run format     - Format code"
echo -e "• npm run dev        - Start with nodemon"
echo
echo -e "${GREEN}Happy coding! 🚀${NC}"