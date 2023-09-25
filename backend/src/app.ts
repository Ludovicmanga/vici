import express from "express";
import flashCardsRouter from "./routes/flashcards.routes";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/flash-cards", flashCardsRouter);

export default app;
