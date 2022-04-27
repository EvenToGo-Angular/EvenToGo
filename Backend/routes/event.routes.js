const router = require('express').Router();
const eventController = require("../controllers/event.controller");

router.get("/selectAll", eventController.selectAll);
router.get("/selectOne/:id",eventController.selectOne);
router.post('/add',eventController.addEvent);
router.put('/modif/:id', eventController.modifEvent);
router.delete('/delete/:id',eventController.deleteEvent);
router.get("/selectAllById/:id", eventController.selectAllById);

module.exports = router;


// delete 

// interested

// update 
