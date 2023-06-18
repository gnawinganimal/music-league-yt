import dotenv from "dotenv";

dotenv.config();

export const DATABASE_URL = process.env?.DATABASE_URL ?? (() => {throw new Error("DATABASE_URL not found in env")})();
