import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";

import users from "./routes/users";
import leagues from "./routes/leagues";
import rounds from "./routes/rounds";
import songs from "./routes/songs";
import profile from "./routes/profile";

import { DATABASE_URL, PORT } from "./env";
import "./auth";

mongoose.connect(DATABASE_URL);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
app.use(users);
app.use(leagues);
app.use(rounds);
app.use(songs);
app.use("/user", passport.authenticate("jwt", { session: false}), profile);

app.listen(PORT, () => {
    console.log("Server is running...");
});
