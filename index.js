const express = require ('express');
const bodyParser = require('body-parser');
const usuario = require ('./usuario.json');
const app = express();
app.use(bodyParser.json());

app.get('/rede/usuario', (req, res) => {
        res.json(usuario);
     });


app.listen(4000, () => {
    console.log("Porta: 4000");
    console.log(usuario)
});
