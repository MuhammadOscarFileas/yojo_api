import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("yojo_db", "root", "yojobagus", {
  host: "34.9.26.173",
  dialect: "mysql",
});

export default db;
