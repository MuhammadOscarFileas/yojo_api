import express from "express";
import { getAllStations, createStation, deleteStation } from "../controllers/stationController.js";

const router = express.Router();

router.get("/", getAllStations);
router.post("/", createStation);
router.delete("/:id", deleteStation);

export default router;