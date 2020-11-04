const lib = require('../js/flatten.js');

const chai = require('chai');
const expect = chai.expect;

describe('JSON flattener', () => {
  it('flatten simple json', () => {
    const inputJSON = {
      "a": 1,
      "b": true,
    };

    expect(lib.flattenJSON(inputJSON)).to.deep.equal(inputJSON);
  });

  it('flatten single level json', () => {
    const inputJSON = {
      "a": 1,
      "b": true,
      "c": {
          "d": 3,
          "e": "test"
      }
    };

    const outputJSON = {
      "a": 1,
      "b": true,
      "c.d": 3,
      "c.e": "test",
    };

    expect(lib.flattenJSON(inputJSON)).to.deep.equal(outputJSON);
  });

  it('flatten empty json', () => {
    expect(lib.flattenJSON({})).to.deep.equal({});
  });

  it('Should return error on null JSON', () => {
    expect(lib.flattenJSON.bind(lib, undefined)).to.throw('Undefined or null input');
  });

  it('flatten multi level json', () => {
    const inputJSON = {
      "a": 1,
      "b": true,
      "c": {
          "d": 3,
          "e": "test",
          "f": {
            "g" : 10,
            "h" : "test",
          }
      }
    };

    const outputJSON = {
      "a": 1,
      "b": true,
      "c.d": 3,
      "c.e": "test",
      "c.f.g": 10,
      "c.f.h": "test"
    };

    expect(lib.flattenJSON(inputJSON)).to.deep.equal(outputJSON);
  });




});

