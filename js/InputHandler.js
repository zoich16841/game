export default class InputHandler {
    constructor(player){
        this.player = player;
        window.addEventListener('keydown', (e)=>{
            switch(e.key){
                case('ArrowRight'):
                    this.player.state.right = true;
                    break;
                case('ArrowLeft'):
                    this.player.state.left = true;
                    break;
                case(' '):
                    this.player.state.jump = true;
                    break;
            }
        })
        window.addEventListener('keyup', (e)=>{
            switch(e.key){
                case('ArrowRight'):
                    this.player.state.right = false;
                case('ArrowLeft'):
                    this.player.state.left = false;
                    break;
                case(' '):
                    this.player.state.jump = false;
                    break;
            }
        })
    }
}