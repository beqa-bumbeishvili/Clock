/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Clock = (function () {
	    function Clock(stage) {
	        this.stage = stage;
	        this.mainContainer = new PIXI.Container;
	        this.drawCanvasBackground();
	        this.drawClockBackground();
	        this.placeHoursArrow();
	        this.placeMinutesArrow();
	        this.placeSecondsArrow();
	        this.buildStructure();
	        this.moveClockArrows();
	    }
	    Clock.prototype.drawCanvasBackground = function () {
	        this.canvasBackground = new PIXI.Sprite(PIXI.loader.resources['canvasBackground'].texture);
	        this.canvasBackground.width = 800;
	        this.canvasBackground.height = 600;
	        this.canvasBackground.position.set(0, 0);
	    };
	    Clock.prototype.drawClockBackground = function () {
	        this.clockBackground = new PIXI.Sprite(PIXI.loader.resources['clockBackground'].texture);
	        console.log(this.clockBackground.width + "  " + this.clockBackground.height);
	        this.clockBackground.width = 500;
	        this.clockBackground.height = 500;
	        this.clockBackground.position.set(110, 10);
	    };
	    Clock.prototype.placeHoursArrow = function () {
	        this.hoursArrow = new PIXI.Sprite(PIXI.loader.resources['hoursArrow'].texture);
	        this.hoursArrow.width = this.hoursArrow.width / 1.34;
	        this.hoursArrow.height = this.hoursArrow.height / 1.34;
	        this.hoursArrow.position.set(360, 252);
	        this.hoursArrow.anchor.set(0.5, 1);
	    };
	    Clock.prototype.placeMinutesArrow = function () {
	        this.minutesArrow = new PIXI.Sprite(PIXI.loader.resources['minutesArrow'].texture);
	        this.minutesArrow.width = this.minutesArrow.width / 1.34;
	        this.minutesArrow.height = this.minutesArrow.height / 1.34;
	        this.minutesArrow.position.set(357, 262);
	        this.minutesArrow.anchor.set(0.5, 1);
	    };
	    Clock.prototype.placeSecondsArrow = function () {
	        this.secondsArrow = new PIXI.Sprite(PIXI.loader.resources['arrow'].texture);
	        this.secondsArrow.height = 280;
	        this.secondsArrow.width = this.secondsArrow.width / 1.34;
	        this.secondsArrow.position.set(358, 260);
	        this.secondsArrow.anchor.set(0.7, 0.7);
	    };
	    Clock.prototype.buildStructure = function () {
	        this.mainContainer.addChild(this.canvasBackground);
	        this.mainContainer.addChild(this.clockBackground);
	        this.mainContainer.addChild(this.hoursArrow);
	        this.mainContainer.addChild(this.minutesArrow);
	        this.mainContainer.addChild(this.secondsArrow);
	        this.stage.addChild(this.mainContainer);
	    };
	    Clock.prototype.moveClockArrows = function () {
	        var _this = this;
	        var s_x = this.secondsArrow.x;
	        var s_y = this.secondsArrow.y;
	        setInterval(function () {
	            var now = new Date();
	            var currentHour = now.getHours();
	            if (currentHour > 12)
	                currentHour -= 12;
	            _this.secondsArrow.rotation = now.getSeconds() / 10 + 0.18;
	            _this.minutesArrow.rotation = now.getMinutes() / 10 + 0.18;
	            _this.hoursArrow.rotation = currentHour * 5 / 10 + 0.18;
	            _this.fixSecondsArrowMovement(now.getSeconds(), s_x, s_y);
	            _this.fixMinutesArrowMovement(now.getMinutes(), s_x, s_y);
	            _this.fixHoursArrowMovement(currentHour, now.getMinutes(), s_x, s_y);
	        }, 1000);
	    };
	    Clock.prototype.fixSecondsArrowMovement = function (currentSecond, s_x, s_y) {
	        if (currentSecond <= 20) {
	            if (currentSecond == 0)
	                this.secondsArrow.rotation = 0;
	            else {
	                this.secondsArrow.x = s_x + (this.secondsArrow.rotation + 0.6);
	                this.secondsArrow.y = s_y + this.secondsArrow.rotation;
	            }
	        }
	        else if (currentSecond > 20 && currentSecond < 40) {
	            this.secondsArrow.x = s_x + (this.secondsArrow.rotation - 2);
	            this.secondsArrow.y = s_y + this.secondsArrow.rotation;
	        }
	        else {
	            this.secondsArrow.x = s_x + (this.secondsArrow.rotation - 6);
	            this.secondsArrow.y = s_y + this.secondsArrow.rotation - 5;
	        }
	    };
	    Clock.prototype.fixMinutesArrowMovement = function (currentMinute, s_x, s_y) {
	        if (currentMinute <= 20) {
	            if (currentMinute == 0)
	                this.minutesArrow.rotation = 0;
	            else {
	                this.minutesArrow.x = s_x + (this.minutesArrow.rotation - 2);
	                this.minutesArrow.y = s_y + this.minutesArrow.rotation;
	                this.hoursArrow.rotation += 0.2;
	            }
	        }
	        else if (currentMinute > 20 && currentMinute <= 40) {
	            this.minutesArrow.x = s_x + (this.minutesArrow.rotation - 2);
	            this.minutesArrow.y = s_y + this.minutesArrow.rotation - 2;
	            this.hoursArrow.rotation += 0.4;
	        }
	        else {
	            this.minutesArrow.x = s_x + (this.minutesArrow.rotation - 4);
	            this.minutesArrow.y = s_y + this.minutesArrow.rotation - 2;
	            this.hoursArrow.rotation += 0.5;
	        }
	    };
	    Clock.prototype.fixHoursArrowMovement = function (currentHour, currentMinute, s_x, s_y) {
	        if (currentHour <= 1) {
	            if (currentHour == 0)
	                this.hoursArrow.rotation = 0;
	            else {
	                this.hoursArrow.x = s_x + (this.hoursArrow.rotation + 6);
	            }
	        }
	        else if (currentHour > 1 && currentHour <= 2) {
	            this.hoursArrow.x = s_x + (this.hoursArrow.rotation + 10);
	            this.hoursArrow.y = s_y + this.hoursArrow.rotation;
	        }
	        else if (currentHour > 2 && currentHour <= 4) {
	            this.hoursArrow.x = s_x + (this.hoursArrow.rotation + 8);
	            this.hoursArrow.y = s_y + this.hoursArrow.rotation + 2;
	        }
	        else if (currentHour > 4 && currentHour <= 6) {
	            this.hoursArrow.x = s_x + (this.hoursArrow.rotation + 4);
	            this.hoursArrow.y = s_y + this.hoursArrow.rotation + 9;
	        }
	        else if (currentHour > 6 && currentHour <= 7) {
	            this.hoursArrow.x = s_x - this.hoursArrow.rotation + 2;
	            this.hoursArrow.y = s_y + this.hoursArrow.rotation + 8;
	        }
	        else if (currentHour > 7 && currentHour <= 8) {
	            this.hoursArrow.x = s_x - (this.hoursArrow.rotation + 4);
	            this.hoursArrow.y = s_y + this.hoursArrow.rotation + 6;
	        }
	        else if (currentHour > 8 && currentHour <= 9) {
	            this.hoursArrow.x = s_x - (this.hoursArrow.rotation + 6);
	            this.hoursArrow.y = s_y + this.hoursArrow.rotation + 2;
	        }
	        else if (currentHour > 9 && currentHour <= 10) {
	            this.hoursArrow.x = s_x - (this.hoursArrow.rotation + 4);
	            this.hoursArrow.y = s_y - (this.hoursArrow.rotation - 2);
	        }
	        else {
	            this.hoursArrow.x = s_x - (this.hoursArrow.rotation);
	            this.hoursArrow.y = s_y - (this.hoursArrow.rotation);
	        }
	    };
	    return Clock;
	}());
	module.exports = Clock;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	///<reference path="../../lib/pixi.js.d.ts" />
	var Clock = __webpack_require__(1);
	var autoDetectRenderer = PIXI.autoDetectRenderer, loader = PIXI.loader, resources = PIXI.loader.resources, Sprite = PIXI.Sprite;
	var stage = new PIXI.Container(), renderer = autoDetectRenderer(800, 600);
	parent.document.body.appendChild(renderer.view);
	setInterval(function () { renderer.render(stage); }, 30);
	var clock;
	loader
	    .add("clockBackground", "assets/images/sprites/background.png")
	    .add("hoursArrow", "assets/images/sprites/hoursArrow.png")
	    .add("minutesArrow", "assets/images/sprites/minutesArrow.png")
	    .add("secondsArrowHead", "assets/images/sprites/secondsArrowHead.png")
	    .add("secondsArrowTail", "assets/images/sprites/secondsArrowTail.png")
	    .add("arrow", "assets/images/sprites/arrow.png")
	    .add("canvasBackground", "assets/images/utilities/background.jpg")
	    .load(function () {
	    clock = new Clock(stage);
	});
	//   console.log(loader); 


/***/ }
/******/ ]);