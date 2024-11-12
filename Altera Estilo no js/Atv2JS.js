const body = document.querySelector('body');
const h1 = document.querySelector ('h1');
const inp = document.querySelector ('input');

body.style.fontFamily = "rubik";
body.style.fontSize = "15px";
body.style.backgroundColor = "aliceblue";

inp.addEventListener('input', (e)=> {
    h1.innerText = inp.value;
})