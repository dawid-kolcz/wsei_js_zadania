let ex1 = function(){
    console.log("Udało się");
  }
  
  let ex2 = function(arg){
    console.log(arg);
  }
  
  let ex3 = function(arr){
    let retArr = arr;
    return retArr;
  }
  
  let ex4 = function(str){
    let i = 0;
    let timer = setInterval(() => {
      console.log(str);
      i++;
      if(i == 5){
        clearTimeout(timer);
        console.log("Koniec");
      }
    }, 3000);
  }
  
  ex4("string");