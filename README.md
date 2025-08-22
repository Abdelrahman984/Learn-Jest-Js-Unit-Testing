# Learn-Jest-Js-Unit-Testing

This repository provides a simple project for learning how to write unit tests in JavaScript using [Jest](https://jestjs.io/).

## Project Structure

```
.
├── .babelrc
├── all.js
├── input.js
├── mock.js
├── package.json
├── package-lock.json
├── say.js
├── sum.js
├── __tests__/
├── node_modules/
└── reports/
```

- **all.js, input.js, mock.js, say.js, sum.js**: JavaScript source files to be tested.
- **__tests__/**: Directory for Jest test files.
- **reports/**: Directory for test reports (if configured).
- **package.json**: Project metadata and dependencies.
- **.babelrc**: Babel configuration file for transpiling modern JS.

## Getting Started

1. **Install dependencies**  
   Run the following command in the project directory:
   ```bash
   npm install
   ```

2. **Run tests**  
   Execute all Jest tests using:
   ```bash
   npm test
   ```

3. **View Reports**  
   Test reports, if generated, will be available in the `reports/` directory.

## Scripts

Available scripts include:
- `test`: Runs all Jest tests.
- Other scripts can be found in `package.json`.

## Requirements

- Node.js (as required by Jest and dependencies)
- npm

## Learning Objectives

- Understand the basics of unit testing in JavaScript.
- Learn to write and organize Jest test cases.
- Explore mocking and code coverage with Jest.

---

Happy testing!
