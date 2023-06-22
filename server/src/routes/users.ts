import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import { TOKEN_SECRET } from "../env";

const router = express.Router();

// using tutorial from:
// https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport

router.post("/signup", passport.authenticate("signup", { session: false }), async (req, res, next) => {
    res.json({
        message: "Signed up successfully",
        user: req.user,
    });
});

router.post("/login", async (req, res, next) => {
    passport.authenticate("login", async (err: any, user: any) => {
        try {
            if (err || !user) {
                return next(new Error("An error occured."));
            }

            req.login(user, { session: false }, async err => {
                if (err) {
                    return next(err);
                }

                const body  = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, TOKEN_SECRET);

                return res.json({ token });
            })
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

export default router;