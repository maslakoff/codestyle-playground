# codestyle-playground
Editor config + Prettier + ESLint playground

[Editorconfig](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.  
[Prettier](https://prettier.io/) - formatting tool integrating with most editors.  
[ESLint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

## Installation

* clone repository
* npm i

## Plugins

### WebStorm
* EditorConfig - **installed**
* Prettier - **installed**  
  *To run Prettier on save in WebStorm 2020.1 or above, open Preferences | Languages & Frameworks | JavaScript | Prettier and enable the option Run on save for files.*
* Eslint - **installed**  
  *go to Languages and Frameworks | JavaScript | Code Quality Tools | ESLint, and select the Automatic ESLint configuration option.*

### VSCode
* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## npm scripts

Use a command to manually call Prettier:
```
npm run pretiffy src/
```

To run an eslint check:
```
npm run lint:eslint src/
```

To fix eslint errors inside `src` folder:
```
npm run lint:eslint:fix
```
