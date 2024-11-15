// server.js
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const User = require("./db/Model/User");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
const path = require("path");
app.use(bodyParser.json());
// Connect to Database
connectDB();

// Middleware

// Route to create a new user
app.post("/api/users", async (req, res) => {
  const { language, fullName, mobileNumber, email, dematStatus } = req.body;
  try {
    const newUser = new User({
      language,
      fullName,
      mobileNumber,
      email,
      dematStatus,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating user", details: error.message });
  }
});

// Route to get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching users", details: error.message });
  }
});

let NODE_ENV = "production";
if (NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use("/uploads", express.static("/var/data/uploads"));
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/users`);
});
