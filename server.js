var http = require('http');
var server = http.createServer(function(requete, respons) {
  respons.writeHead(200, {"Content-Type": "text/html"});
  respons.write(`<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title></title>
  </head>
  <body>
  <p>Salut tout le monde voici une phrase en <strong>HTML</strong></p>
  </body>
  </html>`);
  respons.end();
});
server.listen(8080);
