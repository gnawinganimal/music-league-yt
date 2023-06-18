import mongoose from "mongoose";

const LeagueSchema = new mongoose.Schema({
    name:   { type: String, required: true },
    desc:   { type: String, required: false },
    
    users:  [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    rounds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Round" }],
}, { collection: "leagues" });

const League = mongoose.model("League", LeagueSchema);

export default League;