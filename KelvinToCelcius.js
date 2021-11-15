//this variable contain kelvin grades.
const Kelvin = 293;
//celcius its the value of kelvin substrating 273
const Celcius = Kelvin - 273;
//this value it's rounded by Math method because this answer its decimal and i need a integer answer.
let Fahrenheit = Math.floor(Celcius * (9/5) + 32);

let Newton = Math.floor(Celcius * (33/100));

console.log('the temperature is ' + Fahrenheit + ' degrees Fahrenheit.');
console.log('the temperature is ' + Newton + ' degrees Newton.');

//by im_peguero