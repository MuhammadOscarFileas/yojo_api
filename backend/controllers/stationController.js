import Station from "../models/stationmodel.js";

export const getAllStations = async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.status(200).json(stations);
  } catch (err) {
    console.error("Error fetching stations:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createStation = async (req, res) => {
  try {
    const station = await Station.create(req.body);
    res.status(201).json(station);
  } catch (err) {
    console.error("Error creating station:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteStation = async (req, res) => {
  try {
    await Station.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Station deleted" });
  } catch (err) {
    console.error("Error deleting station:", err);
    res.status(500).json({ message: "Server error" });
  }
};