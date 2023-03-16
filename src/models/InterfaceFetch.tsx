import { Iresults } from "../models/interfaceGames";
import { Icomment } from "./interfaceUser";
import { Iuser } from "./interfaceUser";

export interface IfetchProps {
  url?: string;
  params: string;
  typeMethod: string;
  key: string;
  id: string;
}

export interface IfetchComments {
  comments: Icomment[];
}

export interface IfetchResults {
  results: Iresults[];
}

export interface IfetchUsers {
  users: Iuser[];
}
