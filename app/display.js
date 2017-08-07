const R = require('ramda');
const SlideShow = require('./slide_show.js')

document.addEventListener('DOMContentLoaded',
  function(){
    var video = document.querySelector("#video_element"); navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia; if (navigator.getUserMedia) { navigator.getUserMedia({video: true}, handleVideo, videoError); } function handleVideo(stream) { video.src = window.URL.createObjectURL(stream); } function videoError(e) { }
  }
)

document.addEventListener('keypress', R.bind(SlideShow.nextFrame, SlideShow) );

for (i = 0; i < 0; i++) {
  SlideShow.nextFrame();
}
