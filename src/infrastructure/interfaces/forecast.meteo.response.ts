export interface ForecastMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: CurrentUnits;
  current: Current;

  hourly_units: HourlyUnits;
  hourly: Hourly;

  daily_units: DailyUnits;
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
  isDay: boolean;
}

export interface CurrentUnits {
  time: string;
  interval: string;

  temperature_2m: string;
  apparent_temperature: string;
  relative_humidity_2m: string;
  wind_speed_10m: string;
  weather_code: string;
  surface_pressure: string;
}

export interface Hourly {
  time: string[];
  weather_code: string[];
  temperature_2m: number[];
  is_day: number[];
}

export interface HourlyUnits {
  time: string;

  surface_pressure: string;
  visibility: string;
  wind_speed_10m: string;
}

export interface Daily {
  time: string[];

  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
}

export interface DailyUnits {
  time: string;

  sunrise: string;
  sunset: string;
  uv_index_max: string;
}
