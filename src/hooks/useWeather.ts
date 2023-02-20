import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useWeather = (lat: string, lon: string) => {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

  const { data, error, isLoading } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    fetcher
  );

  return { weather: data, weatherErr: error, weatherLoading: isLoading };
};
