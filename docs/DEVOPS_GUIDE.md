# DevOps Guide

This guide explains the DevOps automation, CI/CD, and compliance features in this project.

## 🚀 GitHub Actions Workflows
- **CI Pipeline:** Multi-version Node.js testing, lint, coverage, build
- **Security:** CodeQL, dependency review, npm audit, secret scanning
- **PR Validation:** Title, size, code quality, coverage, dependency checks
- **Deployment:** Staging/production, blue-green, rollback, health checks
- **Release:** Semantic versioning, changelog, GitHub releases

## 🛠️ VS Code Integration
- **Tasks:** Run, test, lint, format, audit, health check, create PR
- **Snippets:** Copilot-ready for workflows, routes, tests, Docker, PRs
- **Debug:** Launch configs for app and tests

## 📋 Compliance Gates
- **Branch protection:** See `docs/BRANCH_PROTECTION.md`
- **CODEOWNERS:** Automated review assignment
- **PR templates:** Compliance checklist, automated checks
- **Issue templates:** Bug, feature, DevOps

## 🔒 Security
- **No secrets in git:** Use `.env` and `.gitignore`
- **Automated security checks:** `node scripts/security-check.js`, npm audit
- **CodeQL and dependency scanning in CI/CD**

## 🧑‍💻 Onboarding
- See `docs/ONBOARDING.md` for new contributor steps
- Use Copilot prompts from `docs/AI_PROMPTS.md`

## 🆘 Troubleshooting
- See `docs/TROUBLESHOOTING.md` for common issues and solutions

---

**For questions, open an issue or PR!**
