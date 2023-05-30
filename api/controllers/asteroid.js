const { getAsteroidsFromAPI, getAsteroidByIdFromAPI } = require('../services/apiService');

async function getAsteroids(req, res) {
    try {
        const startDate = req.query.start_date?.toString();
        const endDate = req.query.end_date?.toString();

        if (!startDate || !endDate) {
            res.status(400).json({ error: 'Invalid date range provided.' });
            return;
        }

        const data = await getAsteroidsFromAPI(startDate, endDate);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

async function getAsteroidById(req, res) {
    try {
        const id = req.params.id;
        const data = await getAsteroidByIdFromAPI(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

module.exports = {
    getAsteroids,
    getAsteroidById
};
