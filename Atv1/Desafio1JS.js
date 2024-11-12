const urlImagens = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const urlDados = 'https://pokeapi.co/api/v2/pokemon/'

    for (let i=0; i < 151; i++){

        var pokemon = document.createElement("div");

        var imagem = document.createElement("img");
        imagem.src = urlImagens+(i+1)+".png";

        var numero = document.createElement("span");
        numero.innerText = "#"+(i+1);

        pokemon.appendChild(imagem);
        pokemon.appendChild(numero);

        document.body.appendChild(pokemon);

        pokemon.classList.add("pokemon");
    }

    var btnPesq = document.getElementById("btnPesq");
    btnPesq.addEventListener("click", function() {

        var Novopokemon = document.createElement("div");
        // pega o valor digitado na barra de pesquisa
        var numeroPokemon = document.getElementById("barraPesq").value;
        // cria a URL completa da imagem do Pokémon
        var urlPokemon = urlImagens + numeroPokemon + ".png";
        // cria um novo elemento de imagem com a URL completa
        var novaImagem = document.createElement("img");
        novaImagem.src = urlPokemon;

        var novoNumero = document.createElement("span");
        novoNumero.innerText = "#"+ numeroPokemon;
        // adiciona o novo elemento de imagem à página
        Novopokemon.appendChild(novaImagem);
        Novopokemon.appendChild(novoNumero);

        document.body.appendChild(Novopokemon);

        Novopokemon.classList.add("Novopokemon");
    });

/*
function search_pokemon() {

    let input = document.getElementById('barraPesq').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pokemon');


      
    for (i = 0; i < 1008; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            var pokemon = document.createElement("div");

            var imagem = document.createElement("img");
            imagem.src = baseURL+(i+1)+".png";
        
            var numero = document.createElement("span");
            numero.innerText = "#"+(i+1);
        
            pokemon.appendChild(imagem);
            pokemon.appendChild(numero);
        
            document.body.appendChild(pokemon);
        
            pokemon.classList.add("pokemon");                 
        }
    }
}
*/