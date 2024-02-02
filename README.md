# crouton-subtype


## Prerequisites

You will need the following tools installed.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)

## Installation

* `git clone git@github.com:0xadada/crouton-subtype.git` this repository
* `cd crouton-subtype`
* `npm install`

## Running / Development / Tests

* `npm run start`
* `npm run test`

* Visit the app at [http://localhost:4200](http://localhost:4200).

## Implementation

This app implements the `<FilesTable @files={{this.model}} />` reusable component for the display, selection, and download
of a list of files. It takes an `@files` argument, which is provided in the data for this project. To see its invocation
view `app/templates/index.hbs`.

I used Ember 5.4 LTS because it is best practice to use an LTS release as they recieve the longest upstream community
support.

Packages added:

* `ember-css-modules` ember-css-modules scopes and colocates css alongside components, routes, and templates.
* `system-font-i18n-css` a beautiful & minimalist cross-platform native font stack.
* `titleize` to title-case some strings in the data (per the mockup design).

## Future work

If this were a production app, and with more time, I would consider the following next-phases:

* consider more component use-cases and refactor into a contextual component with that yields `<:controls />`,
  `<:header />`, and `<:contents />` using
  [named blocks](https://api.emberjs.com/ember/release/modules/@glimmer%2Fcomponent#using-blocks).
* internationalize the component using `ember-intl`
* consider moving away from `<table />` markup to `<div />` using CSS grid to support a responsive layout
* add more grandular testing, including behaviors
* consider refactoring to use [ember-table](https://www.npmjs.com/package/ember-table) if rendering a large number of 
  files and enables sorting & pagination. Important if rendering performance is a concern.

