import InputHandler from "./InputHandler.js";
export default class Player {
    constructor(game){
        this.game = game;
        this.InputHandler = new InputHandler(this);
        this.x = 100;
        this.y = 100;
        this.w = 50;
        this.h = 50;
        this.jumpHeight = 5;
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

        this.state.jump ? this.y -= this.jumpHeight : 0;
        this.y < 50 ? this.y = 100 : 0;
    }
}