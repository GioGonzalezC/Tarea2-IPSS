const express = require('express')
const router = express.Router();
const pokemonController =  require('./../controllers/pokemon.controller')

router.get("/", pokemonController.listarPokemones)
router.get("/:id", pokemonController.getDetailPokemon)
router.get("/pokemon/trainer/mypokemon", validatePokemon, pokemonController.getAllMyPokemons)
router.post("/", validatePokemon,  pokemonController.createPokemon)
router.put("/:id", validatePokemon, pokemonController.updatePokemon)
router.delete("/:id", validatePokemon, pokemonController.deletePokemon)

module.exports = router;