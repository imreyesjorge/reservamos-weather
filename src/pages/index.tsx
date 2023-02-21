import { useEffect, useState } from "react";
import { Input } from "../components/shared/atoms/Input";
import { WeatherCard } from "../components/shared/organisms/WeatherCard";
import { useSearch } from "../hooks/useSearch";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

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
        {currentData ? (
          currentData.display
        ) : (
          <span className="text-slate-400">No Results!</span>
        )}
      </h1>
      {currentData && <WeatherCard data={currentData} />}
      {citiesErr && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="w-auto text-slate-600 m-4 p-4 px-4 pr-5 bg-white border border-slate-300/75 shadow-lg  rounded-md fixed bottom-0 left-0 flex items-center gap-2"
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
          <p>A problem ocurred while fetching the city!</p>
        </motion.div>
      )}
    </MainLayout>
  );
};

export default Default;
