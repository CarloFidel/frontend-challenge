import { use } from "react";
import { FavoriteCittyContext } from "../context/FavoriteCittyContext";
import type { City } from "../../../infrastructure/interfaces/city.interface";

const useFavoriteCity = (cityData: City[]) => {
  const FavoriteCitty = use(FavoriteCittyContext);
  const { favor, setFavor } = FavoriteCitty!;

  const isFavorite =
    cityData &&
    favor.some(
      (city) => city.city.toLowerCase() === cityData[0].city.toLowerCase(),
    );

  const handleFavoriteToggle = () => {
    const city = cityData![0];

    const exists = favor.some((fav) => fav.city === city.city);

    if (exists) {
      setFavor((prev) => prev.filter((fav) => fav.city !== city.city));
    } else {
      setFavor((prev) => [
        {
          city: city.city,
          country: city.country,
          latitude: city.latitude,
          longitude: city.longitude,
        },
        ...prev,
      ]);
    }
  };

  return { isFavorite, handleFavoriteToggle };
};

export default useFavoriteCity;
