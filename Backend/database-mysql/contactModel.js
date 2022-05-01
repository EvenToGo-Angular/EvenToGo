const conn = require('./index.js');


module.exports = {
    select: function (callback) {
        const sql="SELECT * FROM contacts";
        conn.query(sql, function (err,result){
            callback(err,result)
        });
      },

    add: function (contact, callback) {
        const sql = "INSERT INTO contacts SET ?";
        conn.query(sql, contact, function (error, results) {
            callback(error, results);
        });
    },
    deleteOne: function (id, callback) {
        const sql = "DELETE FROM contacts WHERE id=?";
        conn.query(sql, id, function (error, results) {
            callback(error, results);
        });
    }
};

