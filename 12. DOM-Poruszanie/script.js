//1
const buz = document.getElementById("buz");
const parentBuz = buz.parentElement;
console.log(parentBuz);

const baz = document.getElementById("baz");
const bazSibling = baz.previousElementSibling;
console.log(bazSibling);

const foo = document.getElementById("foo");
const fooChildren = foo.children;
for(let i = 0; i < fooChildren.length; i++){
  console.log(fooChildren[i]);
}

const fooParent = foo.parentElement;
console.log(fooParent);

const fooFirstChild = foo.firstElementChild;
console.log(fooFirstChild);

/**
  Returns middle child if elements are odd, 
  else returns both middle children.
*/
let getMiddleChild = (element) => {
  let index = Math.floor(element.childElementCount / 2);
  return element.children[index];
}

const fooMiddleChild = getMiddleChild(foo);
console.log(fooMiddleChild);

//2
let addEventToId = function(elementId){
  const element = document.getElementById(elementId);
  
  let logText = function(){
    console.log(element.textContent.trim());
  }
  
  element.addEventListener("click", logText);
}
addEventToId("ex2");

//3
let addEventsToChildren = function(elementId){
  const children = document.getElementById(elementId).children;
  for(let i = 0; i < children.length; i++){
    children[i].querySelector("button")
      .addEventListener("click", () => {
        let spanElement = children[i].querySelector("span");
        if(spanElement.style.display == "none"){
          spanElement.style.display = "inline";
        }else{
          spanElement.style.display = "none";
        }
      });
  }
}
addEventsToChildren("ex3");

//4
let addEventsToChildrenRandomParentColor = function(elementId){
  const children = document.getElementById(elementId).children;
  for(let i = 0; i < children.length; i++){
    children[i].querySelector("button")
      .addEventListener("click", () => {
        let randomColor = "#"
        + Math.floor(Math.random()*16777215).toString(16);
        children[i].querySelector("button")
          .parentElement.style.background = randomColor;
      });
  }
}
addEventsToChildrenRandomParentColor("ex3");

//5
let onlyFirst = function(elementId){
  const parentElement = document.getElementById("ex5");
  for(let i = 0; i < 3; i++){
    parentElement.children[i].addEventListener("mouseover", function(){
      parentElement.querySelector("ul")
        .firstElementChild.style.backgroundColor = this.style.backgroundColor;
    });
  }
}

//onlyFirst("ex5");

let onlyLast = function(elementId){
   const parentElement = document.getElementById("ex5");
  for(let i = 0; i < 3; i++){
    parentElement.children[i].addEventListener("mouseover", function(){
      parentElement.querySelector("ul")
        .lastElementChild.style.backgroundColor = this.style.backgroundColor;
    });
  }
}

//onlyLast("ex5");

let evenElements = function(elementId){
  const parentElement = document.getElementById("ex5");
  for(let i = 0; i < 3; i++){
    parentElement.children[i].addEventListener("mouseover", function(){
      let list = parentElement.querySelector("ul");
      for(let i = 1; i < list.children.length; i += 2){
        list.children[i].style.backgroundColor = this.style.backgroundColor;
      }
    });
  }
}

//evenElements("ex5");

let allElements = function(elementId){
  const parentElement = document.getElementById("ex5");
  for(let i = 0; i < 3; i++){
    parentElement.children[i].addEventListener("mouseover", function(){
      let list = parentElement.querySelector("ul");
      for(let i = 0; i < list.children.length; i++)
      list.children[i].style.backgroundColor = this.style.backgroundColor;
    });
  }
}

//allElements("ex5");

let wholeList = function(elementId){
  const parentElement = document.getElementById("ex5");
  for(let i = 0; i < 3; i++){
    parentElement.children[i].addEventListener("mouseover", function(){
      parentElement.querySelector("ul")
        .style.backgroundColor = this.style.backgroundColor;
    });
  }
}

//wholeList("ex5");

//6
const ad1 = document.getElementById("ex6")
  .firstElementChild.firstElementChild.firstElementChild;
console.log(ad1);

const ad2 = document.getElementById("ex6")
  .firstElementChild.parentElement.firstElementChild
  .firstElementChild.nextElementSibling.parentElement;
console.log(ad2);
//rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
const ad3 = document.getElementById("ex6")
  .parentElement.firstElementChild.parentElement
  .children[1].firstElementChild.firstElementChild
.firstElementChild;
console.log(ad3);
