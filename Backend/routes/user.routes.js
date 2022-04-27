const router = require('express').Router();
const userController = require("../controllers/user.controller");


router.get("/users", userController.selectAll);
router.get("/connected/:email", userController.selectOne);
router.post("/signup", userController.signUp);
router.post('/signin',userController.signIn )

module.exports = router;


// delete 

// interested

// update 
