import { formatForecastDate, hourTransform } from "../../../utility/DateFormat";
import { getWeatherIcon } from "../../../infrastructure/mapper/weatherCode.icons.mapper";
import { convertToFahrenheit } from "../../../utility/convertToFahrenheit";
import CustomPagination from "./CustomPagination";
import { use, useState } from "react";
import { TempUnityContext } from "../../search_by_city/context/TempUnityContext";
import { FORECAST_DAYS } from "../service/constants/weather.constants";

interface Props {
  hourlyForecast: hourlyForecast[];
  dailyForecast: dailyForecast[];
}

interface hourlyForecast {
  time: string;
  temperature: number;
  weatherCode: string;
  isDay: boolean;
}

interface dailyForecast {
  date: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
}

const ITEMS_PER_PAGE = 4;

const Forecast = ({ hourlyForecast, dailyForecast }: Props) => {
  const farenheitContext = use(TempUnityContext);
  const { isFarenheit } = farenheitContext!;

  const [currentPage, setCurrentPage] = useState(1);

  const visibleForecast = dailyForecast.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <article className="flex flex-col justify-start gap-20 items-center w-1/2 text-caption text-gray-300">
      <div className="bg-background-secondary/40 border border-border-subtle/10 backdrop-blur-xl w-full rounded-2xl py-2 shadow-forecast">
        <div className="flex justify-between border-b border-b-border-subtle/40 px-4 pb-2">
          <h2>Hourly forecast</h2>
        </div>
        <div className="flex gap-10 overflow-x-auto mt-5 px-4">
          {hourlyForecast.map((hour) => (
            <div
              key={hour.time}
              className="flex flex-col items-center gap-2 justify-between"
            >
              <p className="text-xs">{hourTransform(hour.time)}</p>
              {getWeatherIcon(Number(hour.weatherCode), hour.isDay, 25)}
              {isFarenheit
                ? convertToFahrenheit(hour.temperature)
                : hour.temperature}
              °
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background-secondary/40 border border-border-subtle/10 backdrop-blur-xl w-full rounded-2xl py-2 shadow-forecast">
        <div className="flex flex-col overflow-hidden h-full gap-8 overflow-x-auto">
          <div className="flex justify-start border-b border-b-border-subtle/40 pb-2">
            <h2 className="px-4">Dayly forecast</h2>
          </div>

          {visibleForecast.map((day) => (
            <div
              key={day.date}
              className="grid grid-cols-[1fr_1fr_1fr_1fr] px-4 items-center overflow-scroll w-full"
            >
              <span className="text-xs justify-start items-center ">
                {formatForecastDate(day.date).weekday}
              </span>

              <span className="text-xs text-gray-400 justify-start items-start">
                {formatForecastDate(day.date).month}{" "}
                {formatForecastDate(day.date).day}
              </span>

              {getWeatherIcon(day.weatherCode, true, 20)}

              <div className="flex gap-4 justify-center items-center">
                <span>
                  {isFarenheit ? convertToFahrenheit(day.tempMin) : day.tempMin}
                  °
                </span>

                <span className="text-gray-400 justify-center items-center ">
                  {isFarenheit ? convertToFahrenheit(day.tempMax) : day.tempMax}
                  °
                </span>
              </div>
            </div>
          ))}
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(FORECAST_DAYS / ITEMS_PER_PAGE)}
          onPageChange={setCurrentPage}
        />
        </div>
      </div>
    </article>
  );
};

export default Forecast;
