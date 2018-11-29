const idealHours = 8;
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 10;
    case 'friday':
      return 6;
    case 'saturday':
      return 14;
    case 'sunday':
      return 11;
  }
}

const getActualSleepHours = () =>
		getSleepHours('monday') + 
		getSleepHours('tuesday') + 
		getSleepHours('wednesday') + 										
		getSleepHours('thursday') + 										
		getSleepHours('friday') + 											
		getSleepHours('saturday') + 											getSleepHours('sunday');

  console.log(`Actual Sleep Hours is: ${getActualSleepHours()}`);

const getIdealSleepHours  = idealHours => {
	idealHours = idealHours * 7;
	return idealHours;
}
  console.log(`Ideal Sleep Hours is: ${getIdealSleepHours(idealHours)}`);

const calculateSleepDebt = (idealHours) => {
 const actualSleepHours = getActualSleepHours();
 const idealSleepHours = getIdealSleepHours(idealHours);
 if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep.'
 } else if (actualSleepHours > idealSleepHours) {
    return 'You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed.'
 } else {
    return 'You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.'
  }
}

console.log(calculateSleepDebt(idealHours));
