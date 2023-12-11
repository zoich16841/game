export default class Object {
    constructor(game){
        this.game = game;
        this.x = 800/2;
        this.y = 100;
        this.w = 50;
        this.h = 70;
    }
    draw(context){
        context.fillRect(this.x, this.y, this.w, this.h)
    }
}