//Install express server
// const express = require('express');
// const serveStatic = require('serve-static');
// const path = require('path');

// const app = serve-static();

// Serve only the static files form the dist directory
// app.use(serveStatic(__dirname, {'index': ['index.html']}))
// app.use(express.static(__dirname + '/dist/<quickpay>'));



var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(path.join(__dirname, '/dist/quickpay/index.html')))
app.use(serveStatic(path.join(__dirname, '/src/index.html')))


app.get('/', function(req, res) {
  
  res.sendFile('index.html', { root: path.join(__dirname, './src') });
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);