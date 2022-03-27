const router = require('express').Router();
const { isAdmin } = require('../middlewares/isAdmin');
const adminController = require('../controllers/admin.controller');
const storageMulter = require('../middlewares/storage.milter.middleware');
const { fileFilter } = require('../middlewares/fileFilter.milter.middleware');

router.put('/addHouse/img', isAdmin, fileFilter, storageMulter.array('homesImg', 5), adminController.saveImgController);

router.post('/addHouse', isAdmin, storageMulter.array('homesImg', 5), adminController.addHouseController);

router.post('/login', adminController.adminLogin);
// router.get('/addHouse', isAdmin, adminController.addHouseController);

router.put('/editHouse/:id', isAdmin, adminController.editHouseController);

router.get('/reservations/all', isAdmin, adminController.getAllReservations);
router.delete('/reservations/all/:id', isAdmin, adminController.deleteReservationController);
router.put('/reservations/all/edit/:id', isAdmin, adminController.updateReservationController);

module.exports = router;
