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
import { CartItemType, ItemType, ProductType } from "@/type.d";

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

export const Products: ProductType[] = [
  {
    name: "Breed Dry Dog Food",
    price: 100,
    images: dog_food,
    rating: 3.5,
    ID: "Pid_0001",
    path: "/products",
  },

  {
    name: "Canon EOS Dslr Camera",
    price: 360,
    images: canon_dslr_camera,
    rating: 3.5,
    ID: "Pid_0002",
    path: "/products",
  },

  {
    name: "Asus FHD Gaming Laptop",
    price: 700,
    images: asus_gaming_pc,
    rating: 2.5,
    ID: "Pid_0003",
    path: "/products",
  },
  {
    name: "Curology Product Set",
    price: 500,
    images: curology_product_set,
    rating: 3.5,
    ID: "Pid_0004",
    path: "/products",
  },
  {
    name: "Kids Electric Car",
    price: 960,
    images: kid_electric_car,
    rating: 4.5,
    ID: "Pid_0005",
    isNew: true,
    path: "/products",
    colors: ["red"],
  },

  {
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    images: jr_zoom_soccer_cleats,
    rating: 3.5,
    ID: "Pid_0006",
    path: "/products",
    colors: ["yellow", "red"],
  },

  {
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    images: gp11_prd3,
    rating: 3.5,
    ID: "Pid_0007",
    isNew: true,
    path: "/products",
    colors: ["black", "red"],
  },

  {
    name: "Quilted Satin Jacket",
    price: 660,
    images: [quilted_satin_jacket],
    rating: 5.5,
    ID: "Pid_0008",
    path: "/products",
    colors: ["black", "red"],
  },
];

export const Shoplist: ProductType[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    prevPrice: 160,
    rating: 5,
    images: [havit_hv_g92_gamepad, havit_hv_g92_gamepad, havit_hv_g92_gamepad],
    ID: "Pid_000001",
    discount: "40",
    path: "/products",
    colors: ["red", "black", "orange", "blue"],
    sizes: ["S", "M", "L"],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    prevPrice: 1160,
    rating: 4,
    images: [
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
    ],
    ID: "Pid_000002",
    discount: "35",
    path: "/products",
    sizes: ["M", "L"],
    colors: ["black", "#CC3"],
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    prevPrice: 400,
    rating: 5.5,
    images: [ips_lcd_gaming_monitor],
    ID: "Pid_000003",
    discount: "30",
    path: "/products",
    colors: ["black", "coral"],
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    prevPrice: 400,
    rating: 5.5,
    images: [s_series_confort_chair],
    ID: "Pid_000004",
    discount: "25",
    path: "/products",
    sizes: ["S", "M"],
    colors: ["black"],
  },
];

export const Cart: string[] = ["Pid_000001", "Pid_000002"];

export const Bestselling: ProductType[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    prevPrice: 160,
    rating: 5,
    ratersCount: 69,
    images: [havit_hv_g92_gamepad, havit_hv_g92_gamepad, havit_hv_g92_gamepad],
    ID: "Pid_000001",
    discount: "40",
    path: "/products",
    colors: ["red", "black", "orange", "blue"],
    sizes: ["S", "M", "L"],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    prevPrice: 1160,
    ratersCount: 30,
    rating: 4,
    images: [
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
    ],
    ID: "Pid_000002",
    discount: "35",
    path: "/products",
    sizes: ["M", "L"],
    colors: ["black", "#CC3"],
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    prevPrice: 400,
    rating: 5.5,
    images: [ips_lcd_gaming_monitor],
    ID: "Pid_000003",
    discount: "30",
    path: "/products",
    colors: ["black", "coral"],
    ratersCount: 39,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    prevPrice: 400,
    rating: 5.5,
    images: [s_series_confort_chair],
    ID: "Pid_000004",
    discount: "25",
    path: "/products",
    sizes: ["S", "M"],
    colors: ["black"],
    ratersCount: 40,
  },
];

export const Wishlist = [
  "Pid_000004",
  "Pid_000003",
  "Pid_000005",
  "Pid_0000012",
];

