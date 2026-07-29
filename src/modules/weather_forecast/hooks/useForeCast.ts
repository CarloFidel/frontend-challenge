import { useCoordCity } from "../../search_by_city/hooks/useCoordCity";
import { useWeather } from "./useWeather";

const useForeCast = (cityName: string) => {
  const { cityQuery } = useCoordCity(cityName);
  const cityData = cityQuery.data;

  const { weatherQuery } = useWeather(
    cityData?.[0]?.latitude,
    cityData?.[0]?.longitude,
  );
  const weatherData = weatherQuery.data;
  
  const hourlyForecast =
    weatherData?.hourly.time.slice(0, 24).map((time, index) => ({
      time,
      temperature: weatherData.hourly.temperature_2m[index],
      weatherCode: weatherData.hourly.weather_code[index],
      isDay: weatherData.hourly.is_day[index] === 1,
    })) ?? [];

  const dailyForecast =
    weatherData?.daily.time.map((date, index) => ({
      date,
      tempMax: weatherData.daily.temperature_2m_max[index],
      tempMin: weatherData.daily.temperature_2m_min[index],
      weatherCode: weatherData.daily.weather_code[index],
    })) ?? [];

  return {
    cityData,
    cityQuery,
    weatherData,
    weatherQuery,
    hourlyForecast,
    dailyForecast,
  };
};

export default useForeCast;
