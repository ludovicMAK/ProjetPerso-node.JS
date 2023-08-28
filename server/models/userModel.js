const db = require("../config/db");
const bcrypt = require("bcrypt");

class User {
  static async create(info) {
    const { nom, prenom, sexe, date_de_naissance, adresse, code_postal, ville, telephone, email, password, login, roles = ["ROLE_ELEVE"] } = info;
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
    } catch (error) {
      await db.promise().rollback();
      throw error;
    } finally {
      db.end();
    }
  }
  static async read(info) {
    const { login, password } = info;

    try {
      const [user] = await db.promise().query("SELECT * FROM user WHERE login = ?", [login]);

      if (user.length === 0) {
        throw "il n'existe pas ce login dans notre base de donnée";
      }

      const passwordMatch = await bcrypt.compare(password, user[0].password);

      if (!passwordMatch) {
        throw "Le mot de passe est incorrect";
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
