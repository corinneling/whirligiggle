var express = require('express')
var http = require('http')
var path = require('path')

var app = express()
   
app.use('/', express.static('dist', {
  extensions: ['html', 'htm']
}));

app.listen(9000, () => {
  console.log(`Listening on localhost:9000`);
})
