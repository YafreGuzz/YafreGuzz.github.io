alert('Hello');


const someArray = [1, 'John', 2, 'Petter', true, false];

for (let i = 0; i < someArray.length; i++) {
    if (typeof someArray[i] == 'string') continue;

    console.log(someArray[i], typeof someArray[i])

}
// Question:
// looping backwards, show all the value and data type in the Array;
// looping backwards, show  value and datatype of string vales only;


for (let i = someArray.length - 1; i >= 0; i--) {
    if (typeof someArray[i] == 'string') continue;

    console.log('looping backwards:', someArray[i], typeof someArray[i])
}


// Another loop


let rep = 10;

while (rep < 13) {
    console.log(`Still positive! current number:${rep}`)

    rep++;
}

let diceVal = Math.trunc(Math.random() * 10 + 1);

for (let i = 1; i <= 10; i++) {

    let diceVal = Math.trunc(Math.random() * 6 + 1);

    console.log(diceVal);
}


// Another Game:

// 2 players

// player 1: roll a dice eg.3  total: 3
// player 2: roll a dice eg.4   total: 4

// player 1: roll a dice eg.6  total: 9
// player 2: roll a dice eg.4   total: 8

// player 1: roll a dice eg.4  total: 13
// player 2: roll a dice eg.6   total: 14


// player 1: roll a dice eg.2  total: 15
// player 2: roll a dice eg.2   total: 16
// 16

//Another game:win case: total score 18

// player 1: roll a dice eg.6  total: 6
// player 2: roll a dice eg.4   total: 0

// player 1: roll a dice eg.4  total: 6
// player 2: roll a dice eg.6   total: 6


// player 1: roll a dice eg.2  total: 15
// player 2: roll a dice eg.2   total: 16


// const someArray = [1, 'John', 2, 'Petter', true, false];
// for (itr in object)
// {

// }

for (rep in someArray) {
    console.log('for in loop:', someArray[rep])
}



let rep1 = 10;
do {
    let diceVal = Math.trunc(Math.random() * 6 + 1);
    console.log('New Game:', diceVal);
    rep1--;
} while (rep1 > 100);

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelectorAll('p');
const input1 = document.querySelector('input');
const btn = document.querySelector('button');




console.log(h1);
console.log(h1.textContent);
console.log(h1.textContent);

h1.textContent = 'Hello again!';
h1.style.color = 'red';
h1.style.backgroundColor = 'lightblue';
h1.style.width = '30%';
console.log(p)
// document.querySelector('button').addEventListener('click', function () {

//     alert(`${input1.value}`);

//     // alert('Got your number');
//     h1.style.width = '60%';
//     h1.style.color = 'purple';
// });

btn.addEventListener('click', function () {
    alert(`${input1.value}`);
    if (input1.value === '8') {
        h2.textContent = 'You got 8 points'
    }
    // alert('Got your number');
    // h1.style.width = '60%';
    // h1.style.color = 'purple';
});

