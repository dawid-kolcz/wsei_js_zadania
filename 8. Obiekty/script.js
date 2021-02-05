let ex1 = function(){
    let car = {
    color: "red",
    brand: "fiat"
    };
    console.log(car.kolor);
    console.log(car.marka);
  }
  
  let ex2 = function(){
    let car = {
    color: "red",
    brand: "fiat",
    changeColor: function(newColor){
      this.color = newColor;
    }
    };
   
    console.log(car.color);
    car.changeColor("blue");
    console.log(car.color);
  }
  
  let ex3 = function(arr){
    let obj = {
      sum: 0,
      arrSum: function(arrToSum){
        let tmpSum = 0;
        for(let i = 0; i < arrToSum.length; i++){
          tmpSum += arrToSum[i];
        }
        this.sum = tmpSum;
      },
    };
    obj.arrSum(arr);
    console.log(obj.sum);
  }
  
  let ex4 = function(){
    car = {
      name: "BMW",
      age: 12,
    };
   
    for(let key in car){
      console.log(key + ": " + car[key]);
    }
  }
  
  let ex5 = function(){
    let car = {
      engine : {
      on: true,
    }
    };
    console.log(car.engine.on);
  }
  
  let ex6 = function(){
    car = {};
    car.hello = "hello";
    car.logHello = function(){
      console.log(this.hello);
    };
    car.logHello();
  }
  