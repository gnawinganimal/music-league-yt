import mongoose from "mongoose";
import bcrypt from "bcrypt";

let salt = 10;

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },

    email: { type: String, required: true },
    password: { type: String, required: true },
}, { collection: "users" });

UserSchema.pre("save", function(next) {
    if (this.isNew || this.isModified("password")) {
        let user = this;
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                next(err);
            } else {
                user.password = hash;
                next();
            }
        });
    } else {
        next();
    }
});

const User = mongoose.model("User", UserSchema);

export default User;