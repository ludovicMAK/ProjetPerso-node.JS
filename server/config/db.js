const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jepasse",
  database: "auto_ecole",
});

module.exports = db;
