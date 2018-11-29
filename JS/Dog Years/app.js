const myAge = 20;
//human age

let earlyYears = 2;
//the first years of a dog's life
earlyYears *= 10.5;

let laterYears = myAge - 2;
//the remaining years of the dog's life
laterYears *= 4;

console.log(`The age of the dog equal to the first two years of a person's life is ${earlyYears}`);
console.log(`The age of the dog equal to the remaining years of human life is ${laterYears}`);

const myAgeInDogYears = earlyYears + laterYears;
//total age

let myName = 'Korzh Nikita'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

