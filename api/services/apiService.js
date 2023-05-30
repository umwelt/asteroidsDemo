const axios = require('axios');

const NASA_API_URL = 'https://api.nasa.gov/neo/rest/v1/feed';
const NEO_API_URL = 'https://api.nasa.gov/neo/rest/v1/neo';
const API_KEY = 'DEMO_KEY';

async function getAsteroidsFromAPI(startDate, endDate) {
    try {
        const response = await axios.get(`${NASA_API_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`);
        const { near_earth_objects } = response.data;
        return Object.values(near_earth_objects).flat();
    } catch (error) {
        console.error(error.response.data);
        throw new Error(error);
    }
}

async function getAsteroidByIdFromAPI(id) {
    try {
        const response = await axios.get(`${NEO_API_URL}/${id}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error(error.response.data);
        throw new Error(error);
    }
}

async function addAsteroidToFavourites(id) {
    try {
        return await getAsteroidByIdFromAPI(id);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getAsteroidsFromAPI,
    getAsteroidByIdFromAPI,
    addAsteroidToFavourites
};
