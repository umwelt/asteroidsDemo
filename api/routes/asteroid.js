const express = require('express');
const { getAsteroids, getAsteroidById } = require('../controllers/asteroid');

const router = express.Router();

router.get('/', getAsteroids);
router.get('/:id', getAsteroidById);

module.exports = router;
