import { useEffect, useState } from "react";
import { Input } from "../components/shared/atoms/Input";
import { useSearch } from "../hooks/useSearch";
import { useWeather } from "../hooks/useWeather";
import MainLayout from "../layouts/MainLayout";

const Default = () => {
  const [searchParam, setSearchParam] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const { cities, citiesErr, citiesLoading } = useSearch(searchParam);
  const { weather, weatherErr, weatherLoading } = useWeather(null, null);

  useEffect(() => {
    if (!cities) return;

    setSearchResults(cities.filter((item) => item.result_type === "city"));
  }, [cities]);

  useEffect(() => {
    setCurrentData(searchResults[0]);
  }, [searchResults]);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <MainLayout>
      <Input value={searchParam} setValue={setSearchParam} />
      {currentData && <h1>{currentData.city_name}</h1>}
    </MainLayout>
  );
};

export default Default;
