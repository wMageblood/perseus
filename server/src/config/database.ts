import mongoose from "mongoose";
import { env } from "./env";

export const databaseConnection = async () => {

  const uri = env.ATLAS_URI;

  try {

    if (!uri) {
      throw new Error("ATLAS_URI not defined")
    }

    await mongoose.connect(uri)
    console.log("Connected to MongoDB ✅")

  } catch (error) {
    throw error
  }

  mongoose.connection.on("disconnected", () => {
    console.log("⚠️ MongoDB disconnected, waiting for reconnection. . .")
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔂 MongoDB has reconnected.")
  })

  mongoose.connection.on("error", (error) => {
    console.error(`MongoDB error: ${error}`)
  })
};
