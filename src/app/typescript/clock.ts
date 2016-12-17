class Clock {
    stage: PIXI.Container;
    mainContainer: any;
    canvasBackground: PIXI.Sprite;
    clockBackground: PIXI.Sprite;
    hoursArrow: PIXI.Sprite;
    minutesArrow: PIXI.Sprite;
    secondsArrow: PIXI.Sprite;
    constructor(stage) {
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

    drawCanvasBackground() {
        this.canvasBackground = new PIXI.Sprite(PIXI.loader.resources['canvasBackground'].texture);
        this.canvasBackground.width = 800;
        this.canvasBackground.height = 600;
        this.canvasBackground.position.set(0, 0);
    }

    drawClockBackground() {
        this.clockBackground = new PIXI.Sprite(PIXI.loader.resources['clockBackground'].texture);
        console.log(this.clockBackground.width + "  " + this.clockBackground.height);
        this.clockBackground.width = 500;
        this.clockBackground.height = 500;
        this.clockBackground.position.set(110, 10);
    }

    placeHoursArrow() {
        this.hoursArrow = new PIXI.Sprite(PIXI.loader.resources['hoursArrow'].texture);
        this.hoursArrow.width = this.hoursArrow.width / 1.34;
        this.hoursArrow.height = this.hoursArrow.height / 1.34;
        this.hoursArrow.position.set(360, 252);
        this.hoursArrow.anchor.set(0.5, 1);
    }

    placeMinutesArrow() {
        this.minutesArrow = new PIXI.Sprite(PIXI.loader.resources['minutesArrow'].texture);
        this.minutesArrow.width = this.minutesArrow.width / 1.34;
        this.minutesArrow.height = this.minutesArrow.height / 1.34;
        this.minutesArrow.position.set(357, 262);
        this.minutesArrow.anchor.set(0.5, 1);
    }

    placeSecondsArrow() {
        this.secondsArrow = new PIXI.Sprite(PIXI.loader.resources['arrow'].texture);
        this.secondsArrow.height = 280;
        this.secondsArrow.width = this.secondsArrow.width / 1.34;
        this.secondsArrow.position.set(358, 260);
        this.secondsArrow.anchor.set(0.7, 0.7);
    }

    buildStructure() {
        this.mainContainer.addChild(this.canvasBackground);
        this.mainContainer.addChild(this.clockBackground);
        this.mainContainer.addChild(this.hoursArrow);
        this.mainContainer.addChild(this.minutesArrow);
        this.mainContainer.addChild(this.secondsArrow);
        this.stage.addChild(this.mainContainer);
    }

    moveClockArrows() {
        let _this = this;
        let s_x = this.secondsArrow.x;
        let s_y = this.secondsArrow.y;
        setInterval(function () {
            let now = new Date();
            let currentHour = now.getHours();
            if (currentHour > 12)
                currentHour -= 12;
            _this.secondsArrow.rotation = now.getSeconds() / 10 + 0.18;
            _this.minutesArrow.rotation = now.getMinutes() / 10 + 0.18;
            _this.hoursArrow.rotation = currentHour * 5 / 10 + 0.18;

            _this.fixSecondsArrowMovement(now.getSeconds(), s_x, s_y);
            _this.fixMinutesArrowMovement(now.getMinutes(), s_x, s_y);
            _this.fixHoursArrowMovement(currentHour,now.getMinutes(), s_x, s_y);

        }, 1000);
    }

    fixSecondsArrowMovement(currentSecond, s_x, s_y) {
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
    }

    fixMinutesArrowMovement(currentMinute, s_x, s_y) {
        if (currentMinute <= 20) {
            if (currentMinute == 0)
                this.minutesArrow.rotation = 0;
            else {
                this.minutesArrow.x = s_x + (this.minutesArrow.rotation - 2);
                this.minutesArrow.y = s_y + this.minutesArrow.rotation;
                this.hoursArrow.rotation+=0.2;
            }
        }
        else if (currentMinute > 20 && currentMinute <= 40) {
            this.minutesArrow.x = s_x + (this.minutesArrow.rotation - 2);
            this.minutesArrow.y = s_y + this.minutesArrow.rotation - 2;
                this.hoursArrow.rotation+=0.4;
        }
        else {
            this.minutesArrow.x = s_x + (this.minutesArrow.rotation - 4);
            this.minutesArrow.y = s_y + this.minutesArrow.rotation - 2;
                this.hoursArrow.rotation+=0.5;
        }

    }

    fixHoursArrowMovement(currentHour,currentMinute, s_x, s_y) {
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
    }
}

export = Clock;