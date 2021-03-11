# WTF

## Server

The server application is a node express application.

### Getting started


#### Docker

``` bash
$ ./runserver.sh
```

It builds a docker container from 'node:latest' image containing the app.
As default the server is running on `localhost:3000` with live reload support. Change whe `docker-compose.yml` in order to set a different port.

#### Local machine

``` bash
$ cd server
$ npm install
$ npm start
```

The server runs on `localhost:8000`, with live reload support.

##### Tests

| Command | Description |
|:------- |:----------- |
| `npm test` | Runs all tests and exits |
| `npm test:watch` | Runs tests in watch mode |
| `npm test:coverage` | Runs tests and produces a coverage report |

## Client

The client application is a React + Redux app with styled components.

### Getting started

#### Local machine

``` bash
$ cd client
$ npm install
$ npm start
```

The application runs on `localhost:9000`

## TODO

- Compose docker compose configuration files
