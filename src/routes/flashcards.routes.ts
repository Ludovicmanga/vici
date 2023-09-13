import express from "express";
import { createFlashCard, deleteFlashCard, getAllFlashcards } from "../controllers/flashcards.controller";
const router = express.Router();

router.get("/all", getAllFlashcards);
router.post("/create", createFlashCard);
router.delete("/delete", deleteFlashCard);

export default router;
