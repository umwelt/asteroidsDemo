const apiService = require('../../services/apiService');

// Jest configuration
const axios = require('axios');

jest.mock('axios');

const NASA_API_URL = 'https://api.nasa.gov/neo/rest/v1/feed';
const NEO_API_URL = 'https://api.nasa.gov/neo/rest/v1/neo';
const API_KEY = 'DEMO_KEY';

describe('API Service', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getAsteroidsFromAPI', () => {

        it('should retrieve asteroids data from NASA API', async () => {
            const startDate = '2023-01-01';
            const endDate = '2023-01-07';
            const expectedData = { /* expected response data */ };
            axios.get.mockResolvedValueOnce({ data: { near_earth_objects: expectedData }});

            const data = await apiService.getAsteroidsFromAPI(startDate, endDate);

            expect(axios.get).toHaveBeenCalledWith(`${NASA_API_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`);
            expect(data).toEqual(Object.values(expectedData).flat());
        });
        
    });

    describe('getAsteroidByIdFromAPI', () => {
        it('should retrieve asteroid details by ID from NASA API', async () => {
            const id = '12345';
            const expectedData = { /* expected response data */ };
            axios.get.mockResolvedValueOnce({ data: expectedData });

            const data = await apiService.getAsteroidByIdFromAPI(id);

            expect(axios.get).toHaveBeenCalledWith(`${NEO_API_URL}/${id}?api_key=${API_KEY}`);
            expect(data).toEqual(expectedData);
        });

    });

});
