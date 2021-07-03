import { IItem } from "../IItem";

export interface IShopState {
  collections: {
    [key: string]: IShopItem;
  };
  isLoading?:boolean;
  errorMessage?:string;
}
export interface IShopItem {
  id: number;
  title: string;
  routeName: string;
  items: IItem[];
}
