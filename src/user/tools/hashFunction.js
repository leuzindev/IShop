const bcrypt = require("bcrypt")

const salt = bcrypt.genSaltSync(10)

function generateHashPassword(passwordUser){
    var savePassword = bcrypt.hashSync(passwordUser, salt);
    return savePassword;
}

module.exports = generateHashPassword;