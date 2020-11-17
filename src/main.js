const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
let flyButton = document.getElementById('fly');
let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 1;
let gameSpeed = 2;
let myAudio = document.getElementById('myAudio');
let restartBtn = document.getElementById('restartBtn');


function showSore() {
    ctx.strokeStyle = "#fff";
    ctx.font = "bold 90px Georgia";
    ctx.strokeText(score, 450, 70);
}



const background = new Image();
background.src = "./images/BG.png";
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}
function handleBackground() {
    if (BG.x1 <= -BG.width + gameSpeed) BG.x1 = BG.width;
    else (BG.x1 -= gameSpeed);
    if (BG.x2 <= -BG.width + gameSpeed) BG.x2 = BG.width;
    else (BG.x2 -= gameSpeed);
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleBackground();
    bird.update();
    bird.draw();
    handleParticles()
    handleObstacles();
    showSore();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;
}




animate();



window.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        spacePressed = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === "Space") {
        spacePressed = false;
        bird.frameX = 0;
    }
});



const bang = new Image();
bang.src = "./images/bang.png";

function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width && bird.x + bird.width > obstaclesArray[i].x && ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0 || (bird.y > canvas.height - obstaclesArray[i].bottom && bird.y + bird.height < canvas.height)))) {
            ctx.drawImage(bang, bird.x, bird.y, 50, 50);
            ctx.font = "1rem Georgia";
            ctx.fillStyle = "#f2f2f2";
            ctx.fillText(` You have Died in:${returnEpisodeName(score)}`, 10, canvas.height / 2 - 10)
            myAudio.pause()
            return true;
        }
    }
}

restartBtn.addEventListener("click", () => {
    document.location.reload();
});