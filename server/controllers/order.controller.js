const { Op } = require('sequelize');
const {
  Order, House, User, ImageHouse,
} = require('../db/models');
const { sendCreatedReservationMail } = require('./mail.controller');

function unique(arr, prop) {
  const seen = {};
  const result = arr.filter((item) => {
    if (seen[item[prop]]) {
      return false;
    }
    seen[item[prop]] = true;
    return true;
  });
  return result;
}

function foo(max, min) {
  const maxDay = Date.parse(max);
  const minDay = Date.parse(min);
  const interval = [];
  for (let i = minDay; i <= maxDay; i += 60 * 60 * 24 * 1000) {
    interval.push(new Date(i).toISOString().substring(0, 10));
  }
  return interval;
}

async function getHouse(req, res) {
  const { dataInUser, dataOutUser } = req.body;
  const avalibleHouses = [];
  const unavelebleHouses = [];
  const houses = await House.findAll({
    include: [
      {
        model: ImageHouse,
      },
    ],
  });

  const occupieHouse = await Order.findAll({
    where: {
      [Op.or]: [
        {
          dataIn: { [Op.lte]: dataInUser },
          dataOut: { [Op.gte]: dataOutUser },
        },
        {
          dataIn: { [Op.gte]: dataInUser },
          dataOut: { [Op.lte]: dataOutUser },
        },
      ],
    },

    raw: true,
    include: [{
      model: House,
    }],
  });
  const filterOrder = unique(occupieHouse, 'house_id');
  unavelebleHouses.push(...filterOrder);

  houses.forEach((home) => {
    if (!unavelebleHouses.find((el) => el.house_id === home.id)) {
      avalibleHouses.push(home);
    }
  });
  res.json(avalibleHouses);
}

async function saveOrder(req, res) {
  const {
    currentHouse, info, interval, summa,
  } = req.body;
  try {
    const user = await User.findOne({
      where: { email: info.email },
    });

    const chosenHouse = await House.findOne({
      where: {
        id: currentHouse.id,
      },
    });

    if (user) {
      const order = await Order.findOne({
        where: {
          user_id: user.id,
          dataIn: interval.dataInUser,
          dataOut: interval.dataOutUser,
          house_id: currentHouse.id,
        },
      });

      if (order) {
        return res.status(400).json({ message: 'Дом забронирован', success: false });
      }

      if (!order) {
        const newOrderExistUser = await Order.create({
          user_id: user.id,
          dataIn: interval.dataInUser,
          dataOut: interval.dataOutUser,
          comment: info.comment,
          summa,
          house_id: currentHouse.id,
        });
        // тут будет отправление email
        await sendCreatedReservationMail(user.email, newOrderExistUser, chosenHouse);
        return res.status(200).json({ message: 'Бронирование успешно создано!' });
      }
    }

    const newUser = await User.create({
      name: info.name,
      email: info.email,
      phone: info.phone,
    });

    const newOrder = await Order.create({
      user_id: newUser.id,
      dataIn: interval.dataInUser,
      dataOut: interval.dataOutUser,
      comment: info.comment,
      summa,
      house_id: currentHouse.id,
    });
    // тут будет отправление email
    await sendCreatedReservationMail(info.email, newOrder, chosenHouse);
    return res.status(200).json({ message: 'Бронирование успешно создано!' });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function getUnavalibleDate(req, res) {
  const { id } = req.params;
  try {
    const unavalibleDate = [];
    const date = await Order.findAll({
      where: { house_id: id },
      raw: true,
    });
    date.map((el) => {
      const interval = foo(el.dataOut, el.dataIn);
      unavalibleDate.push(interval);
    });
    const flatArr = unavalibleDate.flat();
    const response = [...new Set(flatArr)];
    return res.json(response);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}

module.exports = { saveOrder, getHouse, getUnavalibleDate };
