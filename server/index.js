const express = require('express');
const path = require('path'); // NEW
const app = express();
const port = process.env.PORT || 3001;
const db = require("../models");

const session = require("express-session");
// const passport = require("./config/passport");


var syncOptions = { force: true };


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, '/index.html'); // NEW

app.use(express.static(DIST_DIR)); // NEW

require('../routes/index')(app)


app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});


db.sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(` ==> 🌎  Listening on port ${port}. Visit http://localhost: ${port} / in your browser.`
      );
    });
  });