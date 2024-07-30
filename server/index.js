require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const connectDB = require('./config/db');
const routes = require('./routes/index');
const path = require('path');

const app = express();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(cors());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

// Connect to database
connectDB();

// Use routes
app.use('/api', routes);

app.listen(4003, () => {
  console.log("Server is running on port 3003");
});