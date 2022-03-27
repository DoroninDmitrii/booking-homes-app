const router = require('express').Router();
const homesControllers = require('../controllers/homesControllers');

router.get('/', homesControllers.getAllHouses);
router.get('/:id', homesControllers.getOneHome);
router.delete('/:id', homesControllers.deleteHomes);

module.exports = router;
