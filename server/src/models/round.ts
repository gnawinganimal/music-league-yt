import mongoose from "mongoose";

const RoundSchema = new mongoose.Schema({
    name:   { type: String, required: true },
    desc:   { type: String, required: false },

    status: { type: String, required: true }, // "pending" | "submitting" | "voting" | "complete"
    songs:  [{ type: mongoose.Schema.Types.ObjectId, ref: "Song", required: false }], // only relevent on "submitting"
    votes:  { type: Object, required: false }, // only relevant on "voting"
}, { collection: "rounds" });

const Round = mongoose.model("Round", RoundSchema);

export default Round;