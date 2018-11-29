const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
  	return this._courses.appetizers
	},
  get mains(){
    return this._courses.mains
  },
  get desserts(){
    return this._courses.desserts
  },
  set appetizers(appetizers){
  	this._courses.appetizers = appetizers
	},
  set mains(mains){
    this._courses.mains = mains
  },
  set desserts(desserts){
    this._courses.desserts = desserts
  },
  get courses(){
    return {
      appetizers: this.this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    }
  },
  addDishToCourse:function (courseName, dishName, dishPrice) {
    const dish = {
      dish: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.dish}, ${mains.dish}, ${desserts.dish}. The price is $ ${totalPrice}.`;
  }
};

//appetizers adds
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Spicy Carrot Salad', 7);
menu.addDishToCourse('appetizers', 'Asian Apple Slaw', 2.5);
//mains adds
menu.addDishToCourse('mains', 'Apple Cider-Glazed Salmon', 10);
menu.addDishToCourse('mains', 'Main Lobster Roll', 12);
menu.addDishToCourse('mains', 'Lighter Chicken Parmesan', 8);
//desserts adds
menu.addDishToCourse('desserts', 'Chocolate Dessert Salami', 1.25);
menu.addDishToCourse('desserts', 'Horchata Brownies', 0.75);
menu.addDishToCourse('desserts', 'Mixed Fruit Tart', 2);

const meal = menu.generateRandomMeal();
console.log(meal);