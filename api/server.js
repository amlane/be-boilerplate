const express = require('express');
const helmet = require('helmet');

const usersRouter = require('../dummyusers/users-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.send('Hello')
});

module.exports = server;