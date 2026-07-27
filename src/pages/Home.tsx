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

import AtmosParams from "../modules/search_by_city/components/AtmosParams";
import ViewParams from "../modules/search_by_city/components/ViewParams";
import SearchBar from "../modules/search_by_city/components/SearchBar";
import { getToDayDate } from "../utility/getToDay";
import { getLatLongWeather } from "../service/searchCity.service";
import { getWeatherForecast } from "../service/getWeather.service";

function Home() {
  const [toDay] = useState(getToDayDate());
  const [notCityFound, setCityNotFound] = useState(false);

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    try {
      const dataWeather = await getLatLongWeather(query);

      if (!dataWeather?.results?.length) {
        setCityNotFound(true);
        return;
      }

      setCityNotFound(false);

      const lat = dataWeather.results[0]?.latitude;
      const long = dataWeather.results[0]?.longitude;

      const paramsWeather = await getWeatherForecast(lat, long)

      console.log(paramsWeather);
      
    } catch (error) {
      console.log(error);
    }
  };

  if (notCityFound) {
    return (
      <div className="flex h-full flex-col">
        <section className="flex w-full justify-between">
          <SearchBar onQuery={handleSearch} />
          <div className="flex gap-4 justify-center items-center">
            <SunIcon width={20} height={20} />
            <GearIcon width={20} height={20} />
          </div>
        </section>
        <h1 className="mt-10">No se encontró ninguna ciudad</h1>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <section className="flex w-full justify-between">
        <SearchBar onQuery={handleSearch} />
        <div className="flex gap-4 justify-center items-center">
          <SunIcon width={20} height={20} />
          <GearIcon width={20} height={20} />
        </div>
      </section>

      <section className="flex flex-1 gap-4 mt-10 items-stretch min-h-0">
        <article className="flex flex-col items-start w-1/2 h-full justify-between ">
          <div className="flex justify-start gap-10 items-start w-full">
            <div className="flex flex-col">
              <div className="flex flex-col justify-start">
                <div className="flex items-center justify-start gap-2">
                  <h1 className="text-h1">Oslo, Norway</h1>
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
                <p className="text-display">12</p>
                <p className="mt-10">°C</p>
              </div>
              <div className="flex flex-col justify-start">
                <p>Cloudy</p>
                <p>Feels like 12°C</p>
              </div>
            </div>
            <div className="bg-gray-200/10 backdrop-blur-xs rounded-3xl px-8 py-2">
              <h2>Now</h2>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                alt="logo"
                className="w-20 h-20 mt-4"
              />
            </div>
          </div>
          <div className="flex w-full gap-2">
            <AtmosParams
              value={16}
              param="SW"
              messuereUnity="km/h"
              iconParam={<WiStrongWind size={24} />}
              iconPlus
            />
            <AtmosParams
              value={58}
              param="Humidity"
              messuereUnity="%"
              iconParam={<OpacityIcon />}
              iconPlus
            />
            <AtmosParams
              value={1013}
              param="Preassure"
              messuereUnity="hPa"
              iconParam={<RadiobuttonIcon />}
            />
          </div>
          <div className="flex w-full justify-between">
            <ViewParams param="UV Index" value="Moderate" numericValue={3} />
            <ViewParams
              param="Visibility"
              value="10 km"
              iconParam={<EyeOpenIcon width={25} height={25} />}
            />
            <ViewParams
              param="Sunrise"
              value="04:01"
              iconParam={<SunIcon width={25} height={25} />}
            />
            <ViewParams
              param="Sunset"
              value="20:45"
              iconParam={<SunIcon width={25} height={25} />}
            />
          </div>
        </article>
        <article className="flex justify-center items-center w-1/2">
          <p>Article 2</p>
        </article>
      </section>
    </div>
  );
}

export default Home;
