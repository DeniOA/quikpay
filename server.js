//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<quickpay>'));

app.get('/*', function(req,res) {

  
  var serveStatic = require('serve-static');
  app.use(serveStatic(__dirname, {'index': ['index.html']}))
  
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);