import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "goodmorningdb",
  port: 5432
});

// API route
app.post("/api/submit", async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    await pool.query(
      "INSERT INTO users(name, phone, email) VALUES($1, $2, $3)",
      [name, phone, email]
    );

    res.json({ message: "Data saved successfully 🎉" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
