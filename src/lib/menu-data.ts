export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const popularPicks: MenuItem[] = [
  {
    id: 1,
    name: "Hollow House Drip",
    description: "Our signature smooth daily brew",
    price: "$4.25",
    image: "/images/menu-item-1.jpg",
    category: "popular",
  },
  {
    id: 2,
    name: "Maple Mortar Latte",
    description: "Velvety espresso with house-made maple syrup",
    price: "$5.75",
    image: "/images/menu-item-2.jpg",
    category: "popular",
  },
  {
    id: 3,
    name: "Cardamom Cortado",
    description: "Bold shot with spiced steamed milk",
    price: "$5.50",
    image: "/images/menu-item-3.jpg",
    category: "popular",
  },
  {
    id: 4,
    name: "Birchwood Brew",
    description: "Slow-steeped cold brew, 24 hours",
    price: "$5.25",
    image: "/images/menu-item-4.jpg",
    category: "popular",
  },
];
