# typescript-project

Template for creating TypeScript projects with no configuration

This project is made with TypeScript v3.7, NodeJS v13 and NPM v6 but should work with newer versions too.

## Table of contents

- [typescript-project](#typescript-project)
  - [Table of contents](#table-of-contents)
  - [Setup](#setup)
    - [Creating repository using template](#creating-repository-using-template)
    - [Updating files](#updating-files)
    - [Branch protection (optional)](#branch-protection-optional)
    - [Setup as module (optional)](#setup-as-module-optional)
      - [Publish to NPM](#publish-to-npm)
      - [Publish to GitHub Packages](#publish-to-github-packages)
  - [Configuration](#configuration)
    - [Development environment](#development-environment)
    - [Publish to npm registry (optional)](#publish-to-npm-registry-optional)
  - [Usage](#usage)
    - [Writing code](#writing-code)
    - [Committing code](#committing-code)
    - [Making releases](#making-releases)
  - [Final notes](#final-notes)

## Setup

### Creating repository using template

Use this template by pressing the big green button saying "Use this template".

To use all the style checks and rules, install the development dependencies using `npm install`.

### Updating files

Make sure that you update the files to match your new project:

- `package.json` - name, description and urls
- `package-lock.json` - name (simply update the `package.json` file and run `npm install`)
- `README.md` - replace with new file

### Branch protection (optional)

Make sure that the branches the release action triggers on are protected on GitHub. That way in order for any code to get into a release, the code will have to be pass the tests and be approved.

### Setup as module (optional)

The template is set up as an application, but it can be configured to be a module which can be automatically published using semantic-release.

In the `package.json` file, remove the `private` property. This will make semantic-release publish new releases using npm.

You can publish to GitHub Packages, or to the npm registry.

#### Publish to NPM

To publish to npm you need to add an [npm access token](https://docs.npmjs.com/about-authentication-tokens). This token will be used to publish the package. Create a token and add it as a secret to the GitHub repository called `NPM_TOKEN`.

#### Publish to GitHub Packages

To publish to GitHub Packages you need to tell npm that you want to publish to the GitHub registry. This can be done in the `package.json`:

```json
{
    "publishConfig": {
        "registry": "https://npm.pkg.github.com/"
    }
}
```

When publishing to GitHub Packages you need to authenticate just like if you were using the npm registry. You can either create a personal access token on GitHub with the proper scopes and add that to the secrets with the name `NPM_TOKEN`, or you can use the access token that is generated on each workflow run. For more information about tokens see [here](https://help.github.com/en/packages/publishing-and-managing-packages/about-github-packages#about-tokens).

The easiest would be to use the token `GITHUB_TOKEN` that is created on each GitHub Actions workflow run. To do this, simply modify `.github/workflows/release.yml` by replacing

```yml
NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

with

```yml
NPM_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

When using GitHub Packages you need to use scoped package names. See [the documentation for publishing a package on GitHub](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#publishing-a-package).

## Configuration

This template works out of the box as an easy way to create a new TypeScript project, no configuration is required for basic usage.

### Development environment

If you have your own preferences, you can modify the configuration for the different dependencies.

Dependencies used:

- ESLint - validate code style using rules
- Prettier - automatically format code
- Commitizen - easily create commit messages to follow commit conventions
- Commitlint - validate commit messages
- Husky - git hooks
- lint-staged - run linters against staged git files

### Publish to npm registry (optional)

Semantic-release can be used to automatically publish to an npm registry. By default this template is set up as an application, and not a module, but can be configured into automatically publishing packages.

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
