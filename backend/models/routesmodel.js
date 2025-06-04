import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Station from "./stationmodel.js";
import Train from "./trainmodel.js";

const { DataTypes } = Sequelize;

const Route = db.define("Route", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  train_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Train, // gunakan string karena Train belum diimport langsung
      key: 'id'
    }
  },
  train_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  origin_station_id: {
    type: DataTypes.STRING,
    references: {
      model: Station,
      key: 'id'
    }
  },
  destination_station_id: {
    type: DataTypes.STRING,
    references: {
      model: Station,
      key: 'id'
    }
  },
  route_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

export default Route;
