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
  [makeRed('li.problem')],
  [makeBlack('li.problem')]
);

SlideShow.addFrame(
  [makeRed('li.solution')],
  [makeBlack('li.solution')]
);

SlideShow.addFrame(
  [makeRed('li.evolutionary_story')],
  [makeBlack('li.evolutionary_story')]
);

SlideShow.addFrame(
  [
    makeHidden('li.solution'),
    makeHidden('li.evolutionary_story'),
    makeHidden('#outline_tag')
  ],[empty]
);

SlideShow.addFrame(
  [
    makeShown('#what_is_noncognitivism')
  ], [empty]
);

SlideShow.addFrame(
  [
    makeShown('#noncog_example')
  ],[
    makeHidden('#noncog_example')
  ]
);

SlideShow.addFrame(
  [
    makeShown('#menagerie')
  ],
  [makeUnfocused('#logical')]
);

SlideShow.addFrame(
  [makeFocused('#attitudinal'), moveRight('#menagerie')],
  [makeUnfocused('#attitudinal')]
);

SlideShow.addFrame(
  [makeFocused('#miscellaneous'), moveRight('#menagerie')],
  [
    makeHidden('li.problem'),
    makeHidden('#menagerie'),
    makeHidden('#what_is_noncognitivism')
  ]
);

SlideShow.addFrame(
  [makeShown('#main_problem')],
  [makeHidden('#main_problem')]
)

SlideShow.addFrame(
  [
    makeShown('#main_problem'),
    makeShown('li.solution'),
    makeShown('#recipe_semantics')
  ],
  [empty]
);

SlideShow.addFrame(
  [
    makeShown('#recipe_def')
  ],
  [empty]
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
  [
    makeFocused('#moral_concepts'),
    moveRight('#properties')
  ],
  [makeUnfocused("#moral_concepts")]
);

SlideShow.addFrame(
  [
    makeHidden('#properties'), 
    makeShown('#moral_recipe'),
    makeShown('#moral_recipe_list')
  ],
  [empty]
);
SlideShow.addFrame(
  [
    makeShown('#spandrel'),
    makeHidden('#moral_recipe')
  ],
  [
    makeHidden('#spandrel')
  ]
);

SlideShow.addFrame(
  [
    resetI,
    makeShown('#spandrel_proposals'),
    makeHidden('#moral_recipe'),
    makeHidden('#moral_recipe_list'),
    makeHidden('#moral_recipe_list')
  ],
  [makeUnfocused('#nipple_example')]
);

SlideShow.addFrame(
  [
    makeFocused('#moral_attitude_example'),
    moveRight('#spandrel_proposals')
  ],
  [makeUnfocused('#moral_attitude_example')]
);

module.exports = SlideShow;
