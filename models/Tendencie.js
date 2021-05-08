import mongoose from "mongoose";

const tendencieSchema = new mongoose.Schema({
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
  logo: {
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
  mongoose.models.Tendencie || mongoose.model("Tendencie", tendencieSchema);
