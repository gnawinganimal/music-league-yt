import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    display: { type: String, required: true }
}, { collection: "users" });

const User = mongoose.model("User", UserSchema);

export default User;