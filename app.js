const express = require("express");
const mongoose = require("mongoose");
const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect("");

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use((req, res) => {
  res.status(400).json({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
