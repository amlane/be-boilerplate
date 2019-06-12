const server = require('./api/server.js');

const port = 4200;

server.listen(port, function() {
    console.log(`\n *** Service is running on localhost:${port} *** \n`)
})