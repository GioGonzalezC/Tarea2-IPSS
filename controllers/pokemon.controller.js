const pokemonServices = require('../services/pokemon.services')

listarPokemones = (req, res) => {
    const pokemones = pokemonServices.getAllPokemons()
    res.status(200).json({
        status: 'Sucess',
        data: {
            pokemones
        }
    })
}

getDetailPokemon = (req, res) => {
    const pokemones = pokemonServices.getDetailPokemon()
    res.status(200).json({
        status: 'Sucess',
        data: {
            pokemones
        }
    })
}

getAllMyPokemones = (req, res) => {
    const pokemones = pokemonServices.getAllMyPokemones()
    res.status(200).json({
        status: 'Sucess',
        data: {
            pokemones
        }
    })
}

getAllMyPokemons = (req, res) => {
    const pokemones = pokemonServices.getAllMyPokemons()
    res.status(200).json({
        status: 'Sucess',
        data: {
            pokemones
        }
    })
}

createPokemon = (req, res) => {
    pokemonServices.createPokemon(req.body)
    res.status(201).json({ status: 'Sucess' })
}


updatePokemon = (req, res) => {
    const updatePokemones = pokemonServices.updatePokemon(req.body)
    res.status(200).json({
        status: 'Sucess',
        data: {
            updatePokemones
        }
    })
}

deletePokemon = (req, res) => {
    const updatePokemones = pokemonServices.deletePokemon(req.body)
    res.status(200).json({
        status: 'Sucess',
        data: {
            updatePokemones
        }
    })
}

module.exports = {
    listarPokemones,
    getDetailPokemon,
    getAllMyPokemons,
    createPokemon,
    updatePokemon,
    deletePokemon
};