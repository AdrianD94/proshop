import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongo db started at ${conn.connection.host}:${conn.connection.port}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
