const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config;

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static("client/build"));

app.listen(PORT, () => {
  console.log("Le serveur est lancé", PORT);
});

app.get("/home", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/api", (req, res) => {
  res.send({
    message: "df",
  });
});
