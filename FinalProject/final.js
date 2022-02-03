const begin = document.querySelector('.btn3');
let ready2 = document.querySelector('.btn2');
let ready1 = document.querySelector('.btn1');
const input1 = document.querySelector('.P1');
const input2 = document.querySelector('.P2');

ready1.addEventListener('click', function()
{
  document.querySelector('.del').style.display = "none";
  document.querySelector('h2').style.color = "white";
  document.querySelector('h2').textContent = `Player 1\n\n\n ${input1.value}`;
})

ready2.addEventListener('click', function()
{
  document.querySelector('.del').style.display = "none";
  document.querySelector('h3').style.color = "white";
  document.querySelector('h3').textContent = `Player 2\n\n\n ${input2.value}`;
})
