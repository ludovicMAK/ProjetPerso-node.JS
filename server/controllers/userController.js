// server/controllers/userController.js
const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    await User.createUser(req.body);
    res.status(201).json("utilisateur créé");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.readUserByLoginMdp = async (req, res) => {
  try {
    const userId = await User.readUserByLoginAndMdp(req.body);
    res.status(201).json(userId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
