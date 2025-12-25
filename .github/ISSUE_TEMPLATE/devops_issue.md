---
name: 🔧 DevOps Issue
about: Infrastructure, deployment, or pipeline issues
title: '[DEVOPS] '
labels: ['devops', 'infrastructure', 'needs-triage']
assignees: ''
---

## 🔧 DevOps Issue

### 🎯 Issue Type
<!-- Check all that apply -->
- [ ] 🚀 **Deployment Issue** - Problems with application deployment
- [ ] ⚙️ **CI/CD Pipeline** - GitHub Actions workflow issues
- [ ] 🏗️ **Infrastructure** - Server, database, or cloud resource issues
- [ ] 🔒 **Security** - Security vulnerabilities or compliance issues
- [ ] 📊 **Monitoring** - Logging, metrics, or alerting issues
- [ ] 🌐 **Networking** - DNS, load balancing, or connectivity issues
- [ ] 🔧 **Configuration** - Environment variables or settings issues
- [ ] 📦 **Dependencies** - Package or service dependency issues

---

## 📋 Problem Description

**What's happening?**
<!-- Clear description of the issue -->

**What should be happening?**
<!-- Expected behavior or outcome -->

**When did this start?**
<!-- Timeline of when the issue began -->

---

## 🌍 Environment Details

### Affected Environments
- [ ] **Development**
- [ ] **Staging** 
- [ ] **Production**
- [ ] **Local Development**
- [ ] **CI/CD Pipeline**

### System Information
**Infrastructure:**
- Platform: <!-- e.g., AWS, Azure, Google Cloud, On-premise -->
- Services: <!-- e.g., EC2, RDS, Redis, etc. -->
- Region: <!-- e.g., us-east-1, europe-west1 -->

**Application:**
- Version: <!-- e.g., v1.2.3 -->
- Commit: <!-- e.g., abc123def -->
- Branch: <!-- e.g., main, release/1.2.3 -->

---

## 🔍 Error Details

### Error Messages
```
Paste exact error messages here
```

### Log Excerpts
```
Paste relevant log entries with timestamps
```

### Stack Traces
```
Paste full stack traces if available
```

---

## 📊 Monitoring Data

### Metrics
- **CPU Usage**: __%
- **Memory Usage**: __%
- **Disk Usage**: __%
- **Network I/O**: __
- **Response Time**: __ms
- **Error Rate**: __%

### Recent Changes
- **Last Deployment**: <!-- Date and version -->
- **Configuration Changes**: <!-- Any recent config updates -->
- **Infrastructure Changes**: <!-- Any infrastructure modifications -->

---

## 🛠️ Troubleshooting Steps Taken

- [ ] **Checked application logs**
- [ ] **Verified service health**
- [ ] **Reviewed recent deployments**
- [ ] **Checked system resources**
- [ ] **Validated configuration**
- [ ] **Tested connectivity**
- [ ] **Reviewed monitoring dashboards**
- [ ] **Checked external dependencies**
- [ ] Other: ________________

---

## 🚨 Impact Assessment

### Severity Level
- [ ] 🔥 **Critical** - Production down, data loss risk
- [ ] 🚨 **High** - Major functionality impacted
- [ ] ⚠️ **Medium** - Minor functionality affected
- [ ] 💡 **Low** - No immediate user impact

### Business Impact
- **Users Affected**: <!-- Number or percentage -->
- **Services Affected**: <!-- Which services are down/degraded -->
- **Revenue Impact**: <!-- If applicable -->
- **SLA Breach**: <!-- Yes/No and details -->

---

## 🎯 Resolution Requirements

### Immediate Actions Needed
- [ ] **Restore service availability**
- [ ] **Implement workaround**
- [ ] **Scale resources**
- [ ] **Rollback deployment**
- [ ] **Apply security patch**
- [ ] Other: ________________

### Long-term Improvements
- [ ] **Improve monitoring**
- [ ] **Enhance error handling**
- [ ] **Update documentation**
- [ ] **Add automated testing**
- [ ] **Implement redundancy**
- [ ] Other: ________________

---

## 📁 GitHub Actions Specific
<!-- Fill this section if the issue is related to CI/CD -->

### Workflow Information
- **Workflow Name**: <!-- e.g., CI, Deploy, Security -->
- **Run ID**: <!-- GitHub Actions run ID -->
- **Trigger**: <!-- e.g., push, pull_request, schedule -->
- **Branch**: <!-- Which branch triggered the workflow -->

### Failed Steps
```yaml
# Paste the failing workflow step(s)
```

### Workflow Logs
```
Paste relevant workflow logs
```

---

## 🔒 Security Considerations

- [ ] **Contains sensitive information**
- [ ] **Security vulnerability involved**
- [ ] **Requires security team review**
- [ ] **Compliance requirements affected**
- [ ] **Audit trail needed**

---

## 📈 Monitoring & Alerting

### Current Alerts
<!-- List any active alerts related to this issue -->

### Missing Monitoring
- [ ] **Need application metrics**
- [ ] **Need infrastructure monitoring** 
- [ ] **Need error rate alerting**
- [ ] **Need performance monitoring**
- [ ] **Need security monitoring**

---

## 🔄 Recovery Plan

### Immediate Recovery
1. **Step 1**: <!-- First action to take -->
2. **Step 2**: <!-- Second action to take -->
3. **Step 3**: <!-- Continue as needed -->

### Rollback Plan
- [ ] **Rollback procedure documented**
- [ ] **Rollback tested**
- [ ] **Data backup available**
- [ ] **Rollback trigger criteria defined**

---

## 📚 Documentation Updates

### Required Documentation
- [ ] **Runbook updates**
- [ ] **Troubleshooting guide**
- [ ] **Architecture documentation**
- [ ] **Monitoring playbook**
- [ ] **Incident response guide**

---

## 🔗 Related Resources

**Monitoring Dashboards:**
<!-- Links to relevant dashboards -->

**Log Aggregation:**
<!-- Links to log viewers -->

**Related Issues:**
<!-- Links to related GitHub issues -->

**External Dependencies:**
<!-- Third-party services that might be affected -->

---

## 📝 Additional Context

**Root Cause Hypothesis:**
<!-- Your theory about what's causing the issue -->

**Temporary Workarounds:**
<!-- Any temporary solutions that can be applied -->

**Long-term Prevention:**
<!-- How to prevent this issue in the future -->

---

**🤖 AI-Assistance Potential**
- [ ] Log analysis could benefit from AI
- [ ] Pattern recognition might help
- [ ] Automated remediation possible
- [ ] Code generation for fixes needed