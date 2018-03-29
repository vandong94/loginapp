const express = require('express');
const route = require(PATH.ROUTE);

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(route);


module.exports = app;