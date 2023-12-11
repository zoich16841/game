import InputHandler from "./InputHandler.js";
export default class Player {
    constructor(game){
        this.game = game;
        this.InputHandler = new InputHandler(this);
        this.x = 10;
        this.y = 10;
        this.speed = 3;
        this.state = {
            right: false,
            left: false,
        }
    }
    draw(context){
        context.fillRect(this.x, this.y, 50, 50)
    }
    update(){
        this.state.right ? this.x += this.speed : 0; 
        this.state.left ? this.x -= this.speed : 0;
    }
}