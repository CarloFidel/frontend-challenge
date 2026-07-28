import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../../../service/getWeather.service";
import type { ForecastMeteoResponse } from "../../../infrastructure/interfaces/forecast.meteo.response";

export const useWeather = (
  latitude?: number | undefined,
  longitude?: number | undefined,
) => {
  const weatherQuery = useQuery<ForecastMeteoResponse, Error>({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => getWeatherForecast(latitude!, longitude!),
    enabled: latitude !== undefined && longitude !== undefined,
    staleTime: 1000 * 60 * 60 * 24, //la data estará activa durante 24 horas
  });
  return {
    weatherQuery,
  };
};
