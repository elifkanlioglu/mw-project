```
# mw-project Automation Framework

This framework integrates Playwright, Cucumber, TypeScript, and the Page Object Model (POM) to build a reliable and scalable automation solution. It supports Behavior-Driven Development (BDD) with the flexibility of Playwright for end-to-end testing. This framework is designed to run cross-browser tests, generate detailed reports, and provide an organized structure for maintaining large test suites.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Framework Structure and Usage](#framework-structure-and-usage)
- [Project and Git Workflow](#project-and-git-workflow)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v18 or higher)
- npm (v6 or higher, which comes with Node.js)
- Visual Studio Code
- Git
- Playwright
- Cucumber
- TypeScript

To install necessary libraries, open your terminal and run:

```bash
npm install @playwright/test @cucumber/cucumber allure-playwright @cucumber/pretty-formatter ts-node typescript
```

## Environment Setup

1. Clone the project repository from GitHub:
   ```bash
   git clone https://github.com/your-repo/mw-project.git
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

3. Open the project folder in Visual Studio Code:
   ```bash
   code .
   ```

4. Install recommended VS Code extensions for a better development experience:
   - **Better Comments**
   - **Cucumber (Gherkin) Full Support**
   - **Material Icon Theme**
   - **NPM**
   - **npm Intellisense**
   - **Playwright Snippets**

## Framework Structure and Usage

1. **The `features` Folder**
   - This folder contains `.feature` files written in Gherkin language, describing the BDD test scenarios.
   - Feature files are grouped by tags, allowing you to run specific tests by referring to the tag name.

2. **The `hooks.ts` File**
   - Manages global hooks for the test suite, such as browser and page setup, and teardown operations.

3. **The `pages` Folder**
   - This folder holds the Page Object Model (POM) files that encapsulate the web elements and interactions for each page.
   - `BasePage.ts` serves as the parent class for all page classes to ensure consistent actions across the project.

4. **The `step-definitions` Folder**
   - Contains the step definitions for the Gherkin features. Each `.ts` file maps directly to its associated feature file.

5. **The `cucumber.js` File**
   - This CommonJS file configures Cucumber for BDD-style test execution. It sets paths for features, step definitions, and formats the output in JSON and pretty formats for reports.

6. **The `playwright.config.ts` File**
   - Configures Playwright to run with specific settings, such as screenshots on failure, video retention on failure, and HTML report generation.

## Project and Git Workflow

1. **Create a New Repository**
   - Upload this project to GitHub and create a new repository.

2. **Create a `develop` Branch**
   - After cloning the repository, create a new branch for active development:
     ```bash
     git checkout -b develop
     ```

3. **Create Feature Branches**
   - For each feature or bug fix, create a new branch from the `develop` branch. Follow this naming convention: `feature/<tag>_description`. Example:
     ```bash
     git checkout -b feature/@login_user_login
     ```

4. **Sync with Remote Repository**
   - Periodically, ensure your local repository is updated:
     ```bash
     git fetch
     git pull
     ```

5. **Work on Features**
   - Implement and test your changes on the feature branch.

6. **Commit and Push Changes**
   - Once your work is complete and verified:
     ```bash
     git add .
     git commit -m "Implemented feature: User login with valid credentials"
     git push origin feature/@login_user_login
     ```

7. **Create a Pull Request**
   - Open a pull request from the feature branch to the `develop` branch on GitHub for code review.

8. **Repeat for New Features**
   - Follow the same process for each new feature or change until the project is complete.

---

Happy testing!
```
