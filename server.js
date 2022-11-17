const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname)));

app.set('view engine', 'ejs');

app.use(routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Escutando: http://localhost:8000');
});