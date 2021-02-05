
let ex1 = function(){
  let i = 1;
  let timer = setInterval(() =>{
    console.log("Czesc po raz, " + i);
    i++;
    if(i == 15){
      clearTimeout(timer);
    }
  }, 1);
}

let ex2 = function(){
  let arr = [1, 2, 3, 4, 5];
  let waitForIt = setTimeout(()=>{
    console.log(arr);
  }, 2000);
 
    setTimeout(()=>{
      let i = 0;
      let timer = setInterval(()=>{
        console.log(arr[i]);
        i++
      }, 3000);
    }, 3000);
}


