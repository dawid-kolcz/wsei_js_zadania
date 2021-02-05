let ex1 = function(){
    let arr = [1, 2, 3, 4, 5];
    console.log(arr);
  }
  
  let ex2 = function(){
    let arr = ["pierwszy", 2, "trzeci", 4, "piaty", 6];
    console.log(arr[0]);
    console.log(arr[1]);
   
    console.log(arr[arr.length - 1]);
   
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
    }
   
    for(let i = 1; i < arr.length; i+=2){
      console.log(arr[i]);
    }
   
    for(let i = 0; i < arr.length; i++){
      if(typeof(arr[i]) ===  'string'){
        console.log(arr[i] + " to string.")
      }
      if(Number.isInteger(arr[i])){
        console.log(arr[i] + " to numer.")
      }
    }
  }
  
  let ex3 = function(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
    // 1
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
     sum += arr[i];
    }
   
    // 2
    let sub = 0;
    for(let i = 0; i < arr.length; i++){
     sub -= arr[i];
    }
   
    // 3
    let avr = sum / arr.length;
   
    // 4 & 5
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        console.log(arr[i] + " jest parzyste.");
      }
      if(arr[i] % 2 != 0){
        console.log(arr[i] + " nie jest parzyste.");
      }
    }
   
    //6
    let highest = arr[0];
    for(let i = 1; i < arr.length; i++){
      if (arr[i] > highest) highest = arr[i]
    }
   
    //7
    let lowest = arr[0]
    for(let i = 1; i < arr.length; i++){
      if (arr[i] < highest) highest = arr[i]
    }
   
    for(let i = arr.length - 1; i >= 0; i--){
      console.log(arr[i]);
    }
  }
  
  let ex4 = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
     sum += arr[i];
    }
    console.log(sum);
  }
  
  let ex5 = function(arr){
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
     sum += arr[i];
    }
   
    avg = sum / arr.length;
   
    for(let i = 0; i < arr.length; i ++){
      console.log(arr[i] * avg);
    }
  }
  
  let ex6 = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0) sum += arr[i];
    }
    return sum / arr.length;
  }
  // Bubble sort
  let ex7 = function(arr){
    let unsorted = arr;
    let tmp = 0;
    for(let n = 0; n < unsorted.length; n++){
      for(let i = 0; i < unsorted.length; i++){
        if(unsorted[i] > unsorted[i+1]){
          tmp = unsorted[i];
          unsorted[i] = unsorted[i+1];
          unsorted[i+1] = tmp;
        }
      }
    }
    console.log(unsorted);
  }
  
  let ex8 = function(arr1, arr2){
    let retArr = [];
    let n = 0;
    let a = 0;
    let b = 0;
   
    if(arr1.length > arr2.length) n = arr1.length;
    else n = arr2.length
   
    for(let i = 0; i < n; i++){
      if(Number.isInteger(arr1[i])) a = arr1[i];    
      else a = 0;
      if(Number.isInteger(arr2[i])) b = arr2[i];    
      else b = 0;
      retArr[i] = a + b;
    }
   
    return retArr;
  }
  
  let ex9 = function(arr){
    let retArr = [];
   
    for(let i = 0; i < arr.length; i++){
      retArr[i] = -arr[i];
    }
   
    return retArr;
  }
  