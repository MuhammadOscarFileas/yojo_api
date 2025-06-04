import express from "express";
import { getStopsBySchedule, createScheduleStop, deleteScheduleStop } from "../controllers/scheduleStopController.js";

const router = express.Router();

router.get("/schedule/:schedule_id", getStopsBySchedule);
router.post("/", createScheduleStop);
router.delete("/:id", deleteScheduleStop);

export default router;