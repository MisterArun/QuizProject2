const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const shipwreckRouter = require('./routes/shipwreck.route.js');


app.use(bodyParser.json());

app.use('/shipwrecks', shipwreckRouter);

app.get('/', function(req, res) {
    res.send('Hello World')
})

const port = 8080

app.listen(port, () =>{ 
    console.log("Server listening on port "+ port)
});