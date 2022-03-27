const multer = require('multer');

const types = ['image/png', 'image/jpeg', 'image/jpg'];

// фильтрует по типу файлов
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    // null - the place where error
  }
};

module.exports = multer({ fileFilter });
