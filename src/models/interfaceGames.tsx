import { platform } from "os";

export interface Iresults {
  id: number;
  background_image: string;
  name?: string;
}

export interface InamePlatform {
  name: string;
}

export interface Iplatforms {
  platform: InamePlatform;
  id: number;
}

export interface Idetails {
  id: number;
  background_image: string;
  name?: string;
  rating?: string;
  description?: string;
  platforms: Iplatforms[];
}
