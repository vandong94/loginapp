require('./global');
const http = require('http');
const app = require('./app');
const {connectDatabase} = require(PATH.DATABASE);
const {server} = require(PATH.CONFIG);

connectDatabase(err => {
    if (err) throw err;
    http
        .createServer(app)
        .listen(server.port, server.host, err => {
            if (err) throw err;
            console.info('Server is now listening on ' + server.host + ':' + server.port);
        });
})