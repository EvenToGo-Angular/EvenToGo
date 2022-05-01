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
    }
};

