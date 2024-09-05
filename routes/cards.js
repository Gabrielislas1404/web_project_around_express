const express = require("express");
/* const fs = require("fs"); */
const path = require("path");
const router = express.Router();
const { getCards, createCard, deleteCard } = require("../controllers/cards");

const cardsPath = path.join(__dirname, "../data/cards.json");

router.get("/", getCards);
router.post("/", createCard);
router.delete("/:cardId", deleteCard);

/* router.get("/", (req, res) => {
  fs.readFile(cardsPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error al leer el archivo" });
    }
    const cards = JSON.parse(data);
    return res.json(cards);
  });
}); */

module.exports = router;
