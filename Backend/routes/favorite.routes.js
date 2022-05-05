const router = require('express').Router();
const userController = require("../controllers/favorite.controller");


router.get("/users", userController.selectAll);
router.get("/deletefav/:id", userController.deleteFavorite);
router.post("/addfav", userController.addFavorite);
router.post("/getFavorite" , userController.getFavorite) 
router.post("/deleteFavorite" , userController.deleteFavorite) 
module.exports = router;
