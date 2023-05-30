import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export async function getAsteroids(startDate: string, endDate: string) {
	try {
		const response = await axios.get(`${BASE_URL}/asteroids`, {
			params: {
				start_date: startDate,
				end_date: endDate,
			},
		});
		return response.data;
	} catch (error: any) {
		throw new Error(`Error retrieving asteroids: ${error.message}`);
	}
}
