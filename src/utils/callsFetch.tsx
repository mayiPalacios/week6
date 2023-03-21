import { Iresults } from "../models/interfaceGames";
import { get } from "./fetchMethods";
import { IfetchResults } from "../models/InterfaceFetch";

export const getCardFeatures = async () => {
  try {
    const char = await get<IfetchResults>(
      `${import.meta.env.VITE_API_URL}?key=${
        import.meta.env.VITE_KEY_API
      }&page_size=6&page=3`
    );

    return char;
  } catch (error) {
    console.log(error);
  }
};

export const getGeneralCards = async (
  itemsPerPage: number,
  currentPage: number
) => {
  try {
    const char = await get<IfetchResults>(
      `${import.meta.env.VITE_API_URL}?key=${
        import.meta.env.VITE_KEY_API
      }&page_size=${itemsPerPage}&page=${currentPage}`
    );
    return char;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCards = async (itemsPerPage: number, itemSearch: string) => {
  try {
    const char = await get<IfetchResults>(
      `${import.meta.env.VITE_API_URL}?key=${
        import.meta.env.VITE_KEY_API
      }&page_size=${itemsPerPage}${itemSearch}
        `
    );
  } catch (error) {
    console.log(error);
  }
};
