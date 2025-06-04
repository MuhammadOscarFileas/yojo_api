// routes/beritaRoutes.js
import express from "express";
import {
  getAllBerita,
  getBeritaById,
  createBerita,
  deleteBerita,
  editBerita
} from "../controllers/beritaController.js";

const router = express.Router();

router.get("/", getAllBerita);
router.get("/:id", getBeritaById);
router.post("/", createBerita);
router.delete("/:id", deleteBerita);
router.put('/:id', editBerita);


export default router;