const express   = require('express');
const nodeCache = require('./cache/node-cache');
const flatCache = require('./cache/flat-cache');
const data      = require('./data');

const app = new express();
const port = 3000;

app.get('/api/motor', flatCache, (req, res) => {
    setTimeout(() => {
        res.send(data);
    }, 3000);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
