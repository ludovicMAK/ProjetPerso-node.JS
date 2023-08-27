const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jepasse",
  database: "auto_ecole",
});

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Bonjour, c'est le serveur" });
});

app.post("/api/inscrire", async (req, res) => {
  const { nom, prenom, sexe, date_de_naissance, adresse, code_postal, ville, telephone, email, password, login, roles = ["ROLE_ELEVE"] } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.promise().beginTransaction();

    const [user] = await db.promise().query("INSERT INTO user (login, password, roles, email) VALUES (?, ?, ?, ?)", [login, hashedPassword, JSON.stringify(roles), email]);

    await db
      .promise()
      .query("INSERT INTO eleve (user_id, nom, prenom, sexe, date_de_naissance, adresse, code_postal, ville, telephone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [
        user.insertId,
        nom,
        prenom,
        sexe,
        date_de_naissance,
        adresse,
        code_postal,
        ville,
        telephone,
      ]);

    await db.promise().commit();

    res.status(201).json({ message: "utilisateur créé" });
  } catch (error) {
    await db.promise().rollback();

    res.status(500).json({ message: "L'utilisateur n'a pas pu être créé" });
  } finally {
    db.end();
  }
});

app.post("/api/connexion", async (req, res) => {
  const { login, password } = req.body;

  try {
    const [user] = await db.promise().query("SELECT * FROM user WHERE login = ?", [login]);

    if (user.length === 0) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
