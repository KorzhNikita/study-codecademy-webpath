let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

const registeredEarly = true;
const runnersAge = 18;
console.log(runnersAge);
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
console.log(raceNumber);

if (runnersAge > 18 && registeredEarly) {
  console.log(`Race will start at 9:30 am, your race number is ${raceNumber}. Good luck!`);
} else if 
  (runnersAge > 18 && !registeredEarly) {
  console.log(`Race will start at 11:00 am, your race number is ${raceNumber}. Good luck!`);
} else if 
  (runnersAge < 18) {
  console.log(`Race will start at 12:30 am, your race number is ${raceNumber}. Good luck!`);
} else { 
  console.log('Please, approach the registration desk!');
}