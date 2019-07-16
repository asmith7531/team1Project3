const express = require('express');
const path = require('path'); // NEW

const app = express();

<<<<<<< HEAD
const port = process.env.PORT || 3000;
=======
const port = process.env.PORT || 3001;
>>>>>>> origin
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, '/index.html'); // NEW


app.use(express.static(DIST_DIR)); // NEW


app.get('/api', (req, res) => {
    res.send(202);
});
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});