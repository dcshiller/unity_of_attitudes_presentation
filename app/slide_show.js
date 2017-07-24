const R = require('ramda');
const Frame = require('./frame.js')

const FramesManager = require('./frames_manager.js');
log = R.bind(console.log, console)
const makeLog = R.partial.bind(null, log);


const SlideShow = new FramesManager();

const turn = function(color, ele){ ele.style.color = color }
const turnRed = R.partial(turn, ['red']);
const turnBlack = R.partial(turn, ['black']);
const hide = function(ele){ ele.classList.add('hidden') }
const show = function(ele){ ele.classList.remove('hidden') }
const el = document.querySelector.bind(document);
const elA = document.querySelectorAll.bind(document);
const makeRed = R.partial.bind(null, turnRed);
const makeBlack = R.partial.bind(null, turnBlack);
const makeHidden = R.partial.bind(null, hide);
const makeShown = R.partial.bind(null, show);

SlideShow.addFrame(
  new Frame(
    R.partial(log, "start"),
  )
)

SlideShow.addFrame(
  new Frame( R.compose( 
      makeLog('1'),
      makeRed([el('li.problem')]),
  ),
     makeBlack([el('li.problem')])
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog('2'),
      makeRed([el('li.solution')])
    ),
      makeBlack([el('li.solution')])
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog("3"),
      makeRed([el('li.evolutionary_story')])
    ),
    makeBlack([el('li.evolutionary_story')])
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog("4"),
      makeHidden([el('li.solution')]),
      makeHidden([el('li.evolutionary_story')]),
      makeHidden([el('#outline_tag')])
    )
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog("5"),
      makeShown([el('#what_is_noncognitivism')])
    )
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog("6"),
      makeShown([el('#noncog_example')])
    ),
    makeHidden([el('#noncog_example')])
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog("7"),
      makeShown([el('#menagerie')])
    )
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog("8"),
      makeShown([el('#attitudinal')])
    )
  )
);

SlideShow.addFrame(
  new Frame(
    R.compose(
      makeLog("9"),
      makeShown([el('#miscellaneous')])
    )
  )
);

module.exports = SlideShow;
