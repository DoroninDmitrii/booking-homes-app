const router = require('express').Router();

const routerHomes = require('./routerHomes');
const adminMainRouter = require('./adminMainRouter');
const reviewsRouter = require('./reviewsRouter');
const routerServices = require('./routerService');
const orderRouter = require('./orderRouter');

router.use('/homes', routerHomes);
router.use('/admin', adminMainRouter);
router.use('/reviews', reviewsRouter);
router.use('/services', routerServices);
router.use('/order', orderRouter);

module.exports = router;
