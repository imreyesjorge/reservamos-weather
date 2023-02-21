import { useWeather } from "../../../../hooks/useWeather";
import { DailyWeatherCard } from "../../molecules/DailyWeatherCard";
import { Toast } from "../../atoms/Toast";
import { WeatherCardProps } from "./types";

export const WeatherCard = ({ data }: WeatherCardProps) => {
  const { weather, weatherErr, weatherLoading } = useWeather(
    data?.lat,
    data?.long
  );

  return (
    <>
      <div className="w-4/5 p-4 flex flex-col items-center gap-8">
        {weatherLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-400 animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        )}
        {weather &&
          weather.daily.map((day) => (
            <DailyWeatherCard
              key={day.dt}
              dt={day.dt}
              temp={day.temp.day}
              min={day.temp.min}
              max={day.temp.max}
              icon={day.weather[0].icon}
            />
          ))}
      </div>
      {weatherErr && <Toast text="Error while fetching weather info." />}
    </>
  );
};
