import { useEffect, useState } from "react";
import { Input } from "../components/shared/atoms/Input";
import { useSearch } from "../hooks/useSearch";
import MainLayout from "../layouts/MainLayout";

const Default = () => {
  const [searchParam, setSearchParam] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const { data, error, isLoading } = useSearch(searchParam);

  useEffect(() => {
    if (!data) return;

    setSearchResults(data.filter((item) => item.result_type === "city"));
  }, [data]);

  useEffect(() => {
    setCurrentData(searchResults[0]);
  }, [searchResults]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <MainLayout>
      <Input value={searchParam} setValue={setSearchParam} />
      {currentData && <h1>{currentData.city_name}</h1>}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {searchResults && <p>{JSON.stringify(searchResults)}</p>}
    </MainLayout>
  );
};

export default Default;
