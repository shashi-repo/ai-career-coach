const mysql = require("mysql2");

const db = mysql.createPool({
  host: "gondola.proxy.rlwy.net",
  port: 35331,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "railway",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Database Connection Failed:", err);
  } else {
    console.log("MySQL Connected Successfully");
    connection.release();
  }
});

module.exports = db;