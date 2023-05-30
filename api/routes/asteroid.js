const express = require('express');
const { getAsteroids, getAsteroidById } = require('../controllers/asteroid');

const router = express.Router();

router.get('/', getAsteroids);  // List all asteroids
router.get('/:id', getAsteroidById);  // Get specific asteroid details

module.exports = router;
