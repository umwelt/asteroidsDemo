// server/models/Asteroid.js

class Diameter {
    constructor(estimated_diameter_min, estimated_diameter_max) {
        this.estimated_diameter_min = estimated_diameter_min;
        this.estimated_diameter_max = estimated_diameter_max;
    }
}

class EstimatedDiameter {
    constructor(kilometers, meters, miles, feet) {
        this.kilometers = kilometers;
        this.meters = meters;
        this.miles = miles;
        this.feet = feet;
    }
}

class Velocity {
    constructor(kilometers_per_second, kilometers_per_hour, miles_per_hour) {
        this.kilometers_per_second = kilometers_per_second;
        this.kilometers_per_hour = kilometers_per_hour;
        this.miles_per_hour = miles_per_hour;
    }
}

class MissDistance {
    constructor(astronomical, lunar, kilometers, miles) {
        this.astronomical = astronomical;
        this.lunar = lunar;
        this.kilometers = kilometers;
        this.miles = miles;
    }
}

class CloseApproachData {
    constructor(
        close_approach_date,
        close_approach_date_full,
        epoch_date_close_approach,
        relative_velocity,
        miss_distance,
        orbiting_body
    ) {
        this.close_approach_date = close_approach_date;
        this.close_approach_date_full = close_approach_date_full;
        this.epoch_date_close_approach = epoch_date_close_approach;
        this.relative_velocity = relative_velocity;
        this.miss_distance = miss_distance;
        this.orbiting_body = orbiting_body;
    }
}

class Asteroid {
    constructor(
        id,
        neo_reference_id,
        name,
        nasa_jpl_url,
        absolute_magnitude_h,
        estimated_diameter,
        is_potentially_hazardous_asteroid,
        close_approach_data,
        is_sentry_object
    ) {
        this.id = id;
        this.neo_reference_id = neo_reference_id;
        this.name = name;
        this.nasa_jpl_url = nasa_jpl_url;
        this.absolute_magnitude_h = absolute_magnitude_h;
        this.estimated_diameter = estimated_diameter;
        this.is_potentially_hazardous_asteroid = is_potentially_hazardous_asteroid;
        this.close_approach_data = close_approach_data;
        this.is_sentry_object = is_sentry_object;
    }
}

module.exports = Asteroid;
