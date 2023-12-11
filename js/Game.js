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
    }
}