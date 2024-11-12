
const header = document.querySelector('header');
const body = document.querySelector('body');
const Altera = document.querySelector('div');

document.querySelector('div');

const geraCor = ()=>{
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);

    const rgb = `rgb(${R}, ${G}, ${B})`;

    return rgb;
}

Altera.innerText = "Esconde";

Altera.addEventListener('click', (e)=>{
    Altera.style.display = 'none';
});

btn.addEventListener('click', (e)=>{
    Altera.style.backgroundColor = geraCor();
    e.s
});





/*
btns.forEach((el)=>{

    el.style.width = "80px";
    el.style.height = "80px";
    el.style.fontFamily = "rubik";
    el.style.margin = "5px";
    el.style.borderRadius = "10px";
    el.style.border = "1px";
    el.style.position ="relative";

    window.addEventListener('keydown', (e)=>{
        switch(e.code){
            case 'ArrowUp':
                el.style.bottom = '60px'; 
                el.style.backgroundColor = geraCor();
                break;
            case 'ArrowDown':
                el.style.top = '60px'; 
                el.style.backgroundColor = geraCor();
                break;
            case 'ArrowLeft':
                el.style.right = '60px'; 
                el.style.backgroundColor = geraCor();
                break;
            case 'ArrowRight':
                el.style.left = '60px'; 
                el.style.backgroundColor = geraCor();
                break;
            default:
                console.log('ignorado');
        }
    });

});
*/

header.style.fontFamily = "rubik";
header.style.fontSize = "30px";
body.style.backgroundColor = "aliceblue";
