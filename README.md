## Dependencies

- Playwright v1.33.0
- Node v19.8.1
- npm v9.6.5
- VSCode 1.77.3 (Universal)
- Applitools v1.17.0

> Pre requirements: 
- [Node setup](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [VS Code setup](https://code.visualstudio.com/learn/get-started/basics)
- [iTerm setup](https://iterm2.com/documentation-one-page.html)

## Fork and clone the project

1. Copy the project URL `https://github.com/raptatinha/tau-introduction-to-playwright.git`;
1. Fork the project following the [GitHub instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo) - (use the parameter --clone=true);
1. Access the forked project `cd tau-introduction-to-playwright`

## Install the project

On your terminal, type:

1. `npm i`

IMPORTANT: to run the tests from `main`, you'll need to setup your [.env](.env) following the [.env.example](.env.example), otherwise many tests will fail - this setup is explained in the Chapter 4 video. The recommendation is to access each branch (`git checkout [branchname]`) and run the tests from the branch.


## Example of running tests with trace:
npx playwright test tests/wp-outages.spec.ts --project=chromium --headed --retries=0 --trace on

Run in UI mode: `npx playwright test --ui`