//Install express server
// const express = require('express');
// const serveStatic = require('serve-static');
// const path = require('path');

// const app = serve-static();

// Serve only the static files form the dist directory
// app.use(serveStatic(__dirname, {'index': ['index.html']}))
// app.use(express.static(__dirname + '/dist/<quickpay>'));



const express = require('express');
const hhtp = require('http');
const path = require('path');
// const serveStatic = require('serve-static')

const app = express()

app.use(express.static(path.join(__dirname, '/dist/quickpay')));
// app.use(serveStatic(path.join(__dirname, '/src/index.html')))


app.get('*', (req, res) => {
  
  res.sendFile(path.join(__dirname, '/dist/quickpay/index.html'));
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);