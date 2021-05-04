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
  }
});

module.exports =
  mongoose.models.Tendencie || mongoose.model("Tendencie", tendencieSchema);
