const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // For serving static files
require("dotenv").config(); // For environment variables

const telegramRoutes = require("./routes/telegramRoutes"); // Import Telegram routes

const app = express();

// Middleware
const corsOptions = {
  origin: [
    "https://lawyerwebsite-synv.onrender.com",
    "https://khlystovnn.com",
    "http://localhost:5000",
  ], // Update with frontend URLs
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json()); // Parse JSON bodies

// Use routes
app.use("/api", telegramRoutes); // Prefix all Telegram routes with /api

// Главная страница
app.get("/test", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Главная</title>
      <style>
        body { font-family: Arial, sans-serif; }
        .grid { display: flex; gap: 10px; }
        .grid-item { padding: 10px; background: #f0f0f0; border: 1px solid #ccc; }
        footer { margin-top: 20px; padding: 10px; background: #333; color: #fff; }
      </style>
    </head>
    <body>
      <h1>Добро пожаловать!</h1>
      <div class="grid">
     
      </div>
      <footer>
        <form method="POST" action="/submit">
          <label>Имя: <input type="text" name="firstName" required></label><br>
          <label>Фамилия: <input type="text" name="lastName" required></label><br>
          <label>Телефон: <input type="tel" name="phone" pattern="\\d{10}" required></label><br>
          <label>Email: <input type="email" name="email" required></label><br>
          <button type="submit">Отправить</button>
        </form>
      </footer>
    </body>
    </html>
  `);
});

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// Serve the frontend on all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
