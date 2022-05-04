import mongoose from "mongoose";

// Check if the mongo variables exist
if (!process.env.MONGO_VERCEL_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

let connection: any;

/**
 * Connects to the database
 * @returns {Promise}: Database connection online
 */

export async function dbConnect() {
  try {
    if (connection?.isConnected) {
      return;
    }
    const connectionURI: string | any = process.env.MONGO_VERCEL_URI;
    connection = await mongoose.connect(connectionURI);
    return connection;
  } catch (error) {
    throw new Error("Coudn't connect to the database" + error);
  }
}
