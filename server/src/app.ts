import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import users from "./routes/users";
import leagues from "./routes/leagues";
import rounds from "./routes/rounds";
import songs from "./routes/songs";

import { DATABASE_URL } from "./env";

mongoose.connect(DATABASE_URL);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(users);
app.use(leagues);
app.use(rounds);
app.use(songs);

app.listen(8080, () => {
    console.log("Server is running...");
});
