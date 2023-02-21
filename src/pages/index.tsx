import { useEffect, useState } from "react";
import { Input } from "../components/shared/atoms/Input";
import { WeatherCard } from "../components/shared/organisms/WeatherCard";
import { useSearch } from "../hooks/useSearch";
import MainLayout from "../layouts/MainLayout";
import { Toast } from "../components/shared/atoms/Toast";
import Head from "next/head";

const Default = () => {
  const [searchParam, setSearchParam] = useState<string>("");
  const [currentData, setCurrentData] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { cities, citiesErr } = useSearch(searchParam);

  useEffect(() => {
    if (!cities) return;

    setSearchResults(cities.filter((item) => item.result_type === "city"));
  }, [cities]);

  useEffect(() => {
    setCurrentData(searchResults[0]);
  }, [searchResults]);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌡️</text></svg>"
        ></link>
      </Head>
      <MainLayout>
        <Input
          setValue={setSearchParam}
          placeholder="Search for a City, e.g.: Ciudad de México"
        />
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            {currentData ? (
              currentData.display
            ) : (
              <span className="text-slate-400">No Results!</span>
            )}
          </h1>
          <p className="text-slate-400">Forecast for the next 7 days</p>
        </div>
        {currentData && <WeatherCard data={currentData} />}
        {citiesErr && (
          <Toast text="A problem ocurred while fetching the city!" />
        )}
      </MainLayout>
    </>
  );
};

export default Default;
