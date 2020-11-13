const lib = require('./src/js/flatten.js');

var json = '';

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    json += chunk;
  }
});
process.stdin.on('end', function () {
  console.log(JSON.stringify(lib.flattenJSON(JSON.parse(json)), null, 2));
});
