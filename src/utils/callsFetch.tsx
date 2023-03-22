import { get, post } from "./fetchMethods";
import { IfetchResults } from "../models/InterfaceFetch";
import { Icomment, Ilogin, Iuser } from "../models/interfaceUser";
import useLocalstorage from "../hooks/useLocalstorage";
import { Idetails } from "../models/interfaceGames";

export const getCardFeatures = async () => {
  try {
    const request = await get<IfetchResults>(
      `https://api.rawg.io/api/games?key=f99f9038acea4c0c9fdf996f2eb9a1d5&page_size=6&page=3`
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
      `https://api.rawg.io/api/games?key=f99f9038acea4c0c9fdf996f2eb9a1d5&page_size=${itemsPerPage}&page=${currentPage}`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCards = async (itemsPerPage: number, itemSearch: string) => {
  try {
    const request = await get<IfetchResults>(
      `https://api.rawg.io/api/games?key=f99f9038acea4c0c9fdf996f2eb9a1d5&page_size=${itemsPerPage}${itemSearch}
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
      `https://api.rawg.io/api/games${idToken}?key=f99f9038acea4c0c9fdf996f2eb9a1d5`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const request = await get<Ilogin[]>(
      `https://eminent-incandescent-peripheral.glitch.me/users`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (body: Iuser) => {
  try {
    const response = post<Iuser, Iuser>(
      `https://eminent-incandescent-peripheral.glitch.me/users`,
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
      `https://eminent-incandescent-peripheral.glitch.me/comments`,
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
    const response = get<Icomment[]>(
      `https://eminent-incandescent-peripheral.glitch.me/comments`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
