const Card = require("../models/card");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({}).orFail(() => {
      const error = new Error("Cards not found");
      error.statusCode = 404;
      throw error;
    });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const owner = req.user._id;
    const newCard = new Card({ name, link, owner });
    await newCard.save();
    res.status(200).json(newCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndRemove(req.params.cardId);
    if (!card) {
      return res.status(400).json({ message: "Card not found" });
    }
    res.status(200).json({ message: "card deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCards, createCard, deleteCard };
