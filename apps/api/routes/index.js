// routes/index.js
import express from "express";

const router = express.Router();

/* GET index route */
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Blog API",
  });
});

export default router;
