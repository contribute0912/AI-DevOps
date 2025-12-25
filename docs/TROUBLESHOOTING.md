# Troubleshooting Guide

This guide covers common issues and solutions for the AI-Powered DevOps Demo project.

## 🚀 Setup Issues
- **Node.js not found:**
  - Install Node.js >= 16 from https://nodejs.org
- **npm not found:**
  - Ensure Node.js installation includes npm
- **Git not found:**
  - Install Git from https://git-scm.com

## 🛠️ Development Issues
- **Tests fail locally:**
  - Run `npm install` to ensure dependencies are up to date
  - Check for missing environment variables in `.env`
- **Lint errors:**
  - Run `npm run lint:fix` or `node scripts/lint-fix.js`
- **Prettier formatting issues:**
  - Run `npm run format` or `node scripts/lint-fix.js`
- **Security audit fails:**
  - Run `npm audit fix` and review high/critical vulnerabilities
- **VS Code tasks not working:**
  - Ensure you are in the project root and have the recommended extensions installed

## 🔒 Security Issues
- **Secrets committed to git:**
  - Remove from git history and add to `.gitignore`
- **.env file missing:**
  - Copy `.env.example` to `.env` and update values
- **CodeQL or dependency scan fails:**
  - Update dependencies and review workflow logs

## 🤖 Copilot/AI Issues
- **Copilot not suggesting code:**
  - Ensure extension is enabled and you are signed in
  - Check internet connection
- **AI-generated code not working:**
  - Review and test all AI-generated code before merging

## 📝 Documentation Issues
- **Missing or outdated docs:**
  - Update `README.md`, `CONTRIBUTING.md`, or add to `docs/`

## 🆘 Still Stuck?
- Open an issue using the appropriate template
- Ask for help in your PR or issue

---

**Happy coding!**
