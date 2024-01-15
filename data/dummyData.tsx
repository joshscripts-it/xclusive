import ak_900_wired_keyboard from "../assets/images/ak_900_wired_keyboard.png";
import havit_hv_g92_gamepad from "../assets/images/havit_hv_g92_gamepad.png";
import ips_lcd_gaming_monitor from "../assets/images/ips_lcd_gaming_monitor.png";
import s_series_confort_chair from "../assets/images/s_series_comfort_chair.png";
import north_coat from "../assets/images/north_coat.png";
import gucci_bag from "../assets/images/gucci_bag.png";
import rgb_cooler from "../assets/images/rgb_cooler.png";
import book_shelf from "../assets/images/small_shelf.png";
import asus_gaming_pc from "../assets/images/asus_gaming_pc.png";
import canon_dslr_camera from "../assets/images/canon_dslr_camera.png";
import curology_product_set from "../assets/images/curology.png";
import dog_food from "../assets/images/dog_food.png";
import gp11_prd3 from "../assets/images/GP11_PRD3 1.png";
import kid_electric_car from "../assets/images/kid_electric_car.png";
import jr_zoom_soccer_cleats from "../assets/images/jr_zoom_soccer_cleats.png";
import quilted_satin_jacket from "../assets/images/quilted_satin_jacket.png";
import { AllProductType } from "@/type.d";

export const DummyUsers = [
  {
    ID: "001",
    username: "johnD",
    firstname: "john",
    lastname: "Doe",
    email: "johndoe@gmail.com",
    password: "JohnD",
  },

  {
    ID: "002",
    username: "aStark",
    firstname: "anya",
    lastname: "stark",
    email: "anya@gmail.com",
    password: "12345six",
  },
  {
    ID: "003",
    username: "michael",
    firstname: "michael",
    lastname: "smith",
    email: "smith@yahoo.com",
    password: "micheal123",
  },
];

export const Products = [
  {
    name: "Breed Dry Dog Food",
    amount: 100,
    image: dog_food,
    rating: 3.5,
    ID: "T_0001",
    path: "/products",
  },

  {
    name: "Canon EOS Dslr Camera",
    amount: 360,
    image: canon_dslr_camera,
    rating: 3.5,
    ID: "T_0002",
    path: "/products",
  },

  {
    name: "Asus FHD Gaming Laptop",
    amount: 700,
    image: asus_gaming_pc,
    rating: 2.5,
    ID: "T_0003",
    path: "/products",
  },
  {
    name: "Curology Product Set",
    amount: 500,
    image: curology_product_set,
    rating: 3.5,
    ID: "T_0004",
    path: "/products",
  },
  {
    name: "Kids Electric Car",
    amount: 960,
    image: kid_electric_car,
    rating: 4.5,
    ID: "T_0005",
    isNew: true,
    path: "/products",
    colors: ["red"],
  },

  {
    name: "Jr. Zoom Soccer Cleats",
    amount: 1160,
    image: jr_zoom_soccer_cleats,
    rating: 3.5,
    ID: "T_0006",
    path: "/products",
    colors: ["yellow", "red"],
  },

  {
    name: "GP11 Shooter USB Gamepad",
    amount: 660,
    image: gp11_prd3,
    rating: 3.5,
    ID: "T_0007",
    isNew: true,
    path: "/products",
    colors: ["black", "red"],
  },

  {
    name: "Quilted Satin Jacket",
    amount: 660,
    image: quilted_satin_jacket,
    rating: 5.5,
    ID: "T_0008",
    path: "/products",
    colors: ["black", "red"],
  },
];

export const Shoplist = [
  {
    name: "HAVIT HV-G92 Gamepad",
    amount: 120,
    prevAmount: 160,
    rating: 5,
    image: havit_hv_g92_gamepad,
    ID: "1",
    perc_discount: 40,
    path: "/products",
  },
  {
    name: "AK-900 Wired Keyboard",
    amount: 960,
    prevAmount: 1160,
    rating: 4,
    image: ak_900_wired_keyboard,
    ID: "2",
    perc_discount: 35,
    path: "/products",
  },
  {
    name: "IPS LCD Gaming Monitor",
    amount: 370,
    prevAmount: 400,
    rating: 5.5,
    image: ips_lcd_gaming_monitor,
    ID: "3",
    perc_discount: 30,
    path: "/products",
  },
  {
    name: "S-Series Comfort Chair",
    amount: 375,
    prevAmount: 400,
    rating: 5.5,
    image: s_series_confort_chair,
    ID: "4",
    perc_discount: 25,
    path: "/products",
  },
];

export const Cart = [
  {
    name: "Small Bookshelf",
    amount: 360,
    prevAmount: 360,
    rating: 3.5,
    image: book_shelf,
    ID: "P_0004",
    path: "/products",
  },
  {
    name: "Canon EOS Dslr Camera",
    amount: 360,
    image: canon_dslr_camera,
    rating: 4.5,
    ID: "T_0002",
    path: "/products",
  },
];

