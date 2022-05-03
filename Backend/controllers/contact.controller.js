var db = require("../database-mysql");
const { select, add, deleteOne } = require("../database-mysql/contactModel.js");




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
    },
    deleteContact: function (req, res) {
        deleteOne(req.params.id, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(201).json(results);
            }
        })
    }
};
