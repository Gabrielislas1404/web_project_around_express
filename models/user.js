const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,

    validate: {
      validator: function (v) {
        return /^(http:\/\/|https:\/\/)(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:?%#[\]@!$&'()*+,;=]*)*#?$/.test(
          v
        );
      },
    },
    message: (props) => `${props.value} no es un URL válido!`,
  },
});

module.exports = mongoose.model("user", userSchema);
