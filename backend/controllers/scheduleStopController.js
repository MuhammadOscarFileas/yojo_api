import ScheduleStop from "../models/schedulestopmodel.js";
import Station from "../models/stationmodel.js";

export const getStopsBySchedule = async (req, res) => {
  const { schedule_id } = req.params;

  try {
    const stops = await ScheduleStop.findAll({
      where: { schedule_id },
      include: [
        {
          model: Station,
          attributes: ['id', 'name']
        }
      ],
      order: [['stop_order', 'ASC']]
    });

    res.status(200).json(stops);
  } catch (err) {
    console.error("Error fetching schedule stops:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createScheduleStop = async (req, res) => {
  try {
    const stop = await ScheduleStop.create(req.body);
    res.status(201).json(stop);
  } catch (err) {
    console.error("Error creating schedule stop:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteScheduleStop = async (req, res) => {
  try {
    await ScheduleStop.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Schedule stop deleted" });
  } catch (err) {
    console.error("Error deleting schedule stop:", err);
    res.status(500).json({ message: "Server error" });
  }
};