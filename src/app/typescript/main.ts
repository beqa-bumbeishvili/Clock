///<reference path="../../lib/pixi.js.d.ts" />
import Clock = require("./clock.ts");
let autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

let stage = new PIXI.Container(),
    renderer = autoDetectRenderer(500, 500, { backgroundColor: 0x1099bb });
parent.document.body.appendChild(renderer.view);
setInterval(function () { renderer.render(stage); }, 30);
let clock;
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