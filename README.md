sil-identity
============

A single-page application used to provide single-sign-on and identity management for SIL software products.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Clone and execute:

```
npm install
```

## Test

Build and test:

```
npm run e2e
```

Test without build (because it was previously built):

```
npx jasmine
```

To execute a single test suite:

```
npx jasmine spec/features/indexSpec.js
```

The details of how behavioural testing is incorporated into a bootstrapped `create-react-app` project are documented [here](https://libertyseeds.ca/2019/10/11/A-non-intrusive-behavioural-testing-approach-to-bootstrapped-React-in-Typescript/).

## Development

Run dev server:

```
npm start
```
