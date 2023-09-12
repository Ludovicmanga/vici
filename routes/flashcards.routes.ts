import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.status(200).json([{ name: "all goood" }]);
});

export default router;
