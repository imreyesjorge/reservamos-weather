import { useWeather } from "../../../../hooks/useWeather";
import { DailyWeatherCard } from "../../molecules/DailyWeatherCard";

export const WeatherCard = ({ data }) => {
  const { weather, weatherErr, weatherLoading } = useWeather(
    data?.lat,
    data?.long
  );

  return (
    <div style={{ border: "1px solid black" }}>
      {weather &&
        weather.daily.map((day) => (
          <DailyWeatherCard
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
