import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { collection: "songs" });

const Song = mongoose.model("Song", SongSchema);

export default Song;