import express from "express";
import mongoose from "mongoose";

import Song from "../models/song";

const router = express.Router();

router.get("/songs", async (_, res) => {
    const songs = await Song.find({});

    try {
        res.send(songs);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/song/:id", async (req, res) => {
    const song = await Song.findById(req.params.id);

    try {
        res.send(song);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/song", async (req, res) => {
    console.log(req.body);
    const song = new Song(req.body);

    try {
        await song.save();
        res.send(song);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/song/:id", async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);

        if (!song) {
            res.status(404).send("No song with that ID exists");
        } else {
            res.status(200).send();
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;