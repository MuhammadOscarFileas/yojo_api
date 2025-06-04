// controllers/laporanController.js
import Laporan from "../models/laporanmodel.js";
//import { uploadToGCS } from "../utils/gcs.js";

export const getAllLaporan = async (req, res) => {
  try {
    const laporan = await Laporan.findAll({ order: [['created_at', 'DESC']] });
    res.status(200).json(laporan);
  } catch (err) {
    console.error("Error fetching laporan:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createLaporan = async (req, res) => {
  try {
    const { moda, topik, koridor, deskripsi } = req.body;
    //let file_url = null;

    // if (req.file) {
    //   file_url = await uploadToGCS(req.file);
    // }

    const laporan = await Laporan.create({
      moda,
      topik,
      koridor: koridor || null,
      deskripsi
      //file_url
    });

    res.status(201).json(laporan);
  } catch (err) {
    console.error("Error creating laporan:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteLaporan = async (req, res) => {
  try {
    await Laporan.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Laporan deleted" });
  } catch (err) {
    console.error("Error deleting laporan:", err);
    res.status(500).json({ message: "Server error" });
  }
};