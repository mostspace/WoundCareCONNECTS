const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const sanitizeHtml = require('sanitize-html'); 
const session = require('express-session'); // For sessions
const WoundcareModel = require('./models/Woundcare');

const app = express();
app.use(express.json());
app.use(cors());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false })); 

mongoose.connect("mongodb://127.0.0.1:27017/woundcare", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

app.post('/login', async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const sanitizedEmail = sanitizeHtml(email); // Sanitize inputs
    const sanitizedPassword = sanitizeHtml(pwd); // Sanitize inputs

    // ... (Add validation for email and password format)

    const user = await WoundcareModel.findOne({ email: sanitizedEmail });
    console.log("User: ", user);
    if (!user) {
        return res.status(401).json({ error: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(sanitizedPassword, user.password); 
    console.log("isMatch: ", isMatch);
    if (isMatch) {
      req.session.userId = user._id; // Create a session
      return res.json({ message: "Login successful!" }); 
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    } 
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedPassword = sanitizeHtml(password);

    const existingUser = await WoundcareModel.findOne({ email: sanitizedEmail });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(sanitizedPassword, 10);
    const newUser = new WoundcareModel({ name, email: sanitizedEmail, password: hashedPassword });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to register user" });
  }
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});