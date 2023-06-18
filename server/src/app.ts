import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import users from "./routes/users";
import leagues from "./routes/leagues";
import rounds from "./routes/rounds";
import songs from "./routes/songs";

dotenv.config();
mongoose.connect( 
    process.env?.DATABASE_URL ?? (() => {throw new Error("DATABASE_URL not found in env")})()
);

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(users);
app.use(leagues);
app.use(rounds);
app.use(songs);

app.listen(3000, () => {
    console.log("Server is running...");
});
