# AI-Powered DevOps Demo

Welcome to the AI-Powered DevOps Acceleration Demo! This project demonstrates how to use GitHub, VS Code, and Copilot to automate and accelerate modern DevOps workflows for Node.js applications.

## 🚀 Key Features
- **AI-assisted pipeline authoring** (Copilot + GitHub Actions)
- **Automated compliance gates** (lint, test, security, coverage)
- **Contextual PR templates and review automation**
- **Standardized project structure and onboarding**
- **VS Code integration for all DevOps tasks**

## 🏗️ Project Structure
```
ai-devops-demo/
├── .github/ (workflows, templates, CODEOWNERS)
├── .vscode/ (tasks, launch configs, snippets)
├── src/ (Express app)
├── tests/ (Jest tests)
├── scripts/ (automation)
├── docs/ (guides, prompts)
├── package.json, .eslintrc.js, .prettierrc, jest.config.js
└── README.md
```

## 🧑‍💻 Getting Started
1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-devops-demo.git
   cd ai-devops-demo
   ```
2. **Install Node.js (>=16) and npm**
3. **Run setup script:**
   ```bash
   bash scripts/setup.sh
   ```
4. **Start developing!**
   ```bash
   npm start
   ```

## 🛠️ DevOps Tasks in VS Code
- **Run/Debug:** Use VS Code tasks and launch configs
- **Test/Lint:** `npm test`, `npm run lint`, `npm run format`
- **Security:** `npm audit`, `node scripts/security-check.js`
- **CI/CD:** All workflows in `.github/workflows/`

## 🤖 AI Prompts Library
See [`docs/AI_PROMPTS.md`](docs/AI_PROMPTS.md) for curated Copilot prompts for DevOps, testing, security, and more.

## 📋 Branch Protection & Compliance
- See [`docs/BRANCH_PROTECTION.md`](docs/BRANCH_PROTECTION.md) for recommended GitHub settings
- PRs require passing checks, code review, and compliance checklist

## 📝 Contributing
- Use PR and issue templates for all contributions
- Follow code style and security best practices
- See [`CONTRIBUTING.md`](CONTRIBUTING.md) for details

## 📚 Documentation
- Onboarding: [`docs/ONBOARDING.md`](docs/ONBOARDING.md)
- DevOps Guide: [`docs/DEVOPS_GUIDE.md`](docs/DEVOPS_GUIDE.md)
- Troubleshooting: [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md)

## 🛡️ Security
- All secrets in `.env` (never commit to git)
- Automated security checks in CI/CD
- See [`scripts/security-check.js`](scripts/security-check.js)

## 💡 Demo Script
1. Open VS Code, install recommended extensions
2. Use Copilot to generate a new workflow or test
3. Create a feature branch, push, and open a PR
4. Watch automated checks and review gates in action
5. Merge and deploy with confidence!

---

**Built with ❤️ by AI and DevOps best practices.**

_This is a demo edit for testing GitHub authentication in VS Code._
