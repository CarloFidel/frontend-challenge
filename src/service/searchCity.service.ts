import type { SearchByCityMeteoResponse } from "../infrastructure/interfaces/search_city_meteo.response";
import { searchCityUrl } from "./api.config";

export const getLatLongWeather = async (
  city: string,
): Promise<SearchByCityMeteoResponse> => {
  const response = await searchCityUrl.get("/search", {
    params: {
      name: city,
      count: 1,
    },
  });
  return response.data;
};
