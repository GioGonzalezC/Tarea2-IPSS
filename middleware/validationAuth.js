const Joi = require('joi')

const userSchema =  Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(20).required(),
    role: Joi.string().min(3).max(20).required()
})

exports.authValidation = (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if(error){
        return res.status(400).json({
            status: "error",
            message: error.details[0].message
        })
    }
    next();
}