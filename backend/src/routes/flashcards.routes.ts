import express from "express";
import { createFlashCard, deleteFlashCard, getAllFlashcards, updateFlashCard } from "../controllers/flashcards.controller";
import { checkAuthenticated } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/all", checkAuthenticated, getAllFlashcards);
router.put("/update", checkAuthenticated, updateFlashCard);
router.post("/create", checkAuthenticated, createFlashCard);
router.delete("/delete", checkAuthenticated, deleteFlashCard);

export default router;
