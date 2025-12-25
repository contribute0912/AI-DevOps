#!/usr/bin/env node
// AI-Generated Security Check Script
// Prompt: "Create comprehensive security validation script for Node.js application"

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Security check configuration
const SECURITY_CONFIG = {
  vulnerabilityThreshold: 'moderate', // low, moderate, high, critical
  allowedLicenses: ['MIT', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'ISC'],
  bannedPackages: ['lodash-4.17.15', 'moment'], // Known vulnerable versions
  sensitiveFiles: ['.env', '.env.local', 'config/secrets.js'],
  sensitivePatterns: [
    /password\s*=\s*['"].*['"]/gi,
    /api[_-]?key\s*=\s*['"].*['"]/gi,
    /secret\s*=\s*['"].*['"]/gi,
    /token\s*=\s*['"].*['"]/gi
  ]
};

// Colors and emojis
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m'
};

const log = {
  info: msg => console.log(`${colors.blue}🔍 ${msg}${colors.reset}`),
  success: msg => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  warn: msg => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  error: msg => console.log(`${colors.red}🚨 ${msg}${colors.reset}`),
  critical: msg => console.log(`${colors.magenta}💀 ${msg}${colors.reset}`)
};

class SecurityChecker {
  constructor() {
    this.issues = {
      critical: [],
      high: [],
      medium: [],
      low: [],
      info: []
    };
  }

  addIssue(severity, category, description, recommendation = '') {
    this.issues[severity].push({
      category,
      description,
      recommendation,
      timestamp: new Date().toISOString()
    });
  }

  runCommand(command, suppressOutput = true) {
    try {
      const output = execSync(command, { 
        encoding: 'utf8', 
        stdio: suppressOutput ? 'pipe' : 'inherit' 
      });
      return { success: true, output };
    } catch (error) {
      return { 
        success: false, 
        error: error.message, 
        output: error.stdout || error.stderr 
      };
    }
  }

  async checkNpmAudit() {
    log.info('Running npm audit for vulnerability assessment...');
    
    const auditResult = this.runCommand('npm audit --json');
    
    if (!auditResult.success) {
      this.addIssue('medium', 'npm-audit', 'Failed to run npm audit', 
        'Ensure npm is properly installed and package.json exists');
      return;
    }

    try {
      const auditData = JSON.parse(auditResult.output);
      const vulnerabilities = auditData.vulnerabilities || {};
      
      Object.entries(vulnerabilities).forEach(([packageName, vulnData]) => {
        const severity = vulnData.severity;
        const title = vulnData.via?.[0]?.title || 'Unknown vulnerability';
        
        this.addIssue(
          severity === 'critical' ? 'critical' : 
          severity === 'high' ? 'high' : 
          severity === 'moderate' ? 'medium' : 'low',
          'vulnerability',
          `${packageName}: ${title}`,
          `Run 'npm audit fix' or update to a secure version`
        );
      });
      
      if (Object.keys(vulnerabilities).length === 0) {
        log.success('No known vulnerabilities found in dependencies');
      }
    } catch (parseError) {
      this.addIssue('medium', 'npm-audit', 'Failed to parse npm audit results');
    }
  }

  checkSensitiveFiles() {
    log.info('Checking for sensitive files and data exposure...');
    
    // Check for .env files in git
    const gitCheck = this.runCommand('git ls-files | grep -E "\.(env|key|pem)$"');
    if (gitCheck.success && gitCheck.output.trim()) {
      gitCheck.output.trim().split('\n').forEach(file => {
        this.addIssue('high', 'sensitive-files', 
          `Sensitive file tracked in git: ${file}`,
          'Add to .gitignore and remove from git history');
      });
    }
    
    // Check for hardcoded secrets in code
    const codeFiles = this.runCommand('find src -name "*.js" -o -name "*.ts" -o -name "*.json"');
    if (codeFiles.success) {
      codeFiles.output.trim().split('\n').forEach(file => {
        if (file && fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          SECURITY_CONFIG.sensitivePatterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
              this.addIssue('high', 'hardcoded-secrets',
                `Potential hardcoded secret in ${file}: ${matches[0].substring(0, 50)}...`,
                'Use environment variables for sensitive data');
            }
          });
        }
      });
    }
  }

  checkDependencyLicenses() {
    log.info('Checking dependency licenses...');
    
    const licensesResult = this.runCommand('npm list --json');
    if (licensesResult.success) {
      try {
        const packageData = JSON.parse(licensesResult.output);
        this.checkPackageLicenses(packageData.dependencies || {});
      } catch (error) {
        this.addIssue('low', 'license-check', 'Failed to analyze dependency licenses');
      }
    }
  }

  checkPackageLicenses(dependencies, depth = 0) {
    if (depth > 2) return; // Limit recursion depth
    
    Object.entries(dependencies).forEach(([name, info]) => {
      const license = info.license || info.licenses;
      if (license && !SECURITY_CONFIG.allowedLicenses.includes(license)) {
        this.addIssue('medium', 'license-compliance',
          `Package ${name} uses potentially problematic license: ${license}`,
          'Review license compatibility with your project');
      }
      
      if (info.dependencies) {
        this.checkPackageLicenses(info.dependencies, depth + 1);
      }
    });
  }

  checkSecurityHeaders() {
    log.info('Checking for security middleware implementation...');
    
    const appFiles = ['src/app.js', 'src/index.js', 'app.js', 'index.js'];
    let hasSecurityMiddleware = false;
    
    appFiles.forEach(file => {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('helmet') || content.includes('cors')) {
          hasSecurityMiddleware = true;
        }
      }
    });
    
    if (!hasSecurityMiddleware) {
      this.addIssue('medium', 'security-middleware',
        'No security middleware detected (helmet, cors)',
        'Implement security headers using helmet and proper CORS configuration');
    }
  }

  checkEnvironmentConfiguration() {
    log.info('Validating environment configuration...');
    
    // Check for .env.example
    if (!fs.existsSync('.env.example')) {
      this.addIssue('low', 'configuration',
        'Missing .env.example file',
        'Create .env.example to document required environment variables');
    }
    
    // Check for proper .gitignore
    if (fs.existsSync('.gitignore')) {
      const gitignore = fs.readFileSync('.gitignore', 'utf8');
      if (!gitignore.includes('.env')) {
        this.addIssue('high', 'configuration',
          '.env files not properly ignored in .gitignore',
          'Add .env* to .gitignore to prevent committing secrets');
      }
    } else {
      this.addIssue('medium', 'configuration',
        'Missing .gitignore file',
        'Create .gitignore to prevent committing sensitive files');
    }
  }

  generateReport() {
    console.log(`\n${colors.blue}🛡️  Security Assessment Report${colors.reset}`);
    console.log(`${colors.blue}================================${colors.reset}\n`);
    
    const totalIssues = Object.values(this.issues).reduce((sum, arr) => sum + arr.length, 0);
    
    if (totalIssues === 0) {
      log.success('🎉 No security issues detected! Your application follows security best practices.');
      return true;
    }
    
    // Print summary
    console.log(`${colors.yellow}📊 Summary:${colors.reset}`);
    Object.entries(this.issues).forEach(([severity, issueList]) => {
      if (issueList.length > 0) {
        const color = severity === 'critical' ? colors.magenta :
                     severity === 'high' ? colors.red :
                     severity === 'medium' ? colors.yellow :
                     colors.blue;
        console.log(`${color}   ${severity.toUpperCase()}: ${issueList.length} issue(s)${colors.reset}`);
      }
    });
    
    console.log();
    
    // Print detailed issues
    Object.entries(this.issues).forEach(([severity, issueList]) => {
      if (issueList.length > 0) {
        const icon = severity === 'critical' ? '💀' :
                    severity === 'high' ? '🚨' :
                    severity === 'medium' ? '⚠️' : 'ℹ️';
        
        console.log(`${icon} ${severity.toUpperCase()} ISSUES:`);
        issueList.forEach((issue, index) => {
          console.log(`   ${index + 1}. [${issue.category}] ${issue.description}`);
          if (issue.recommendation) {
            console.log(`      💡 ${issue.recommendation}`);
          }
        });
        console.log();
      }
    });
    
    // Print recommendations
    console.log(`${colors.blue}🔧 Recommended Actions:${colors.reset}`);
    console.log('1. Address critical and high severity issues immediately');
    console.log('2. Run "npm audit fix" to resolve known vulnerabilities');
    console.log('3. Review and update dependencies regularly');
    console.log('4. Implement proper environment variable management');
    console.log('5. Add security headers and middleware');
    console.log('6. Regular security scanning in CI/CD pipeline');
    
    return this.issues.critical.length === 0 && this.issues.high.length === 0;
  }

  async run() {
    console.log(`${colors.blue}🛡️  AI-Powered Security Check${colors.reset}`);
    console.log(`${colors.blue}==============================\n${colors.reset}`);
    
    await this.checkNpmAudit();
    this.checkSensitiveFiles();
    this.checkDependencyLicenses();
    this.checkSecurityHeaders();
    this.checkEnvironmentConfiguration();
    
    return this.generateReport();
  }
}

async function main() {
  const checker = new SecurityChecker();
  const passed = await checker.run();
  
  process.exit(passed ? 0 : 1);
}

if (require.main === module) {
  main().catch(error => {
    log.error(`Security check failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = SecurityChecker;