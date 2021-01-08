class Projectile {
    
    speed: number
    sprite: any
    //projectile2: any
    //projectile3: any

    constructor(goal: Goal) {
        this.speed = 5;
        this.sprite = createSprite(goal.sprite.position.x, goal.sprite.position.y, 20, 20)
        // this.projectile2 = createSprite(goal.position.x, goal.position.y, 20, 20)
        // this.projectile3 = createSprite(goal.position.x,goal.position.y, 20, 20)
        this.sprite.setSpeed(this.speed, Math.random() * 359)
        // this.projectile2.setSpeed(this.speed, Math.random() * 359)
        // this.projectile3.setSpeed(this.speed, Math.random() * 359)
        
    }

    paddleCollision(sprite: any) {
        if (this.sprite.bounce(sprite)) {
            sprite.scale -= 0.34
            sounds.projectileCollide.play()
            if(sprite.scale < 0.30){
                gameIsOver = true;
            }

        }

    }
    

    bounce(sprite: any){
        this.sprite.bounce(sprite)
        this.sprite.setSpeed(this.speed)
    }

    public draw() {
        drawSprite(this.sprite)
        //drawSprite(this.projectile2)
        //drawSprite(this.projectile3)
    }
    
}
