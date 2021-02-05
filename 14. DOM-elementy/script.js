let ex1 = function (elementListByClass) {
    const elements = document.getElementsByClassName(elementListByClass);
    let arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr[i] = elements[i].tagName;
    }
    return arr;
}
let arr = ex1("more-divs");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let ex2 = function (elementByClass) {
    const elements = document.getElementsByClassName(elementByClass);
    console.log(elements[0].innerHTML);
    console.log(elements[0].outerHTML);
    console.log(elements[0].classList.toString());

    let arr = [];
    for (let i = 0; i < elements[0].classList.length; i++){
        arr[i] = elements[0].classList.item(i);
    }
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    console.log(elements[0].dataset);
}
ex2("short-list");

let ex3 = function (elementId){
    const element = document.getElementById(elementId);
    let a = +element.dataset.numberone;
    let b = +element.dataset.numbertwo;
    let c = +element.dataset.numberThree;

    let d = a+b+c;
    let e = a-b-c;

    return [d, e];
}
ex3("datasetCheck");

let ex4 = function(){
    const span = document.getElementById("spanText");
    span.innerText = "xyz";
}
ex4();

let ex5 = function(){
    const span = document.getElementById("spanText");
    span.classList.add("xyz");
    // span.className = "xyz";
    console.log(span.className);
}
ex5();

let ex6 = function(classes){
    
    let string = "";
    classes.classList.forEach(element => {
        console.log(element);
        string += element + "+"
    });
    
    console.log(string.slice(0, -1));
    classes.className = "";
    console.log("Usunięto wszystkie klasy.");
    console.log(classes.classList);
}
const classes = document.getElementById("classes");
ex6(classes);
const list = document.querySelectorAll("#id > li");
let ex7 = function(list){
    
    list.forEach((e) => {
        if(!e.hasAttribute("text")){
            e.dataset.text = "text";
        }
    });
    list.forEach((e) => {
        console.log(e);
    });
}
ex7(list);

let ex8a = function(string){
    return {newClass : string};
}

let ex8b = function(objClass){
    document.getElementById("myDiv").className = objClass.newClass;
}
ex8b(ex8a("string_z_parametru"));
console.log(document.getElementById("myDiv").className);

let ex9 = function(id){
    const element = document.getElementById(id);
    let random = Math.floor(Math.random() * 10);
    if(random % 2 == 0){
        element.className = "even";
    } else {
        element.className = "odd";
    }
}

ex9("numbers");
console.log(document.getElementById("numbers").className);

let ex10 = function(id){
    const element = document.getElementById(id);
    const list = element.getElementsByTagName("li");
    let arr = [];
    for(let i = 0; i < list.length; i++){
        arr[i] = list[i].innerText;
    }
    return arr;
}

console.log(ex10("longList"));

let ex11 = function(elementsList){
    for(let i = 0; i < elementsList.length; i ++){
        let r = Math.floor(Math.random() * 10);
        elementsList[i].dataset.old = elementsList[i].innerText;
        elementsList[i].innerText = r;
    }
}
const longList = document.getElementById("longList");
const liList = longList.getElementsByTagName("li");

ex11(liList);