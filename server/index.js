const express = require("express");
const path = require("path"); // NEW
const app = express();
const port = process.env.PORT || 3000;
const db = require("../models");

var session = require("express-session");
var passport = require("../config/passport");
var syncOptions = { force: true };

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "/index.html");
app.use(express.static(DIST_DIR));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

require("../routes/index")(app);

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(
      ` ==> 🌎  Listening on port ${port}. Visit http://localhost: ${port} / in your browser.`
    );
  });
});
