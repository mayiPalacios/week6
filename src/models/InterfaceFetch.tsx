import { Iresults } from "../models/interfaceGames";
import { Icomment } from "./interfaceUser";
import { Iuser } from "./interfaceUser";
import { Iplatforms } from "../models/interfaceGames";

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

export interface IfetchPlatforms{
  platforms:Iplatforms[];
}

