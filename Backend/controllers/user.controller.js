var db = require("../database-mysql");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Fradj : User/getAll
 */


var selectAll = function (req, res) {
    db.query("SELECT * FROM users", (err, items, fields) => {
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


 var selectOne = function (req, res) {
    const email=req.params.email;

    console.log("sent email", email);
    db.query(`SELECT * FROM users WHERE email = ?`, email, (err,result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json(result);
      }
    });
  };








// function remove one user

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//khairi: user/signUp
var signUp = async (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    // const password=req.body.password
    const role = req.body.role
    const sql = `SELECT * FROM users WHERE email=? `
    db.query(sql,[email], async (err, result) => {
        //console.log(result);
        if (err) {
            res.send(err)
        }
        if (result.length > 0) {
            res.send("user already exist")
        } else {
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            // const role = "admin";
            db.query("INSERT INTO users ( role, name, password, email) VALUES (?,?,?,?)", [role, name, hashedPassword, email], (err, result) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(['yes', result])
                }
            })
        }
    })
}

//khairi: user/signIn
var signIn = (req, res) => {
    let idd;
    let ress;
    const email = req.body.email
    const password = req.body.password
    const sqlSel = `SELECT * FROM users WHERE email = ?`
    db.query(sqlSel, [email], (err, result) => {
        if (err) {
            res.send(err)
        }
        if (result) {
            try {

                console.log("getuser"+JSON.stringify(result)  )
                idd=JSON.stringify(result).id;
                
                ress=result;

                bcrypt.compare(
                    password,
                    result[0].password,
                    function (err, rez) {
                        console.log(rez);
                        if (err) {
                            res.send(err);
                        }
                        if (rez === false) {
                            res.send("login failed");
                        }
                        if (rez === true) {
                        ress='';

                        ress=result;
                         }
                    }
                );
            } catch (err) {
                // res.send(err);
            console.log(err)

            }
        } else {
            // res.send(err);
            console.log(err)

        }
         // create a token and send to frontend
         
         token = jwt.sign({ ress}, 'secretkey',{expiresIn:'1h'});
     return res.status(200).json({
         title: 'login success',
        token: token,
        result: ress,
        ress:ress[0].id,
        role:ress[0].role, 
        username:ress[0].name
       })
    })
}





module.exports = { 
selectAll,
selectOne,
signUp,
signIn,

};


