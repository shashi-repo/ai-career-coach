const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.error("REGISTER SELECT ERROR:", err);

        return res.status(500).json({
          message: "Database Error",
          code: err.code,
          errno: err.errno,
          sqlMessage: err.sqlMessage,
          sqlState: err.sqlState,
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "Email already registered",
        });
      }

      const hash = bcrypt.hashSync(password, 10);

      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hash],
        (err, insertResult) => {
          if (err) {
            console.error("REGISTER INSERT ERROR:", err);

            return res.status(500).json({
              message: "Registration Failed",
              code: err.code,
              errno: err.errno,
              sqlMessage: err.sqlMessage,
              sqlState: err.sqlState,
            });
          }

          res.status(201).json({
            success: true,
            message: "User registered successfully",
            userId: insertResult.insertId,
          });
        }
      );
    }
  );
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.error("LOGIN ERROR:", err);

        return res.status(500).json({
          message: "Database Error",
          code: err.code,
          errno: err.errno,
          sqlMessage: err.sqlMessage,
          sqlState: err.sqlState,
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const user = result[0];

      const isMatch = bcrypt.compareSync(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.status(200).json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  );
};