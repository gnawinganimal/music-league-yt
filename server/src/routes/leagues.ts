import express from "express";
import mongoose from "mongoose";

import League from "../models/league";

const router = express.Router();

router.post("/league", async (req, res) => {
    console.log(req.body);
    const league = new League(req.body);

    try {
        await league.save();
        res.send(league);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;