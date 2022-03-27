const jwt = require('jsonwebtoken');
const { Admin } = require('../db/models');

async function login(info) {
  try {
    const { email, password } = info;

    const admin = await Admin.findOne({
      where: {
        email,
      },
    });

    if (!admin) {
      throw new Error(`Пользователь с таким ${email} не найден!`);
    }
    const correctPass = admin.password;
    if (correctPass !== password) {
      throw new Error('Пароли не совпадают!');
    }
    return admin;
  } catch (error) {
    throw error;
  }
}

async function generateJwtToken(admin) {
  const { email, id } = admin;
  try {
    const accessToken = jwt.sign({ email, id }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_ACCESS_TOKEN,
    });
    return { tokenType: 'Bearer', accessToken };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  generateJwtToken,
  login,
};
