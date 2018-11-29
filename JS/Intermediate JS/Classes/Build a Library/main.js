// MEDIA CLASS
class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  
  set isCheckedOut (isChecked) {
    this._isCheckedOut = isChecked;
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  getAverageRating () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this._ratings.reduce(reducer) / this._ratings.length;
  }
  
  addRating (rating) {
    this._ratings.push(rating);
  }
}

//BOOK CLASS
class Book extends Media {
  constructor (title, autor, pages) {
    super(title);
    this._autor = autor;
    this._pages = pages;
  }
  
  get autor () {
    return this._autor;
  }
  
  get pages () {
    return this._pages;
  }
}

//MOVIE CLASS
class Movie extends Media {
  constructor (director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director () {
    return this._director;
  }
  
  get runTime () {
    return this._runTime;
  }
}

const historyOfEverything = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());