import express from "express";
import { getSchedulesByRoute, createSchedule, deleteSchedule, getDeparturesFromStation } from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/route/:route_id", getSchedulesByRoute);
router.get("/route/via/:station_id", getDeparturesFromStation);
router.post("/", createSchedule);
router.delete("/:id", deleteSchedule);

export default router;