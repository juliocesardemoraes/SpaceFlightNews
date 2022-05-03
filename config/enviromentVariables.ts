export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const MONGO_URI: string | any =
  process.env.MONGO_VERCEL_URI || process.env.MONGO_URI;

export const MONGO_DB: string | any =
  process.env.MONGO_VERCEL_DB || process.env.MONGO_DB;
