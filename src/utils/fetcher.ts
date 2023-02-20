// We set the basic fetcher function, as the SWR documentations
// explains, it’s just a wrapper for the built-in `fetcher`
// function.
export const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};
