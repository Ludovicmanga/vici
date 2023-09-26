import express from "express";
import { deleteUser, getLoggedUser, login, logout, signUp } from "../controllers/auth.controller";
import passport from "passport";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/login", passport.authenticate("local"), login);
router.post('/check-auth', getLoggedUser);
router.post('/logout', logout);
router.post("/delete-user", deleteUser);

export default router;
