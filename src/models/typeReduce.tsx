import { Iresults } from "./interfaceGames";

export type State = {
  isLoading: boolean;
  error?: Error;
  data?: Iresults[] | undefined;
};

export type Action =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; data: Iresults[] }
  | { type: "FETCH_FAILURE"; error: Error };
