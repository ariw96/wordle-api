const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const importData = require('./db.json');
let port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(importData);
});
app.post('/', (req, res) => {
    console.log(req.body);
 res.status(201).send(req.body);

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});