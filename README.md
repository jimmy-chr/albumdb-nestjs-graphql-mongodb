## Description

Album database using NestJS and GraphQL in the first version, I'll try to add MongoDB later on

Tutorials followed:
https://javascript.plainenglish.io/graphql-backend-in-nodejs-made-easy-with-nestjs-1489be18b994
https://javascript.plainenglish.io/graphql-nodejs-mongodb-made-easy-with-nestjs-and-mongoose-29f9c0ea7e1d

Playground: http://localhost:3000/graphql

Next steps:
Setup Album service
Setup MongoDB integration
Setup integration with external API
Link to React app

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Useful documentation

resolver: which you can code queries (to retrieve data) and mutations (to manipulate data)
service: where you should code your business logic
module: to control imports, exports and providers
dto: to manipulate data entry for your resolvers
entity: to set what is your “user”, "album", ... that you want to use as a resource
spec files: where you can add your unit testing
