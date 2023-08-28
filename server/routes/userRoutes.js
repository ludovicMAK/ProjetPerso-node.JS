// server/routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/inscrire").post(userController.createUser);
router.route("/connexion").post(userController.readUser);

module.exports = router;
