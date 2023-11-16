(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.bg = function () {
    this.initialize(img.bg);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.blackfriday = function () {
    this.initialize(img.blackfriday);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.cta = function () {
    this.initialize(img.cta);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.floor = function () {
    this.initialize(img.floor);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.legal = function () {
    this.initialize(img.legal);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.logo1 = function () {
    this.initialize(img.logo1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.logo2 = function () {
    this.initialize(img.logo2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.txt1_off = function () {
    this.initialize(img.txt1_off);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.txt1_on = function () {
    this.initialize(img.txt1_on);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.txt2_off = function () {
    this.initialize(img.txt2_off);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100);

  (lib.txt2_on = function () {
    this.initialize(img.txt2_on);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 640, 100); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop, this.reversed)
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.txt2_on_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.txt2_on();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.txt2_on_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.txt2_off_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.txt2_off();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.txt2_off_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.txt1_on_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.txt1_on();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.txt1_on_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.txt1_off_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.txt1_off();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.txt1_off_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.logo2_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.logo2();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.logo2_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.logo1_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.logo1();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.logo1_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.legal_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.legal();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.floor_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.floor();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.floor_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.cta_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.cta();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.blackfriday_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.blackfriday();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.blackfriday_1, new cjs.Rectangle(0, 0, 320, 50), null);

  (lib.black_friday_deals = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // txt2_on
    this.instance = new lib.txt1_on_1();
    this.instance.setTransform(400, 130, 1, 1, 0, 0, 0, 150, 125);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(15)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 25, cjs.Ease.quadInOut)
        .wait(1)
    );

    // txt2_txt
    this.instance_1 = new lib.txt1_off_1('single', 0);
    this.instance_1.setTransform(400, 190, 1, 1, 0, 0, 0, 150, 125);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ y: 125 }, 7, cjs.Ease.get(1))
        .to({ y: 130, mode: 'synched' }, 3, cjs.Ease.get(-1))
        .wait(26)
    );

    // logo1
    this.instance_2 = new lib.logo1_1();
    this.instance_2.setTransform(400, 130, 1, 1, 0, 0, 0, 150, 125);
    this.instance_2.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).to({ alpha: 1 }, 15, cjs.Ease.get(1)).wait(26)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(250, 0, 320, 115);

  // stage content:
  (lib.TELUS_Mobility_Stim_Black_Friday_TOS_Consideration_IABs_320x50 = function (
    mode,
    startPosition,
    loop,
    reversed
  ) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // border
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#000000').ss(2, 2, 0, 3).p('A4/j5MAx/AAAIAAHzMgx/AAAg');
    this.shape.setTransform(160, 25);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

    // logo2
    this.instance = new lib.logo2_1();
    this.instance.setTransform(150, 105, 1, 1, 0, 0, 0, 150, 125);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(69)
        .to({ _off: false }, 0)
        .to({ y: 125, alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(131)
    );

    // blackfriday
    this.instance_1 = new lib.blackfriday_1();
    this.instance_1.setTransform(150, 105, 1, 1, 0, 0, 0, 150, 125);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(69)
        .to({ _off: false }, 0)
        .to({ y: 125, alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(131)
    );

    // cta
    this.instance_2 = new lib.cta_1();
    this.instance_2.setTransform(300, 125, 1, 1, 0, 0, 0, 150, 125);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(89)
        .to({ _off: false }, 0)
        .to({ x: 150 }, 10, cjs.Ease.get(1))
        .wait(111)
    );

    // txt3_on
    this.instance_3 = new lib.txt2_on_1();
    this.instance_3.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(99)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 20, cjs.Ease.quadInOut)
        .wait(5)
        .to({ alpha: 0 }, 20, cjs.Ease.quadInOut)
        .wait(20)
        .to({ alpha: 1 }, 20, cjs.Ease.quadInOut)
        .wait(5)
        .to({ alpha: 0 }, 20, cjs.Ease.quadInOut)
        .wait(1)
    );

    // txt3_off
    this.instance_4 = new lib.txt2_off_1();
    this.instance_4.setTransform(150, 45, 1, 1, 0, 0, 0, 150, 125);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(79)
        .to({ _off: false }, 0)
        .to({ y: 125 }, 10, cjs.Ease.get(1))
        .wait(121)
    );

    // legal
    this.instance_5 = new lib.legal_1();
    this.instance_5.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(89)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(111)
    );

    // floor
    this.instance_6 = new lib.floor_1();
    this.instance_6.setTransform(150, 165, 1, 1, 0, 0, 0, 150, 125);
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(69)
        .to({ _off: false }, 0)
        .to({ y: 125 }, 10, cjs.Ease.get(1))
        .wait(131)
    );

    // black_friday_deals
    this.instance_7 = new lib.black_friday_deals('synched', 0, false);
    this.instance_7.setTransform(151.7, 123.8, 0.9998, 1, 0, 0, 0, 399.8, 129.8);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(59)
        .to({ startPosition: 40 }, 0)
        .to({ y: 33.8 }, 10, cjs.Ease.quadInOut)
        .to({ _off: true }, 1)
        .wait(140)
    );

    // bg
    this.instance_8 = new lib.bg();
    this.instance_8.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(210));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(159, -65.9, 311, 174.9);
  // library properties:
  lib.properties = {
    id: '9C37CEF21CB344BE931725B6C6535938',
    width: 320,
    height: 50,
    fps: 30,
    color: '#FFFFFF',
    opacity: 1.0,
    manifest: [
      { src: 'assets/bg.jpg?1699563660376', id: 'bg' },
      { src: 'assets/blackfriday.png?1699563660376', id: 'blackfriday' },
      { src: 'assets/cta.png?1699563660376', id: 'cta' },
      { src: 'assets/floor.png?1699563660376', id: 'floor' },
      { src: 'assets/legal.png?1699563660376', id: 'legal' },
      { src: 'assets/logo1.png?1699563660376', id: 'logo1' },
      { src: 'assets/logo2.png?1699563660376', id: 'logo2' },
      { src: 'assets/txt1_off.png?1699563660376', id: 'txt1_off' },
      { src: 'assets/txt1_on.png?1699563660376', id: 'txt1_on' },
      { src: 'assets/txt2_off.png?1699563660376', id: 'txt2_off' },
      { src: 'assets/txt2_on.png?1699563660376', id: 'txt2_on' },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['9C37CEF21CB344BE931725B6C6535938'] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px';
        container.style.height = h * sRatio + 'px';
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
