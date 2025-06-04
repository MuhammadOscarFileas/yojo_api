import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Schedule from "./schedulemodel.js";
import Station from "./stationmodel.js";

const { DataTypes } = Sequelize;

const ScheduleStop = db.define("ScheduleStop", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Schedule,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    station_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Station,
            key: 'id'
        }
    },
    stop_order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    arrival_time: {
        type: DataTypes.TIME,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default ScheduleStop;
