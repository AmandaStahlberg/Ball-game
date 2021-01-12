
class Timer {
    millisecs: number;
    seconds: number;
    minutes: number;
    start: boolean;

    constructor() {
        this.millisecs = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.start = true;
    }

    update() {
        if(this.start){
            if (int(millis()/100)  % 10 != this.millisecs){
                this.millisecs++;
                
            }
            if (this.millisecs >= 10){
                this.millisecs -= 10;
                this.seconds++;
            }
            if (this.seconds >= 60){
                this.seconds -= 60;
                this.minutes++;
            }
        }
    }

    drawTimer() {  
        textAlign(LEFT);
        fill(132,165,157);
        textSize(28);
        textFont ('Quicksand');
        text('Timer', 25, 50);

        text(nf(this.minutes, 2) + ":" + nf(this.seconds, 2) + "." + nf(this.millisecs, 1) , 25, 80);
    }
    
    drawWon(score: number) {  
        textAlign(LEFT);
        fill(132,165,157);
        textSize(28);
        textFont ('Quicksand');
        text('WINNER!', 25, 50);
        text('Score:', width / 2 -83, 70)
        text(score, width / 2, 70)
        text(nf(this.minutes, 2) + ":" + nf(this.seconds, 2) + "." + nf(this.millisecs, 1) , 25, 80);
    }


    drawLost() {
        textAlign(LEFT);
        fill(132,165,157);
        textSize(28);
        textFont ('Quicksand');
        text('You lost!', 25, 50);
    }
}

