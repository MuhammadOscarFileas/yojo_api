import Laporan from "../models/laporanmodel.js";

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

    res.status(200).json({
      message: "Laporan created successfully",
      data: laporan,
      status: "success",
    });
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

export const editLaporan = async (req, res) => {
  try {
    const { id } = req.params;
    const { moda, topik, koridor, deskripsi } = req.body;

    const laporan = await Laporan.findByPk(id);
    if (!laporan) {
      return res.status(404).json({ message: "Laporan tidak ditemukan" });
    }

    laporan.moda = moda || laporan.moda;
    laporan.topik = topik || laporan.topik;
    laporan.koridor = koridor !== undefined ? koridor : laporan.koridor;
    laporan.deskripsi = deskripsi || laporan.deskripsi;

    await laporan.save();

    res.status(200).json({ message: "Laporan berhasil diperbarui", laporan });
  } catch (err) {
    console.error("Error editing laporan:", err);
    res.status(500).json({ message: "Server error" });
  }
};