import { MongoClient } from "mongodb";
import { MONGO_URI, MONGO_DB } from "../config/enviromentVariables";

console.log(MONGO_DB);
console.log(MONGO_URI);

// Check for the mongo variables
if (!MONGO_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

if (!MONGO_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

let cachedClient = null;
let cachedDb = null;

/**
 * Connects to the database
 * @returns {MongoClient}: Database connection online
 */

export async function connectToDatabase() {
  // Check if the data is cached. And loads from it
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(MONGO_DB);

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
