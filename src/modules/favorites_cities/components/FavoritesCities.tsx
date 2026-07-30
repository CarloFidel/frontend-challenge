import { TrashIcon } from "@radix-ui/react-icons";
import type { City } from "../../../infrastructure/interfaces/city.interface";
import { convertToFahrenheit } from "../../../utility/convertToFahrenheit";
import { useWeatherData } from "../hooks/useWeatherData";
import { IoMdStar } from "react-icons/io";

interface Props {
  city: City;
  isFarenheit: boolean;
}

export function FavoriteCityRow({ city, isFarenheit }: Props) {
  const weather = useWeatherData(city.latitude, city.longitude);

  if (weather.isLoading) {
    return <div className="px-4 py-3">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-[2fr_2fr_1fr_1fr_80px] items-center px-4 py-3 border-t border-border-subtle/30 ">
      <div>
        {city.city}, {city.country}
      </div>

      <div className="flex items-center gap-2">
        {weather.weatherIcon}
        <span>{weather.weatherDescription}</span>
      </div>

      <div>
        {weather.currentTemp != null
          ? `${
              isFarenheit
                ? convertToFahrenheit(weather.currentTemp)
                : weather.currentTemp
            }°`
          : "--"}
      </div>

      <div>
        {weather.tempMin != null
          ? isFarenheit
            ? convertToFahrenheit(weather.tempMin)
            : weather.tempMin
          : "--"}
        °{" / "}
        {weather.tempMax != null
          ? isFarenheit
            ? convertToFahrenheit(weather.tempMax)
            : weather.tempMax
          : "--"}
        °
      </div>

      <div className="flex gap-3">
        <IoMdStar fill="gold" />
        <TrashIcon className="cursor-pointer" />
      </div>
    </div>
  );
}
