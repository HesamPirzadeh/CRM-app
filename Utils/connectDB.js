import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", true);
  await mongoose.connect(process.env.DB_URI);
  console.log("connected to DB");
}

export default connectDB;
