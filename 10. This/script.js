function ex1(){
    function Person(name, surname, age, country, city){
      this.name = "A";
      this.surname = "A";
      this.age = 1;
      Person.prototype.country = "A";
      Person.prototype.city = "A";
      Person.prototype.print = function(){
        console.log("Name: " + this.name);
        console.log("Surname:" + this.surname);
        console.log("Age: " + this.age);
        console.log("Country: " + this.country);
        console.log("City: " + this.city);
      };
      this.incAge = function(){
        this.age++;
      };
    }
   
    let person1 = new Person("A", "A", 1, "A", "A");
    let person2 = new Person("B", "B", 1, "A", "A");
    console.log("Person 1:");
    person1.incAge();
    person1.print();
    console.log("Person 2:");
    person2.print();
  }
  
  function ex2(){
    function Person(name, surname, age, country, city){
      this.name = "A";
      this.surname = "A";
      this.age = 1;
      Person.prototype.country = "A";
      Person.prototype.city = "A";
      Person.prototype.print = function(){
        console.log("Name: " + this.name);
        console.log("Surname:" + this.surname);
        console.log("Age: " + this.age);
        console.log("Country: " + this.country);
        console.log("City: " + this.city);
      };
      this.incAge = function(){
        this.age++;
      };
    }
   
    let person1 = new Person("A", "A", 1, "A", "A");
    let person2 = new Person("B", "B", 1, "A", "A");
   
    person1.favFood = [];
    person1.printFood = function(){
      console.log(this.favFood);
    }
    person1.addFavFood = function(arg){
      this.favFood[this.favFood.length] = arg;
    }
   
    person2.favFood = [];
    person2.printFood = function(){
      console.log(this.favFood);
    }
    person2.addFavFood = function(arg){
      this.favFood[this.favFood.length] = arg;
    }
   
    person1.addFavFood("spaghetio");
    person1.printFood();
  }
  
  function ex3(){
    function Calc(){
      this.a = 0;
      this.b = 0;
      this.result = 0;
     
      this.input = function(a, b){
        this.a = a;
        this.b = b;
      }
     
      this.add = function(){
        this.result = this.a + this.b;  
      }
      this.add = function(){
          this.result = this.a - this.b;
      }
      this.add = function(){
          this.result = this.a * this.b;
      }
      this.add = function(){
        if(this.b == 0) console.log("Nie mozna dzielic przez 0.")
        else this.result = this.a / this.b;
      }
     
      this.printResult = function(){
        console.log("Wynik: " + this.result);
      }
    }
  }
  
  function ex4(){
    function Ladder(){
      this.currentStep = 0;
      this.maxStep = 10;
      this.stepUp = function(){
        if(this.currentStep == 0) console.log("Musisz najpierw wejsc na drabine.");
        else if(this.maxStep == 10) console.log("Jestes na szczycie.");
        else{
          console.log("Wchodzisz na " + ++this.currentStep + " stopien.");
        }
      }
      this.stepDown = function(){
        if(this.currentStep == 0) console.log("Niżej juz sie nie da.");
        else{
          console.log("Zchodzisz na " + --this.currentStep + " stopien.");
        }
      }
      this.getOn = function(){
        if(this.currentStep == 0){
          console.log("Chwytasz za drabine.");
          this.currentStep = 1;
        }
        else{
          console.log("Juz jestes na drabinie.");
        }
      }
      this.getOff = function(){
        if(this.currentStep < 2){
          console.log("Schodzisz z drabiny bezpiecznie.")
          this.currentStep = 0;
        } else if (this.currentStep < 4) {
          console.log("Zeskakujac skrecasz kostke.");
          this.currentStep = 0;
        } else if (this.currentStep < 6) {
          console.log("Zeskakujac lamiesz noge.")
          this.currentStep = 0;
        } else if (this.currentStep < 8){
          console.log("Zeskakujac lamiesz obie nogi.")
          this.currentStep = 0;
        } else {
          console.log("Zeskakujesz i lamiesz kark, GG.")
          this.currentStep = 0;
        }
      }
    }
  }
  