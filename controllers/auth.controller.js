const userServices =  require('./../services/user.services')
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json())

const JWT_SECRET_KEY = "dsfsdfgsdsfzsc"

const users = [
    {
        id: 1,
        externalId: "sadsadsadasddsa",
        username: "test@mail.com",
        password: "123456",
        role: "admin"
    }
]

register = (req, res) => {
    userServices.createUser(req.body)
    res.status(201).json({ status: 'sucess' })
}

login = (req, res) => {
    userServices.loginUser(req.body)
    res.status(201).json({ status: 'sucess' })
}

module.exports = {
    register,
    login
};