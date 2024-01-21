const jsonServer = require('json-server');
const server = jsonServer.create();
const router =jsonServer.router('journal.json');
const middleware = jsonServer.defaults();

server.use(router);
server.use(middleware);

server.listen(3000, () => {
    console.log('Server has started');
})