const ball = document.querySelector('.ball');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const pong = document.querySelector('.pong');

let ballSpeedX = 4;
let ballSpeedY = 4;
let leftPaddleY = 160;
let rightPaddleY = 160;

function update() {
    // Update ball position
    ball.style.left = parseInt(ball.style.left) + ballSpeedX + 'px';
    ball.style.top = parseInt(ball.style.top) + ballSpeedY + 'px';

    // Update paddles
    leftPaddle.style.top = leftPaddleY + 'px';
    rightPaddle.style.top = rightPaddleY + 'px';

    // Ball collision with top and bottom walls
    if (parseInt(ball.style.top) <= 0 || parseInt(ball.style.top) >= 380) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (
        (parseInt(ball.style.left) <= 0 && parseInt(ball.style.top) >= leftPaddleY && parseInt(ball.style.top) <= leftPaddleY + 80) ||
        (parseInt(ball.style.left) >= 590 && parseInt(ball.style.top) >= rightPaddleY && parseInt(ball.style.top) <= rightPaddleY + 80)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball out of bounds
    if (parseInt(ball.style.left) <= 0 || parseInt(ball.style.left) >= 590) {
        resetBall();
    }

    requestAnimationFrame(update);
}

function resetBall() {
    ball.style.left = '290px';
    ball.style.top = '190px';
    ballSpeedX = -ballSpeedX;
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp' && rightPaddleY > 0) {
        rightPaddleY -= 10;
    } else if (e.key === 'ArrowDown' && rightPaddleY < 320) {
        rightPaddleY += 10;
    }

    if (e.key === 'w' && leftPaddleY > 0) {
        leftPaddleY -= 10;
    } else if (e.key === 's' && leftPaddleY < 320) {
        leftPaddleY += 10;
    }
});

requestAnimationFrame(update);
