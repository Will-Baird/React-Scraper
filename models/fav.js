const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const Fav = mongoose.model("Fav", FavSchema);

module.exports = Fav;