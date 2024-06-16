import mongoose from "mongoose";

async function connectDB() {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb conneted on host ${con.connection.host}`);
  } catch (error) {
    console.log("Error in mongodb connection", error);
  }
}

export default connectDB;
