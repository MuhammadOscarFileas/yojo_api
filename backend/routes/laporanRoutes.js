// routes/laporanRoutes.js
import express from "express";
//import upload from "../middleware/upload.js";
import {
  getAllLaporan,
  createLaporan,
  deleteLaporan,
  editLaporan
} from "../controllers/laporanController.js";

const router = express.Router();

router.get("/", getAllLaporan);
router.post("/", createLaporan);
router.put('/:id', editLaporan);
router.delete("/:id", deleteLaporan);

export default router;
