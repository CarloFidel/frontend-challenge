export interface ForecastMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current: Current;
  hourly: Hourly;
  daily: Daily;
}

export interface Current {
  time: string;
  interval: number;
  visibility: number;
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  weather_code: number;
  surface_pressure: number;
  is_day: boolean;
}

export interface Hourly {
  time: string[];
  weather_code: string[];
  temperature_2m: number[];
  is_day: number[];
}

export interface Daily {
  time: string[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}
