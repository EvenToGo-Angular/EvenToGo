var db = require("../database-mysql");
const bcrypt = require("bcrypt")

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Fradj : User/getAll
 */


var selectAll = function (req, res) {
    db.query("SELECT * FROM favorite", (err, items, fields) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(items);
        }
    });
};

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Ali : profile/selectOne
 */


//  var selectOne = function (req, res) {
//     const email=req.params.email;

//     console.log("sent email", email);
//     db.query(`SELECT * FROM users WHERE email = ?`, email, (err,result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(201).json(result);
//       }
//     });
//   };








// function remove one user

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//khairi: user/signUp
var addFavorite=(req,res)=>{
    const obj=req.body
    db.query('insert into favorite set ?',obj,(err,result)=>{
        if(err)
        res.send(err)
        else
        res.send(result)
    })
    
}

//khairi: user/signIn
var deleteFavorite=(req,res)=>{
    var id= req.params.id
    db.query(`delete from favorite where id=${id}`,(err,result)=>{
        if(err)
        res.send(err)
        else
        res.send(result)
    } )
}





module.exports = { 
selectAll,
addFavorite,
deleteFavorite
};


