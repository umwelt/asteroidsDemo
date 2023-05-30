class Diameter {
	constructor(
		public estimated_diameter_min: number,
		public estimated_diameter_max: number
	) {}
}

class EstimatedDiameter {
	constructor(
		public kilometers: Diameter,
		public meters: Diameter,
		public miles: Diameter,
		public feet: Diameter
	) {}
}

class Velocity {
	constructor(
		public kilometers_per_second: string,
		public kilometers_per_hour: string,
		public miles_per_hour: string
	) {}
}

class MissDistance {
	constructor(
		public astronomical: string,
		public lunar: string,
		public kilometers: string,
		public miles: string
	) {}
}

class CloseApproachData {
	constructor(
		public close_approach_date: string,
		public close_approach_date_full: string,
		public epoch_date_close_approach: number,
		public relative_velocity: Velocity,
		public miss_distance: MissDistance,
		public orbiting_body: string
	) {}
}

class Asteroid {
	constructor(
		public id: string,
		public neo_reference_id: string,
		public name: string,
		public nasa_jpl_url: string,
		public absolute_magnitude_h: number,
		public estimated_diameter: EstimatedDiameter,
		public is_potentially_hazardous_asteroid: boolean,
		public close_approach_data: CloseApproachData[],
		public is_sentry_object: boolean
	) {}
}

export default Asteroid;
