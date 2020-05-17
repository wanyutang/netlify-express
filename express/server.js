'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const routerAuth = require('./routers/auth');

app.use(bodyParser.json());
app.use('/.netlify/functions', routerAuth);  // path must route to lambda
app.use('/api', routerAuth);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
