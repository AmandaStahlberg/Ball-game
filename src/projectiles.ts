class Projectile {
    speed: number
    sprite: any

    constructor(goal: Goal) {
        this.speed = 5;
        this.sprite = createSprite(goal.sprite.position.x, goal.sprite.position.y, 20, 20)
        this.sprite.setSpeed(this.speed, Math.random() * 359)
    

        this.sprite.setCollider('circle', 0, 0, 10);
        conf2.resize(0, 40);
        this.sprite.addImage(conf2); 
       // this.sprite.rotation -= 2
        // this.projectile2.setSpeed(this.speed, Math.random() * 359)
        // this.projectile3.setSpeed(this.speed, Math.random() * 359)
       

        
    }

    paddleCollision(sprite: any, endGameCallback: Function, health: any, health2: any, health3:any) {
        // Shrink paddle on collission with sprites
        if (this.sprite.bounce(sprite)) {
            sprite.scale -= 0.2

            if(sprite.scale < 0.6){
                sprite.remove()
                endGameCallback(false);
            }
            if(sprite.scale < 0.9) {
                health.addImage(dieImage)
            }
            if(sprite.scale < 0.7) {
                health2.addImage(dieImage)
            }
            if(sprite.scale < 0.6) {
                health3.addImage(dieImage)
            }

        }

    }

    ballCollision(sprite: any) {
        if (this.sprite.bounce(sprite)) {
            this.sprite.remove()
        }
    }
    

    bounce(sprite: any){
        this.sprite.bounce(sprite)
        this.sprite.setSpeed(this.speed)
    }

    public update() {
        this.sprite.rotation -= 2

    }

    public draw() {
        drawSprite(this.sprite)

    }
    
}
