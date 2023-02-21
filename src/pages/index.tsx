import { useEffect, useState } from "react";
import { Input } from "../components/shared/atoms/Input";
import { DailyWeatherCard } from "../components/shared/molecules/DailyWeatherCard";
import { WeatherCard } from "../components/shared/organisms/WeatherCard";
import { useSearch } from "../hooks/useSearch";
import { useWeather } from "../hooks/useWeather";
import MainLayout from "../layouts/MainLayout";

const Default = () => {
  const [searchParam, setSearchParam] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const { cities, citiesErr, citiesLoading } = useSearch(searchParam);

  useEffect(() => {
    if (!cities) return;

    setSearchResults(cities.filter((item) => item.result_type === "city"));
  }, [cities]);

  useEffect(() => {
    setCurrentData(searchResults[0]);
  }, [searchResults]);

  return (
    <MainLayout>
      <Input
        setValue={setSearchParam}
        placeholder="Search for a City, e.g.: Ciudad de México"
      />
      <h1 className="text-3xl font-semibold">
        {currentData && currentData.display}
      </h1>
      {currentData && <WeatherCard data={currentData} />}
    </MainLayout>
  );
};

export default Default;
