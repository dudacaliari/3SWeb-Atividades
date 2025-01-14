const fetchPokemon = () => {
    const getPokemonUrl = id => 'https://pokeapi.co/api/v2/pokemon/${id}'

    const pokemonPromises = []

    for (let i = 1; i < 150; i++)
    {
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
            console.log(pokemons)

            const listPokemons = pokemons.reduce(() => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)

                accumulator += `
                <li class="card">
                <img class="card-image ${types}" />
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle>${types.join(' | ')}</p>

                </li> 
                
                `
                return accumulator
        }, '')
    })
}

fetchPokemon()