const db = require("../config/db");
const bcrypt = require("bcrypt");
const validator = require("validator");

class User {
  static async create(info) {
    const { nom, prenom, sexe, date_de_naissance, adresse, code_postal, ville, telephone, email, password, login, roles = ["ROLE_ELEVE"] } = info;

    const [existeLogin] = await db.promise().query("SELECT * FROM user WHERE login = ?", [login]);
    const [existeEMail] = await db.promise().query("SELECT * FROM user WHERE email = ?", [email]);

    if (existeLogin.length > 0) {
      throw new Error("Veuillez saisir un autre login");
    } else if (!validator.isEmail(email)) {
      throw new Error("L'adresse email n'est pas valide.");
    } else if (existeEMail.length > 0) {
      throw new Error("L'adresse email est déjà utilisé");
    } else if (!validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
      throw new Error("Le mot de passe doit contenir au moins 8 caractères, 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial.");
    } else {
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
  }
  static async read(info) {
    const { login, password } = info;

    try {
      const [user] = await db.promise().query("SELECT * FROM user WHERE login = ?", [login]);
      if (user.length === 0) {
        throw new Error("il n'existe pas ce login dans notre base de donnée");
      }

      const passwordMatch = await bcrypt.compare(password, user[0].password);

      if (!passwordMatch) {
        throw new Error("Le mot de passe est incorrect");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
