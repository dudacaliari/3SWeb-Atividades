/*
var lista = document.getElementsByTagName("p");

//Para mudar o que o parágrafo 1 apresenta
lista[0].innerText = "vaaai"; 

//Para o usuário digitar cada texto novo
for(let elemento of lista){
    elemento.innerText = prompt("Texto: ");
}

//pega todos os itens p
var arrayP = document.querySelectorAll("p");

console.log(arrayP);


const btn = document.querySelector('button');

//só pode add um alerta
btn.onclick = ()=>{
    alert ('Evita Dog!');
}

//pode add mais de um alerta seguido
btn.addEventListener('click', function(){
    alert ('Já disse pra evitar!')
});
*/

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const inp = document.querySelector("input");
    alert (inp.value);
});
