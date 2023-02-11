// Core mods
// Addon mods
// Custom mods
const validator = require('../helper/validate');


// -------------------- //
// S T A R T    C O D E //

exports.validateUser = async (req, res, next) => {
    const validationRule = {
        "firstName": "required|string",
        "lastName": "required|string",
        "username": "required|string",
        "email": "required|string|email",
        "password": ["required", "regex:/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\\D*\\d)(?=[^!@#$%^&*]*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,32}$/"],
        "profileImg": "required|string",
        "isAdmin": "required|boolean"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
}

// -------------------- //
// E N D   //   C O D E //