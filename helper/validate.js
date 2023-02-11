// Core mods
// Addon mods
const Validator = require('validatorjs');
// Custom mods

// -------------------- //
// S T A R T    C O D E //

const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = validator;