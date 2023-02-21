import { useWeather } from "../../../../hooks/useWeather";
import { DailyWeatherCard } from "../../molecules/DailyWeatherCard";

export const WeatherCard = ({ data }) => {
  const { weather, weatherErr, weatherLoading } = useWeather(
    data?.lat,
    data?.long
  );

  return (
    <div className="w-4/5 p-4 flex flex-col items-center gap-8">
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
  );
};
