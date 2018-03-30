const express = require('express');
const route = require(PATH.ROUTE);
const cookieParse = require('cookie-parser');

const app = express();

app.use(cookieParse());

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(route);


module.exports = app;