# typescript-project

A template for creating TypeScript projects

This project is made with TypeScript v3.7, NodeJS v13 and NPM v6 but should work with newer versions too.

## Requirements

- TypeScript version 3.7
- NodeJS version 12
- NPM version 6

## Setup

Use this template by pressing the big green button saying "Use this template".

Once a repository has been made using the template, then clone it locally and open it with Visual Studio Code.

To use all the style checks and rules, install the development dependencies using `npm install`.

Make sure that you update the files to match your new project:

- `package.json` - name, description and urls
- `package-lock.json` - name (simply update the `package.json` file and run `npm install`)
- `README.md` - replace with new file

## Configuration

There is none, that's the whole point of using this as a template.

If you have your own preferences, you can modify the configuration for the different dependencies.

Dependencies used:

- ESLint - validate code style using rules
- Prettier - automatically format code
- Commitizen - easily create commit messages to follow commit conventions
- Commitlint - validate commit messages
- Husky - git hooks
- lint-staged - run linters against staged git files

## Usage

This template is designed to work with Visual Studio Code. In order to work properly you should install the following extentions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Writing code

When you are writing code you will be able to see warnings from ESLint and TypeScript if your style / code is bad. TypeScript files will be formatted on save using Prettier.

### Committing code

Create a commit by staging the files and then running the command `npm run commit`. All it does is provide you a command-line way of creating commit messages that will follow the convention.

You can also manually create a commit, just make sure that you are following the commit message convention.

When making a commit you can get a warning. This warning is a result of one of the husky hooks exiting with an error. To see the error, see the output / click on the "Open git log" button.

## Final notes

Everything will (hopefully) *just work*.
