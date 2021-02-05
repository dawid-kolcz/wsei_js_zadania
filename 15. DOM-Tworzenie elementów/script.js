function ex1(){
    const newDiv = document.createElement("div");
    newDiv.innerText = "To jest nowy element";
    document.querySelector("#root").appendChild(newDiv);
}

function ex2(){
    const newUl = document.createElement("ul");
    document.body.appendChild(newUl);
    
    let arr = ['nie', 'przepadam', 'za', 'owocami', 'jablko', 'zjem'];

    for(let i = 0; i < arr.length; i++){
        let newLi = document.createElement("li");
        newUl.appendChild(newLi);
        newLi.innerText = arr[i];
    }
}

function ex3(){
    ex2();
    const ul = document.querySelector("ul");
    const list = document.querySelectorAll("ul li");

    document.addEventListener("DOMContentLoaded", (e) => {
        for(let i = 0; i < list.length; i+=2){
            ul.removeChild(list[i]);
        }
    });
    console.log(list);
}

function ex4(){
    const button = document.createElement("button");
    button.innerText = "Delete me";

    const div = document.querySelector("#root");
    div.appendChild(button);

    button.addEventListener("click", (e) =>{
        div.removeChild(button);
    });
}

function ex5(){
    let r = Math.floor(Math.random() * 10 ) + 1;

    const root = document.querySelector("#root");
    
    for(let i = 0; i < r; i++){
        let div = document.createElement("div");
        div.innerText = `to jest div numer ${i}`;

        root.appendChild(div);
    }
}

function ex6(){
    let obj = { 
        div1: 'to jest div', 
        span1: 'to jest span', 
        div2: { 
            div3: 'to jest div', 
        }, 
        span2: 'to jest span', 
    }
    const root = document.querySelector("#root");

    const div1 = document.createElement("div");
    div1.innerText = "to jest div";
    root.appendChild(div1);

    const span1 = document.createElement("span");
    span1.innerText = "to jest span";
    root.appendChild(span1);

    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    div3.innerText = "to jest div";
    div2.appendChild(div3);
    root.appendChild(div2);

    const span2 = document.createElement("span");
    span2.innerText = "to jest span";
    root.appendChild(span2);
}

function ex7(){
    const root = document.querySelector("#root");

    const ul1div = document.createElement("div");
    
    const ul1 = document.createElement("ul");

    let items = ["owoce", "rozne", "bananowce", "i", "nie", "tylko"];
    for (let i = 0; i < items.length; i++){
        const li = document.createElement("li");
        li.innerText = `${items[i]}`;
        ul1.appendChild(li);
    }
    ul1div.appendChild(ul1);

    const button1 = document.createElement("button");
    button1.innerText = "Move to other list";
    button1.addEventListener("click", (e) => {
        ul2.appendChild(ul1.lastElementChild);
        button2.disabled = false;

        if(ul1.innerHTML == "") button1.disabled = true;
    });
    
    // other list
    const ul2div = document.createElement("div");
    
    const ul2 = document.createElement("ul");
    ul2div.appendChild(ul2);
    const button2 = document.createElement("button");
    button2.innerText = "Move to other list";
    button2.disabled = true;
    button2.addEventListener("click", (e) => {
        ul1.appendChild(ul2.lastElementChild);
        button1.disabled = false

        if(ul2.innerHTML == "") button2.disabled = true;
    });

    ul1div.appendChild(button1);    
    root.appendChild(ul1div);

    ul2div.appendChild(button2);    
    root.appendChild(ul2div);
}

