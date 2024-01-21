const jsonServer = require('json-server');
const server = jsonServer.create();
const router =jsonServer.router('journal.json');
const middleware = jsonServer.defaults();

server.use(router);
server.use(middleware);
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', '*')
    next()
});
server.listen(3000, () => {
    console.log('Server has started');
})