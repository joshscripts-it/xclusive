// @types

export type PageProps = {
  params: { id: string | number };
};

export type CartItemType = {
  ID: string;
  name: string;
  price: number;
  prevPrice?: number;
  images: any;
  rating: number;
  path: string;
  isNew?: boolean;
  discount?: string;
  images?: any[];
  colors?: string[];
  sizes?: string[];
  ratersCount?: number;
  quantity: number;
  total?: number;
  productId?: string;
};

export type ItemTotalType = {
  productId: string;
  total: number;
};

export type ProductType = {
  ID: string;
  name: string;
  price: number;
  prevPrice?: number;
  images: any;
  rating: number;
  path: string;
  isNew?: boolean;
  discount?: string;
  images?: any[];
  colors?: string[];
  sizes?: string[];
  ratersCount?: number;
  quantity?: number;
  inStock?: boolean;
};

export type TrendingProductsType = {
  ID: string;
  name: string;
  price: number;
  prevPrice?: number;
  image: any;
  rating: number;
  path: string;
  isNew?: Boolean;
  colors?: any;
};

export type ItemType = {
  ID: string;
  name: string;
  price: number;
  prevPrice: number;
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
  addOrRemoveProdFromWishList: any;
  isOnWishList: (arg: string) => string;
  addToCart: (arg: string) => any;
  removeFromCart: (arg: string) => any;
  isProdOnCart: (arg: string) => any;
}

export type LoginType = {
  isLogin?: boolean;
};

export interface AllProductType {
  ID: string;
  name: string;
  price: number;
  perc_discount?: number;
  prevPrice?: number;
  images?: any[];
  rating: number;
  path: string;
  colors?: string[];
  sizes?: string[];
  isNew?: boolean;
  description?: string;
}
