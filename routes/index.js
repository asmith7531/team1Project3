var express = require('express')
var router = express.Router()



module.exports = (app) => {

  app.get('/api', function (req, res) {
    res.send('API home page')
  });

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