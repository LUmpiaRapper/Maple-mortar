export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  badges?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const popularPicks: MenuItem[] = [
  {
    id: 1,
    name: "Hollow House Drip",
    description: "Our signature smooth daily brew",
    price: "$4.25",
    image: "/images/menu-item-101.jpg",
    category: "hot-coffee",
  },
  {
    id: 2,
    name: "Maple Mortar Latte",
    description: "Velvety espresso with house-made maple syrup",
    price: "$5.75",
    image: "/images/menu-item-201.jpg",
    category: "specialty",
  },
  {
    id: 3,
    name: "Cardamom Cortado",
    description: "Bold shot with spiced steamed milk",
    price: "$5.50",
    image: "/images/menu-item-103.jpg",
    category: "hot-coffee",
  },
  {
    id: 4,
    name: "Birchwood Brew",
    description: "Slow-steeped cold brew, 24 hours",
    price: "$5.25",
    image: "/images/menu-item-301.jpg",
    category: "cold",
  },
];

export const fullMenu: MenuCategory[] = [
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    description: "Brewed to order, served steaming",
    items: [
      {
        id: 101,
        name: "Hollow House Drip",
        description: "Our signature smooth daily brew — single-origin, medium roast",
        price: "$4.25",
        image: "/images/menu-item-101.jpg",
        category: "hot-coffee",
      },
      {
        id: 102,
        name: "Classic Espresso",
        description: "Double shot of our house espresso blend, rich with cocoa notes",
        price: "$3.75",
        image: "/images/menu-item-102.jpg",
        category: "hot-coffee",
      },
      {
        id: 103,
        name: "Cardamom Cortado",
        description: "Bold double shot cut with spiced steamed milk",
        price: "$5.50",
        image: "/images/menu-item-103.jpg",
        category: "hot-coffee",
        badges: ["GF"],
      },
      {
        id: 104,
        name: "Americano",
        description: "Espresso pulled over hot water — clean, bold, straightforward",
        price: "$4.00",
        image: "/images/menu-item-104.jpg",
        category: "hot-coffee",
        badges: ["V", "GF"],
      },
      {
        id: 105,
        name: "Flat White",
        description: "Ristretto shots topped with velvety microfoam",
        price: "$5.25",
        image: "/images/menu-item-105.jpg",
        category: "hot-coffee",
      },
    ],
  },
  {
    id: "specialty",
    name: "Specialty",
    description: "House creations you won&rsquo;t find anywhere else",
    items: [
      {
        id: 201,
        name: "Maple Mortar Latte",
        description: "Velvety espresso with house-made maple syrup and a pinch of sea salt",
        price: "$5.75",
        image: "/images/menu-item-201.jpg",
        category: "specialty",
      },
      {
        id: 202,
        name: "Honey Lavender Latte",
        description: "Espresso with local honey, dried lavender, and oat milk",
        price: "$6.00",
        image: "/images/menu-item-202.jpg",
        category: "specialty",
        badges: ["V"],
      },
      {
        id: 203,
        name: "Brown Sugar Shaken Espresso",
        description: "Espresso shaken with brown sugar and cinnamon, topped with cold foam",
        price: "$5.75",
        image: "/images/menu-item-203.jpg",
        category: "specialty",
      },
      {
        id: 204,
        name: "Smoked Vanilla Mocha",
        description: "Dark chocolate, smoked vanilla syrup, and a double shot of espresso",
        price: "$6.25",
        image: "/images/menu-item-204.jpg",
        category: "specialty",
      },
    ],
  },
  {
    id: "cold",
    name: "Cold & Iced",
    description: "Cool down with something cold-brewed or shaken over ice",
    items: [
      {
        id: 301,
        name: "Birchwood Brew",
        description: "Slow-steeped 24-hour cold brew, smooth and low-acid",
        price: "$5.25",
        image: "/images/menu-item-301.jpg",
        category: "cold",
        badges: ["V", "GF"],
      },
      {
        id: 302,
        name: "Iced Maple Mortar Latte",
        description: "Our signature maple latte served over ice",
        price: "$5.75",
        image: "/images/menu-item-302.jpg",
        category: "cold",
      },
      {
        id: 303,
        name: "Cold Foam Cappuccino",
        description: "Double espresso topped with silky cold foam and a dusting of cocoa",
        price: "$5.50",
        image: "/images/menu-item-303.jpg",
        category: "cold",
      },
      {
        id: 304,
        name: "Nitro Cold Brew",
        description: "Birchwood Brew infused with nitrogen for a creamy, cascading finish",
        price: "$6.00",
        image: "/images/menu-item-304.jpg",
        category: "cold",
        badges: ["V", "GF"],
      },
    ],
  },
  {
    id: "tea-more",
    name: "Tea & More",
    description: "For the moments when it&rsquo;s not about the coffee",
    items: [
      {
        id: 401,
        name: "Chai Latte",
        description: "House-spiced chai concentrate steamed with your choice of milk",
        price: "$5.25",
        image: "/images/menu-item-401.jpg",
        category: "tea-more",
        badges: ["V"],
      },
      {
        id: 402,
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha whisked with steamed oat milk",
        price: "$5.75",
        image: "/images/menu-item-402.jpg",
        category: "tea-more",
        badges: ["V"],
      },
      {
        id: 403,
        name: "Hot Chocolate",
        description: "House-made chocolate ganache melted into steamed whole milk",
        price: "$4.75",
        image: "/images/menu-item-403.jpg",
        category: "tea-more",
      },
      {
        id: 404,
        name: "London Fog",
        description: "Earl Grey latte with vanilla syrup and steamed milk",
        price: "$5.00",
        image: "/images/menu-item-404.jpg",
        category: "tea-more",
        badges: ["V"],
      },
    ],
  },
  {
    id: "food",
    name: "Food",
    description: "Baked fresh each morning by Hollow Bread Co.",
    items: [
      {
        id: 501,
        name: "Butter Croissant",
        description: "Flaky, golden, laminated French-style pastry",
        price: "$4.50",
        image: "/images/menu-item-501.jpg",
        category: "food",
        badges: ["V"],
      },
      {
        id: 502,
        name: "Blueberry Muffin",
        description: "Tender crumb with wild blueberries and streusel top",
        price: "$4.25",
        image: "/images/menu-item-502.jpg",
        category: "food",
        badges: ["V"],
      },
      {
        id: 503,
        name: "Cheddar & Chive Scone",
        description: "Savory scone with sharp cheddar, fresh chives, and buttermilk",
        price: "$4.75",
        image: "/images/menu-item-503.jpg",
        category: "food",
      },
      {
        id: 504,
        name: "Banana Bread Slice",
        description: "Hearty, moist, and served warm with honey butter",
        price: "$4.50",
        image: "/images/menu-item-504.jpg",
        category: "food",
        badges: ["V"],
      },
    ],
  },
];
