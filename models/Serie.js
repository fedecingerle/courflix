import mongoose from "mongoose";

const serieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String
  },
  episodes: []
});

module.exports = mongoose.models.Serie || mongoose.model("Serie", serieSchema);
