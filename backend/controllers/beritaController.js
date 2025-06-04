import Berita from "../models/beritamodel.js";

export const getAllBerita = async (req, res) => {
  try {
    const berita = await Berita.findAll({ order: [['tanggal', 'DESC']] });
    res.status(200).json(berita);
  } catch (err) {
    console.error("Error fetching berita:", err);
    res.status(500).json({ message: "Server error" });
  }
};



export const getBeritaById = async (req, res) => {
  try {
    const berita = await Berita.findByPk(req.params.id);
    if (!berita) return res.status(404).json({ message: "Not found" });
    res.status(200).json(berita);
  } catch (err) {
    console.error("Error fetching berita by id:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createBerita = async (req, res) => {
  try {
    const berita = await Berita.create(req.body);
    res.status(201).json(berita);
  } catch (err) {
    console.error("Error creating berita:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteBerita = async (req, res) => {
  try {
    await Berita.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Berita deleted" });
  } catch (err) {
    console.error("Error deleting berita:", err);
    res.status(500).json({ message: "Server error" });
  }
};
