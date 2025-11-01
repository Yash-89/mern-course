import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // ✅ Azure-friendly options
      serverSelectionTimeoutMS: 30000, // Wait up to 30 seconds for server selection
      socketTimeoutMS: 45000, // Socket inactivity timeout
      w: "majority",
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};
