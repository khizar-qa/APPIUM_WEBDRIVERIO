# APPIUM_WEBDRIVERIO
# WebdriverIO + Appium Automation Framework

## Overview
This project is an automation framework using WebdriverIO and Appium for both iOS and Android applications. It automates test cases for login, add to cart, validate the product in the cart, checkout, and logout using the Page Object Model (POM). The framework is integrated with Allure reports for better visualization of test results.

## Prerequisites
- Node.js (>=18.x)
- npm (>=6.x)
- Appium Server
- Sauce Labs
- iOS & Android Simulator/Emulator

## Project Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/webdriverio-appium-framework.git
    cd webdriverio-appium-framework
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set your Desired Capablities in `wdio.conf.js`:

## Running Tests
1. To run the tests, use the following command:
    ```bash
    npx wdio run wdio.conf.js
    ```

## Generating Allure Reports
1. To generate and open the Allure report, run the following custom npm script:
    ```bash
    npm run allure:report
    ```

2. Add the following script in your `package.json` if not already present:
    ```json
    {
      "scripts": {
        "allure:report": "if [ -d allure-results ]; then allure generate allure-results --clean && allure open; else echo 'allure-results directory not found. Run tests first.'; fi"
      }
    }
    ```

## Project Structure
```plaintext
./test
  ├── specs
  │   ├── e2e.js
  ├── pageobjects
  │   ├── login.page.js
  │   ├── addToCart.page.js
  │   ├── validateCart.page.js
  │   ├── checkout.page.js
  │   └── logout.page.js
