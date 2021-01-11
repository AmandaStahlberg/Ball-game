class Ball {
        
    ball: any
    radius: any
    position: any
    // color: number
    speed: number
   // sprite: any
 
            
    constructor() {
        this.radius = 30
        this.position = createVector(200, 200)
                
        this.ball = createSprite(this.position.x, this.position.y, this.radius, this.radius);
        this.ball.setCollider('circle', 0, 0, 27); 

        this.ball.addImage(imageBall) 
        this.speed = 8;
        this.ball.setSpeed(this.speed, Math.random() * 360)
        
        // this.velocity = createVector(this.speed, -this.speed);
    }


    public draw() {
        drawSprite(this.ball);
    }

    bounce(sprite: any) {
        
        this.ball.setSpeed(this.speed)

        if(this.ball.bounce(sprite)) {
            sounds.wallCollide.play();
        }
         
        
        

     
        // // Bounces the ball on left and right wall
        // if (this.position.x > width - (this.radius / 2) - 10 || this.position.x < (this.radius /2) +10) {
        //     this.maxSpeed.x *= -1;
        // } 
        // // Bounces the ball on the top and bottom wall
        // if (this.position.y > height - (this.radius / 2) - 10 || this.position.y < (this.radius / 2) + 10) {
        //     this.maxSpeed.y *= -1;
        // }
    }

    // projectileCollision(sprite: any) {
    //     if (this.ball.bounce(sprite)) {
    //         console.log('hej')
    //     }

    // }
   
    public update() {
       
    }
 

    bounceWalls(sprite: any) {
            if(this.ball.bounce(sprite)) {
                sounds.wallCollide.play();
            }

    }




    
}
