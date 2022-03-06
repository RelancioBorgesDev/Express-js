const express = require('express');

const app = express();

const port = 3000

app.use(loogar)
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log('Working on ' + port);
})

function loogar(req, res, next){
    console.log('Logar');
    next()
}