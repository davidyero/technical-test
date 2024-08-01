import {ILanguage} from "./ILanguage.ts";

export interface IProducts {
  id: string,
  image: string,
  name: ILanguage,
  description: ILanguage,
  data: {
    ram: string,
    cpu: string,
    gpu: string,
    display: string,
    disk: string,
  },
  price: number
}

export interface IListResponse {
  count: number;
  next: number;
  previous: number;
  totalPages: number;
  results: IProducts[];
}
