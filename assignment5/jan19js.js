
console.log("A.");

let celsiusInput = prompt("Enter a Celsius Temperature"); 

let farenheit = (9/5) * celsiusInput + 32; 

console.log(`${celsiusInput}°C is ${farenheit}°F`); 

let farenheitInput = prompt("Enter a Farenherit Temperature"); 

let celsius = (5/9) * (farenheitInput - 32); 

console.log(`${farenheitInput}°F is ${celsius}°C`);



console.log("B.");

let lucasweight = prompt("Lucas, what is your mass?");

let lucasheight = prompt("what is your height?");

let lucasBMI = lucasweight / (lucasheight * lucasheight);

let johnweight = prompt("John, what is your mass?");

let johnheight = prompt("what is you height?");

let johnsBMI = johnweight / (johnheight * johnheight);

if(lucasBMI > johnsBMI)
{
    console.log(`Lucas BMI ${lucasBMI} is higher than Johns BMI ${johnsBMI}, that is ${Boolean = true}`); 
}
else
{
    console.log(`Lucas BMI ${lucasBMI} is higher than Johns BMI ${johnsBMI}, that is ${Boolean = false}`); 
}




console.log("C.")

let num = prompt("Enter any number: "); 

if(num == null || num == typeof(''))
{
    console.log("Please enter a number"); 
}

else if(num = 10)
{
    console.log("You win 10 points"); 
}

else if(num = 8)
{
    console.log("You win 8 points"); 
}

else if (num != 8 || num != 10)
{
    console.log("NOT MATCHED"); 
}


