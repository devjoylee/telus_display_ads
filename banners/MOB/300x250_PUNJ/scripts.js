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
  p.nominalBounds = new cjs.Rectangle(0, 0, 300, 250);

  (lib.bg_txt1 = function () {
    this.initialize(img.bg_txt1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.blackfriday = function () {
    this.initialize(img.blackfriday);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.cta = function () {
    this.initialize(img.cta);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.floor = function () {
    this.initialize(img.floor);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.logo1 = function () {
    this.initialize(img.logo1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.logo2 = function () {
    this.initialize(img.logo2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.product = function () {
    this.initialize(img.product);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.txt1_bd = function () {
    this.initialize(img.txt1_bd);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.txt1 = function () {
    this.initialize(img.txt1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 900, 750);

  (lib.txt1_on = function () {
    this.initialize(img.txt1_on);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.txt2_off = function () {
    this.initialize(img.txt2_off);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.txt2_on = function () {
    this.initialize(img.txt2_on);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.txt3_off = function () {
    this.initialize(img.txt3_off);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500);

  (lib.txt3_on = function () {
    this.initialize(img.txt3_on);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 600, 500); // helper functions:

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

  (lib.txt3_on_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.txt3_on();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.txt3_on_1, new cjs.Rectangle(0, 0, 300, 250), null);

  (lib.txt3_off_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.txt3_off();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.txt3_off_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
  }).prototype = getMCSymbolPrototype(lib.txt2_on_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
  }).prototype = getMCSymbolPrototype(lib.txt2_off_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
  }).prototype = getMCSymbolPrototype(lib.txt1_on_1, new cjs.Rectangle(0, 0, 300, 250), null);

  (lib.txt1_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.txt1();
    this.instance.setTransform(0, 0, 0.33, 0.33);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.txt1_1, new cjs.Rectangle(0, 0, 300, 250), null);

  (lib.txt1_border = function (mode, startPosition, loop, reversed) {
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

    // Layer_8 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_19 = new cjs.Graphics().p('AETEEIAAiWICWAAIAACWg');
    var mask_graphics_20 = new cjs.Graphics().p('AEDEEIAAiWIC2AAIAACWg');
    var mask_graphics_21 = new cjs.Graphics().p('ADVEEIAAiWIESAAIAACWg');
    var mask_graphics_22 = new cjs.Graphics().p('ACOEEIAAiWIGgAAIAACWg');
    var mask_graphics_23 = new cjs.Graphics().p('ABgEEIAAiWIH8AAIAACWg');
    var mask_graphics_24 = new cjs.Graphics().p('ABQEEIAAiWIIcAAIAACWg');

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(19)
        .to({ graphics: mask_graphics_19, x: 42.508, y: 26.0027 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 44.0672, y: 26.0027 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 48.7447, y: 26.0027 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 55.761, y: 26.0027 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 60.4386, y: 26.0027 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 61.9978, y: 26.0027 })
        .wait(1)
    );

    // txt1_border4
    this.instance = new lib.txt1_bd();
    this.instance.setTransform(0, 0, 0.5, 0.5);
    this.instance._off = true;

    var maskedShapeInstanceList = [this.instance];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({ _off: false }, 0).wait(6));

    // Layer_7 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_14 = new cjs.Graphics().p('ADIOJIAAiGICWAAIAACGg');
    var mask_1_graphics_15 = new cjs.Graphics().p('ADIOJIAAjvICWAAIAADvg');
    var mask_1_graphics_16 = new cjs.Graphics().p('ADIOJIAAopICWAAIAAIpg');
    var mask_1_graphics_17 = new cjs.Graphics().p('ADIOIIAAv9ICWAAIAAP9g');
    var mask_1_graphics_18 = new cjs.Graphics().p('ADIOIIAA03ICWAAIAAU3g');
    var mask_1_graphics_19 = new cjs.Graphics().p('ADIOJIAA2fICWAAIAAWfg');

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(14)
        .to({ graphics: mask_1_graphics_14, x: 34.9924, y: 90.4954 })
        .wait(1)
        .to({ graphics: mask_1_graphics_15, x: 34.9924, y: 90.4864 })
        .wait(1)
        .to({ graphics: mask_1_graphics_16, x: 34.9924, y: 90.4595 })
        .wait(1)
        .to({ graphics: mask_1_graphics_17, x: 34.9924, y: 90.419 })
        .wait(1)
        .to({ graphics: mask_1_graphics_18, x: 34.9924, y: 90.392 })
        .wait(1)
        .to({ graphics: mask_1_graphics_19, x: 34.9924, y: 90.503 })
        .wait(6)
    );

    // txt1_border3
    this.instance_1 = new lib.txt1_bd();
    this.instance_1.setTransform(0, 0, 0.5, 0.5);
    this.instance_1._off = true;

    var maskedShapeInstanceList = [this.instance_1];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({ _off: false }, 0).wait(11));

    // Layer_6 (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    var mask_2_graphics_9 = new cjs.Graphics().p('APjPUIAAiWICWAAIAACWg');
    var mask_2_graphics_10 = new cjs.Graphics().p('ANkPUIAAiWIEVAAIAACWg');
    var mask_2_graphics_11 = new cjs.Graphics().p('AHnPUIAAiWIKSAAIAACWg');
    var mask_2_graphics_12 = new cjs.Graphics().p('AhUPUIAAiWITOAAIAACWg');
    var mask_2_graphics_13 = new cjs.Graphics().p('AnRPUIAAiWIZLAAIAACWg');
    var mask_2_graphics_14 = new cjs.Graphics().p('ApSPUIAAiWIbLAAIAACWg');

    this.timeline.addTween(
      cjs.Tween.get(mask_2)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(9)
        .to({ graphics: mask_2_graphics_9, x: 114.4899, y: 98.0027 })
        .wait(1)
        .to({ graphics: mask_2_graphics_10, x: 114.5024, y: 98.0027 })
        .wait(1)
        .to({ graphics: mask_2_graphics_11, x: 114.5399, y: 98.0027 })
        .wait(1)
        .to({ graphics: mask_2_graphics_12, x: 114.596, y: 98.0027 })
        .wait(1)
        .to({ graphics: mask_2_graphics_13, x: 114.6335, y: 98.0027 })
        .wait(1)
        .to({ graphics: mask_2_graphics_14, x: 114.501, y: 98.0027 })
        .wait(11)
    );

    // txt1_border2
    this.instance_2 = new lib.txt1_bd();
    this.instance_2.setTransform(0, 0, 0.5, 0.5);
    this.instance_2._off = true;

    var maskedShapeInstanceList = [this.instance_2];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({ _off: false }, 0).wait(16));

    // Layer_5 (mask)
    var mask_3 = new cjs.Shape();
    mask_3._off = true;
    var mask_3_graphics_4 = new cjs.Graphics().p('AQuFUIAAiWICWAAIAACWg');
    var mask_3_graphics_5 = new cjs.Graphics().p('AQuGHIAAj8ICWAAIAAD8g');
    var mask_3_graphics_6 = new cjs.Graphics().p('AQuIhIAAovICWAAIAAIvg');
    var mask_3_graphics_7 = new cjs.Graphics().p('AQuMHIAAv7ICWAAIAAP7g');
    var mask_3_graphics_8 = new cjs.Graphics().p('AQuOhIAA0vICWAAIAAUvg');
    var mask_3_graphics_9 = new cjs.Graphics().p('AQuPUIAA2VICWAAIAAWVg');

    this.timeline.addTween(
      cjs.Tween.get(mask_3)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(4)
        .to({ graphics: mask_3_graphics_4, x: 121.9925, y: 34.0027 })
        .wait(1)
        .to({ graphics: mask_3_graphics_5, x: 121.9925, y: 39.1231 })
        .wait(1)
        .to({ graphics: mask_3_graphics_6, x: 121.9925, y: 54.4843 })
        .wait(1)
        .to({ graphics: mask_3_graphics_7, x: 121.9925, y: 77.526 })
        .wait(1)
        .to({ graphics: mask_3_graphics_8, x: 121.9925, y: 92.8871 })
        .wait(1)
        .to({ graphics: mask_3_graphics_9, x: 121.9925, y: 98.0075 })
        .wait(16)
    );

    // txt1_border1
    this.instance_3 = new lib.txt1_bd();
    this.instance_3.setTransform(0, 0, 0.5, 0.5);
    this.instance_3._off = true;

    var maskedShapeInstanceList = [this.instance_3];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({ _off: false }, 0).wait(21));

    // Layer_5_copy (mask)
    var mask_4 = new cjs.Shape();
    mask_4._off = true;
    var mask_4_graphics_0 = new cjs.Graphics().p('AOsEJIAAiWICWAAIAACWg');
    var mask_4_graphics_1 = new cjs.Graphics().p('ANsEJIAAiWIEYAAIAACWg');
    var mask_4_graphics_2 = new cjs.Graphics().p('AMqEJIAAiWIGaAAIAACWg');

    this.timeline.addTween(
      cjs.Tween.get(mask_4)
        .to({ graphics: mask_4_graphics_0, x: 108.9925, y: 26.5027 })
        .wait(1)
        .to({ graphics: mask_4_graphics_1, x: 115.5707, y: 26.5027 })
        .wait(1)
        .to({ graphics: mask_4_graphics_2, x: 122.0122, y: 26.5027 })
        .wait(23)
    );

    // txt1_border1_copy
    this.instance_4 = new lib.txt1_bd();
    this.instance_4.setTransform(0, 0, 0.5, 0.5);

    var maskedShapeInstanceList = [this.instance_4];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(55, 37, 189, 159);

  (lib.product_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.product();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.product_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
  }).prototype = getMCSymbolPrototype(lib.logo2_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
    this.instance.setTransform(-1, 0, 0.514, 0.514);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.logo1_1, new cjs.Rectangle(-1, 0, 308.4, 257), null);

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
  }).prototype = getMCSymbolPrototype(lib.floor_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
  }).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
  }).prototype = getMCSymbolPrototype(lib.blackfriday_1, new cjs.Rectangle(0, 0, 300, 250), null);

  (lib.bg_txt1_1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.bg_txt1();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.bg_txt1_1, new cjs.Rectangle(0, 0, 300, 250), null);

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
    this.instance = new lib.txt2_on_1();
    this.instance.setTransform(400, 130, 1, 1, 0, 0, 0, 150, 125);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(34)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 15)
        .wait(10)
        .to({ alpha: 0 }, 15)
        .wait(1)
    );

    // txt2_off
    this.instance_11 = new lib.txt2_off_1('single', 0);
    this.instance_11.setTransform(400, 190, 1, 1, 0, 0, 0, 150, 125);
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(24)
        .to({ _off: false }, 0)
        .to({ y: 125 }, 7, cjs.Ease.get(1))
        .to({ y: 130, mode: 'synched' }, 3, cjs.Ease.get(-1))
        .wait(41)
    );

    // txt1_on
    this.instance_1 = new lib.txt1_on_1();
    this.instance_1.setTransform(400, 130, 1, 1, 0, 0, 0, 150, 125);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(34)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 15)
        .wait(10)
        .to({ alpha: 0 }, 15)
        .wait(1)
    );

    // logo1
    this.instance_2 = new lib.logo1_1();
    this.instance_2.setTransform(400, 130, 1, 1, 0, 0, 0, 150, 125);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 15, cjs.Ease.get(1))
        .wait(56)
    );

    // txt1_border
    this.instance_3 = new lib.txt1_border('synched', 0, false);
    this.instance_3.setTransform(400, 130, 1, 1, 0, 0, 0, 150, 125);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75));

    // txt1_txt
    this.instance_4 = new lib.txt1_1();
    this.instance_4.setTransform(404, 130, 1, 1, 0, 0, 0, 150, 125);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 15, cjs.Ease.get(1))
        .wait(71)
    );

    // bg_txt1
    this.instance_5 = new lib.bg_txt1_1();
    this.instance_5.setTransform(400, 130, 1, 1, 0, 0, 0, 150, 125);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5).wait(4).to({ _off: false }, 0).to({ alpha: 1 }, 15).wait(56)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(250, 0, 300, 315);

  // stage content:
  (lib.TELUS_Mobility_Stim_BoxingWeek_MOB_Consideration_300x250 = function (
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
    this.shape.graphics.f().s('#000000').ss(2, 2, 0, 3).p('A3bzhMAu3AAAMAAAAnDMgu3AAAg');
    this.shape.setTransform(150, 125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(225));

    // logo2
    this.instance = new lib.logo2_1();
    this.instance.setTransform(150, 105, 1, 1, 0, 0, 0, 150, 125);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(84)
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
        .wait(84)
        .to({ _off: false }, 0)
        .to({ y: 125, alpha: 1 }, 10, cjs.Ease.get(1))
        .wait(131)
    );

    // cta
    this.instance_2 = new lib.cta_1();
    this.instance_2.setTransform(150, 195, 1, 1, 0, 0, 0, 150, 125);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(104)
        .to({ _off: false }, 0)
        .to({ y: 125 }, 10, cjs.Ease.get(1))
        .wait(111)
    );

    // txt3_on
    this.instance_3 = new lib.txt3_on_1();
    this.instance_3.setTransform(150, 125, 1, 1, 0, 0, 0, 150, 125);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(114)
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
    this.instance_4 = new lib.txt3_off_1();
    this.instance_4.setTransform(20, 125, 1, 1, 0, 0, 0, 150, 125);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(94)
        .to({ _off: false }, 0)
        .to({ x: 150 }, 10, cjs.Ease.get(1))
        .wait(121)
    );

    // product
    this.instance_5 = new lib.product_1();
    this.instance_5.setTransform(450, 125, 1, 1, 0, 0, 0, 150, 125);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(94)
        .to({ _off: false }, 0)
        .to({ x: 150 }, 10, cjs.Ease.get(1))
        .wait(121)
    );

    // floor
    this.instance_7 = new lib.floor_1();
    this.instance_7.setTransform(150, 185, 1, 1, 0, 0, 0, 150, 125);
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(84)
        .to({ _off: false }, 0)
        .to({ y: 125 }, 10, cjs.Ease.get(1))
        .wait(131)
    );

    // black_friday_deals
    this.instance_6 = new lib.black_friday_deals('synched', 0, false);
    this.instance_6.setTransform(150.2, 120.8, 1.0273, 1.0277, 0, 0, 0, 399.6, 129.7);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(74)
        .to({ startPosition: 74 }, 0)
        .to({ x: -129.8 }, 10, cjs.Ease.quadInOut)
        .to({ _off: true }, 1)
        .wait(140)
    );

    // bg
    this.instance_7 = new lib.bg();
    this.instance_7.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(225));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(-150, 105, 750, 215);
  // library properties:
  lib.properties = {
    id: 'BAA8FE9FAC364AAE9BA8FA9DB0EED5BB',
    width: 300,
    height: 250,
    fps: 30,
    color: '#FFFFFF',
    opacity: 1.0,
    manifest: [
      { src: 'assets/bg.jpg?1701790309125', id: 'bg' },
      { src: 'assets/bg_txt1.png?1701790309125', id: 'bg_txt1' },
      { src: 'assets/blackfriday.png?1701790309125', id: 'blackfriday' },
      { src: 'assets/cta.png?1701790309125', id: 'cta' },
      { src: 'assets/floor.png?1701790309125', id: 'floor' },
      { src: 'assets/logo1.png?1701790309125', id: 'logo1' },
      { src: 'assets/logo2.png?1701790309125', id: 'logo2' },
      { src: 'assets/product.png?1701790309125', id: 'product' },
      { src: 'assets/txt1_border.png?1701790309125', id: 'txt1_bd' },
      { src: 'assets/txt1.png?1701790309125', id: 'txt1' },
      { src: 'assets/txt1_on.png?1701790309125', id: 'txt1_on' },
      { src: 'assets/txt2_off.png?1701790309125', id: 'txt2_off' },
      { src: 'assets/txt2_on.png?1701790309125', id: 'txt2_on' },
      { src: 'assets/txt3_off.png?1701790309125', id: 'txt3_off' },
      { src: 'assets/txt3_on.png?1701790309125', id: 'txt3_on' },
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
  an.compositions['BAA8FE9FAC364AAE9BA8FA9DB0EED5BB'] = {
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
