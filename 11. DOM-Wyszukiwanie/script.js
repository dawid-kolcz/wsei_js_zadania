//1
const elements = document.getElementsByClassName("list");
for(let i = 0; i < elements.length; i++){
  console.log(elements[i]);
}

//2

let getTag = (tag) => document.getElementsByTagName(tag);

const divs = getTag("div");
for(let i = 0; i < divs.length; i++){
  console.log(divs[i]);
}

//3
const list = document.getElementById("list");
console.log(list);

//4
const showdown = (lis, uls, spans, sid, sids) => {
    const allLis = document.querySelectorAll(lis);
    const allUls = document.querySelectorAll(uls);
    const allSpans = document.querySelectorAll(spans);

    const spanInDiv = document.querySelectorAll(sid);
    const spanInDivWID = document.querySelectorAll(sids);

    allLis.forEach(al => {console.log(al)});
    allUls.forEach(au => {console.log(au)});
    allSpans.forEach(as => {console.log(as)});

    spanInDiv.forEach(sid => {console.log(sid)});
    spanInDivWID.forEach(sidwid => {console.log(sidwid)});
};
showdown("li", "ul", "span", "div.list span", "div#spans span");