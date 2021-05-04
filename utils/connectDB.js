import mongoose from "mongoose";

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  connection.isConnected = db.connections[0].readyState;
  console.log("Conectado a Mongo");
}

export default connectDB;
