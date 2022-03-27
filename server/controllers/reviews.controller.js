const { Rewiew, House } = require('../db/models');

async function initReviews(req, res) {
  try {
    const allReviews = await Rewiew.findAll();
    res.json(allReviews);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

// dobavlenie novogo otziva;
async function addReview(req, res) {
  const {
    house_id, rating, nameUser, description,
  } = req.body;
  try {
    const newReview = await Rewiew.create(req.body);
    const allReviews = await Rewiew.findAll({
      where: { house_id },
      raw: true,
    });

    const middleRating = allReviews.reduce((ac, cur) => ac + cur.rating, 0);
    const currentRatingHouse = Math.ceil(middleRating / allReviews.length);
    const currentHouse = await House.update({
      rating: currentRatingHouse,
    }, {
      where: { id: house_id },
      raw: true,
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function putReviews(req, res) {
  const { info } = req.body;
  let newReviews;
  try {
    newReviews = await Rewiew.update({
      description: info,
      status: true,
    }, {
      where: {
        id: req.params.id,
      },
      raw: true,
      returning: true,
    });
    const arr = [...newReviews[1]];
    if (arr[0]) {
      return res.json(arr[0]);
    }
  } catch (error) {
    return ({
      message: error.message,
    });
  }
}

module.exports = { initReviews, addReview, putReviews };
