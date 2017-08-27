const R = require('ramda');

const FramesManager = require('./frames_manager.js');
const empty = function(){};


const SlideShow = new FramesManager();

const turn = function(color, ele){ ele.style.color = color }
const turnRed = R.curry(turn)('red');
const turnBlack = R.curry(turn)('black');
const addClass = function(cTA, ele){ ele.classList.add(cTA) }
const removeClass = function(cTR, ele){ ele.classList.remove(cTR) }
const hide = R.curry(addClass)('hidden');
const show = R.curry(removeClass)('hidden');
const invisiblize = function(ele){ ele.classList.add('invisible') }
const visiblize = function(ele){ ele.classList.remove('invisible') }
const dissolve = function(ele){ ele.classList.add('dissolved') }
const recompose = function(ele){ ele.classList.remove('dissolved') }
const focus = function(ele){ ele.classList.add('focused') }
const unfocus = function(ele){ ele.classList.remove('focused') }
const showNext = function(ele){ ele.querySelector('.hidden').classList.remove('hidden') }
const showNextSlide = function(ele){ 
  ele.querySelector('.focused + .focusable').classList.add('focused');
  ele.querySelector('.focused').classList.remove('focused');
  slideUp(ele);
}
const removeNextEll = function(ele){ ele.querySelector('.terminal_ellipsis').classList.remove('terminal_ellipsis') }
var i = 0
const resetI = function(){i = 0}
const slideRight = function(ele){ 
  ele.style.transform = `translate(-${500 * ++i}px)`;
  }
const slideUp = function(ele){ 
  ele.style.transform = `translate(0px, -${290 * ++i}px)`;
  }
const sb = function(func){ return func.bind.bind(func) }
const oneToArg = function(func) { return R.curryN(2, sb(func))(func); }

const el = document.querySelector.bind(document);
const elA = document.querySelectorAll.bind(document);
const makeRed       = R.compose(oneToArg(turnRed), el);
const makeBlack     = R.compose(oneToArg(turnBlack), el);
const makeHidden    = R.compose(oneToArg(hide), el);
const makeShown     = R.compose(oneToArg(show), el);
const makeNextShown = R.compose(oneToArg(showNext), el);
const hideNextEll   = R.compose(oneToArg(removeNextEll), el);
const makeInvisible = R.compose(oneToArg(invisiblize), el);
const makeVisible   = R.compose(oneToArg(visiblize), el);
const makeDissolved = R.compose(oneToArg(dissolve), el);
const makeComposed  = R.compose(oneToArg(recompose), el);
const makeFocused   = R.compose(oneToArg(focus), el);
const makeUnfocused = R.compose(oneToArg(unfocus), el);
const moveRight     = R.compose(oneToArg(slideRight), el);
const moveUp        = R.compose(oneToArg(slideUp), el);
const advanceSlide = R.compose(oneToArg(showNextSlide), el)

SlideShow.addFrame(
  [empty],
  [empty]
);

SlideShow.addFrame(
  [makeShown('#title_flash')],
  [makeHidden('#title_flash')]
);

const nextSlide =  SlideShow.addFrame.bind(SlideShow, [advanceSlide('.slides')], [empty] )


SlideShow.addFrame(
  [makeShown('.slides'),
  function(){ el('video').play() }
  ],
  [empty]
);

nextSlide(); // Noncog
nextSlide(); // Example
nextSlide(); // Straightforwrd
nextSlide(); // Extinct Species
nextSlide(); // Children
nextSlide(); // Double Normativity
nextSlide(); // Uncertainty
nextSlide(); // Unity

SlideShow.addFrame(
  [makeDissolved('.slides')],
  [makeComposed('.slides')]
);
nextSlide();

nextSlide(); // Representational
nextSlide(); // Presentational
nextSlide(); // Moral Concepts

SlideShow.addFrame(
  [makeDissolved('.slides')],
  [makeComposed('.slides')]
);
nextSlide();

nextSlide(); // Spandrel
nextSlide(); // Rationale
nextSlide(); // Exaption Proposal
nextSlide(); // Summary

SlideShow.addFrame(
  [makeShown('#thanks_flash'), makeShown("#back_flash")],
  [makeHidden('#thanks_flash')]
);

SlideShow.addFrame(
  [makeShown('#thanks_2_flash')],
  [makeHidden('#thanks_2_flash')]
);


module.exports = SlideShow;
