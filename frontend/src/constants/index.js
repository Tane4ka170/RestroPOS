import sushi from "../assets/images/sushi.jpeg";
import ramen from "../assets/images/ramen.jpg";
import tacos from "../assets/images/972.jpg";
import pho from "../assets/images/JB_Recipes_Pho_1.jpg";
import burger from "../assets/images/chile-smash-burgers.jpg";
import pizza from "../assets/images/Margherita-pizza.jpg";
import pasta from "../assets/images/spaghetti-carbonara.jpeg";
import paella from "../assets/images/paella-mixta-439452.webp";
import croissant from "../assets/images/croissant.webp";
import steak from "../assets/images/Grilled-Steak.jpg";

export const popularDishes = [
  {
    id: 1,
    image: sushi,
    name: "Sushi",
    numberOfOrders: 280,
  },
  {
    id: 2,
    image: ramen,
    name: "Ramen",
    numberOfOrders: 230,
  },
  {
    id: 3,
    image: tacos,
    name: "Tacos",
    numberOfOrders: 320,
  },
  {
    id: 4,
    image: pho,
    name: "Pho",
    numberOfOrders: 190,
  },
  {
    id: 5,
    image: burger,
    name: "Cheeseburger",
    numberOfOrders: 260,
  },
  {
    id: 6,
    image: pizza,
    name: "Margherita Pizza",
    numberOfOrders: 340,
  },
  {
    id: 7,
    image: pasta,
    name: "Pasta Carbonara",
    numberOfOrders: 220,
  },
  {
    id: 8,
    image: paella,
    name: "Paella",
    numberOfOrders: 180,
  },
  {
    id: 9,
    image: croissant,
    name: "Croissant",
    numberOfOrders: 150,
  },
  {
    id: 10,
    image: steak,
    name: "Grilled Steak",
    numberOfOrders: 200,
  },
];

export const tables = [
  { id: 1, name: "Table A", status: "Available", initial: "KM", seats: 4 },
  { id: 2, name: "Table B", status: "Booked", initial: "LP", seats: 6 },
  { id: 3, name: "Table C", status: "Available", initial: "DS", seats: 2 },
  { id: 4, name: "Table D", status: "Booked", initial: "JR", seats: 4 },
  { id: 5, name: "Table E", status: "Available", initial: "MV", seats: 3 },
  { id: 6, name: "Table F", status: "Booked", initial: "WT", seats: 4 },
  { id: 7, name: "Table G", status: "Available", initial: "OS", seats: 5 },
  { id: 8, name: "Table H", status: "Booked", initial: "RA", seats: 5 },
  { id: 9, name: "Table I", status: "Available", initial: "NL", seats: 6 },
  { id: 10, name: "Table J", status: "Booked", initial: "CB", seats: 6 },
  { id: 11, name: "Table K", status: "Available", initial: "FH", seats: 4 },
  { id: 12, name: "Table L", status: "Booked", initial: "ZX", seats: 6 },
  { id: 13, name: "Table M", status: "Available", initial: "YU", seats: 2 },
  { id: 14, name: "Table N", status: "Booked", initial: "PK", seats: 6 },
  { id: 15, name: "Table O", status: "Available", initial: "TV", seats: 3 },
];

export const startersItem = [
  {
    id: 1,
    name: "Bruschetta",
    price: 180,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Garlic Prawns",
    price: 320,
    category: "Non-Vegetarian",
  },
  {
    id: 3,
    name: "BBQ Chicken Wings",
    price: 290,
    category: "Non-Vegetarian",
  },
  {
    id: 4,
    name: "Stuffed Mushrooms",
    price: 200,
    category: "Vegetarian",
  },
  {
    id: 5,
    name: "Mozzarella Sticks",
    price: 230,
    category: "Vegetarian",
  },
  {
    id: 6,
    name: "Lamb Seekh Kebab",
    price: 350,
    category: "Non-Vegetarian",
  },
];

export const mainCourse = [
  {
    id: 1,
    name: "Grilled Salmon",
    price: 550,
    category: "Non-Vegetarian",
  },
  {
    id: 2,
    name: "Vegetable Lasagna",
    price: 400,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Beef Stroganoff",
    price: 600,
    category: "Non-Vegetarian",
  },
  {
    id: 4,
    name: "Mushroom Risotto",
    price: 350,
    category: "Vegetarian",
  },
  {
    id: 5,
    name: "Chicken Alfredo Pasta",
    price: 450,
    category: "Non-Vegetarian",
  },
  {
    id: 6,
    name: "Stuffed Bell Peppers",
    price: 320,
    category: "Vegetarian",
  },
];

export const beverages = [
  {
    id: 1,
    name: "Espresso",
    price: 90,
    category: "Hot",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 140,
    category: "Hot",
  },
  {
    id: 3,
    name: "Strawberry Smoothie",
    price: 180,
    category: "Cold",
  },
  {
    id: 4,
    name: "Blue Lagoon Mocktail",
    price: 200,
    category: "Cold",
  },
  {
    id: 5,
    name: "Hot Chocolate",
    price: 130,
    category: "Hot",
  },
  {
    id: 6,
    name: "Virgin Mojito",
    price: 160,
    category: "Cold",
  },
];

export const soups = [
  {
    id: 1,
    name: "Minestrone Soup",
    price: 140,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "French Onion Soup",
    price: 150,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Pumpkin Soup",
    price: 130,
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Seafood Chowder",
    price: 180,
    category: "Non-Vegetarian",
  },
  {
    id: 5,
    name: "Beef Goulash Soup",
    price: 190,
    category: "Non-Vegetarian",
  },
  {
    id: 6,
    name: "Thai Tom Yum Soup",
    price: 170,
    category: "Non-Vegetarian",
  },
];

