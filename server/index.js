const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jepasse",
  database: "auto_ecole",
});

app.get("/api", (req, res) => {
  res.json({ message: "Bonjour, c'est le serveur" });
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
