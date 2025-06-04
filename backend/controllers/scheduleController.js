import Schedule from "../models/schedulemodel.js";
import ScheduleStop from "../models/schedulestopmodel.js";
import Route from "../models/routesmodel.js";
import Train from "../models/trainmodel.js";
import Station from "../models/stationmodel.js";

export const getSchedulesByRoute = async (req, res) => {
  const { route_id } = req.params;

  try {
    const schedules = await Schedule.findAll({
      where: { route_id },
      order: [['departure_time', 'ASC']]
    });
    res.status(200).json(schedules);
  } catch (err) {
    console.error("Error fetching schedules:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.status(201).json(schedule);
  } catch (err) {
    console.error("Error creating schedule:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    await Schedule.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Schedule deleted" });
  } catch (err) {
    console.error("Error deleting schedule:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getDeparturesFromStation = async (req, res) => {
  const { station_id } = req.params;
  const { type } = req.query;

  try {
    const stops = await ScheduleStop.findAll({
      where: { station_id },
      include: [
        {
          model: Schedule,
          include: [
            {
              model: Route,
              include: [
                {
                  model: Train,
                  attributes: ['name', 'type'],
                  ...(type ? { where: { type } } : {})
                },
                {
                  model: Station,
                  as: 'destination_station',
                  attributes: ['name']
                }
              ]
            }
          ]
        }
      ],
      order: [['arrival_time', 'ASC']]
    });

    const result = stops
      .filter(stop => stop.Schedule?.Route?.Train) // pastikan Train valid
      .map(stop => ({
        schedule_id: stop.schedule_id,
        departure_time: stop.arrival_time,
        train_name: stop.Schedule.Route.Train.name,
        train_type: stop.Schedule.Route.Train.type,
        destination: stop.Schedule.Route.destination_station.name
      }));

    res.json(result);
  } catch (err) {
    console.error("Error in getDeparturesFromStation:", err);
    res.status(500).json({ message: "Server error", detail: err.message });
  }
};
