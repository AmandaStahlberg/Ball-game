 class Paddle {
    paddle: any
    //ball: sprite
    positionX: number
    positionY: number
    //MAX_SPEED: number
    constructor() {
        //this.MAX_SPEED = 0.5;
        this.positionX = width / 2; 
        this.positionY = height / 2;
        this.paddle = createSprite(this.positionX, this.positionY)
        this.paddle.setCollider('circle', 0, 0, 38)
        this.paddle.addImage(imagePaddle)
        
        this.paddle.immovable = true;
    }
    


    draw() {
        background(0)
        this.paddle.position.x = mouseX;
        this.paddle.position.y = mouseY;
        drawSprite(this.paddle)
    }

    
    update() {}

}