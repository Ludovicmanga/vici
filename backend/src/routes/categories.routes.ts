import express from "express";
import { getAllCategories } from "../controllers/categories.controller";

const router = express.Router();

router.get("/all", getAllCategories);

export default router;
