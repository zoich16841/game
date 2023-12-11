const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const canvasW = canvas.width = 800;
const canvasH = canvas.height = 600;


function animate() {
    context.clearRect(0, 0, canvasW, canvasH);



    requestAnimationFrame(animate);
}

animate()