// db.js
const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/shoppyGlobal";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ DB connected successfully");
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
    process.exit(1); // Exit app if DB fails to connect
  }
}

module.exports = connectDB;
