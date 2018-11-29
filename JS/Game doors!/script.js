const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

const startButton = document.getElementById('start');
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let currentlyPlaying = true;

door1.onclick = () => {
  if (isNotClicked(doorImage1) && currentlyPlaying) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}
door2.onclick = () => {
  if (isNotClicked(doorImage2) && currentlyPlaying) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  } 
}
door3.onclick = () => {
  if (isNotClicked(doorImage3) && currentlyPlaying) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
  	gameOver('win');
  } else if (isBot(door)){
    gameOver('lose');
  }
} 

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else if (status === 'lose') {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

const isNotClicked = (door) => {
  if (door.src === closedDoorPath) {
  return true;
	} else {
  return false;
	}
}

const isBot = (door) => {
  if (door.src === botDoorPath) {
  return true;
	} else {
  return false;
	}
}

const startRound = () => {
  	doorImage1.src = closedDoorPath;
  	doorImage2.src = closedDoorPath;
  	doorImage3.src = closedDoorPath;
  	numClosedDoors = 3;
  	startButton.innerHTML = 'Good luck!';
  	currentlyPlaying = true;
  	randomChoreDoorGenerator();
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

startRound();
