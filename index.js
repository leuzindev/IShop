const express = require('express');
const routes = require('./src/routes');

const app = express();

routes(app);




app.listen(3080, () => {
    console.log("Escutando em 3080");
});

