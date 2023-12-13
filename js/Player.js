import InputHandler from "./InputHandler.js";
export default class Player {
    constructor(game){
        this.game = game;
        this.InputHandler = new InputHandler(this);
        this.x = 100;
        this.y = 100;
        this.w = 50;
        this.h = 50;
        this.gravity = 90;
        this.jumpHeight = 25;
        this.speed = 3;
        this.xy = 0;
        this.state = {
            right: false,
            left: false,
            jump: false,
            onGround: true,
            
        }
    }
    draw(context){
        context.fillRect(this.x, this.y, this.w, this.h)
    }
    update(){
        this.state.right ? this.x += this.speed : 0; 
        this.state.left ? this.x -= this.speed : 0;
        
        if(this.state.jump && this.state.onGround){
            this.y -= 50
            this.state.onGround = false;
        }
        if (!this.state.onGround){
            this.xy += this.gravity * 0.4
            this.y += this.xy
            this.state.onGround = true;     
        }

        if(this.y + this.h > 600){
            this.y = 600 - this.h
            // this.state.onGround = true
        }

    }
}