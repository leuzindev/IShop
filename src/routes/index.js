const bodyParser = require('body-parser')

const products = require('../routes/products.routes')


module.exports = app => {
    app.use(
        bodyParser.json(),
        products
    )
}