const http = require('http');
const express = require('express');
const path = require('path');
const connectHistoryApiFallback = require('connect-history-api-fallback');

const app = express();

(function initWebpack() {
  app.use('/', connectHistoryApiFallback());
  app.use(express.static(path.resolve(__dirname, '../dist')));
}());

const server = http.createServer(app);
server.listen(process.env.PORT || 5000, () => {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});

