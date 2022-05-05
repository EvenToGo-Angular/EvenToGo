var db = require("../database-mysql");



var selectAll = function (req, res) {
    db.query("SELECT * FROM favorite", (err, items, fields) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(items);
        }
    });
};
var addFavorite = (req ,res)=> { 
var all  = req.body.user_id ; 
var user = all.split(" ")[0] ; 
var event = all.split(" ")[1] ; 
db.query(`INSERT INTO favorite (id_user,id_event ) values ('${user}' ,  '${event}')`,(err, rez)=> {
if(err)
res.send(err)
else 
res.send("Done") ; 
})
}

var getFavorite = (req, res)=> {
var user = req.body.user ; 
db.query(`select *  from favorite where id_user = '${user}'` ,(err,result)=>{ 

if(err)
res.send("err")
else 
res.send(result)
})
}









var deleteFavorite=(req,res)=>{
 var user_id  = req.body.id ; 
 var event = req.body.event ; 
 db.query(`delete from favorite where id_user = '${user_id}' and id_event = '${event}'` , (err,rez)=> { 
if(err)
res.send("err")
else 
res.send("Done") ; 
 })


}





module.exports = { 
selectAll,
addFavorite,
deleteFavorite ,
getFavorite , 
deleteFavorite
};


