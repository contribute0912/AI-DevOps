# Contributing to AI-Powered DevOps Demo

Thank you for your interest in contributing! This project demonstrates best practices for DevOps automation, code quality, and AI-powered workflows. Please follow these guidelines to ensure a smooth and productive collaboration.

## 🚀 How to Contribute
1. **Fork the repository** and clone your fork
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make your changes** (use VS Code tasks, Copilot, and scripts)
4. **Test and lint your code**
   ```bash
   npm test
   npm run lint
   npm run format:check
   ```
5. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature
   ```
6. **Open a Pull Request** (use the PR template)
7. **Address review feedback** and ensure all checks pass

## 🧪 Code Quality
- All code must pass ESLint and Prettier checks
- 80%+ test coverage required (see Jest config)
- Use Copilot and snippets for consistent code

## 🔒 Security
- Never commit secrets or sensitive data
- Use `.env.example` to document required environment variables
- Run `npm audit` and `node scripts/security-check.js` before PRs

## 📝 Documentation
- Update `README.md` and relevant docs for new features
- Add or update API docs as needed

## 🤖 AI Usage
- Document any Copilot or AI-generated code in your PR
- Use prompts from `docs/AI_PROMPTS.md` for best results

## 📋 PR & Issue Templates
- Use the provided templates for all PRs and issues
- Complete the compliance checklist in your PR

## 🛡️ Branch Protection
- All PRs require review and passing checks
- No direct pushes to `main` or `develop`

## 💡 Tips
- Use VS Code tasks for common DevOps operations
- Run `bash scripts/setup.sh` for environment setup
- See `docs/ONBOARDING.md` for new contributor guide

---

**Happy contributing!**
