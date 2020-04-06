<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  
# IMPORTANT!!!! Tasks to make this work!
## 1. u need a ormconfig.json and put your database configs here 
if you are using docker make sure your docker uses the same port, pass etc. 
```bash
{
    "type": "postgres",
    "host": "localhost",
    "port": "5433",
    "username": "user",
    "password": "pass",
    "database": "nest",
    "entities": ["src/**/*.entity.ts"],
    "synchronize": true
}
```
## 2. in src/module/auth u need to place a file constants.ts
this secretKey has to be protected at all costs and needs to change to something more secure for production 

constants.ts
```bash
export const jwtConstants = {
    secret: 'mySecretKey',
  };
```

## 3. Using the server: 
### token ist set to expire after 60seconds!!! can eb changed in the auth.module.ts line 19
there is no data in the database, to use the /auth/login endpoint 
you have to first create a user at api/createuser

body
```bash
{
	"password":"secret",
	"email":"user@email.de",
	"name":"chris"
}
```
### !!!password is saved as plain text, needs to change for production !!!!

after creating a user you can use the /auth/login endpoint with 

body
```bash
{
	"username":"chris",
	"password":"secret"
}
```
you will receive an access toekn as response

```bash
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODUzMTk2NzUsImV4cCI6MTU4NTMxOTczNX0._uZ1fMim6gTs92IYIsyFJGMl64geQoMY4AJsssRIjow"
```

for endpoints requiring authorization you ned that access token as bearer token in the header
the only endpoint using jwt authentication right now is /api/getallusers
your fetch request should look something like this 
Postman and Insomnia have a special Auth tab to select "bearer" from 

```bash
      const token = "eyJhbGciOiJIUzI1NiIsInR5....."

      fetch("http://localhost:4000/api/getallusers", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
```

I hope this works for you :)





## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
