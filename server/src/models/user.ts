import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
    email:    string,
    password: string,

    isValidPassword: (password: string) => Promise<boolean>,
}

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { collection: "users" });

UserSchema.pre("save", async function(next) {
    let user = this;
    let hash = await bcrypt.hash(user.password, 10);

    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function(password: string) {
    const user = this;
    return await bcrypt.compare(password, user.passport);
}

const User = mongoose.model<IUser>("User", UserSchema);

export default User;