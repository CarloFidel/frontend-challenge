export interface ForecastMeteoResponse {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    current_units:         CurrentUnits;
    current:               Current;
    hourly_units:          HourlyUnits;
    hourly:                Hourly;
    daily_units:           DailyUnits;
    daily:                 Daily;
}

export interface Current {
    time:                 string;
    interval:             number;
    temperature_2m:       number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    surface_pressure:     number;
    wind_speed_10m:       number;
    weather_code:         number;
}

export interface CurrentUnits {
    time:                 string;
    interval:             string;
    temperature_2m:       string;
    apparent_temperature: string;
    relative_humidity_2m: string;
    surface_pressure:     string;
    wind_speed_10m:       string;
    weather_code:         string;
}

export interface Daily {
    time:               Date[];
    temperature_2m_max: Array<number | null>;
    temperature_2m_min: Array<number | null>;
    weather_code:       Array<number | null>;
}

export interface DailyUnits {
    time:               string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    weather_code:       string;
}

export interface Hourly {
    time:           string[];
    temperature_2m: Array<number | null>;
    weather_code:   Array<number | null>;
}

export interface HourlyUnits {
    time:           string;
    temperature_2m: string;
    weather_code:   string;
}
