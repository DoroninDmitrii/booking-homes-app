const jwt = require('jsonwebtoken');

async function isAdmin(req, res, next) {
  try {
    const authHeader = req.get('Authorization');
    const token = authHeader;
    const { id, email } = jwt.verify(token, process.env.SECRET_KEY);
    req.id = id;
    req.email = email;
    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

module.exports = { isAdmin };
