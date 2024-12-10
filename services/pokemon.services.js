const dbPokemon = require('../models/pokemon.models')

class PokemonServices {

    getAllPokemons() {
        return dbPokemon
    }

    getDetailPokemon(data) {
        const idPokemon = {
            ...data
        }
        dbPokemon.push(idPokemon);
        return idPokemon;
    };

    getAllMyPokemons(data) {
        const idPokemon = {
            ...data
        }
        dbPokemon.push(idPokemon);
        return idPokemon;
    };

    createPokemon(data){
        const newPokemon = {
            ...data,
            createdAt: new Date()
        }
        dbPokemon.push(newPokemon);
        return newPokemon;
    };

    updatePokemon(data){
        const updatePokemon = {
            ...data,
            modifiedAt: new Date()
        }
        dbPokemon.push(updatePokemon);
        return updatePokemon;
    };

    deletePokemon(data){
        const deletePokemon = {
            ...data
        }
        dbPokemon.push(deletePokemon);
        return deletePokemon;
    };
}

module.exports = new PokemonServices();