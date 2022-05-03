const router = require('express').Router();
const contactController = require("../controllers/contact.controller");


router.get("/AllContacts", contactController.getAll);
router.post("/post", contactController.postOne);
router.delete("/delete/:id", contactController.deleteContact);


module.exports = router;