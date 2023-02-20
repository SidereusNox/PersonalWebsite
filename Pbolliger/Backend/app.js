const express = require('express');
const router = require('./router');
const path = require('path');

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(bodyParser.json());
app.use('/', router);

module.exports = app;