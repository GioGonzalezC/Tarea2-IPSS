const dbUser = require('../models/user.models')

class UserServices {

    createUser(data) {
        const newUser = {
            ...data,
            createdAt: new Date()
        }
        dbUser.push(newUser);
        return newUser;
    };

    loginUser(req, res) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Usuario o Password no son correctos" })
        }
    
        const user = users.find(user => user.username === username && user.password === password);
        if (!user) {
            return res.status(401).json({ error: "Credenciales incorrectas" })
        }
    
        const JsonWebToken = jwt.sign({
            externalId: user.externalId,
            username: user.username,
            password: user.password
        },
            JWT_SECRET_KEY,
            {
                expiresIn: '1h'
            })
        res.status(200).json({ JsonWebToken })
    }

}

module.exports = new UserServices();