```
# mw-project Automation Framework

This framework integrates Playwright, Cucumber, TypeScript, and the Page Object Model (POM) to build a reliable and scalable automation solution. It supports Behavior-Driven Development (BDD) with the flexibility of Playwright for end-to-end testing. This framework is designed to run cross-browser tests, generate detailed reports, and provide an organized structure for maintaining large test suites.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Framework Structure and Usage](#framework-structure-and-usage)

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

3. Install playwright: 
   ```bash
   npx playwright install
   ```
3. To run the test: 
   ```bash
   npx cucumber-js
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

---

Happy testing!
```
