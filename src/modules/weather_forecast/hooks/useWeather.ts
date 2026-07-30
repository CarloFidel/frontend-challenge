import { useQuery } from "@tanstack/react-query";
import type { ForecastMeteoResponse } from "../../../infrastructure/interfaces/forecast.meteo.response";
import { getWeatherForecast } from "../service/getWeather.service";

export const useWeather = (
  latitude?: number | undefined,
  longitude?: number | undefined,
) => {
  const weatherQuery = useQuery<ForecastMeteoResponse, Error>({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => getWeatherForecast(latitude!, longitude!),
    enabled: latitude !== undefined && longitude !== undefined,
    staleTime: 1000 * 60 * 60 * 24
  });
  return {
    weatherQuery,
  };
};
