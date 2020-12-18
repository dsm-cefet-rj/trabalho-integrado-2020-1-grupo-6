const cors = require('cors')
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/src", { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, () => { 
    console.log('Connected to database'); 
});

const server = express();
server.use(express.json());
server.use(cors());
server.use(routes);

server.listen("3001");