import mongoose from "mongoose";

const RoundSchema = new mongoose.Schema({
    name:   { type: String, required: true },
    desc:   { type: String, required: false },
    status: { type: String, required: true }, 
    songs:  { type: [String], required: true },
    votes:  { type: Object, required: false },
}, { collection: "rounds" });

const Round = mongoose.model("Rounds", RoundSchema);

export default Round;