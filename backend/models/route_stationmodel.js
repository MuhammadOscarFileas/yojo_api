import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Route from "./routesmodel.js";
import Station from "./stationmodel.js";

const { DataTypes } = Sequelize;

const RouteStation = db.define("RouteStation", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    route_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Route,
            key: 'id'
        }
    },
    station_id: {
        type: DataTypes.STRING,
        references: {
            model: Station,
            key: 'id'
        }
    },
    stop_order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default RouteStation;
