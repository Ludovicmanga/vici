import express from "express";
import flashCardsRouter from "./routes/flashcards.routes";
import authRouter from "./routes/auth.routes";
import categoriesRouter from "./routes/categories.routes";
import cors from "cors";
import passport from "passport";
import session from "express-session";

const app = express();
import "./config/passport.setup";
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://vici-31p9.vercel.app"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "nkrekjverjvrekjverkjvre",
    resave: false,
    saveUnitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/flash-cards", flashCardsRouter);
app.use("/categories", categoriesRouter);

export default app;
