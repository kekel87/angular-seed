# <img src="https://avatars.githubusercontent.com/u/22544289" width="40" height="40" style="border-radius: 50%"/> Angular seed ![angular](https://raw.githubusercontent.com/kekel87/readme-images/master/angular.png)

![angular](https://raw.githubusercontent.com/kekel87/readme-images/master/angular.png)
![typescript](https://raw.githubusercontent.com/kekel87/readme-images/master/typescript.png)
![rxjs](https://raw.githubusercontent.com/kekel87/readme-images/master/rxjs.png)
![ngrx](https://raw.githubusercontent.com/kekel87/readme-images/master/ngrx.png)
![jest](https://raw.githubusercontent.com/kekel87/readme-images/master/jest.png)
![cypress](https://raw.githubusercontent.com/kekel87/readme-images/master/cypress.png)
![eslint](https://raw.githubusercontent.com/kekel87/readme-images/master/eslint.png)
![prettier](https://raw.githubusercontent.com/kekel87/readme-images/master/prettier.png)
![github-actions](https://raw.githubusercontent.com/kekel87/readme-images/master/github-actions.png)

Here is my project for new angular project, with selection and configuration of tools to ensure a good quality of code, like linter, formatter, unit tests or e2e tests.

> Indeed [@angular/cli](https://github.com/angular/angular-cli) doesn't impose linter or e2e test anymore.
>
> And doesn't seem to want to use var [jest](https://jestjs.io/fr/) for unit testing. 🤷

I include [@angular/material](https://material.angular.io/) with theming by CSS variables and [ngrx](https://ngrx.io/), because I use them in most of my projects.

## Commands

### Development server

```bash
npm start
```

### Linter and Formatter

```bash
npm run format
npm run lint
```

You can run only specific lint/formatter if you want:

```bash
# For TS and HTML template (AKA ng lint)
npm run format:ng
npm run lint:ng

# For SCSS, JS and JSON
npm run lint:prettier
npm run format:prettier

# For SCSS
npm run format:stylelint
npm run lint:stylelint
```

### Tests

```bash
npm run test
npm run e2e -- -c headless
```

### Build

```bash
npm run build
```

## Stack and Changes

- 🅰️ Core:
  - [@angular](https://angular.io/docs)
  - [@angular/cli](https://angular.io/cli)
    - root scss move to dedicated folder `src/scss` (`stylePreprocessorOptions`)
    - remove `.vscode` folder because it has to remain IDE agnostic
    - basics TS alias
  - [@angular/material](https://material.angular.io/)
    - [theming](https://material.angular.io/guide/theming) with CSS variables
    - dedicated variables file
    - **NO** global `MaterialModule` which import all the lib (tree-shaking ...) !
    - light/dark theme auto switch with `prefers-color-scheme` (no class)
  - [ngrx](https://ngrx.io/)
    - [store](https://www.npmjs.com/package/@ngrx/store)
    - [effects](https://www.npmjs.com/package/@ngrx/effects)
    - [router-store](https://www.npmjs.com/package/@ngrx/router-store) with config
    - [store-devtools](https://www.npmjs.com/package/@ngrx/store-devtools) with config
- 👮 Linter/Formatter
  - [@angular-eslint](https://www.npmjs.com/package/@angular-eslint/schematics) + [prettier](https://www.npmjs.com/package/eslint-config-prettier) for TS and HTML Template
    - eslint, @typescript-eslint, @angular-eslint recommended rules
    - [rxjs](https://www.npmjs.com/package/eslint-plugin-rxjs) plugin with recommended rules
    - [ngrx](https://ngrx.io/guide/eslint-plugin) plugin with recommended rules
    - [import](https://www.npmjs.com/package/eslint-plugin-import) with import/order to auto sort imports (TS alias support and three groups)
    - [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) to detect and auto-clear unused imports
    - [cypress](https://www.npmjs.com/package/eslint-plugin-cypress) plugin with recommended rules
  - [stylelint](https://www.npmjs.com/package/stylelint) + [prettier](https://www.npmjs.com/package/stylelint-config-prettier) for SCSS
    - [standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)
    - [rational-order](https://www.npmjs.com/package/@greenly/stylelint-config-rational-order) with empty-line-between-groups
  - [prettier](https://www.npmjs.com/package/prettier) for SCSS, JS and JSON
- ✔ Unit Test
  - [jest](https://www.npmjs.com/package/jest) with [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic)
    - all config put in `src/tests` folder
    - prepare `src/tests/mocks` to put tests mocks
    - setup coverage threshold to 100 because I am a crazy person
    - ~~[jest-createspyobj](https://www.npmjs.com/package/jest-createspyobj) for missing typed createspyobj~~ Need to find better typing
    - ~~[jest-marbles](https://www.npmjs.com/package/jest-marbles) for rxjs testing~~
    - [jasmine-marble](https://www.npmjs.com/package/jasmine-marbles) for rxjs testing (do not trust the name, is not related to jasmine (no dependence))
    - [ng-mocks](https://www.npmjs.com/package/ng-mocks) for greatly simplify component testing
- 🐵 E2E Test
  - [cypress](https://www.npmjs.com/package/@cypress/schematic)
  - disable `video` and `screenshotOnRunFailure`
  - I keep only the `npm run e2e` command (with configs)

## Basic GH Actions

CI/CD must guarantee the quality of the code without being burdensome for the developers (so it must be fast).

And it must deploy (here, in GH Pages) the application automatically.

| Job          | Description                                                |
| ------------ | ---------------------------------------------------------- |
| 🚧 Install   | Installation of dependencies and creation/update of cache. |
| 👮 Lint      | Syntax verification of the code                            |
| ✔ Unit tests | Units tests                                                |
| 🐵 E2E tests | E2E tests                                                  |
| 🛠️ Build     | Build Angular application in prod config                   |
| 🚀 Deploy    | Deployment on Github Pages                                 |
