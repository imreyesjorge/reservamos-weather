import { useWeather } from "../../../../hooks/useWeather";
import { DailyWeatherCard } from "../../molecules/DailyWeatherCard";
import { motion } from "framer-motion";

export const WeatherCard = ({ data }) => {
  const { weather, weatherErr, weatherLoading } = useWeather(
    data?.lat,
    data?.long
  );

  return (
    <>
      <div
        className="w-4/5 p-4 flex flex-col items-center gap-8"
      >
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
      {weatherErr && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="w-auto text-slate-600 m-4 p-4 px-4 pr-5 bg-white border border-slate-300/75 shadow-lg  rounded-md fixed bottom-0 right-0 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-red-400"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          <p>Error while fetching weather info.</p>
        </motion.div>
      )}
    </>
  );
};
