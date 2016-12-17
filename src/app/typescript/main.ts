///<reference path="../../lib/pixi.js.d.ts" />
import Clock = require("./clock.ts");
let autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

let stage = new PIXI.Container(),
    renderer = autoDetectRenderer(800, 600);
parent.document.body.appendChild(renderer.view);
setInterval(function () { renderer.render(stage); }, 30);
let clock;
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