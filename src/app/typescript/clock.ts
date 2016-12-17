class Clock {
    stage: PIXI.Container;
    mainContainer: any;
    background: PIXI.Sprite;
    hoursArrow: PIXI.Sprite;
    minutesArrow: PIXI.Sprite;
    secondsArrowHead: PIXI.Sprite;
    secondsArrowTail: PIXI.Sprite;
    constructor(stage) {
        this.stage = stage;
        this.mainContainer = new PIXI.Container;

        this.drawClockBackground();
        this.placeHoursArrow();
        this.placeMinutesArrow();
        this.placeSecondsArrowHead();
        this.placeSecondsArrowTail();
        this.buildStructure();
        this.moveSecondsArrow();
    }

    drawClockBackground() {
        this.background = new PIXI.Sprite(PIXI.loader.resources['background'].texture);
        this.background.position.set(50, 50);
    }

    placeHoursArrow() {
        this.hoursArrow = new PIXI.Sprite(PIXI.loader.resources['hoursArrow'].texture);
        this.hoursArrow.position.set(403, 350);
    }

    placeMinutesArrow() {
        this.minutesArrow = new PIXI.Sprite(PIXI.loader.resources['minutesArrow'].texture);
        this.minutesArrow.position.set(223, 270);
    }

    placeSecondsArrowHead() {
        this.secondsArrowHead = new PIXI.Sprite(PIXI.loader.resources['secondsArrowHead'].texture);
        this.secondsArrowHead.position.set(385, 372);
        this.secondsArrowHead.rotation = 0.9;
        this.secondsArrowHead.height = 160;
        this.secondsArrowHead.anchor.set(1,1);
    }

    placeSecondsArrowTail() {
        this.secondsArrowTail = new PIXI.Sprite(PIXI.loader.resources['secondsArrowTail'].texture);
        this.secondsArrowTail.position.set(385, 405);
        this.secondsArrowTail.rotation = this.secondsArrowHead.rotation-0.1;
    }

    buildStructure() {
        this.mainContainer.addChild(this.background);
        this.mainContainer.addChild(this.hoursArrow);
        this.mainContainer.addChild(this.minutesArrow);
        this.mainContainer.addChild(this.secondsArrowHead);
        this.mainContainer.addChild(this.secondsArrowTail);
        this.stage.addChild(this.mainContainer);
    }
    moveSecondsArrow(){        
        let _this=this;
        setInterval(function () { _this.secondsArrowHead.rotation+=0.1; _this.secondsArrowTail.rotation+=0.1; }, 1000);
    }
}

export = Clock;