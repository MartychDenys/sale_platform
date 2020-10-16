const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/home.routes'));

module.exports = app;
