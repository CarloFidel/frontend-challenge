import type { City } from "../interfaces/city.interface";
import type { Result } from "../interfaces/search_city_meteo.response";

export class CityMapper {
  static fromMeteoApi = (city: Result): City => {
    return {
      latitude: city.latitude,
      longitude: city.longitude,
      country: city.country,
      city: city.name,
    };
  };
}
