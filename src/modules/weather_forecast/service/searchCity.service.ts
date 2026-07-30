import type { City } from "../../../infrastructure/interfaces/city.interface";
import { CityMapper } from "../../../infrastructure/mapper/city.mapper";
import { searchCityUrl } from "./api.config";

export const getLatLongWeather = async (city: string): Promise<City[]> => {
  const { data } = await searchCityUrl.get("/search", {
    params: {
      name: city,
      count: 1,
    },
  });
  const datamapping = data.results.map(CityMapper.fromMeteoApi);
  return datamapping;
};
