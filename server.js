const jsonServer = require('json-server');

const server = jsonServer.create();

var json  = Object.assign({}, 'users.json', 'episodes.json', 'posts.json' );

const router = jsonServer.router(json);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);