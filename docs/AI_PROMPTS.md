# AI-Powered DevOps Prompts Library

## Overview
This document contains curated AI prompts for GitHub Copilot to accelerate DevOps tasks and maintain consistency across the project.

## 🤖 GitHub Actions Prompts

### Basic CI Pipeline
```
Create a GitHub Actions workflow that runs Node.js unit tests on push and performs CodeQL security scan on pull requests
```

### Deployment Pipeline
```
Generate deployment pipeline with staging and production environments, including rollback capabilities
```

### Security Scanning
```
Create security scanning workflow with dependency vulnerability checks and secret detection
```

### Release Automation
```
Create automated release workflow with semantic versioning and changelog generation
```

### Multi-Environment Deployment
```
Generate GitHub Actions workflow for deploying to development, staging, and production with manual approval gates
```

## 🧪 Testing Prompts

### Unit Test Generation
```
Generate comprehensive Jest unit tests for Express route that handles user authentication with edge cases
```

### Integration Tests
```
Create integration tests for REST API endpoints with database mocking and error scenarios
```

### E2E Test Setup
```
Generate end-to-end test suite using Playwright for user login and dashboard functionality
```

### Performance Tests
```
Create load testing script using Artillery for API performance testing with multiple scenarios
```

## 🐳 Docker & Containerization

### Optimized Dockerfile
```
Create multi-stage Dockerfile for Node.js application with security best practices and minimal image size
```

### Docker Compose Setup
```
Generate docker-compose.yml for development environment with Node.js app, PostgreSQL, and Redis
```

### Kubernetes Deployment
```
Create Kubernetes deployment manifests for Node.js microservice with health checks and resource limits
```

## 🔒 Security Prompts

### Security Middleware
```
Generate Express.js security middleware with helmet, rate limiting, and input validation
```

### Environment Variable Security
```
Create secure environment variable handling with validation and default fallbacks
```

### API Security
```
Generate JWT authentication middleware with refresh token handling and security best practices
```

## 📊 Monitoring & Logging

### Application Logging
```
Create structured logging setup with Winston for Node.js application with different log levels and formats
```

### Health Check Endpoint
```
Generate comprehensive health check endpoint that validates database, external services, and system resources
```

### Metrics Collection
```
Create Prometheus metrics collection for Express.js application with custom business metrics
```

## 🔧 Configuration Management

### ESLint Configuration
```
Generate ESLint configuration for Node.js project with security rules, best practices, and team coding standards
```

### Prettier Setup
```
Create Prettier configuration with team formatting standards and VS Code integration
```

### Jest Configuration
```
Generate Jest configuration with coverage thresholds, test environment setup, and custom matchers
```

## 🌐 API Development

### REST API Structure
```
Generate RESTful API structure with Express.js including routes, middleware, error handling, and validation
```

### API Documentation
```
Create OpenAPI/Swagger documentation for REST API with examples and validation schemas
```

### GraphQL Setup
```
Generate GraphQL server setup with Apollo Server, type definitions, and resolvers
```

## 🗄️ Database Operations

### Database Migration
```
Create database migration scripts for PostgreSQL with rollback capabilities and seed data
```

### ORM Setup
```
Generate Sequelize/Prisma setup with models, relationships, and query optimization
```

### Database Testing
```
Create database testing setup with test fixtures, transactions, and cleanup procedures
```

## 📝 Documentation Prompts

### README Generation
```
Generate comprehensive README.md with installation, usage, API documentation, and contribution guidelines
```

### API Documentation
```
Create detailed API documentation with examples, error codes, and authentication requirements
```

### Troubleshooting Guide
```
Generate troubleshooting guide for common issues with solutions and debugging steps
```

## 🚀 Performance Optimization

### Caching Strategy
```
Generate Redis caching implementation for Express.js with cache invalidation and TTL management
```

### Database Optimization
```
Create database query optimization with indexing strategies and performance monitoring
```

### Bundle Optimization
```
Generate webpack configuration for optimal bundle size with code splitting and tree shaking
```

## 🔄 CI/CD Optimization

### Pipeline Parallelization
```
Optimize GitHub Actions workflow with parallel job execution and dependency management
```

### Cache Optimization
```
Implement intelligent caching strategy for npm dependencies and build artifacts in CI/CD
```

### Environment Promotion
```
Create environment promotion pipeline with automated testing and approval workflows
```

## 💡 Best Practice Tips

### Effective Prompting
1. **Be Specific**: Include technology stack, requirements, and constraints
2. **Add Context**: Mention existing code patterns and project conventions
3. **Request Examples**: Ask for both implementation and test examples
4. **Specify Standards**: Include security, performance, and code quality requirements

### Example of a Well-Structured Prompt:
```
Generate a GitHub Actions workflow for a Node.js Express application that:
- Runs on Ubuntu latest
- Tests against Node.js versions 16, 18, and 20
- Includes ESLint, Prettier, and Jest with coverage
- Performs security scanning with CodeQL
- Uploads coverage to Codecov
- Only runs on pull requests to main branch
- Includes proper error handling and notifications
```

### Iterative Refinement:
1. Start with basic prompt
2. Add specific requirements
3. Request modifications for edge cases
4. Ask for documentation and comments
5. Request error handling improvements

## 🎯 Context-Aware Prompts

### For New Features:
```
I'm adding a new user management feature to our Express.js app. Generate the route handlers, validation middleware, unit tests, and integration tests following our existing patterns in src/routes/auth.js
```

### For Bug Fixes:
```
There's a memory leak in our Express server during high load. Generate monitoring middleware and diagnostic tools to identify and fix performance issues
```

### For Refactoring:
```
Refactor the authentication middleware in src/middleware/auth.js to use async/await pattern and add proper error handling with existing error response format
```

---

**💡 Pro Tip**: Always review AI-generated code for security vulnerabilities, performance implications, and alignment with project standards before implementation.