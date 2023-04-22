const jsonServer = require('json-server');

const server = jsonServer.create();


const users = require('./data/users.json')
const episodes = require('./data/episodes.json')
const fiftycents = require('./data/fiftycents.json')


const data = {...users, ...episodes, ...fiftycents}

const json = jsonServer.router(data)

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(json);

server.listen(port);