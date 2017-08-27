const R = require('ramda');
const SlideShow = require('./slide_show.js')

document.addEventListener('keypress', R.bind(SlideShow.nextFrame, SlideShow) );

nextTimes = [ 0, // Begin
              5000, // Play
              22000, // NonCog
              380000, // Example
              108000, // SMJ
              140000, // Not
              150000, // had
              175000, // Double
              200000, // Uncertainty
              226000, // Problem
              260000, // blank
              291500, // skip
              292000, // RTM 
              376000, // PTM
              426000, // Moral Concept
              549000, // Blank
              632500, // Scroll Down
              633000, // Spandrels
              662000, // Evo Rationale
              752000, // Exaptation
              840000, // Summary
              850000, // Thanks
              855000 // Thanks 2
            ]


for(time of nextTimes){
  setTimeout(SlideShow.nextFrame.bind(SlideShow), time)
}

for (i = 0; i < 0; i++) {
  SlideShow.nextFrame();
}
