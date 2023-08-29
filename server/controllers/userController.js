// server/controllers/userController.js
const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const userId = await User.create(req.body);
    res.status(201).json("utilisateur créé");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.readUser = async (req, res) => {
  try {
    const userId = await User.read(req.body);
    res.status(201).json("Vous êtes connecté");
  } catch (error) {
    res.status(400).json(error.message);
  }
};
