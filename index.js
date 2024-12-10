const express = require('express')
const authRoute = require('./routes/auth.routes')
const pokemonRoute = require('./routes/pokemon.routes')
const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json())

const JWT_SECRET_KEY = "dsfsdfgsdsfzsc"

app.use('/auth', authRoute);
app.use('/pokemon', pokemonRoute)

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Mi api pokedex")
})