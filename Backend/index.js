const express = require("express");

const userRoutes = require('./routes/user.routes');
const eventRoutes = require('./routes/event.routes')
const favoriteRoutes =require('./routes/favorite.routes')
const contactRoutes =require('./routes/contact.routes')
const bodyParser= require('body-parser')
const fileUpload = require("express-fileupload");

const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb',limit: '50mb'}));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use(fileUpload());



app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/favorite",favoriteRoutes)
app.use("/api/contacts",contactRoutes)
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 *Slim : Events/getAll 
 */






///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// Youssef : Events/add 
app.post("/addEvent", (req, res) => {
  items.addEvent(title, description, date, image, type, (err, events) => {
    if (err) {
      console.log(err)
    }
    else {
      res.json(events)
    }
  })
})








///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//Youssef : Events/delete
// app.delete("/deleteEvent", (req, res) => {
//   items.deleteEvent(id, (err, events) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       res.json(events)
//     }
//   })
// })








///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//  Youssef : Events/put
// app.modif("/deleteEvent", (req, res) => {
//   items.modifEvent(id, (err, events) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       res.json(events)
//     }
//   })
// })







///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Fradj : User/getAll
 */







///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Fradj : User/remove
 */







///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
