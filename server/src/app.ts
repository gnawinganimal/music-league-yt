import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user";
import League from "./models/league";

dotenv.config();

let url = process.env?.DATABASE_URL ?? (() => {throw new Error("DATABASE_URL not found in env")})();
mongoose.connect(url);

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_, res) => {
    console.log("Got a get request!");

    try {
        res.send("Hello, this is the server!\n");
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/user", async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);

    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/league", async (req, res) => {
    console.log(req.body);
    const league = new League(req.body);

    try {
        await league.save();
        res.send(league);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running...");
});
