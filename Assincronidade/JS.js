/*
console.log("Primeiro!");

setTimeout(()=>{
    console.log("Segundo!")
} , 300);

console.log("Terceiro!");
*/

/*
const executaTimeout = (texto)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Segundo!");
            resolve();
        } , 3000);
    });
}

console.log("Primeiro!");

executaTimeout().then(()=>console.log("Terceiro!")); 
*/
/*Só depois de resolvida a promessa, realize o then*/ 

/*
const executaTimeout = (texto)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(texto);
            resolve();
        } , 3000);
    });
}

executaTimeout("Primeiro!")
    .then(()=>console.log("Segundo!")) 
    .then(()=>console.log("Terceiro!")); 
*/


/*Muda cores*/
const geraCor = ()=>{
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);

    const rgb = `rgb(${R}, ${G}, ${B})`;

    return rgb;
}

const executaTimeout = (cor)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = geraCor();
            resolve();
        } , 2000);
    });
}

executaTimeout()
    .then (()=>executaTimeout())
    .then (()=>executaTimeout())
    .then (()=>executaTimeout())
    .then (()=>executaTimeout())
    .then (()=>executaTimeout());