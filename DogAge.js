//this is a user age.
const myAge = 34;
//
let earlyYears = 2;

earlyYears = earlyYears * 10.5;
//calculated myAge substract two
let laterYears = myAge - 2;
//calc
laterYears =  laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//this is a total age of dog.
let myAgeInDogYears = earlyYears + laterYears;
//this is my name with a method return lower case letters.
let myName = 'Pedro Peguero'.toLowerCase();

//prints my name and years of dog etc.
console.log(`My name is ${myName}. I am a ${myAge} years old in human years wich is dog age: ${myAgeInDogYears} years old in dog years.`);