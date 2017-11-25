# Kokoru

[![Build Status](https://travis-ci.org/sumuttekno/kokoru.svg?branch=master)](https://travis-ci.org/sumuttekno/kokoru)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/sumuttekno/kokoru/blob/master/LICENSE)


Kokoru is a web apps to be used as part of dota 2 information provider.

# Technology Stack

mongodb as database

react + redux as frontend framework

node js + graphql as backend engine

karma as test runer

Note: React file is compiled in one file using webpack

# Run Instruction

Using docker 

```bash
yarn provision
visit localhost:3000
```

Not using docker

```bash
yarn setup
yarn build
yarn start:watch
visit localhost:3000
```

# Run Test

```bash
yarn setup:test
yarn test
```