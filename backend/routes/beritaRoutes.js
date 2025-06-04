// routes/beritaRoutes.js
import express from "express";
import {
  getAllBerita,
  getBeritaById,
  createBerita,
  deleteBerita
} from "../controllers/beritaController.js";

const router = express.Router();

router.get("/", getAllBerita);
router.get("/:id", getBeritaById);
router.post("/", createBerita);
router.delete("/:id", deleteBerita);

export default router;