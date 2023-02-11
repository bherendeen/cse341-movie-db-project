// Core mods
// Addon mods
const passwordComplexity = require('joi-password-complexity');
// Custom mods

// -------------------- //
// S T A R T    C O D E //

const complexityOptions = {
    min: 8,
    max: 26,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4
};

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports.passwordPass = (passwordToCheck) => {
    return passwordComplexity(complexityOptions, 'Password').validate(passwordToCheck);
};