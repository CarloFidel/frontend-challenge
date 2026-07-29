import { getWeatherIcon } from "../../../infrastructure/mapper/weatherCode.icons.mapper";
import { weatherCodeMap } from "../../../infrastructure/mapper/weatherCode.mapper";
import { useWeather } from "../../weather_forecast/hooks/useWeather";

export const useWeatherData = (latitude: number, longitude: number) => {
  const { weatherQuery } = useWeather(latitude, longitude);
  const weatherData = weatherQuery.data;

  const tempMin = weatherData?.daily.temperature_2m_min[0];
  const tempMax = weatherData?.daily.temperature_2m_max[0];
  const currentTemp = weatherData?.current.temperature_2m;
  const weatherDescription = weatherData
    ? weatherCodeMap[weatherData.current.weather_code]
    : "";
  const weatherIcon = weatherData
    ? getWeatherIcon(
        weatherData.current.weather_code,
        weatherData.current.is_day,
        24,
      )
    : null;
  return {
    tempMin,
    tempMax,
    currentTemp,
    weatherDescription,
    weatherIcon,
    
    isLoading: weatherQuery.isLoading,
    isError: weatherQuery.isError,
  };
};
