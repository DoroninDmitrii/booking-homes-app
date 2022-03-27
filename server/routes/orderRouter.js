const router = require('express').Router();
const orderController = require('../controllers/order.controller');

router.post('/free', orderController.getHouse);
router.post('/free/:id', orderController.getUnavalibleDate);
router.post('/save', orderController.saveOrder);

module.exports = router;
