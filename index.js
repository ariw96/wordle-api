const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const importData = require('./db.json');
let port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});