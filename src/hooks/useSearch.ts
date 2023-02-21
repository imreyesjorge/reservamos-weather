import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

/**
 * From a parameter, get all the data from the ReservamosAPI
 * @param searchParam Parameter to search
 * @returns All the data from ReservamosAPI
 */
export const useSearch = (searchParam: string) => {
  const { data, error, isLoading } = useSWR(
    `https://search.reservamos.mx/api/v2/places?q=${searchParam}`,
    fetcher
  );

  return { cities: data, citiesErr: error, citiesLoading: isLoading };
};
