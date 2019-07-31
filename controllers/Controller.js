const db = require("../models/index");
const chalk = require('chalk');
const log = console.log;

const { User, Article, College } = db;

module.exports = {
    createUser: function (req, res) {
        console.log("IN", req.body);
        User
            .create(req.body)
            .then(
                dbModel => {
                    console.log("Mike", dbModel)
                    res.json(dbModel)
                })
            .catch(err => {
                console.log("err", err);
                res.status(422).json(err)
            });
    },

    createCollege: function(req, res) {
        console.log("TESTING CREATE COLLLGE FUNCTION");
        College
            .create(req.body)
            .then(
                dbModel => {
                    console.log("MADE A NEW COLLEGE");
                    res.json(dbModel);
                }
            )
            .catch(err => {
                console.log("err", err);
                res.status(422).json(err);
            })
    },

    getArticles: function (req, res) {
        log(chalk.yellow.bold("getting all your articles"));
        Article
            .findAll()
            .then(
                articles => {
                    log(chalk.green(articles));
                    res.json(articles);
                })
            .catch(err => {
                log(chalk.red("----ARTICLE GET ERR-------", err));
                res.json(err);
            })
    }
};