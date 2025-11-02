import type { Shop } from "../types";

const makeProducts = (shopId: string, base: number) => [
  { id: `${shopId}-p1`, title: `Item A ${base}`, price: Math.round((10 + base) * 1), description: "A lovely item" },
  { id: `${shopId}-p2`, title: `Item B ${base}`, price: Math.round((15 + base) * 1.5), description: "Another nice product" },
  { id: `${shopId}-p3`, title: `Item C ${base}`, price: Math.round((8 + base) * 0.9), description: "Pocket friendly" }
];

export const mockShops: Shop[] = [
  { id: "shop-1", name: "Sunrise Crafts", sales: 1200, products: makeProducts("shop-1", 1) },
  { id: "shop-2", name: "Lebanese Delights", sales: 800, products: makeProducts("shop-2", 2) },
  { id: "shop-3", name: "Urban Gadgets", sales: 3400, products: makeProducts("shop-3", 3) },
  { id: "shop-4", name: "Handmade Cozy", sales: 450, products: makeProducts("shop-4", 4) },
  { id: "shop-5", name: "Vintage Store", sales: 2100, products: makeProducts("shop-5", 5) },
  { id: "shop-6", name: "Sportify Goods", sales: 980, products: makeProducts("shop-6", 6) }
];
