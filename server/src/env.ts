import dotenv from "dotenv";

dotenv.config();

export const TOKEN_SECRET = process.env?.TOKEN_SECRET ?? (() => {throw new Error("TOKEN_SECRET not found in env")})();
export const DATABASE_URL = process.env?.DATABASE_URL ?? (() => {throw new Error("DATABASE_URL not found in env")})();
