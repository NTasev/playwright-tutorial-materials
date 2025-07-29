# Playwright Tutorial Materials

This repository contains practical examples and test cases created during my learning journey with [Playwright](https://playwright.dev/). The goal is to demonstrate basic to intermediate test automation concepts using UI interactions and good test structuring practices.

## 📚 What’s Inside

- ✅ Sample login tests
- 🌐 Browser automation with Playwright Test
- 🧪 Usage of locators, assertions, and roles
- 🔁 Page interactions using `async/await`
- 🧼 Test structure with `beforeEach`, `afterEach`, etc.
- 📂 Simple Page Object Model (POM) example

## 🛠️ Tech Stack

- [Playwright Test](https://playwright.dev/docs/test-intro)
- JavaScript / TypeScript
- Node.js

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npx playwright test
```

### Open the Playwright Test Report

```bash
npx playwright show-report
```

## 📁 Folder Structure

```
playwright-tutorial-materials/
├── tests/                # Test scripts
├── pages/                # Page Object Models (if applicable)
├── playwright.config.ts  # Playwright configuration
└── README.md
```

## 🧠 Learning Focus

This repository is a personal learning tool, covering:

- Writing basic and advanced UI tests
- Handling selectors and roles
- Structuring tests cleanly
- Using test annotations (`test.only`, `test.skip`, etc.)
- Capturing screenshots and HTML reports
