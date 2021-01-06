class Ball {
        
    ball: any
    radius: any
    position: any
    // color: number
    speed: number

            
    constructor() {
        this.radius = 30
        this.position = createVector(200, 200)
                
        this.ball = createSprite(this.position.x, this.position.y, this.radius, this.radius);
        this.ball.setCollider('circle', 0, 0, 40);

        this.ball.addImage(imageBall) 
        this.speed = 0;
        this.ball.setSpeed(this.speed, -240)
        
        // this.velocity = createVector(this.speed, -this.speed);
       
    }


    public draw() {
        drawSprite(this.ball);
    }

    setBallStartSpeed() {
        this.ball.setSpeed(3)
    }

    bounce(sprite: any) {
        this.ball.bounce(sprite)

        this.ball.setSpeed(this.speed)

        // // Bounces the ball on left and right wall
        // if (this.position.x > width - (this.radius / 2) - 10 || this.position.x < (this.radius /2) +10) {
        //     this.maxSpeed.x *= -1;
        // } 
        // // Bounces the ball on the top and bottom wall
        // if (this.position.y > height - (this.radius / 2) - 10 || this.position.y < (this.radius / 2) + 10) {
        //     this.maxSpeed.y *= -1;
        // }
    }
   

    public update() {
      //  this.position.add(this.velocity);
     }

    bounceWalls() {
 
    }




    
}
