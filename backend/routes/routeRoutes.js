import express from "express";
import { getRoutesByStation, createRoute, deleteRoute, createRouteStation, deleteRouteStation } from "../controllers/routeController.js";

const router = express.Router();

router.get("/via/:station_id", getRoutesByStation);
router.post("/", createRoute);
router.delete("/:id", deleteRoute);

router.post("/stations", createRouteStation);
router.delete("/stations/:id", deleteRouteStation);

export default router;