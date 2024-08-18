const express = require("express");

const app = express();

const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
