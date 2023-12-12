# Project Repository Summary

This ReadMe provides detailed information about the project repository, including its summary, requirements, installation steps, launch instructions, and generating reports using Cypress Cloud.

## Repository Structure

The project repository includes the following directories and files:

- `.github`: Configuration files for GitHub actions.
- `cypress`:
  - `downloads`: Cypress downloaded files.
  - `e2e`: End-to-end test scripts.
  - `fixtures`
  - `pages`: Cypress test page objects.
  - `support`: Custom Cypress commands and utilities.
- `.env.example`: Environment variables configuration.
- `.gitignore`: List of files and directories to be ignored by Git.
- `package.json`: Project-specific Node.js package configuration.
- `cypress.config.js`: Configuration file for Cypress.

## Requirements

To work with this project, ensure that you meet the following system requirements:

- Operating System: Windows 10 and above (64-bit only).
- Node.js: Version 18.x and Node.js 20.x and above.
- For running Cypress locally, any modern web development-capable machine is suitable.
- When running Cypress in a CI environment, ensure the following resources:
  - Minimum of 2 CPUs.
  - An additional CPU if video recording is enabled.
  - An additional CPU for each external process you run outside of Cypress, such as frontend and backend
  - Minimum 4GB of memory; consider using 8GB+ for longer test runs.

## Steps to Install

Follow these steps to install the project from the GitHub repository and connect all necessary dependencies using `npm install`:

1. Clone the project repository from GitHub:
   ```bash
   git clone https://github.com/magidevv/cypress_web.git
   ```

2. Change your working directory to the project folder:
   ```bash
   cd your-repo
   ```

3. Install project dependencies using npm:
   ```bash
   npm install
   ```

4. Set Environment Variables:
   - Create a copy of .env.example as .env.
   - Fill in the necessary environment variables required for the project.

## Steps to Launch

This project provides several scripts to run Cypress tests:

- **test:all**: Run Cypress tests in headless mode.
   ```bash
   npx run test:all
   ```

- **test:all:headed**: Run Cypress tests in headed (GUI) mode.
   ```bash
   npx run test:all:headed
   ```

- **test:login**: Run login tests using Cypress.
   ```bash
   npx run test:login
   ```

- **test:registration**: Run registration tests using Cypress.
   ```bash
   npx run test:registration
   ```

- **test:profile-settings**: Run profile settings tests using Cypress.
   ```bash
   npx run test:profile-settings
   ```

- **report:create**: Run tests in Cypress and record the results using the provided Cypress key for Cypress Cloud.
   ```bash
   npx run report:create
   ```

## Steps to Create a Report (Using Cypress Cloud)

To generate reports using Cypress Cloud, follow these steps:

1. Make sure you have a Cypress Cloud account and access to your project.

2. Update your `.env` file with the appropriate Cypress Cloud key.

3. Run the "report:create" script:
   ```bash
   npx run report:create
   ```

The report will be generated in Cypress Cloud, allowing you to view and analyze test results.