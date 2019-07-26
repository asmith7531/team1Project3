var express = require('express')
var router = express.Router()
const db = require('../models/index');
const collegeController = require("../controllers/collegeController");
const passport = require("../config/passport");

const { College, User } = db;


module.exports = (app) => {

  app.get('/api', function (req, res) {
    res.send('API home page')
  });

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    console.log("successful login!");
    console.log(req.user);
    res.json(req.user);
  });

  app.post('/create/user',
    (req, res) => {
      collegeController.create(req, res)
      console.log("trying to create a new user");
    }
  )

  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(dbUser => {
        console.log(dbUser);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}

exports = router