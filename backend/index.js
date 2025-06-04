import express from "express";
import cors from "cors";

// Routes transportasi Yojo
import stationRoutes from "./routes/stationRoutes.js";
import routeRoutes from "./routes/routeRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
import scheduleStopRoutes from "./routes/scheduleStopRoutes.js";
import trainRoutes from "./routes/trainRoutes.js";
import beritaRoutes from "./routes/beritaRoutes.js";
import laporanRoutes from "./routes/laporanRoutes.js";

// DB dan asosiasi
import * as models from "./models/index.js";
import "./models/association.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/berita", beritaRoutes);
app.use("/api/laporan", laporanRoutes);
app.use("/api/stations", stationRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/schedule-stops", scheduleStopRoutes);
app.use("/api/trains", trainRoutes);

app.get("/", (req, res) => {
  res.send("API Transportasi Yojo Berjalan dengan Baik!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server setelah database connect
(async () => {
  try {
    await models.db.sync({ alter: true }); // atau { force: true } untuk reset DB
    console.log("Database synced.");
    // await models.db.sync(); // uncomment jika ingin sinkronisasi otomatis
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Gagal koneksi ke database:", error);
  }
})();