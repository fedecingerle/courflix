import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
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
  }
});

module.exports = mongoose.models.Film || mongoose.model("Film", filmSchema);
