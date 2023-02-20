import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useSearch = (searchParam: string) => {
  const { data, error, isLoading } = useSWR(
    `https://search.reservamos.mx/api/v2/places?q=${searchParam}`,
    fetcher
  );

  return { cities: data, citiesErr: error, citiesLoading: isLoading };
};
