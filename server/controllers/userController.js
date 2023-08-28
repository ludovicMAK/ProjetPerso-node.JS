// server/controllers/userController.js
const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const userId = await User.create(req.body);
    res.status(201).json({ message: "utilisateur créé", userId });
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création de l'utilisateur." });
  }
};

exports.readUser = async (req, res) => {
  try {
    const userId = await User.read(req.body);
    res.status(201).json({ message: "Vous êtes connecté", userId });
  } catch (error) {
    res.status(400).json({ error: "Erreur sur la connexion" });
  }
};
