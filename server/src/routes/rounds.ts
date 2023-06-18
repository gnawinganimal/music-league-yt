import express from "express";
import mongoose from "mongoose";

import Round from "../models/round";

const router = express.Router();

router.get("/rounds", async (_, res) => {
    const rounds = await Round.find({}).populate("songs");

    try {
        res.send(rounds);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/round", async (req, res) => {
    console.log(req.body);
    const round = new Round(req.body);

    try {
        await round.save();
        res.send(round);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put("/round/:id", async (req, res) => {
    try {
        let round = await Round.findByIdAndUpdate(req.params.id, req.body);
        res.send(round);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;