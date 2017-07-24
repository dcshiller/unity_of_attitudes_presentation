const Frame = require('./frame.js');
const R = require('ramda');

const FramesManager = function(){
  this.index = 0;
  this.frames = [];
};

FramesManager.prototype.addFrame = function(frame){
  this.frames.push(frame);
}

FramesManager.prototype.nextFrame = function(frame){
  var func = this.frames[this.index]
  if (func) { func.exit(); }
  var func = this.frames[++this.index]
  if (func) { func.enter(); }
}

module.exports = FramesManager;
