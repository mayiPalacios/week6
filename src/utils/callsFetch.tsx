import { get, post } from "./fetchMethods";
import {
  IfetchPlatforms,
  IfetchResults,
  IfetchUsers,
} from "../models/InterfaceFetch";
import { Icomment, Ilogin, Iuser } from "../models/interfaceUser";
import useLocalstorage from "../hooks/useLocalstorage";
import { Idetails } from "../models/interfaceGames";

export const getCardFeatures = async () => {
  try {
    const request = await get<IfetchResults>(
      `${import.meta.env.VITE_API_URL}?key=${
        import.meta.env.VITE_KEY_API
      }&page_size=6&page=3`
    );

    return request;
  } catch (error) {
    console.log(error);
  }
};

export const getGeneralCards = async (
  itemsPerPage: number,
  currentPage: number
) => {
  try {
    const request = await get<IfetchResults>(
      `${import.meta.env.VITE_API_URL}?key=${
        import.meta.env.VITE_KEY_API
      }&page_size=${itemsPerPage}&page=${currentPage}`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCards = async (itemsPerPage: number, itemSearch: string) => {
  try {
    const request = await get<IfetchResults>(
      `${import.meta.env.VITE_API_URL}?key=${
        import.meta.env.VITE_KEY_API
      }&page_size=${itemsPerPage}${itemSearch}
        `
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const getViewDetails = async () => {
  const { idToken } = useLocalstorage();
  try {
    const request = await get<Idetails>(
      `${import.meta.env.VITE_API_URL}${idToken}?key=${
        import.meta.env.VITE_KEY_API
      }`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const request = await get<Ilogin[]>(`${import.meta.env.VITE_LOCAL_API}`);
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (body: Iuser) => {
  try {
    const response = post<Iuser, Iuser>(
      `${import.meta.env.VITE_LOCAL_API}`,
      body,
      { headers: { "Content-Type": "application/json" } }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postComment = async (body: Icomment) => {
  try {
    const response = post<Icomment, Icomment>(
      `${import.meta.env.VITE_LOCAL_API}/comments`,
      body,
      { headers: { "Content-Type": "application/json" } }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getComment = async () => {
  try {
    const response = get<Icomment>(
      `${import.meta.env.VITE_LOCAL_API_COMMENTS}`
    );
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};
