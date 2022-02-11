const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const p1ButtonMinus = document.querySelector('#p1ButtonMinus');
const p2ButtonMinus = document.querySelector('#p2ButtonMinus');

const resetButton = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playTo');


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
            p1ButtonMinus.disabled = true;
            p2ButtonMinus.disabled = true;

        }
        p1Display.textContent = p1Score;
    }

})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }


})

p1ButtonMinus.addEventListener('click', function () {
    if (p1Score > 0) {
        p1Score -= 1;
        p1Display.textContent = p1Score;
    }


})

p2ButtonMinus.addEventListener('click', function () {
    if (p2Score > 0) {
        p2Score -= 1;
        p2Display.textContent = p2Score;
    }

})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1ButtonMinus.disabled = false
    p2ButtonMinus.disabled = false;



}