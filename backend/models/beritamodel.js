import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Berita = db.define("Berita", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isi: {
    type: DataTypes.TEXT('long'), // agar support HTML panjang atau multiline
    allowNull: false
  },
  tanggal: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

export default Berita;
