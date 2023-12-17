# Project Repository Summary

This repository contains the source code and test suites for a web application testing project using WebdriverIO. Below, you will find information on the repository's structure, system requirements, installation steps, launching scripts, and instructions for generating and viewing reports.

## Repository Structure

The repository includes the following key directories and files:

- `.github`: Workflow for GitHub Actions.
- `tests`: Directory for organizing test files.
  - `data`: Directory for project data files.
  - `helper`: Directory for helper classes for testing.
  - `pageobjects`: Test page objects.
  - `specs`: Test spec files.
- `.env`: Environment variables configuration file.
- `.gitignore`: File specifying which files and directories to ignore in version control.
- `package.json`: Project's package file with dependencies and scripts.
- `wdio.conf.js`: Configuration file for wdio tests on both Chrome and Firefox browsers.
- `wdio.chrome.conf.js`: Configuration file for wdio tests on Chrome browser.
- `wdio.firefox.conf.js`: Configuration file for wdio tests on Firefox browser.

## Requirements

To run this project, you need to have the following software and system requirements installed:

- Node.js 16 or higher
- Install at least v16.x or higher as this is the oldest active LTS version
- Only releases that are or will become an LTS release are officially supported
- Windows 10 or a compatible operating system

## Installation

To install and set up this project from the GitHub repository, follow these steps:

1. Clone the repository to your local machine:
   ```shell
   git clone https://github.com/magidevv/wdio_web.git
   ```

2. Change to the project directory:
   ```shell
   cd your-repo
   ```

3. Install project dependencies using npm:
   ```shell
   npm install
   ```

## Launching Scripts

This project provides several scripts to run WDIO tests:

- To run all tests in the headed browser mode, use:
  ```shell
  npm run test:all
  ```

  - To run all tests in the headed with specific, for example, Firerox, browser mode, use:
  ```shell
  npm run test:all:firefox
  ```

- To run tests in headless mode use:
  ```shell
  npm run test:all:headless
  ```

- To run a specific test, for example, `signin.spec.js`, use:
  ```shell
  npm run test:signin
  ```

## Creating and Viewing Reports

To generate and view Allure test reports, use the following scripts:

- To create the report, run:
  ```shell
  npm run report:create
  ```

- To open the report in your default web browser, run:
  ```shell
  npm run report:open
  ```