const express = require("express");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express(); // Initialize the app
const router = express.Router();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 3,
  message: {
    success: false,
    message: "Слишком много запросов с этого IP, попробуйте снова через 30 минут.",
  },
});

// POST route for sending messages to Telegram
router.post("/telegram", limiter, async (req, res) => {
  let { name, email, number, problem, consultationType } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({ success: false, message: "Введите ваше имя" });
  } else if (!number) {
    return res.status(400).json({ success: false, message: "Введите ваше почту" });
  } else if (!problem) {
    return res.status(400).json({ success: false, message: "Опишите вашу проблему" });
  } else if (consultationType == "DEFAULT") {
    return res.status(400).json({ success: false, message: "Выберите форму консультации" });
  }

  // Build the message for Telegram
  const message = `
<b>Заявка с сайта:</b>
<b>Имя:</b> ${name}
<b>Почта:</b> ${email}
<b>Телефон:</b> ${number}
<b>Проблема:</b> ${problem}
<b>Форма консультации:</b> ${consultationType}
  `;

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    // Send message to Telegram
    const response = await axios.post(URI_API, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });

    // Success: Send feedback to the frontend
    res.status(200).json({
      success: true,
      message: "Ваша заявка была успешно отправлена!",
      data: response.data,
    });
  } catch (error) {
    // Error: Send error feedback to the frontend
    console.error("Error sending message to Telegram:", error.message);
    res.status(500).json({
      success: false,
      message: "Не удалось отправить сообщение.",
      error: error.message,
    });
  }
});

module.exports = router;
