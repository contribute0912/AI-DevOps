#!/usr/bin/env node
// AI-Generated Lint Fix Automation Script
// Prompt: "Create automated script to fix common linting and formatting issues"

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

// Utility functions
const log = {
  info: msg => console.log(`${colors.blue}ℹ ${msg}${colors.reset}`),
  success: msg => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  warn: msg => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  error: msg => console.log(`${colors.red}❌ ${msg}${colors.reset}`)
};

function runCommand(command, description) {
  try {
    log.info(description);
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return { success: true, output };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout };
  }
}

function checkFileExists(filePath) {
  return fs.existsSync(path.join(process.cwd(), filePath));
}

function main() {
  console.log(`${colors.blue}🔧 AI-Powered Code Quality Fix Tool${colors.reset}`);
  console.log(`${colors.blue}===================================\n${colors.reset}`);

  // Check if we're in the right directory
  if (!checkFileExists('package.json')) {
    log.error('package.json not found. Please run this script from the project root.');
    process.exit(1);
  }

  // Check if eslint is available
  const eslintCheck = runCommand('npm list eslint --depth=0', 'Checking ESLint availability');
  if (!eslintCheck.success) {
    log.warn('ESLint not found in dependencies. Installing...');
    const installResult = runCommand('npm install --save-dev eslint', 'Installing ESLint');
    if (!installResult.success) {
      log.error('Failed to install ESLint');
      process.exit(1);
    }
  }

  // Check if prettier is available
  const prettierCheck = runCommand('npm list prettier --depth=0', 'Checking Prettier availability');
  if (!prettierCheck.success) {
    log.warn('Prettier not found in dependencies. Installing...');
    const installResult = runCommand('npm install --save-dev prettier', 'Installing Prettier');
    if (!installResult.success) {
      log.error('Failed to install Prettier');
      process.exit(1);
    }
  }

  console.log();
  
  // Step 1: Run ESLint with --fix
  log.info('Step 1: Running ESLint auto-fix...');
  const eslintResult = runCommand(
    'npx eslint . --ext .js,.jsx,.ts,.tsx --fix --quiet',
    'Fixing ESLint issues automatically'
  );
  
  if (eslintResult.success) {
    log.success('ESLint auto-fix completed');
  } else {
    log.warn('Some ESLint issues could not be auto-fixed');
    console.log(eslintResult.output);
  }

  // Step 2: Run Prettier
  log.info('\nStep 2: Running Prettier formatting...');
  const prettierResult = runCommand(
    'npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}" "tests/**/*.{js,jsx,ts,tsx}" "*.{js,json,md}"',
    'Formatting code with Prettier'
  );
  
  if (prettierResult.success) {
    log.success('Prettier formatting completed');
  } else {
    log.error('Prettier formatting failed');
    console.log(prettierResult.error);
  }

  // Step 3: Check for remaining ESLint issues
  log.info('\nStep 3: Checking for remaining ESLint issues...');
  const eslintCheckResult = runCommand(
    'npx eslint . --ext .js,.jsx,.ts,.tsx --quiet',
    'Running final ESLint check'
  );
  
  if (eslintCheckResult.success) {
    log.success('No ESLint issues found!');
  } else {
    log.warn('Some ESLint issues still remain:');
    console.log(eslintCheckResult.output);
  }

  // Step 4: Check Prettier formatting
  log.info('\nStep 4: Verifying Prettier formatting...');
  const prettierCheckResult = runCommand(
    'npx prettier --check "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}" "tests/**/*.{js,jsx,ts,tsx}" "*.{js,json,md}"',
    'Checking Prettier formatting'
  );
  
  if (prettierCheckResult.success) {
    log.success('All files are properly formatted!');
  } else {
    log.warn('Some files may still have formatting issues:');
    console.log(prettierCheckResult.output);
  }

  // Step 5: Run tests to ensure nothing broke
  if (checkFileExists('jest.config.js') || checkFileExists('jest.config.json')) {
    log.info('\nStep 5: Running tests to verify changes...');
    const testResult = runCommand('npm test', 'Running test suite');
    
    if (testResult.success) {
      log.success('All tests pass!');
    } else {
      log.error('Tests failed. Your changes may have introduced issues.');
      console.log(testResult.output);
    }
  }

  // Summary
  console.log(`\n${colors.blue}📊 Summary${colors.reset}`);
  console.log(`${colors.blue}==========${colors.reset}`);
  
  const summary = [
    { step: 'ESLint Auto-fix', status: eslintResult.success ? '✅' : '⚠️' },
    { step: 'Prettier Formatting', status: prettierResult.success ? '✅' : '❌' },
    { step: 'ESLint Verification', status: eslintCheckResult.success ? '✅' : '⚠️' },
    { step: 'Prettier Verification', status: prettierCheckResult.success ? '✅' : '⚠️' }
  ];
  
  summary.forEach(({ step, status }) => {
    console.log(`${status} ${step}`);
  });

  console.log();
  
  if (eslintResult.success && prettierResult.success && 
      eslintCheckResult.success && prettierCheckResult.success) {
    log.success('🎉 Code quality fix completed successfully!');
    console.log('\n💡 Your code is now properly formatted and follows the style guidelines.');
  } else {
    log.warn('⚠️  Some issues may require manual attention.');
    console.log('\n💡 Review the output above and fix any remaining issues manually.');
    console.log('💡 You can also run individual commands:');
    console.log('   • npm run lint:fix - Fix ESLint issues');
    console.log('   • npm run format - Format with Prettier');
  }

  console.log();
}

// Handle errors gracefully
process.on('uncaughtException', (error) => {
  log.error(`Uncaught Exception: ${error.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  log.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  process.exit(1);
});

if (require.main === module) {
  main();
}

module.exports = { runCommand, log };