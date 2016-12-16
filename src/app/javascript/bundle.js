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
	        this.background = new PIXI.Sprite(PIXI.loader.resources['background'].texture);
	        this.background.position.set(50, 50);
	        this.hoursArrow = new PIXI.Sprite(PIXI.loader.resources['hoursArrow'].texture);
	        this.hoursArrow.position.set(403, 350);
	        this.minutesArrow = new PIXI.Sprite(PIXI.loader.resources['minutesArrow'].texture);
	        this.minutesArrow.position.set(223, 270);
	        this.secondsArrowHead = new PIXI.Sprite(PIXI.loader.resources['secondsArrowHead'].texture);
	        this.secondsArrowHead.position.set(380, 110);
	        this.secondsArrowHead.rotation = 0.9;
	        this.secondsArrowHead.height = 160;
	        this.secondsArrowTail = new PIXI.Sprite(PIXI.loader.resources['secondsArrowTail'].texture);
	        this.secondsArrowTail.position.set(385, 405);
	        this.secondsArrowTail.rotation = 0.8;
	        this.mainContainer.addChild(this.background);
	        this.mainContainer.addChild(this.hoursArrow);
	        this.mainContainer.addChild(this.minutesArrow);
	        this.mainContainer.addChild(this.secondsArrowHead);
	        this.mainContainer.addChild(this.secondsArrowTail);
	        this.stage.addChild(this.mainContainer);
	    }
	    Clock.prototype.showConnectionMessage = function () {
	        console.log('message');
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
	var stage = new PIXI.Container(), renderer = autoDetectRenderer(1400, 1400, { backgroundColor: 0x1099bb });
	parent.document.body.appendChild(renderer.view);
	setInterval(function () { renderer.render(stage); }, 30);
	var clock;
	loader
	    .add("background", "assets/images/sprites/background.png")
	    .add("hoursArrow", "assets/images/sprites/hoursArrow.png")
	    .add("minutesArrow", "assets/images/sprites/minutesArrow.png")
	    .add("secondsArrowHead", "assets/images/sprites/secondsArrowHead.png")
	    .add("secondsArrowTail", "assets/images/sprites/secondsArrowTail.png")
	    .load(function () {
	    clock = new Clock(stage);
	});
	//   console.log(loader); 


/***/ }
/******/ ]);