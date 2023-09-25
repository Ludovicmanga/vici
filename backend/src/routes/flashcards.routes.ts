import express from "express";
import { createFlashCard, deleteFlashCard, getAllFlashcards, updateFlashCard } from "../controllers/flashcards.controller";
const router = express.Router();

router.get("/all", getAllFlashcards);
router.put("/update", updateFlashCard);
router.post("/create", createFlashCard);
router.delete("/delete", deleteFlashCard);

export default router;
