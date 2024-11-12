
/*
//Muda a cor da escrita

const label = document.querySelector('label');


btn.addEventListener('click', function(){
    label.style.background = 'rgb (211, 255, 43)';
    const inp = document.querySelector('input');
    alert(inp.value)
});
*/

const btns = document.querySelectorAll('button');
const header = document.querySelector('header');
const body = document.querySelector('body');

const geraCor = ()=>{
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);

    const rgb = `rgb(${R}, ${G}, ${B})`;

    return rgb;
}

const novoLocal = ()=>{
    const numero = Math.floor(Math.random()*700)+1;
    const pos = numero+"px";
    return pos;
}

/*
btns.forEach((el)=>{

    el.style.width = "80px";
    el.style.height = "80px";

    el.addEventListener('click', ()=>{
        el.style.backgroundColor = geraCor();
        el.style.color = geraCor();
    });
});
*/

//para vários botões
btns.forEach((el)=>{

    el.style.width = "80px";
    el.style.height = "80px";
    el.style.fontFamily = "rubik";
    el.style.margin = "5px";
    el.style.borderRadius = "10px";
    el.style.border = "1px";
    el.style.position ="relative";
    el.style.margin = "0 auto";

    el.addEventListener('mouseover', ()=>{
        el.style.backgroundColor = geraCor();
        el.style.color = geraCor();
        el.style.left = novoLocal();
        el.style.top = novoLocal();
    });
});

header.style.fontFamily = "rubik";
header.style.fontSize = "30px";
body.style.backgroundColor = "aliceblue";
