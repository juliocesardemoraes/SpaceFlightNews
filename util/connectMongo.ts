import mongoose from "mongoose";
import { MONGO_URI, MONGO_DB } from "../config/enviromentVariables";

// Check if the mongo variables exist
if (!MONGO_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

if (!MONGO_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

/**
 * Connects to the database
 * @returns {mongoose}: Database connection online
 */

export async function dbConnect() {
  try {
    const mongoUri: string | any = MONGO_URI;
    const connected = await mongoose.connect(mongoUri, {
      dbName: MONGO_DB,
    });
    return connected;
  } catch (error) {
    throw new Error("Coudn't connect to the database" + error);
  }
}
