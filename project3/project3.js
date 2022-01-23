const resetButton = document.querySelector('#reset');

const checkButton = document.querySelector('#check');

const input = document.querySelector('input');

let isGameOver = false;

let randomNumber = Math.floor(Math.random() * 100) + 1;

let vida = 10; 

const h2 = document.querySelector('h2');

const centerpic = document.querySelector('centerpic')

const won = document.querySelector('#won')






alert(randomNumber)

// INPUT


// input.addEventListener('click', function () {

//     alert(`${input1.value}`);
// })

// CHECK BUTTOn
checkButton.addEventListener('click', function () 
{
    console.log(`${input.value}`);
    if (Number(input.value) < randomNumber) {
        h2.textContent = 'Your Guess is too low!';
    } else if (randomNumber < Number(input.value)) {
        h2.textContent = 'Your Guess is too high!';

    } else {
        h2.textContent = 'You are correct';
        isGameOver = true;
        checkButton.disabled = true;
    }
});










// RESET BUTTON
resetButton.addEventListener('click', reset)


function reset() 
{
    isGameOver = false;
    checkButton.disabled = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    h2.textContent = "";
}


