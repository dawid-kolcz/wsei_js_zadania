//1
const click = document.getElementById("test-event");
click.addEventListener("click", function(event){
  console.log(event);
});

document.addEventListener("mousemove", function(event){
 console.log(event);
});

const mouseOver = document.getElementById("test-event");
mouseOver.addEventListener("mouseover", function(event){
  console.log(event);                           
});

document.addEventListener("keydown", function(event){
  console.log(event);
});

document.addEventListener("scroll", function(event){
  console.log(event);
});

document.getElementById("input-test")
  .addEventListener("input", function(event){
  console.log(event);
});

//2
let ex2 = function(elementId){
    const buttonEx2 = document.querySelector("#" + elementId);
    buttonEx2.addEventListener("click", function(){
        document.querySelector("#span-ex2").innerText = buttonEx2.dataset.text;
    });
}
ex2("ex2");

//3
let ex3 = function(elementId){
    const rect = document.querySelector("#" + elementId);
    rect.addEventListener("mouseover", function(){
      rect.style.backgroundColor = "#0000FF"
    });
    rect.addEventListener("mouseout", function(){
      rect.style.backgroundColor = "#FF0000";
    });
  }
  ex3("ex3");

//4
let ex4 = function(elementId){
  const inputBox = document.querySelector("#" + elementId);
  inputBox.addEventListener("input", function(event){
    if(/\d/.test(event.target.value)){
      document.querySelector("#ex3-err").innerText = "Cyfry zabronione.";
    }
    else{
      document.querySelector("#ex3-err").innerText = "";
    }
  });
}
ex4("input-test");

//5
let ex5 = function(elementId){
  const button = document.querySelector("#" + elementId);
  const div = document.querySelector("#ex5");

  let counter = 0;
  let span = document.createElement("span");
  span.innerText = 0;
  div.appendChild(span);

  let counterPlusPlus = function(){
    counter++;
    div.querySelector("span").innerText = counter;
    if(counter >= 10){
      button.removeEventListener("click", counterPlusPlus);
    }
  }

  button.addEventListener("click", counterPlusPlus); 
}
ex5("ex5-button");

//6
let ex6 = function(){
  document.addEventListener("scroll", function(){
    if(window.scrollY > 200){
      document.body.style.backgroundColor = "#FF0000";
    }else{
      document.body.style.backgroundColor = "#FFFFFF";
    }
  });
}
ex6();

//7
let ex7 = function(){
  const calc = document.querySelector("#calculator");
  const buttons = calc.querySelectorAll("button");
  const input = calc.querySelector("input");
  let evaluated = false;
  let notEmpty = true;

  for(let i = 0; i < buttons.length - 1; i++){
    buttons[i].addEventListener("click", function(event){
      if(evaluated) {
        input.value = "";
        evaluated = false;
      }
      input.value = input.value + buttons[i].innerText;
    });
  }
  buttons[buttons.length - 1].addEventListener("click", function(){
    input.value = eval(input.value);
    evaluated = true;
  });
}
ex7();