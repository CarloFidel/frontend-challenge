import { useQuery } from "@tanstack/react-query";
import { getLatLongWeather } from "../../../service/searchCity.service";
import type { City } from "../../../infrastructure/interfaces/city.interface";

export const useCoordCity = (city: string) => {
  const cityQuery = useQuery<City[], Error>({
    queryKey: ["city", city],
    queryFn: () => getLatLongWeather(city),
    enabled: city.trim().length > 0,
    staleTime: 1000 * 60 * 60 * 24,
  });
  return {
    cityQuery,
  };
};