export const AllProducts: ProductType[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    prevPrice: 160,
    rating: 5,
    images: [havit_hv_g92_gamepad, havit_hv_g92_gamepad, havit_hv_g92_gamepad],
    ID: "Pid_000001",
    discount: "40",
    path: "/products",
    colors: ["red", "black", "orange", "blue"],
    sizes: ["S", "M", "L"],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    prevPrice: 1160,
    rating: 4,
    images: [
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
      ak_900_wired_keyboard,
    ],
    ID: "Pid_000002",
    discount: "35",
    path: "/products",
    sizes: ["M", "L"],
    colors: ["black", "#CC3"],
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    prevPrice: 400,
    rating: 5.5,
    images: [ips_lcd_gaming_monitor],
    ID: "Pid_000003",
    discount: "30",
    path: "/products",
    colors: ["black", "coral"],
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    prevPrice: 400,
    rating: 5.5,
    images: [s_series_confort_chair],
    ID: "Pid_000004",
    discount: "25",
    path: "/products",
    sizes: ["S", "M"],
    colors: ["black"],
  },
  {
    name: "The North Coat",
    price: 260,
    prevPrice: 360,
    rating: 3.5,
    images: [north_coat],
    ID: "Pid_000005",
    path: "/products",
    colors: ["red", "black", "orange"],
    sizes: ["S", "M", "L"],
  },
  {
    name: "Gucci Duffle Bag",
    price: 260,
    prevPrice: 360,
    rating: 5,
    images: [gucci_bag],
    ID: "Pid_000007",
    path: "/products",
    sizes: ["S", "M", "L"],
    colors: ["white", "orange", "blue", "brown"],
  },
  {
    name: "RGB Liquid Cooler",
    price: 160,
    prevPrice: 170,
    rating: 3.5,
    images: [rgb_cooler],
    ID: "Pid_000008",
    path: "/products",
    sizes: ["S", "M", "L"],
    colors: ["black"],
  },
  {
    name: "Small Bookshelf",
    price: 360,
    prevPrice: 360,
    rating: 2.5,
    images: [book_shelf],
    ID: "Pid_000009",
    path: "/products",
    sizes: ["S", "M"],
    colors: ["brown", "black"],
  },
  {
    name: "Breed Dry Dog Food",
    price: 100,
    images: [dog_food],
    rating: 3.5,
    ID: "Pid_0000010",
    path: "/products",
    sizes: ["M", "L"],
  },

  {
    name: "Canon EOS Dslr Camera",
    price: 360,
    images: [canon_dslr_camera],
    rating: 4.5,
    ID: "Pid_0000011",
    path: "/products",
    colors: ["black", "white", "coral"],
  },

  {
    name: "Asus FHD Gaming Laptop",
    price: 700,
    images: [asus_gaming_pc],
    rating: 3.5,
    ID: "Pid_0000012",
    path: "/products",
    colors: ["white", "red"],
  },
  {
    name: "Curology Product Set",
    price: 500,
    images: [curology_product_set],
    rating: 1.5,
    ID: "Pid_0000013",
    path: "/products",
    sizes: ["S", "M"],
    colors: ["black", "blue"],
  },
  {
    name: "Kids Electric Car",
    price: 960,
    images: [kid_electric_car],
    rating: 4.5,
    ID: "Pid_0000014",
    isNew: true,
    path: "/products",
    colors: ["red"],
    sizes: ["M", "L"],
  },

  {
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    images: [jr_zoom_soccer_cleats],
    rating: 3.5,
    ID: "Pid_0000015",
    path: "/products",
    colors: ["yellow", "red"],
    sizes: ["S", "M"],
  },

  {
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    images: [gp11_prd3],
    rating: 4.5,
    ID: "Pid_0000016",
    isNew: true,
    path: "/products",
    colors: ["black", "red"],
    sizes: ["M", "L"],
  },

  {
    name: "Quilted Satin Jacket",
    price: 660,
    images: [quilted_satin_jacket],
    rating: 5.5,
    ID: "Pid_0000017",
    path: "/products",
    colors: ["black", "red"],
    sizes: ["S", "L", "M", "XL"],
  },
];
