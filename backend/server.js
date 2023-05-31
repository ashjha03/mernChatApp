const express = require("express");
const { chats } = require("./data/data.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running successfully. ");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const chat = chats.find((chat) => chat._id === id);
  if (chat) {
    res.send(chat);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
