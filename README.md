# Miasma

A quick proof of concept using Cypress to run high-fidelity e2e tests against the staging environment:

![gif](https://cl.ly/50c89ea52895/Screen%252520Recording%2525202018-09-21%252520at%25252004.26%252520PM.gif)

## Usage

```bash
git clone git@github.com:artsy/miasma.git
cd miasma
yarn

# perform a headless test run
yarn cypress run --spec cypress/integration/homepage_spec.js

# open the test runner GUI
yarn cypress open
```
