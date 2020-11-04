const _ = require('lodash');

const flattenJSON = function (json) {
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