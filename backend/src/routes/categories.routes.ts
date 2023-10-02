import express from "express";
import { getAllCategories } from "../controllers/categories.controller";

const router = express.Router();

router.post("/all", getAllCategories);

export default router;
