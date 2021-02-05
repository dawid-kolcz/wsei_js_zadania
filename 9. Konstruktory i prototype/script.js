let ex1 = function(){
  function Person(name, surname, age, country, city, language){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
  }
 
  Person.prototype.changeAge = function(age){
    this.age = age;
  }
  Person.prototype.changeCity = function(city){
    this.city = city;
  }
 
  p1 = new Person("A", "A", 1, "A", "A", "A" );
  p2 = new Person("B", "B", 2, "B", "B", "A");
  p3 = new Person("C", "C", 3, "C", "C", "A");
  p4 = new Person("D", "D", 4, "D", "D", "A");
  p5 = new Person("E", "E", 5, "E", "E", "A");
 
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
  console.log(p5);
 
  p1.changeAge(6);
  p2.changeCity("BB");
 
  console.log(p1);
  console.log(p2);
}

let ex2 = function(){
  function Calc(){
    this.result = 0;
  }
  Calc.prototype.add = function(a, b){
    this.result = a + b;
  }
  Calc.prototype.sub = function(a, b){
    this.result = a - b;
  }
  Calc.prototype.mul = function(a, b){
    this.result = a * b;
  }
  Calc.prototype.div = function(a, b){
    this.result = a / b;
  }
  Calc.prototype.clearResult = function(){
    this.result = 0;
  }
  Calc.prototype.printResult = function(){
    console.log(this.result);
  }
 
  let c1 = new Calc();
 
  c1.add(1, 3);
  c1.printResult();
  c1.clearResult();
  c1.printResult();
  c1.mul(2, 3);
 
  c2 = new Calc();
  c2.div(9,3);
  c2.printResult();
}

let ex3 = function(){
  function Game(){
    Game.prototype.toGuess = 0;
    Game.prototype.timerA = null;
    Game.prototype.timerB = null;
   
    this.randomGuess = function(){
      Game.prototype.toGuess = Math.floor(Math.random() * 10 ) + 1;
      console.log("Liczba to: " + Game.prototype.toGuess);
    }
   
    this.guess = function(){
      if(Game.prototype.toGuess > 5) {
        console.log("Koniec");
        clearInterval(Game.prototype.timerA);
        clearInterval(Game.prototype.timerB)
      }
    }
    Game.prototype.partA = function(){
      Game.prototype.timerA = setInterval(this.randomGuess, 1000);
    }
   
    Game.prototype.partB = function(){
      Game.prototype.timerB = setInterval(this.guess, 1000);
    }
  }
 
  let g1 = new Game();
  let g2 = new Game();
 
  g1.partA();
  g2.partB();
}