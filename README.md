# typescript-project

Template for creating TypeScript projects with no configuration

This project is made with TypeScript v3.7, NodeJS v13 and NPM v6 but should work with newer versions too.

## Setup

Use this template by pressing the big green button saying "Use this template".

Once a repository has been made using the template, then clone it locally and open it with Visual Studio Code.

To use all the style checks and rules, install the development dependencies using `npm install`.

Make sure that you update the files to match your new project:

- `package.json` - name, description and urls
- `package-lock.json` - name (simply update the `package.json` file and run `npm install`)
- `README.md` - replace with new file

Make sure that the branches the release action triggers on are protected on GitHub. That way in order for any code to get into a release, the code will have to be pass the tests and be approved.

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

### Making releases

Releases are made automatically and version changes are determined by commit messages - this is why it is important to use `npm run commit` when making commits.

When new code is pushed to one of the release branches (`master`, `next`, `next-major`, `alpha`, `beta`) then the release action will be triggered and a new version will be made based on the commit messages.

If the release action determines that a new version should be made, then it will update the version inside the `package.json` and `package-lock.json` files and make a new release on GitHub.

This template can be configured to also publish modules with npm.

For more information about automated releases, [see the documentation for semantic-release](https://github.com/semantic-release/semantic-release).

## Final notes

Everything will (hopefully) *just work*.
