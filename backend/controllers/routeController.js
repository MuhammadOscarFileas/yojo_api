import Route from "../models/routesmodel.js";
import RouteStation from "../models/route_stationmodel.js";
import Station from "../models/stationmodel.js";
import Train from "../models/trainmodel.js";

export const getRoutesByStation = async (req, res) => {
  const { station_id } = req.params;

  try {
    const routes = await Route.findAll({
      include: [
        {
          model: RouteStation,
          where: { station_id },
          attributes: [],
          required: true
        },
        {
          model: Station,
          as: 'origin_station',
          attributes: ['id', 'name']
        },
        {
          model: Station,
          as: 'destination_station',
          attributes: ['id', 'name']
        },
        {
          model: Train,
          attributes: ['id', 'name', 'type']
        }
      ]
    });

    res.status(200).json(routes);
  } catch (err) {
    console.error('Error fetching routes via station:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createRoute = async (req, res) => {
  try {
    const route = await Route.create(req.body);
    res.status(201).json(route);
  } catch (err) {
    console.error("Error creating route:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    await Route.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Route deleted" });
  } catch (err) {
    console.error("Error deleting route:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createRouteStation = async (req, res) => {
  try {
    const routeStation = await RouteStation.create(req.body);
    res.status(201).json(routeStation);
  } catch (err) {
    console.error("Error creating route station:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteRouteStation = async (req, res) => {
  try {
    await RouteStation.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Route station deleted" });
  } catch (err) {
    console.error("Error deleting route station:", err);
    res.status(500).json({ message: "Server error" });
  }
};