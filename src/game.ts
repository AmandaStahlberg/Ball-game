type GameState = 'Start' | 'Running' | 'GameOver' | 'GameWon'
class TheGame {
    private endScreen: EndScreen;
    private gameController: GameController;
    
    private gameState: GameState;
    private startScreen: StartScreen;
    //private restartGame: boolean;
    // private playField: Playfield;
   
    constructor() {
        this.gameState = 'Start';
        this.startScreen = new StartScreen(this.startGame);

       
        this.endScreen = new EndScreen(this.restartGame);

        this.gameController = new GameController();
           
    }


    
    private startGame = () => {
        this.gameState = 'Running'; 
        this.gameController = new GameController();
        console.log(this)  
    }

    private endGame = (isWon: boolean) => {
        if(isWon){
            this.gameState = 'GameWon'
        }else {
            this.gameState = 'GameOver';
        }
    }

    private restartGame = () => {
        this.gameState = 'Running'
        this.gameController = new GameController();
    }



    public update() {


        this.startScreen.update();
        this.gameController.update(this.gameState, this.endGame);
        this.endScreen.update(this.gameState);    
    }
    
  
    public draw() {
        this.gameController.draw(this.gameState);
        if (this.gameState === 'Start') {
            this.startScreen.draw();
        } 
        if(this.gameState === 'GameOver' || this.gameState === 'GameWon') {
            this.endScreen.draw();
         //    this.ball.ball.setSpeed(0)
         //    this.goal.sprite.setSpeed(0)
         //    this.ball.speed = 8
         //    this.goal.speed = 5
         }
    }
}

        


