const { uuid } = require('uuidv4');
const jwt = require('jsonwebtoken');
require('dotenv').config()

function createTokenJwt(user){
    const payload = {
        id: uuid()
    }
    const token = jwt.sign(payload, "secret", { expiresIn: '15m' })
    return token;
}