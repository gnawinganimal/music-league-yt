import mongoose from "mongoose";

const LeagueSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, { collection: "leagues" });

const League = mongoose.model("League", LeagueSchema);

export default League;