export const CURRENT_PARAMS = [
  "temperature_2m",
  "apparent_temperature",
  "relative_humidity_2m",
  "wind_speed_10m",
  "weather_code",
  "surface_pressure",
  "is_day",
  "visibility",
].join(",");

export const DAILY_PARAMS = [
  "sunrise",
  "sunset",
  "uv_index_max",
  "temperature_2m_max",
  "temperature_2m_min",
  "weather_code",
].join(",");

export const HOURLY_PARAMS = ["temperature_2m", "weather_code", "is_day"].join(
  ",",
);

export const TIMEZONE = "Europe/London";

export const TEMPERATURE_UNIT = "celsius";

export const FORECAST_DAYS = 16


