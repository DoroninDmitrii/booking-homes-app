const { Service } = require('../db/models');

async function getAllServices(req, res) {
  try {
    const allServices = await Service.findAll();
    res.json(allServices);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = { getAllServices };
