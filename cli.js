const _ = require('lodash');
var readline = require('readline');

const lib = require('./src/js/flatten.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
  prompt: '>',
});

rl.on('line', function(line) {
  if (_.trim(line) === 'exit') {
    rl.close();
  }
  
  try {
    const jsonInput = JSON.parse(line);
    console.log(JSON.stringify(lib.flattenJSON(jsonInput), null, 2));
    console.log('\n\n');

  } catch (e) {
    console.log('expecting JSON Object', e.message);
  }
});
