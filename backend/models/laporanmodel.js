import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Laporan = db.define("Laporan", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  moda: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topik: {
    type: DataTypes.STRING,
    allowNull: false
  },
  koridor: {
    type: DataTypes.STRING,
    allowNull: true // hanya jika moda = TransJogja
  },
  deskripsi: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  file_url: {
    type: DataTypes.STRING,
    allowNull: true // untuk simpan URL file dari GCS
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
}, {
  freezeTableName: true,
  timestamps: false
});

export default Laporan;
