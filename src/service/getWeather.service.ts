import type { ForecastMeteoResponse } from "../infrastructure/interfaces/forecast.meteo.response";
import { forecastMeteoUrl } from "./api.config";
import {
  CURRENT_PARAMS,
  HOURLY_PARAMS,
  DAILY_PARAMS,
  TIMEZONE,
  TEMPERATURE_UNIT,
} from "./constants/weather.constants";

export const getWeatherForecast = async (
  latitud: number,
  longitud: number,
): Promise<ForecastMeteoResponse> => {

  const { data } = await forecastMeteoUrl.get("/forecast", {
    params: {
      latitude: latitud,
      longitude: longitud,
      current: CURRENT_PARAMS,
      hourly: HOURLY_PARAMS,
      daily: DAILY_PARAMS,
      timezone: TIMEZONE,
      temperature_unit: TEMPERATURE_UNIT,
    },
  });

  return data;
};
