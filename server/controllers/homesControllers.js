const { House, ImageHouse } = require('../db/models');

async function getAllHouses(req, res) {
  try {
    const allHomes = await House.findAll({
      include: [
        {
          model: ImageHouse,
        },
      ],
    });
    res.json(allHomes);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

async function deleteHomes(req, res) {
  const { id } = req.params;
  try {
    await ImageHouse.destroy({ where: { house_id: id } });
    House.destroy({ where: { id } });
    res.json(id);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getOneHome(req, res) {
  const { id } = req.params;
  try {
    const house = await House.findOne({
      where: { id },
      raw: true,
      include: [
        {
          model: ImageHouse,
        },
      ],
    });
    res.json(house);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = { getAllHouses, deleteHomes, getOneHome };
