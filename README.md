# My personal portafolio

> This is my personal portafolio website designed to showcase my work, my
> projects and to share my experience as Junior Web Developer. This site is
> built using HTML, CSS, and JavaScript.

## Table of contents

- [My personal portafolio](#my-personal-portafolio)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Sample](#sample)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Contact](#contact)
  - [Instructions for use](#instructions-for-use)
  - [Code Quality Checks](#code-quality-checks)
  - [Continuous Integration (CI)](#continuous-integration-ci)
  - [Repo Setup](#repo-setup)

## General info

> This personal portafolio is responsive animated website containing a brief
> biography, some personal information, studies timeline and work samples.

## Sample

https://github.com/cristobal-lopez/my-portafolio/assets/97364283/f4c5418f-4908-4422-8013-2c47aef22b25

## Technologies

- VS code
- JavaScript
- CSS
- HTML
- Netlify

## Setup

- `npm run start`

## Code Examples

```HTML
   <div class="interest-item">
   <p>Play the piano</p>
   <img src="./public/piano.png" alt="piano" />
   </div>
```

```CSS
.title h1 {
  animation: waviy 5s infinite;
}
```

```JS
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
},
```

## Features

List of features ready and Todos for future development

- A contact form section

To-do list:

- A HTML form with JavaScript functionalities

## Status

Project is: _Completed_

## Contact

By [Cristobal Lopez](https://github.com/cristobal-lopez/)

## Instructions for use

<details>
  <summary>Getting Started</summary>

<!-- a guide to using this repository -->

1. `git clone git@github.com:HackYourFutureBelgium/template-markdown.git`
2. `cd template-markdown`
3. `npm install`

## Code Quality Checks

- `npm run format`: Makes sure all the code in this repository is well-formatted
  (looks good).
- `npm run lint:ls`: Checks to make sure all folder and file names match the
  repository conventions.
- `npm run lint:md`: Will lint all of the Markdown files in this repository.
- `npm run lint:css`: Will lint all of the CSS files in this repository.
- `npm run validate:html`: Validates all HTML files in your project.
- `npm run spell-check`: Goes through all the files in this repository looking
  for words it doesn't recognize. Just because it says something is a mistake
  doesn't mean it is! It doesn't know every word in the world. You can add new
  correct words to the [./.cspell.json](./.cspell.json) file so they won't cause
  an error.
- `npm run accessibility -- ./path/to/file.html`: Runs an accessibility analysis
  on all HTML files in the given path and writes the report to
  `/accessibility_report`

## Continuous Integration (CI)

When you open a PR to `main`/`master` in your repository, GitHub will
automatically do a linting check on the code in this repository, you can see
this in the[./.github/workflows/lint.yml](./.github/workflows/lint.yml) file.

If the linting fails, you will not be able to merge the PR. You can double check
that your code will pass before pushing by running the code quality scripts
locally.

## Repo Setup

- Give each member **_write_** access to the repo (if it's a group project)
- Turn on GitHub Pages and put a link to your website in the repo's description
- Turn on GitHub Actions
- In _General_ Section > check **Discussions**
- In the _Branches_ section of your repo's settings make sure the
  `master`/`main` branch must:
  - "_Require a pull request before merging_"
  - "_Require approvals_"
  - "_Dismiss stale pull request approvals when new commits are pushed_"
  - "_Require status checks to pass before merging_"
  - "_Require branches to be up to date before merging_"
  - "_Do not allow bypassing the above settings_"

</details>
