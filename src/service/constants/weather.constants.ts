export const CURRENT_PARAMS = [
  "temperature_2m",
  "apparent_temperature",
  "relative_humidity_2m",
  "wind_speed_10m",
  "weather_code",
  "surface_pressure",
  "is_day",
].join(",");

export const DAILY_PARAMS = ["sunrise", "sunset", "uv_index_max"].join(",");

export const HOURLY_PARAMS = [
  "surface_pressure",
  "visibility",
  "wind_speed_10m",
].join(",");

export const TIMEZONE = "Europe/London";

export const TEMPERATURE_UNIT = "celsius";
