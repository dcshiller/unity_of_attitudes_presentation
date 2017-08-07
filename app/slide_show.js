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
const focus = function(ele){ ele.classList.add('focused') }
const unfocus = function(ele){ ele.classList.remove('focused') }
const showNext = function(ele){ ele.querySelector('.hidden').classList.remove('hidden') }
const removeNextEll = function(ele){ ele.querySelector('.terminal_ellipsis').classList.remove('terminal_ellipsis') }
var i = 0
const resetI = function(){i = 0}
const slideRight = function(ele){ 
  ele.style.transform = `translate(-${500 * ++i}px)`;
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
const makeFocused   = R.compose(oneToArg(focus), el);
const makeUnfocused = R.compose(oneToArg(unfocus), el);
const moveRight     = R.compose(oneToArg(slideRight), el);

SlideShow.addFrame(
  [empty],
  [empty]
);

SlideShow.addFrame(
  [makeShown('#title_flash')],
  [makeHidden('#title_flash')]
);

SlideShow.addFrame(
  [makeShown('#problem_flash')],
  [makeHidden('#problem_flash')]
);

SlideShow.addFrame(
  [makeShown('#main_problem')],
  [makeHidden('#main_problem')]
);

SlideShow.addFrame(
  [makeShown('#noncognitivism')],
  [makeHidden('#noncognitivism')]
);

SlideShow.addFrame(
  [makeShown('#attitudes')],
  [empty]
);

SlideShow.addFrame(
  [
    makeShown('#menagerie')
  ],
  [makeUnfocused('#logical')]
);

SlideShow.addFrame(
  [makeFocused('#miscellaneous'), moveRight('#menagerie')],
  [makeUnfocused('#miscellaneous')]
);

SlideShow.addFrame(
  [makeFocused('#attitudinal'), moveRight('#menagerie')],
  [makeHidden('#attitudes'), makeHidden("#menagerie")]
);

SlideShow.addFrame(
  [makeShown('#solution_flash')],
  [makeHidden('#solution_flash')]
);

SlideShow.addFrame(
  [makeShown("#ptm")],[empty]
);

SlideShow.addFrame(
  [
    resetI,
    makeShown('#properties')
  ],
  [makeUnfocused('#semantic')]
);

SlideShow.addFrame(
  [
    makeFocused('#orthographic'),
    moveRight('#properties')
  ],
  [
    makeUnfocused('#orthographic')
  ]
);
SlideShow.addFrame(
  [
    makeFocused('#sentences'),
    moveRight('#properties')
  ],
  [empty]
);

SlideShow.addFrame(
  [
    makeHidden('#sentences_plain'),
    makeShown('#sentences_underlined')
  ],
  [makeUnfocused("#sentences")]
);

SlideShow.addFrame(
  [makeFocused('#jabberwocky'), moveRight('#properties')],
  [makeUnfocused("#jabberwocky"), makeHidden("#properties")]
);

SlideShow.addFrame(
  [resetI, makeHidden('#ptm'), makeShown("#recipe_semantics")],
  [empty]
);

SlideShow.addFrame(
  [makeShown('#moral_recipe_semantics')],
  [makeUnfocused("#moral_concepts")]
);

SlideShow.addFrame(
  [makeFocused('#spandrels'), moveRight("#moral_recipe_semantics")],
  [makeUnfocused("#spandrels")]
);

SlideShow.addFrame(
  [makeFocused('#moral_wishes'), moveRight("#moral_recipe_semantics")],
  [empty]
);

SlideShow.addFrame(
  [makeNextShown('#moral_wishes'), hideNextEll("#moral_wishes")],
  [empty]
);

SlideShow.addFrame(
  [makeNextShown('#moral_wishes'), hideNextEll("#moral_wishes")],
  [makeHidden("#moral_recipe_semantics"), makeHidden('#recipe_semantics')]
);

SlideShow.addFrame(
  [makeShown('#evolution_flash')],
  [makeHidden('#evolution_flash')]
);

SlideShow.addFrame(
  [makeShown('#evolution'), resetI],
  [empty]
);

SlideShow.addFrame(
  [makeShown('#exaptation')],
  [makeUnfocused('#attitudes_sentiments')]
);

SlideShow.addFrame(
  [makeFocused('#recency'), moveRight('#exaptation')],
  [makeUnfocused('#recency')]
);

SlideShow.addFrame(
  [makeFocused('#exaptation_proposal'), moveRight('#exaptation')],
  [makeUnfocused('#exaptation_proposal')]
);

SlideShow.addFrame(
  [makeFocused('#biproducts'), moveRight('#exaptation')],
  [empty]
);

SlideShow.addFrame(
  [makeNextShown('#biproducts')],
  [empty]
);

SlideShow.addFrame(
  [makeNextShown('#biproducts'), hideNextEll("#biproducts")],
  [empty]
);


module.exports = SlideShow;
