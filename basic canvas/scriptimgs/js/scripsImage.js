const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500;

const image = new Image();
image.src = './basic canvas/scriptimgs/js/image.png';

image.addEventListener('load', function(){
    ctx.drawImage(image, 0, 0);
})