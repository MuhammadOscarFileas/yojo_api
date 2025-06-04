import express from "express";
import { getAllTrains, createTrain, deleteTrain } from "../controllers/trainController.js";

const router = express.Router();

router.get("/", getAllTrains);
router.post("/", createTrain);
router.delete("/:id", deleteTrain);

export default router;