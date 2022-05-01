var db = require("../database-mysql");
const { select, add } = require("../database-mysql/contactModel.js");




module.exports = {
    getAll: function (req, res) {
        select((err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(201).json(results);
            }
        })
    },
    postOne: function (req, res) {
        add(req.body, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(201).json(results);
            }
        })
    }
};