export const desserts = [
  {
    id: 1,
    name: "Tiramisu",
    price: 200,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Cheesecake",
    price: 220,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Apple Pie",
    price: 180,
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Mango Mousse",
    price: 190,
    category: "Vegetarian",
  },
];

export const pizzas = [
  {
    id: 1,
    name: "BBQ Chicken Pizza",
    price: 480,
    category: "Non-Vegetarian",
  },
  {
    id: 2,
    name: "Four Cheese Pizza",
    price: 420,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Hawaiian Pizza",
    price: 450,
    category: "Non-Vegetarian",
  },
  {
    id: 4,
    name: "Mushroom Truffle Pizza",
    price: 500,
    category: "Vegetarian",
  },
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Red Wine",
    price: 550,
    category: "Alcoholic",
  },
  {
    id: 2,
    name: "White Wine",
    price: 530,
    category: "Alcoholic",
  },
  {
    id: 3,
    name: "Gin & Tonic",
    price: 450,
    category: "Alcoholic",
  },
  {
    id: 4,
    name: "Margarita",
    price: 480,
    category: "Alcoholic",
  },
  {
    id: 5,
    name: "Old Fashioned",
    price: 520,
    category: "Alcoholic",
  },
  {
    id: 6,
    name: "Mojito",
    price: 420,
    category: "Alcoholic",
  },
];

export const salads = [
  {
    id: 1,
    name: "Avocado Salad",
    price: 220,
    category: "Vegetarian",
  },
  {
    id: 2,
    name: "Caprese Salad",
    price: 260,
    category: "Vegetarian",
  },
  {
    id: 3,
    name: "Quinoa & Veggie Salad",
    price: 280,
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Shrimp Caesar Salad",
    price: 350,
    category: "Non-Vegetarian",
  },
  {
    id: 5,
    name: "Grilled Chicken Salad",
    price: 320,
    category: "Non-Vegetarian",
  },
  {
    id: 6,
    name: "Smoked Salmon Salad",
    price: 400,
    category: "Non-Vegetarian",
  },
];

export const menus = [
  {
    id: 1,
    name: "Appetizers",
    bgColor: "#2904df",
    icon: "🥟",
    items: startersItem,
  },
  {
    id: 2,
    name: "Grill Specials",
    bgColor: "#e21406",
    icon: "🥩",
    items: mainCourse,
  },
  {
    id: 3,
    name: "Soft Drinks",
    bgColor: "#7810a8",
    icon: "🥤",
    items: beverages,
  },
  {
    id: 4,
    name: "Broths & Soups",
    bgColor: "#3bc141",
    icon: "🍲",
    items: soups,
  },
  {
    id: 5,
    name: "Sweet Treats",
    bgColor: "#c776a6",
    icon: "🍩",
    items: desserts,
  },
  {
    id: 6,
    name: "Italian Pizzas",
    bgColor: "#ba7487",
    icon: "🍕",
    items: pizzas,
  },
  {
    id: 7,
    name: "Spirits & Cocktails",
    bgColor: "#381c34",
    icon: "🍷",
    items: alcoholicDrinks,
  },
  {
    id: 8,
    name: "Fresh Greens",
    bgColor: "#6a4c41",
    icon: "🥗",
    items: salads,
  },
];

export const metricsData = [
  {
    title: "Total Sales",
    value: "₹75,320.50",
    percentage: "8%",
    color: "#c447d6",
    isIncrease: true,
  },
  {
    title: "New Customers",
    value: "12,540",
    percentage: "14%",
    color: "#fedbbd",
    isIncrease: true,
  },
  {
    title: "Website Visits",
    value: "32,890",
    percentage: "6%",
    color: "#380087",
    isIncrease: false,
  },
  {
    title: "Orders Processed",
    value: "15,430",
    percentage: "12%",
    color: "#8b6f76",
    isIncrease: true,
  },
];

export const itemsData = [
  {
    title: "Total Menu Sections",
    value: "10",
    percentage: "15%",
    color: "#e6f993",
    isIncrease: true,
  },
  {
    title: "Total Food Items",
    value: "65",
    percentage: "10%",
    color: "#6a7f85",
    isIncrease: true,
  },
  {
    title: "Pending Orders",
    value: "8",
    percentage: "7%",
    color: "#8d2ef9",
    isIncrease: false,
  },
  { title: "Reserved Tables", value: "14", color: "#749f0c" },
];

export const orders = [
  {
    id: "201",
    customer: "Sophia Williams",
    status: "Completed",
    dateTime: "March 7, 2025 07:45 PM",
    items: 4,
    tableNo: 2,
    total: 320.0,
  },
  {
    id: "202",
    customer: "Liam Johnson",
    status: "In Progress",
    dateTime: "March 7, 2025 08:10 PM",
    items: 7,
    tableNo: 1,
    total: 450.0,
  },
  {
    id: "203",
    customer: "Olivia Martinez",
    status: "Pending",
    dateTime: "March 7, 2025 08:30 PM",
    items: 5,
    tableNo: 3,
    total: 275.0,
  },
  {
    id: "204",
    customer: "Ethan Davis",
    status: "Ready",
    dateTime: "March 7, 2025 08:50 PM",
    items: 6,
    tableNo: 4,
    total: 390.0,
  },
];
