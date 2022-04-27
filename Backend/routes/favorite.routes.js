const router = require('express').Router();
const userController = require("../controllers/favorite.controller");


router.get("/users", userController.selectAll);
router.get("/deletefav/:id", userController.deleteFavorite);
router.post("/addfav", userController.addFavorite);


module.exports = router;
