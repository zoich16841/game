import Game from "./js/Game.js";


const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const canvasW = canvas.width = 800;
const canvasH = canvas.height = 600;

const game = new Game();

function animate() {
    context.clearRect(0, 0, canvasW, canvasH);

    game.draw(context);
    game.update();

    requestAnimationFrame(animate);
}

animate();