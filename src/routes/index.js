const bodyParser = require('body-parser')

const products = require('./products.routes')
const categories = require('./categories.routes')
const users = require('./users.routes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        products,
        categories,
        users
    )
}