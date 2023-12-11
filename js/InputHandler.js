export default class InputHandler {
    constructor(player){
        this.player = player;
        window.addEventListener('keydown', (e)=>{
            switch(e.key){
                case('ArrowRight'):
                    this.player.state.right = true;
                    console.log(this.player.state.right);
                    break;
                case('ArrowLeft'):
                    this.player.state.left = true;
                    break;
            }
        })
        window.addEventListener('keyup', (e)=>{
            switch(e.key){
                case('ArrowRight'):
                    this.player.state.right = false;
                    console.log(this.player.state.right);
                    break;
                case('ArrowLeft'):
                    this.player.state.left = false;
                    break;
            }
        })
    }
}