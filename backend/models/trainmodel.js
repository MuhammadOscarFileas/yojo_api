import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Train = db.define("Train", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING, // Misal: "KRL", "Prameks", "YIA"
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Train;
