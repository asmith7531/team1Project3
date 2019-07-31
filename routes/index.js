var express = require('express')
var router = express.Router()
const collegeController = require("../controllers/Controller");
const passport = require("../config/passport");
const { createUser, getArticles } = collegeController;
const axios = require('axios');
const cheerio = require('cheerio');
const db = require("../models/");
const chalk = require('chalk');
const log = console.log;
const { Article } = db;

module.exports = (app) => {

  app.get('/api', function (req, res) {
    res.send('API home page')
  });

  app.get('/logout', function (req, res) {
    req.logout();
    res.json('successfully logged out');
  });

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    console.log("successful login!");
    console.log(req.user);
    res.json(req.user);
  });

  app.post('/create/user',
    (req, res) => {
      createUser(req, res)
      console.log("trying to create a new user");
    }
  )

  app.post('/api/articles', (req, res) => {
    axios.get("https://www.theatlantic.com/").then(function (response) {
      let $ = cheerio.load(response.data);
      const recentResults = {};
      $(".c-tease--article").each(function (i, element) {

        recentResults.header = $(this)
          .children(".c-tease__content")
          .children("h3")
          .children("a")
          .text();

        recentResults.url = $(this)
          .children(".c-tease__content")
          .children("h3")
          .children("a")
          .attr("href");

        recentResults.author = $(this)
          .children(".c-tease__content")
          .children("div")
          .children("ul")
          .children("li").text();

        recentResults.image = $(this)
          .children(".c-tease__image")
          .children("figure")
          .children("a")
          .children("picture")
          .children("img")
          .data("srcset");


        Article.create(recentResults)
          .then(function (dbRecentArticle) {
            console.log("DB_RECENT_ARTICLES <--HERE-->", dbRecentArticle);
          })
          .catch(function (err) {
            log(chalk.red("<---DB ERROR--->", err));
          });
      });
    });
    res.status(200);
  });

  app.get("/api/articles", (req, res) => {
    log(chalk.green.bold("<----------/API/ARTICLES ROUTE------------> "));
    getArticles(req, res);
  })
}

exports = router