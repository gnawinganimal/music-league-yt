import express from "express";
import mongoose from "mongoose";

import User from "../models/user";

const router = express.Router();

router.get("/users", async (_, res) => {
    const users = await User.find({});

    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/user", async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);

    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;