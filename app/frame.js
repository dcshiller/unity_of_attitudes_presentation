const R = require('ramda');
const empty = function(){};

const Frame = function(onFunc, offFunc){
  this.enter = onFunc || empty;
  this.exit = offFunc || empty;
};

module.exports = Frame;
