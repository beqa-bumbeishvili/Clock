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
        this.background.height = 200;
        this.background.width = 200;
        this.background.position.set(150,150);

        this.hoursArrow = new PIXI.Sprite(PIXI.loader.resources['hoursArrow'].texture);

        this.minutesArrow = new PIXI.Sprite(PIXI.loader.resources['minutesArrow'].texture);

        this.secondsArrowHead = new PIXI.Sprite(PIXI.loader.resources['secondsArrowHead'].texture);

        this.secondsArrowTail = new PIXI.Sprite(PIXI.loader.resources['secondsArrowTail'].texture);

        this.mainContainer.addChild(this.background);
/*        this.mainContainer.addChild(this.hoursArrow);
        this.mainContainer.addChild(this.minutesArrow);
        this.mainContainer.addChild(this.secondsArrowHead);
        this.mainContainer.addChild(this.secondsArrowTail);*/
        this.stage.addChild(this.mainContainer);
    }
    showConnectionMessage() {
        console.log('message');
    }
}

export = Clock;