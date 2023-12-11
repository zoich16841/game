import Player from './Player.js';

export default class Game {
    constructor(){
        this.player = new Player(this);
    }
    draw(context){
        this.player.draw(context);
    }
    update(){
        this.player.update()
        this.player.x < 0 ? this.player.x = 0 : 0;
        this.player.x + this.player.w > 800 ? this.player.x = 800 - this.player.w : 0;
    }
}