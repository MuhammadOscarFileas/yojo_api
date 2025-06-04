import Train from './trainmodel.js';
import Route from './routesmodel.js';
import RouteStation from './route_stationmodel.js';
import Station from './stationmodel.js';
import Schedule from './schedulemodel.js';
import ScheduleStop from './schedulestopmodel.js';

// Train → Route
Train.hasMany(Route, { foreignKey: 'train_id' });
Route.belongsTo(Train, { foreignKey: 'train_id' });

// Route → RouteStation
Route.hasMany(RouteStation, { foreignKey: 'route_id' });
RouteStation.belongsTo(Route, { foreignKey: 'route_id' });

// Station → RouteStation
Station.hasMany(RouteStation, { foreignKey: 'station_id' });
RouteStation.belongsTo(Station, { foreignKey: 'station_id' });

// Route → Schedule
Route.hasMany(Schedule, { foreignKey: 'route_id' });
Schedule.belongsTo(Route, { foreignKey: 'route_id' });

// Schedule → ScheduleStop
Schedule.hasMany(ScheduleStop, { foreignKey: 'schedule_id' });
ScheduleStop.belongsTo(Schedule, { foreignKey: 'schedule_id' });

// Station → ScheduleStop
Station.hasMany(ScheduleStop, { foreignKey: 'station_id' });
ScheduleStop.belongsTo(Station, { foreignKey: 'station_id' });

Route.belongsTo(Station, { foreignKey: 'origin_station_id', as: 'origin_station' });
Route.belongsTo(Station, { foreignKey: 'destination_station_id', as: 'destination_station' });

