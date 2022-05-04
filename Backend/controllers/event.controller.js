var db = require("../database-mysql");
const cloudinary = require("../utils/cloudinary");
const { getOne, select, add, modifOne, deleteOne } = require("../database-mysql/eventModel.js");



  
module.exports = { 
  selectOne: function(req, res, ) {
    getOne(req.params.id,(err, results) => {
      if (err) {
          res.status(500).send(err);
      }
      else {
          res.status(201).json(results);
      }
    })
    },
    selectAllById:function(req,res){
        selectManyById(req.params.id,(err, results) => {
            if (err) {
             res.status(500).send(err);
            }
            else {
             res.status(201).json(results);
            }
        })
    },

  selectAll:function(req,res){
select((err, results) => {
  if (err) {
      res.status(500).send(err);
  }
  else {
      res.status(201).json(results);
  }
})
},
  addEvent: async (req, res) => {
      let {title, description,type,date,image} = req.body
      await cloudinary.uploader.upload(image, async (err, result) => {
        if (err) {
          res.send(err);
        } else {
          const url = result.secure_url;
          console.log(url);
          res.send(url);
          let event = {
              title,
              description,
              type,
              date,
              image: url
          }
        
          await add(event)
        }
      });
    
},
modifEvent: function (req, res) {
    modifOne(req.body, req.params.id, (err, results) => {
        console.log(req.params.id)
        if (err) {
            res.status(500).send(err);
            console.log(err)
        }
        else {
            res.status(201).json(results);
        }
    })
},
deleteEvent: function (req, res) {
    let id = req.params.id;
    deleteOne(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).json(results);
        }
    })
} };
