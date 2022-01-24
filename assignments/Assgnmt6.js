console.log("A.")

function CheckWinner()
{
    const NetsScore = (Nets1 + Nets2 + Nets3) / 3; 
    const KnicksScore = (Knicks1 + Knicks2 + Knicks3) / 3; 

    if((NetsScore > KnicksScore) && (NetsScore > 100))
    {
        console.log(`Nets win with a score of: ${Nets1}|${Nets2}|${Nets3}`); 
    }
    else if((NetsScore < KnicksScore) && (KnicksScore > 100))
    {
        console.log(`Knicks win with a score of: ${Knicks1}|${Knicks2}|${Knicks3}`);
    }
    if((NetsScore === KnicksScore) && (NetsScore > 100 && KnicksScore >100))
    {
        console.log("It's a draw!"); 
    }

}

Nets1 = prompt("Enter the first score for Nets: "); 
Nets2 = prompt("Second score: "); 
Nets3 = prompt("Third score: "); 
Knicks1 = prompt("Enter the first score for Knicks: ");
Knicks2 = prompt("Second score: "); 
Knicks3 = prompt("Third score: "); 

CheckWinner(Nets1, Nets2, Nets3, Knicks1, Knicks2, Knicks3);






console.log("B.")

const tipVal = prompt("Enter the Value: "); 

tipVal > 30 && tipVal < 100 ? console.log(`The bill was ${tipVal}, the tip was 15%, and the total is ${Number(tipVal) + 15}`)
 : console.log(`The bill was ${tipVal}, the tip was 20%, and the total ${Number(tipVal) + 20 }`);



 console.log("C.")

 const Celcius = prompt("Celcius: "); 

 let farenheit = (9/5) * Celcius + 32; 

 let ConvertCelsiusToFahrenheit = () => 
 {
    const Celcius = prompt("Celcius: "); 

    let farenheit = (9/5) * Celcius + 32; 

    console.log(this.farenheit); 
 }

 let ConvertFahrenheitToCelcius = () => 
 {
    const farenheit = prompt("Farenheit: "); 

    let Celcius =  (5/9) * (farenheit - 32); 

    console.log(this.Celcius); 
 }