export const Bestselling = [
  {
    name: "The North Coat",
    amount: 260,
    prevAmount: 360,
    rating: 2.5,
    image: north_coat,
    ID: "P_0001",
    path: "/products",
  },
  {
    name: "Gucci Duffle Bag",
    amount: 260,
    prevAmount: 360,
    rating: 4.5,
    image: gucci_bag,
    ID: "P_0002",
    path: "/products",
  },
  {
    name: "RGB Liquid Cooler",
    amount: 160,
    prevAmount: 170,
    rating: 2.5,
    image: rgb_cooler,
    ID: "P_0003",
    path: "/products",
  },
  {
    name: "Small Bookshelf",
    amount: 360,
    prevAmount: 360,
    rating: 3.5,
    image: book_shelf,
    ID: "P_0004",
    path: "/products",
  },
];

export const Wishlist = [
  {
    name: "The North Coat",
    amount: 260,
    prevAmount: 360,
    rating: 4.5,
    image: north_coat,
    ID: "P_0001",
    path: "/products",
  },
];

export const AllProducts: AllProductType[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    amount: 120,
    prevAmount: 160,
    rating: 5,
    images: [havit_hv_g92_gamepad, havit_hv_g92_gamepad, havit_hv_g92_gamepad],
    ID: "1",
    perc_discount: 40,
    path: "/products",
    colors: ["red", "black", "orange", "blue"],
    sizes: ["S", "M", "L"],
  },
  {
    name: "AK-900 Wired Keyboard",
    amount: 960,
    prevAmount: 1160,
    rating: 4,
    images: [
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
    ],
    ID: "2",
    perc_discount: 35,
    path: "/products",
    sizes: ["M", "L"],
    colors: ["black", "#CC3"],
  },
  {
    name: "IPS LCD Gaming Monitor",
    amount: 370,
    prevAmount: 400,
    rating: 5.5,
    images: [ips_lcd_gaming_monitor],
    ID: "3",
    perc_discount: 30,
    path: "/products",
    colors: ["black", "coral"],
  },
  {
    name: "S-Series Comfort Chair",
    amount: 375,
    prevAmount: 400,
    rating: 5.5,
    images: [s_series_confort_chair],
    ID: "4",
    perc_discount: 25,
    path: "/products",
    sizes: ["S", "M"],
    colors: ["black"],
  },
  {
    name: "The North Coat",
    amount: 260,
    prevAmount: 360,
    rating: 3.5,
    images: [north_coat],
    ID: "P_0001",
    path: "/products",
    colors: ["red", "black", "orange"],
    sizes: ["S", "M", "L"],
  },
  {
    name: "Gucci Duffle Bag",
    amount: 260,
    prevAmount: 360,
    rating: 5,
    images: [gucci_bag],
    ID: "P_0002",
    path: "/products",
    sizes: ["S", "M", "L"],
    colors: ["white", "orange", "blue", "brown"],
  },
  {
    name: "RGB Liquid Cooler",
    amount: 160,
    prevAmount: 170,
    rating: 3.5,
    images: [rgb_cooler],
    ID: "P_0003",
    path: "/products",
    sizes: ["S", "M", "L"],
    colors: ["black"],
  },
  {
    name: "Small Bookshelf",
    amount: 360,
    prevAmount: 360,
    rating: 2.5,
    images: [book_shelf],
    ID: "P_0004",
    path: "/products",
    sizes: ["S", "M"],
    colors: ["brown", "black"],
  },
  {
    name: "Breed Dry Dog Food",
    amount: 100,
    images: [dog_food],
    rating: 3.5,
    ID: "T_0001",
    path: "/products",
    sizes: ["M", "L"],
  },

  {
    name: "Canon EOS Dslr Camera",
    amount: 360,
    images: [canon_dslr_camera],
    rating: 4.5,
    ID: "T_0002",
    path: "/products",
    colors: ["black", "white", "coral"],
  },

  {
    name: "Asus FHD Gaming Laptop",
    amount: 700,
    images: [asus_gaming_pc],
    rating: 3.5,
    ID: "T_0003",
    path: "/products",
    colors: ["white", "red"],
  },
  {
    name: "Curology Product Set",
    amount: 500,
    images: [curology_product_set],
    rating: 1.5,
    ID: "T_0004",
    path: "/products",
    sizes: ["S", "M"],
    colors: ["black", "blue"],
  },
  {
    name: "Kids Electric Car",
    amount: 960,
    images: [kid_electric_car],
    rating: 4.5,
    ID: "T_0005",
    isNew: true,
    path: "/products",
    colors: ["red"],
    sizes: ["M", "L"],
  },

  {
    name: "Jr. Zoom Soccer Cleats",
    amount: 1160,
    images: [jr_zoom_soccer_cleats],
    rating: 3.5,
    ID: "T_0006",
    path: "/products",
    colors: ["yellow", "red"],
    sizes: ["S", "M"],
  },

  {
    name: "GP11 Shooter USB Gamepad",
    amount: 660,
    images: [gp11_prd3],
    rating: 4.5,
    ID: "T_0007",
    isNew: true,
    path: "/products",
    colors: ["black", "red"],
    sizes: ["M", "L"],
  },

  {
    name: "Quilted Satin Jacket",
    amount: 660,
    images: [quilted_satin_jacket],
    rating: 5.5,
    ID: "T_0008",
    path: "/products",
    colors: ["black", "red"],
    sizes: ["S", "L", "M", "XL"],
  },
];
