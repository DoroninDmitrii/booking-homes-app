const multer = require('multer');

const storage = multer.diskStorage({
  // куда сохранять фотки
  destination(req, file, cb) {
    cb(null, 'images/homes');
  },
  // с каким именем запишется файл
  filename(req, file, cb) {
    const dateTime = new Date().getTime();
    cb(null, `${dateTime}-${file.originalname}`);
  },
});

module.exports = multer({ storage });
