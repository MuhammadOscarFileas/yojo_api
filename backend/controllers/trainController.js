import Train from "../models/trainmodel.js";

export const getAllTrains = async (req, res) => {
  try {
    const trains = await Train.findAll();
    res.status(200).json(trains);
  } catch (err) {
    console.error("Error fetching trains:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createTrain = async (req, res) => {
  try {
    const train = await Train.create(req.body);
    res.status(201).json(train);
  } catch (err) {
    console.error("Error creating train:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTrain = async (req, res) => {
  try {
    await Train.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Train deleted" });
  } catch (err) {
    console.error("Error deleting train:", err);
    res.status(500).json({ message: "Server error" });
  }
};