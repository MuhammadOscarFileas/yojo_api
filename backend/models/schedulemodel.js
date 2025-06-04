import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Route from "./routesmodel.js";

const { DataTypes } = Sequelize;

const Schedule = db.define("Schedule", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    route_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Route,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    departure_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Schedule;
