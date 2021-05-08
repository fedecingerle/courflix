import mongoose from "mongoose";

const originalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  },
  episodes: []
});

module.exports =
  mongoose.models.Original || mongoose.model("Original", originalSchema);
