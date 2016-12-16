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
        this.background = new PIXI.Sprite(PIXI.loader.resources['background'].texture);
        this.background.position.set(50,50);

        this.hoursArrow = new PIXI.Sprite(PIXI.loader.resources['hoursArrow'].texture);
        this.hoursArrow.position.set(403,350);

        this.minutesArrow = new PIXI.Sprite(PIXI.loader.resources['minutesArrow'].texture);
        this.minutesArrow.position.set(223,270);

        this.secondsArrowHead = new PIXI.Sprite(PIXI.loader.resources['secondsArrowHead'].texture);
        this.secondsArrowHead.position.set(380,110);
        this.secondsArrowHead.rotation = 0.9;
        this.secondsArrowHead.height=160;

        this.secondsArrowTail = new PIXI.Sprite(PIXI.loader.resources['secondsArrowTail'].texture);
        this.secondsArrowTail.position.set(385,405);
        this.secondsArrowTail.rotation = 0.8;

        this.mainContainer.addChild(this.background);
        this.mainContainer.addChild(this.hoursArrow);
        this.mainContainer.addChild(this.minutesArrow);
        this.mainContainer.addChild(this.secondsArrowHead);
        this.mainContainer.addChild(this.secondsArrowTail);
        this.stage.addChild(this.mainContainer);
    }
    showConnectionMessage() {
        console.log('message');
    }
}

export = Clock;