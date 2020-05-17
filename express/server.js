'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const demo = require('./routes/demo');
const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.get('/login', (req, res) => res.json({ user: "demo" ,pwdcode: "1qaz2wsx" }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());

app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/.netlify/functions/server/demo', demo); 


app.use(process.env.publicPath+'/server', router);  // path must route to lambda
app.use(process.env.publicPath+'/server/demo', demo); 

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
