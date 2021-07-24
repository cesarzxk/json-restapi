const jsonServer = require('json-server');

const server = jsonServer.create();

var json  = Object.assign({}, 'episodes.json', 'posts.json' );

const router = jsonServer.router('users.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);