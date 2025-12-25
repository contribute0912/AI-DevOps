## 🚀 Pull Request

<!-- AI-Generated PR Template for DevOps Compliance -->
<!-- Use this checklist to ensure your PR meets all requirements -->

### 📋 Description
**What does this PR do?**
<!-- Provide a clear and concise description -->

**Related Issue(s)**
<!-- Link to related issues: Fixes #123, Closes #456 -->

### 🏷️ Type of Change
<!-- Check all that apply -->
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🔧 Configuration change
- [ ] 🧪 Test improvement
- [ ] 🔄 Refactoring (no functional changes)
- [ ] ⚡ Performance improvement

---

## ✅ Quality Assurance Checklist

### 🧪 Testing
- [ ] **Tests pass locally** (`npm test`)
- [ ] **New tests added** for new functionality
- [ ] **Manual testing completed**
- [ ] **Edge cases considered and tested**
- [ ] **Test coverage maintained or improved**

### 🔍 Code Quality
- [ ] **ESLint passes** (`npm run lint`)
- [ ] **Prettier formatting applied** (`npm run format`)
- [ ] **Code follows project conventions**
- [ ] **Self-review completed**
- [ ] **No TODO/FIXME comments** (or documented in issues)
- [ ] **No console.logs or debugger statements**
- [ ] **Error handling implemented**

### 🔒 Security
- [ ] **No sensitive data exposed** (passwords, API keys, etc.)
- [ ] **Input validation implemented** where applicable
- [ ] **SQL injection prevention** (if applicable)
- [ ] **XSS protection** (if applicable)
- [ ] **Security best practices followed**
- [ ] **Dependencies are up to date** (`npm audit`)

### 📝 Documentation
- [ ] **README updated** if needed
- [ ] **API documentation updated** if needed
- [ ] **Inline code comments** for complex logic
- [ ] **CHANGELOG.md updated** (for releases)
- [ ] **Configuration documented**

### 🌐 DevOps & Deployment
- [ ] **Environment variables documented**
- [ ] **Database migrations included** (if applicable)
- [ ] **Deployment considerations documented**
- [ ] **Rollback plan considered**
- [ ] **Feature flags implemented** (if applicable)

---

## 🤖 Automated Checks Status

<!-- These will be automatically updated by GitHub Actions -->
- **CI Pipeline**: ⏳ Pending
- **Security Scan**: ⏳ Pending
- **Code Quality**: ⏳ Pending
- **Test Coverage**: ⏳ Pending
- **Dependency Check**: ⏳ Pending

---

## 📊 Impact Assessment

### Performance Impact
- [ ] **No performance regression**
- [ ] **Performance improvement** (provide metrics)
- [ ] **Performance impact acceptable** (document trade-offs)

### Breaking Changes
- [ ] **No breaking changes**
- [ ] **Breaking changes documented** in description
- [ ] **Migration guide provided** (if applicable)

---

## 🧪 Testing Details

### Test Coverage
- **Lines**: __%
- **Functions**: __%
- **Branches**: __%
- **Statements**: __%

### Manual Testing Checklist
- [ ] **Happy path tested**
- [ ] **Error scenarios tested**
- [ ] **Boundary conditions tested**
- [ ] **Integration points tested**

---

## 📸 Screenshots/Videos
<!-- Add screenshots for UI changes, videos for complex workflows -->

---

## 🚀 Deployment Notes

### Pre-deployment
- [ ] **Database migrations ready**
- [ ] **Environment variables set**
- [ ] **Third-party services configured**

### Post-deployment
- [ ] **Monitoring alerts configured**
- [ ] **Health checks pass**
- [ ] **Rollback procedure documented**

---

## 👥 Review Requirements

### Required Reviewers
- [ ] **Code owner approval** (automatic)
- [ ] **Security team review** (if security-related)
- [ ] **DevOps team review** (if infrastructure changes)

### Review Focus Areas
<!-- Guide reviewers on what to focus on -->
- **Security implications**
- **Performance impact**
- **Code maintainability**
- **Test coverage**
- **Documentation completeness**

---

## 📝 Additional Notes
<!-- Any additional context, trade-offs, or future considerations -->

---

**🤖 AI Assistance Used**: <!-- Document any AI tools used in development -->
- [ ] GitHub Copilot for code generation
- [ ] Copilot Chat for problem solving
- [ ] AI for test generation
- [ ] Other: ________________

**⚡ Quick Actions**
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Apply code formatting
- `npm run test:coverage` - Check test coverage
- `npm run security:audit` - Run security audit