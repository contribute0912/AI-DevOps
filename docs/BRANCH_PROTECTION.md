# Branch Protection Rules Template

## Overview
This document provides recommended branch protection settings for your GitHub repository to ensure code quality and security compliance.

## Main Branch Protection

### Required Settings for `main` branch:

```yaml
# GitHub Repository Settings
protection_rules:
  main:
    required_status_checks:
      strict: true
      contexts:
        - "CI / test (16.x)"
        - "CI / test (18.x)" 
        - "CI / test (20.x)"
        - "CodeQL"
        - "Dependency Review"
        - "ESLint"
        - "Prettier Check"
    
    enforce_admins: true
    required_pull_request_reviews:
      required_approving_review_count: 1
      dismiss_stale_reviews: true
      require_code_owner_reviews: true
      restrict_dismissals: false
    
    restrictions: null
    allow_force_pushes: false
    allow_deletions: false
```

### Step-by-Step Setup:

1. **Navigate to your GitHub repository**
2. **Go to Settings > Branches**
3. **Click "Add rule" for main branch**
4. **Configure these settings:**

#### ✅ Branch Protection Rules:
- [ ] Require a pull request before merging
- [ ] Require approvals: **1**
- [ ] Dismiss stale PR approvals when new commits are pushed
- [ ] Require review from code owners
- [ ] Require status checks to pass before merging
- [ ] Require branches to be up to date before merging

#### ✅ Required Status Checks:
- [ ] `CI / test (16.x)` - Node.js 16 tests
- [ ] `CI / test (18.x)` - Node.js 18 tests  
- [ ] `CI / test (20.x)` - Node.js 20 tests
- [ ] `CodeQL` - Security analysis
- [ ] `Dependency Review` - Vulnerability scanning
- [ ] `ESLint` - Code quality
- [ ] `Prettier Check` - Code formatting

#### ✅ Additional Restrictions:
- [ ] Restrict pushes that create files larger than 100MB
- [ ] Do not allow bypassing the above settings
- [ ] Include administrators in these restrictions

## Development Branch Strategy

### Recommended Branch Model:
```
main (protected)
├── develop (protected, less strict)
├── feature/feature-name
├── bugfix/bug-description
├── hotfix/critical-fix
└── release/v1.2.3
```

### Branch Naming Conventions:
- `feature/TICKET-123-short-description`
- `bugfix/fix-authentication-bug`  
- `hotfix/security-patch-cve-2023-xxxx`
- `release/v1.2.3`

## Repository Settings

### General Settings:
```yaml
repository:
  # Features
  features:
    wikis: true
    issues: true
    projects: true
    discussions: false
  
  # Pull Requests
  pull_requests:
    allow_merge_commit: true
    allow_squash_merging: true
    allow_rebase_merging: false
    delete_head_branches: true
  
  # Security
  security:
    enable_vulnerability_alerts: true
    enable_automated_security_fixes: true
    enable_dependency_graph: true
```

### Required Collaborator Permissions:
- **Admin**: Repository owners only
- **Maintain**: Senior developers, DevOps team
- **Write**: All team members
- **Read**: External contributors, stakeholders

## Compliance Checklist

Before enabling these rules, ensure your repository has:

- [ ] **Working CI/CD pipeline** with all required checks
- [ ] **CODEOWNERS file** defining code review responsibilities
- [ ] **Pull request templates** for consistent PR format
- [ ] **Issue templates** for standardized reporting
- [ ] **Contributing guidelines** for new contributors
- [ ] **Security policy** and vulnerability reporting process

## Quick Setup Commands

After creating your repository, run these commands:

```bash
# Clone and setup
git clone https://github.com/YOUR_USERNAME/ai-devops-demo.git
cd ai-devops-demo

# Setup development branch
git checkout -b develop
git push -u origin develop

# Create initial structure
npm install
npm test
npm run lint

# Push to trigger first CI run
git add .
git commit -m "feat: initial project setup with CI/CD"
git push
```

## Troubleshooting

### Common Issues:

**❌ Status checks failing**
- Ensure all GitHub Actions workflows are properly configured
- Check that required Node.js versions match your setup
- Verify all dependencies are correctly installed

**❌ Can't merge PR**  
- All required status checks must pass
- PR must have required number of approvals
- Branch must be up-to-date with main

**❌ Accidental force push**
- Branch protection prevents this on main
- Contact repository admin if bypass needed
- Use `git revert` instead of force push

## Next Steps

1. **Create this repository on GitHub**
2. **Push the initial code**
3. **Configure branch protection rules**
4. **Test the workflow with a sample PR**
5. **Train team on new process**