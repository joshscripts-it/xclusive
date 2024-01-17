// @types

export type PageProps = {
  params: { id: string | number };
};

export type ProductType = {
  ID: string;
  name: string;
  amount: number;
  prevAmount?: number;
  images: any;
  rating: number;
  path: string;
  isNew?: boolean;
  discount?: string;
  images?: any[];
  colors?: string[];
  sizes?: string[];
  ratersCount?: number;
};

export type TrendingProductsType = {
  ID: string;
  name: string;
  amount: number;
  prevAmount?: number;
  image: any;
  rating: number;
  path: string;
  isNew?: Boolean;
  colors?: any;
};

export type ItemType = {
  ID: string;
  name: string;
  amount: number;
  prevAmount: number;
  image: any;
  rating: number;
  discount?: string;
  path: string;
};

export type CategoryType = {
  type: string;
  logo: any;
  id: number;
  path: string;
};

export type UserType = {
  ID?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
};

export interface AppContextInterface {
  authenticated: any;
  products: [];
  shopList: [];
  bestSelling: [];
  wishList?: [];
  cart?: [];
  setCart: (arg: number) => number;
  setUser: (arg: UserType) => any;
  setAuthenticated: (arg: boolean) => any;
  login: LoginType;
  setLogin: (arg: boolean) => void;
}

export type LoginType = {
  isLogin?: boolean;
};

export interface AllProductType {
  ID: string;
  name: string;
  amount: number;
  perc_discount?: number;
  prevAmount?: number;
  images?: any[];
  rating: number;
  path: string;
  colors?: string[];
  sizes?: string[];
  isNew?: boolean;
  description?: string;
}
