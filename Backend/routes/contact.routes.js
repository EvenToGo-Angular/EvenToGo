const router = require('express').Router();
const contactController = require("../controllers/contact.controller");


router.get("/AllContacts", contactController.getAll);
router.post("/post", contactController.postOne);


module.exports = router;