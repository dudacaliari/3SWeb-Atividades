const btns = document.querySelectorAll('button');
const h2 = document.querySelector('h2');

const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('btn2');
const btn3 = document.querySelector('btn3');
const btn4 = document.querySelector('btn4');
const btn5 = document.querySelector('btn5');
const btn6 = document.querySelector('btn6');
const btn7 = document.querySelector('btn7');
const btn8 = document.querySelector('btn8');
const btn9 = document.querySelector('btn9');

btns.forEach((el)=>{

    el.addEventListener('click', function (evt) {
        if (evt.detail === 1) {
            el.style.backgroundColor = "black";
            el.style.color = "white";
            el.innerText = "X";
        }
        else if (evt.detail === 2) {
            el.style.backgroundColor = "rgb(55, 163, 177)";
            el.style.color = "black";
            el.innerText = "O";
        }
    });
});

if (btn1.backgroundColor == "black")
{
    h2.innerText = "X Win!";
}
