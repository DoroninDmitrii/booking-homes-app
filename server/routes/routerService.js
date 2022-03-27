const router = require('express').Router();
const servicesControllers = require('../controllers/service.controller');

router.get('/', servicesControllers.getAllServices);

module.exports = router;
