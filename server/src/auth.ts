import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import User from "./models/user";
import { TOKEN_SECRET } from "./env";

passport.use("signup", new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async (email, password, done) => {
        console.log("Running signup middleware");
        try {
            const user = new User({ email, password });
            await user.save();
            return done(null, user);
        } catch (error) {
            done(error);
        }
    },
));

passport.use("login", new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return done(null, false, { message: "No user with that email exists" });
            }

            if (await bcrypt.compare(password, user.password)) {
                return done(null, user,  { message: "Logged in successfully" });
            } else {
                return done(null, false, { message: "Incorrect password" });
            }
        } catch (error) {
            return done(error);
        }
    },
))

passport.use(new JwtStrategy(
    {
        secretOrKey: TOKEN_SECRET,
        jwtFromRequest: ExtractJwt.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
        try {
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    },
));
