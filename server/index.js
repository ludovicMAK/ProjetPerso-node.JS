const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jepasse",
  database: "auto_ecole",
});

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Bonjour, c'est le serveur" });
});

app.post("/api/inscrire", (req, res) => {
  const userData = req.body;
  // Faites quelque chose avec les données, par exemple les enregistrer dans une base de données
  console.log("Received registration data:", userData);
  res.status(200).json({ message: "Registration successful" });
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

// Votre code Express ici

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
