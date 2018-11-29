const userInput = 'rock'
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'bomb') {
    userInput = 'CHEATER!!!'
    return userInput; 
  }
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Please, use correct game words!');
  }
}

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  } 
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Computer won!'
    } else {
      return 'User won!'
    } 
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'Computer won!'
    } else {
      return 'User won!'
    } 
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'Computer won!'
    } else {
      return 'User won!'
    } 
  }
  if (userChoice === 'CHEATER!!!') {
    return 'Oh you cunning piece of meat, you won!'
  }
}

const playGame = () => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  
  console.log('User choice is: ' + userChoice);
  console.log('Computer choice is: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


