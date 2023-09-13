import express from "express";
import { createFlashCard, getAllFlashcards } from "../controllers/flashcards.controller";
const router = express.Router();

router.get("/all", getAllFlashcards);
router.post("/create", createFlashCard);

export default router;
