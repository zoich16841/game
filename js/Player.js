import InputHandler from "./InputHandler.js";
export default class Player {
    constructor(game){
        this.game = game;
        this.InputHandler = new InputHandler(this);
        this.x = 10;
        this.y = 10;
        this.w = 50;
        this.h = 50;
        this.speed = 3;
        this.state = {
            right: false,
            left: false,
            jump: false,
        }
    }
    draw(context){
        context.fillRect(this.x, this.y, this.w, this.h)
    }
    update(){
        this.state.right ? this.x += this.speed : 0; 
        this.state.left ? this.x -= this.speed : 0;
    }
}