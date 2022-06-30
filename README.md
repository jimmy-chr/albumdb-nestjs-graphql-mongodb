## Description

Album database using NestJS, GrapQL and MongoDB

Tutorials followed:

- https://javascript.plainenglish.io/graphql-backend-in-nodejs-made-easy-with-nestjs-1489be18b994
- https://javascript.plainenglish.io/graphql-nodejs-mongodb-made-easy-with-nestjs-and-mongoose-29f9c0ea7e1d

- Playground: http://localhost:3000/graphql

Next steps:

- Authentication - https://www.codemag.com/Article/1907081/Nest.js-Step-by-Step
- fix mongo-seed in docker file, it's not working now
- Setup integration with external API
- Link to React app

```
mutation{
  createAlbum(createAlbumInput:{
		title: "Under a funeral moon"
    artist: "Darkthrone"
    year: 1993
  }){
    _id
    title
    artist
    year
  }
}

query{
  albums{
    _id
    title
    artist
    year
  }
}

query{
  albums(listAlbumsInput:{limit:20,offset:0}){
    _id
    title
    artist
    year
  }
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ docker compose up -d
$ npm run start
$ docker exec -i mongodb mongoimport --db=album-db --collection albums /mongo-seed/albums.json

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

- resolver: which you can code queries (to retrieve data) and mutations (to manipulate data)
- service: where you should code your business logic
- module: to control imports, exports and providers
- dto: to manipulate data entry for your resolvers
- entity: to set what is your “user”, "album", ... that you want to use as a resource
- spec files: where you can add your unit testing

## Mongo commands

docker exec -i mongodb mongosh

db.getMongo().getDBNames()

docker exec -i mongodb mongosh use album-db show collections

docker exec -i mongodb mongoexport --db=album-db --collection albums --type=json --fields \_id,title,artist,year --out=/mongo-seed/albums.json

docker exec -i mongodb mongoimport --db=album-db --collection albums /mongo-seed/albums.json
