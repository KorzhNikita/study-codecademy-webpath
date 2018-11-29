const team = {
  _players: [],
  _games: [],
  get players(){
    return this._players
  },
  set players(player) {
    this._players.push(player);
  },
  get games(){
    return this._players
  },
  set games(game) {
    this._games.push(game);
  },
  addPlayer(firstName, lastName, age){
    const player = {
    	firstName:firstName, 
  		lastName: lastName, 
  		age: age
    }
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    const game = {
    	opponent:opponent, 
  		teamPoints: teamPoints, 
  		opponentPoints: opponentPoints
    }
    this._games.push(game);
  }
};
//adding players 
const player1 = {
  firstName:'Nick', 
  lastName: 'Korzh', 
  age: 12};
const player2 = {
  firstName:'Pablo', 
  lastName: 'Sanchez', 
  age: 11};
const player3 = {
  firstName:'Tom', 
  lastName: 'Hardy', 
  age: 10};
team.players = player1;
team.players = player2;
team.players = player3;

//adding games
const game1 = {
  opponent: 'Broncos', 
  teamPoints: 42, 
  opponentPoints: 27
};
const game2 = {
  opponent: 'Bulls', 
  teamPoints: 14, 
  opponentPoints: 58
};
const game3 = {
  opponent: 'LA', 
  teamPoints: 35, 
  opponentPoints: 35
};
team.games = game1;
team.games = game2;
team.games = game3;

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('LA', 35, 35);
team.addGame('LA', 35, 35);
team.addGame('LA', 35, 35);
console.log(team._players);
console.log(team._games);