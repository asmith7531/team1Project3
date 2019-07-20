const db = require("../models/index");

const { User } = db;

module.exports = {
    create: function (req, res) {
        console.log("IN", req.body);
        User
            .create(req.body)
            .then(dbModel => {
                console.log("Mike", dbModel)
                res.json(dbModel)
            })
            .catch(err => {
                console.log("err", err);
                res.status(422).json(err)
            });
    }
};