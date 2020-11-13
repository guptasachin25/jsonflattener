const _ = require('lodash');

/**
  Flatten a given JSON object
  Input: JSON Object
  Output: Flattened JSON Object

  Uses DFS based graph algorithm to flatten a given JSON. 
  checks if any value is itself is JSON object and flatten it recursively. 
  Otherwise no need to change key
*/
const flattenJSON = function (json) {
  // raise error for undefined or null object
  if (_.isUndefined(json) || _.isNil(json)) {
    throw new Error('Undefined or null input');
  }
  
  _.forEach(json, (value, key) => {
    if (_.isObject(value)) {
      const flattened = flattenJSON(value);
        delete json[key];

        _.forEach(flattened, (v, k) => {
          json[key + "." + k] = v;
        });
      }
  });
  return json;
}

module.exports = { flattenJSON };