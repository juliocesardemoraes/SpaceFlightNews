import mongoose from "mongoose";
import { MONGO_URI, MONGO_DB } from "../config/enviromentVariables";

// Check if the mongo variables exist
if (!MONGO_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

if (!MONGO_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

let connection: any;

/**
 * Connects to the database
 * @returns {mongoose}: Database connection online
 */

export async function dbConnect() {
  try {
    if (connection?.isConnected) {
      return;
    }
    const mongoUri: string | any = MONGO_URI;
    console.log(mongoUri);
    connection = await mongoose.connect(mongoUri, {
      dbName: MONGO_DB,
    });
    return connection;
  } catch (error) {
    throw new Error("Coudn't connect to the database" + error);
  }
}
