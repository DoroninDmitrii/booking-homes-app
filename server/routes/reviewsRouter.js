const router = require('express').Router();
const reviewsController = require('../controllers/reviews.controller');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', reviewsController.initReviews);
router.post('/', reviewsController.addReview);
router.put('/:id', isAdmin, reviewsController.putReviews);

module.exports = router;
