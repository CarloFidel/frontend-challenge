import { useState } from "react";
import {
  EyeOpenIcon,
  GearIcon,
  OpacityIcon,
  RadiobuttonIcon,
  StarIcon,
  SunIcon,
} from "@radix-ui/react-icons";

import { WiStrongWind } from "weather-icons-react";

import { getToDayDate } from "../utility/getToDay";
import { weatherCodeMap } from "../infrastructure/mapper/weatherCode.mapper";

import { useCoordCity } from "../modules/search_by_city/hooks/useCoordCity";
import { useWeather } from "../modules/search_by_city/hooks/useWeather";

import AtmosParams from "../modules/search_by_city/components/AtmosParams";
import ViewParams from "../modules/search_by_city/components/ViewParams";
import SearchBar from "../modules/search_by_city/components/SearchBar";
import Loading from "../common/components/Loading";
import CustomError from "../common/components/CustomError";
import { hourTransform } from "../utility/DateFormat";
import { getUvDescription } from "../infrastructure/mapper/uv_index.mapper";
import { getWeatherIcon } from "../infrastructure/mapper/weatherCode.icons.mapper";

function Home() {
  const [toDay] = useState(getToDayDate());
  const [cityName, setCityName] = useState<string>("Madrid");

  const handleSearch = async (query: string) => {
    query = query.trim();
    if (!query) return;
    setCityName(query);
  };

  const { cityQuery } = useCoordCity(cityName);
  const cityData = cityQuery.data;

  const { weatherQuery } = useWeather(
    cityData?.[0]?.latitude,
    cityData?.[0]?.longitude,
  );
  const weatherData = weatherQuery.data;

  return (
    <div className="flex h-full flex-col">
      <section className="flex w-full justify-between">
        <SearchBar onQuery={handleSearch} />
        <div className="flex gap-4 justify-center items-center">
          <SunIcon width={20} height={20} />
          <GearIcon width={20} height={20} />
        </div>
      </section>

      {(cityQuery.isLoading || weatherQuery.isLoading) && (
        <>
          <Loading />
        </>
      )}

      {cityQuery.isError && (
        <CustomError
          title="City not found"
          message="Please introduce another city for search"
        />
      )}
      {weatherQuery.isError && (
        <CustomError
          title="No weather data"
          message="Sorry, we don`t have any weather data for that city"
        />
      )}

      {cityData && weatherData && (
        <section className="flex flex-1 gap-4 mt-10 items-stretch min-h-0">
          <article className="flex flex-col items-start w-1/2 h-full justify-between ">
            <div className="flex justify-start gap-10 items-start w-full">
              <div className="flex flex-col">
                <div className="flex flex-col justify-start">
                  <div className="flex items-center justify-start gap-2">
                    <h1 className="text-h1">
                      {`${cityData && cityData[0]?.city},  
                    ${cityData && cityData[0]?.country}`}
                    </h1>
                    <StarIcon
                      width={20}
                      height={20}
                      className="text-yellow-400 mt-1 cursor-pointer"
                      onClick={() => {
                        console.log("clicked");
                      }}
                    />
                  </div>
                  <p>{toDay}</p>
                </div>
                <div className="flex justify-start items-start">
                  <p className="text-display">
                    {weatherData?.current?.temperature_2m}
                  </p>
                  <p className="mt-10">°C</p>
                </div>
                <div className="flex flex-col justify-start">
                  <p>
                    {weatherData
                      ? weatherCodeMap[weatherData.current.weather_code]
                      : "--"}
                  </p>
                  <p>
                    {" "}
                    {`Fles like ${weatherData?.current.apparent_temperature}`}
                  </p>
                </div>
              </div>
              <div className="bg-gray-200/10 backdrop-blur-xs rounded-3xl px-8 py-2">
                <h2>Now</h2>
                {getWeatherIcon(weatherData.current.weather_code, weatherData.current.isDay)}
              </div>
            </div>
            <div className="flex w-full gap-2">
              <AtmosParams
                value={weatherData?.current.wind_speed_10m}
                param="SW"
                messuereUnity="km/h"
                iconParam={<WiStrongWind size={24} />}
                iconPlus
              />
              <AtmosParams
                value={weatherData?.current.relative_humidity_2m}
                param="Humidity"
                messuereUnity="%"
                iconParam={<OpacityIcon />}
                iconPlus
              />
              <AtmosParams
                value={weatherData?.current.surface_pressure}
                param="Preassure"
                messuereUnity="hPa"
                iconParam={<RadiobuttonIcon />}
              />
            </div>
            <div className="flex w-full justify-between">
              <ViewParams
                param="UV Index"
                value={getUvDescription(weatherData?.daily.uv_index_max[0])}
                numericValue={weatherData?.daily.uv_index_max[0]}
              />
              <ViewParams
                param="Visibility"
                value={weatherData?.hourly.visibility[0]}
                iconParam={<EyeOpenIcon width={25} height={25} />}
              />
              <ViewParams
                param="Sunrise"
                value={hourTransform(weatherData?.daily.sunrise[0])}
                iconParam={<SunIcon width={25} height={25} />}
              />
              <ViewParams
                param="Sunset"
                value={hourTransform(weatherData?.daily.sunset[0])}
                iconParam={<SunIcon width={25} height={25} />}
              />
            </div>
          </article>
          <article className="flex justify-center items-center w-1/2">
            <p>Article 2</p>
          </article>
        </section>
      )}
    </div>
  );
}

export default Home;