function ex8(){
    function create(w, t, c, n){
        for(let i = 0; i < n; i++){
            let item = document.createElement(w);
            item.innerText = t;
            item.style.color = c;

            document.body.appendChild(item);
        }
    }
    const form = document.createElement("form");

    const what = document.createElement("input");
    form.appendChild(what);
    const text = document.createElement("input");
    form.appendChild(text);
    const color = document.createElement("input");   
    form.appendChild(color);
    const times = document.createElement("input");   
    form.appendChild(times);

    const button = document.createElement("button");
    button.innerText = "Stworz element";
    button.addEventListener("click", (e) =>{
        create(what.value, text.value, color.value, times.value);
    });
    document.body.appendChild(button);

    document.body.appendChild(form);

}

function ex9(){
    const form = document.createElement("form");

    const name = document.createElement("input");
    name.name = "name";
    const surname = document.createElement("input");
    surname.name = "surname";
    const age = document.createElement("input");
    age.name = "age";
    const kids = document.createElement("input");
    kids.name = "kids";

    const br = document.createElement("br");
    
    const nl = document.createElement("label")
    nl.innerText = "Imie";
    const sl = document.createElement("label")
    sl.innerText = "Nazwisko";
    const al = document.createElement("label")
    al.innerText = "Wiek";
    const kl = document.createElement("label")
    kl.innerText = "Ilosc dzieci";
    form.append(nl);
    form.appendChild(name);
    form.append(sl);
    form.appendChild(surname);
    form.append(al);
    form.appendChild(age);
    form.append(kl);
    form.appendChild(kids);
    form.appendChild(br);

    const more = document.createElement("button");
    more.innerText = "Wiecej";
    more.addEventListener("click", (e) =>{
        const n = document.createElement("input");
        n.name = "name";
        const s = document.createElement("input");
        s.name = "surname";
        const a = document.createElement("input");
        a.name = "age";
        const k = document.createElement("input");
        k.name = "kids";
        const nnl = document.createElement("label")
        nnl.innerText = "Imie";
        const nsl = document.createElement("label")
        nsl.innerText = "Nazwisko";
        const nal = document.createElement("label")
        nal.innerText = "Wiek";
        const nkl = document.createElement("label")
        nkl.innerText = "Ilosc dzieci";
        const nbr = document.createElement("br");
        form.append(nnl);
        form.appendChild(n);
        form.append(nsl);
        form.appendChild(s);
        form.append(nal);
        form.appendChild(a);
        form.append(nkl);
        form.appendChild(k);
        form.appendChild(nbr);
    });


    document.body.appendChild(more);
    document.body.appendChild(form);

    const create = document.createElement("button");
    create.innerText = "Utworz";
    create.addEventListener("click", (e) =>{
        const table = document.createElement("table");

        let tr = table.insertRow();
        let td = tr.insertCell();
        td.innerText = "Imie";
        td = tr.insertCell();
        td.innerText = "Nazwisko";
        td = tr.insertCell();
        td.innerText = "Wiek";
        td = tr.insertCell();
        td.innerText = "Ilosc dzieci";

        let iname = document.querySelectorAll('input[name="name"]');
        let isurname = document.querySelectorAll('input[name="surname"]');
        let iage = document.querySelectorAll('input[name="age"]');
        let ikids = document.querySelectorAll('input[name="kids"]');

        for(let i = 0; i < iname.length; i++){
            let itr = table.insertRow();
            let ntd = itr.insertCell();
            ntd.innerText = iname[i].value;
            let std = itr.insertCell();
            std.innerText = isurname[i].value;
            let atd = itr.insertCell();
            atd.innerText = iage[i].value;
            let ktd = itr.insertCell();
            ktd.innerText = ikids[i].value;
            let btd = itr.insertCell();
            let b = document.createElement("button");
            b.innerText = "Remove row";
            b.addEventListener("click", (e) =>{
                // Nie wie jak zrobic zeby sie kasowalo.
            });
            btd.appendChild(b);

        }
        document.body.appendChild(table);

    });

    document.body.appendChild(create);
}

function ex10(){
    // Nie wiem jak to zrobic.
}

function ex11(){

}

function ex12(){

}

function ex13(){

}

function ex14(){

}