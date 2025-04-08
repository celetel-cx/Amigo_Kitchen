import { FeaturedItem } from "@/components/FeaturedItems";

export interface MenuItem {
  name: string;
  price: number;
  isVeg: boolean;
  description?: string;
}

export const categories = [
  { id: "starters", name: "Starters" },
  { id: "tandoor", name: "Tandoor" },
  { id: "chinese", name: "Chinese" },
  { id: "main-course", name: "Main Course" },
  { id: "biryani", name: "Biryani" },
  { id: "bread", name: "Bread" },
  { id: "beverages", name: "Beverages" }
];

export const featuredItems: FeaturedItem[] = [
  {
    id: "murgh-mussallam",
    name: "Murgh Mussallam",
    price: 800,
    description: "Chef's special whole chicken preparation with royal spices",
    isVeg: false,
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg"
  },
  {
    id: "paneer-rajwada",
    name: "Chef's Special Paneer Rajwada",
    price: 360,
    description: "Premium paneer in rich royal gravy",
    isVeg: true,
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
  },
  {
    id: "dal-khureshi",
    name: "Chef's Special Dal Khureshi",
    price: 240,
    description: "Special lentil preparation with herbs and spices",
    isVeg: true,
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg"
  }
];

// Build menu items by category for easy reference
export const menuItems: Record<string, MenuItem[]> = {
  starters: [
    { name: "French Fries", price: 120, isVeg: true },
    { name: "Peri Peri Fries", price: 160, isVeg: true },
    { name: "Cheese Fries", price: 180, isVeg: true },
    { name: "Veg Manchurian", price: 240, isVeg: true },
    { name: "Paneer Chilli Dry", price: 260, isVeg: true },
    { name: "Golden Fried baby Corn", price: 260, isVeg: true },
    { name: "Crongy Crispy Veg", price: 250, isVeg: true },
    { name: "Aloo Chilli/65", price: 260, isVeg: true },
    { name: "Veg Spring Roll", price: 280, isVeg: true },
    { name: "Chicken Lollypop", price: 280, isVeg: false },
    { name: "Lemon Chicken", price: 300, isVeg: false },
    { name: "Tai Pai Chicken", price: 300, isVeg: false },
    { name: "Dragon Chicken", price: 310, isVeg: false },
    { name: "Chicken Chilli/Manchurian/65", price: 320, isVeg: false }
  ],
  soups: [
    { name: "Veg Manchow Soup", price: 160, isVeg: true },
    { name: "Veg Hot & Sour Soup", price: 160, isVeg: true },
    { name: "Veg Sweet Corn Soup", price: 170, isVeg: true },
    { name: "Veg Clear Soup", price: 150, isVeg: true },
    { name: "Lemon Coriander Soup", price: 160, isVeg: true },
    { name: "Cream Of Tomato Soup", price: 160, isVeg: true },
    { name: "Chicken Manchow Soup", price: 190, isVeg: false },
    { name: "Chicken Hot & Sour Soup", price: 190, isVeg: false },
    { name: "Chicken Hot Pot Soup", price: 219, isVeg: false },
    { name: "Chicken Burnt Garlic Soup", price: 230, isVeg: false }
  ],
  tandoor: [
    { name: "Veg Seekh Kebab", price: 330, isVeg: true },
    { name: "Veg Cheese Seekh Kebab", price: 330, isVeg: true },
    { name: "Hara Bhara kebab", price: 270, isVeg: true },
    { name: "Paneer Tikka", price: 290, isVeg: true },
    { name: "Paneer Kalimiri Tikka", price: 290, isVeg: true },
    { name: "Paneer Malai Tikka", price: 330, isVeg: true },
    { name: "Chef Special Paneer Makhmali Tikka", price: 370, isVeg: true },
    { name: "Chicken Tikka", price: 290, isVeg: false },
    { name: "Chicken Khasta Kebab", price: 300, isVeg: false },
    { name: "Chicken Chakori Kebab", price: 300, isVeg: false },
    { name: "Chicken Lasooni Kebab", price: 320, isVeg: false },
    { name: "Murgh Malai Tikka", price: 350, isVeg: false },
    { name: "Murgh Alishan Tikka", price: 350, isVeg: false },
    { name: "Tandoori Chicken (Half)", price: 360, isVeg: false },
    { name: "Tandoori Chicken (Full)", price: 630, isVeg: false }
  ],
  "fish-prawns": [
    { name: "Fish Tikka", price: 330, isVeg: false },
    { name: "Fish Khasta Tikka", price: 350, isVeg: false },
    { name: "Fish Mahi Tikka", price: 350, isVeg: false },
    { name: "Fish Tawa Fry", price: 340, isVeg: false },
    { name: "Spicy Fried Fish", price: 360, isVeg: false },
    { name: "Apollo Fish", price: 360, isVeg: false },
    { name: "Fish Finger", price: 490, isVeg: false },
    { name: "Fish & Chips", price: 490, isVeg: false },
    { name: "Tandoori Prawns", price: 480, isVeg: false },
    { name: "Tawa Prawns", price: 480, isVeg: false },
    { name: "Golden Fried Prawns", price: 480, isVeg: false },
    { name: "Prawns Chilli", price: 480, isVeg: false }
  ],
  "main-course-veg": [
    { name: "Dal Tadka", price: 180, isVeg: true },
    { name: "Dal Kolhapuri", price: 180, isVeg: true },
    { name: "Dal Butter Fry", price: 200, isVeg: true },
    { name: "Dal Lasooni", price: 220, isVeg: true },
    { name: "Jeera Dal", price: 220, isVeg: true },
    { name: "Chef's Special Dal Khureshi", price: 240, isVeg: true },
    { name: "Dum Aloo Punjabi", price: 240, isVeg: true },
    { name: "Aloo Mutter", price: 240, isVeg: true },
    { name: "Veg Hyderabadi", price: 250, isVeg: true },
    { name: "Veg Patiyala", price: 300, isVeg: true },
    { name: "Kaju Curry/Masala", price: 330, isVeg: true },
    { name: "Veg Kofta/Malai Kofta", price: 340, isVeg: true },
    { name: "Mushroom Masala/Kadai/Do Pyaza", price: 330, isVeg: true },
    { name: "Matka Paneer", price: 260, isVeg: true },
    { name: "Paneer Punjabi", price: 280, isVeg: true },
    { name: "Paneer Lahori/Kolhapuri/Angara", price: 310, isVeg: true },
    { name: "Paneer Tikka masala", price: 310, isVeg: true },
    { name: "Paneer Rani Palak/Palak Paneer", price: 330, isVeg: true },
    { name: "Mutter Paneer", price: 330, isVeg: true },
    { name: "Paneer Butter Masala/Lababdar", price: 340, isVeg: true },
    { name: "Diwani Nizami Handi", price: 260, isVeg: true },
    { name: "Chef's Spacial Paneer Rajwada", price: 360, isVeg: true }
  ],
  "main-course-non-veg": [
    { name: "Egg Curry/Masala/Kolhapuri", price: 240, isVeg: false },
    { name: "Egg Kala Rassa", price: 240, isVeg: false },
    { name: "Egg methi Masala/Mughlai", price: 260, isVeg: false },
    { name: "Chicken Curry/Masala (Bone)", price: 300, isVeg: false },
    { name: "Chicken Mirch Masala (Bone)", price: 310, isVeg: false },
    { name: "Matka Chicken (Bone)", price: 310, isVeg: false },
    { name: "Chicken Rogni (Bone)", price: 320, isVeg: false },
    { name: "Chicken Kala Rassa (Bone)", price: 310, isVeg: false },
    { name: "Afghani Chicken/Mughlai Chicken (B/L)", price: 340, isVeg: false },
    { name: "Chicken Lachhedar (B/L)", price: 340, isVeg: false },
    { name: "Murgh Lahori (B/L)", price: 340, isVeg: false },
    { name: "Murgh Patiyala (B/L)", price: 360, isVeg: false },
    { name: "Butter Chicken/Lababdar (B/L)", price: 370, isVeg: false },
    { name: "Murgh Rara Masala", price: 380, isVeg: false },
    { name: "Chicken Kofta (B/L)", price: 380, isVeg: false },
    { name: "Chicken Tangdi Masala/Kalmi Masala", price: 390, isVeg: false },
    { name: "Chicken Rajwada", price: 390, isVeg: false },
    { name: "Murgh Mussallam", price: 800, isVeg: false },
    { name: "Murgh Maharaja", price: 800, isVeg: false }
  ],
  "mutton-fish": [
    { name: "Mutton Masala/Curry", price: 390, isVeg: false },
    { name: "Mutton Kala Rassa", price: 390, isVeg: false },
    { name: "Mutton Angara Masala", price: 390, isVeg: false },
    { name: "Mutton Rogan Josh", price: 390, isVeg: false },
    { name: "Mutton Kheema Masala", price: 390, isVeg: false },
    { name: "Mutton Rara Masala", price: 430, isVeg: false },
    { name: "Chef's Special Laal Maans Mutton", price: 430, isVeg: false },
    { name: "Fish Curry (B/L)", price: 330, isVeg: false },
    { name: "Fish Masala (B/L)", price: 330, isVeg: false },
    { name: "Fish Bengali Curry (B/L)", price: 330, isVeg: false },
    { name: "Prawns Curry", price: 460, isVeg: false },
    { name: "Prawns Masala", price: 460, isVeg: false },
    { name: "Prawns Kassa", price: 430, isVeg: false }
  ],
  biryani: [
    { name: "Veg Biryani", price: 230, isVeg: true },
    { name: "Mushroom Biryani", price: 240, isVeg: true },
    { name: "Paneer Biryani", price: 240, isVeg: true },
    { name: "Egg Biryani", price: 240, isVeg: false },
    { name: "Chicken Biryani", price: 280, isVeg: false },
    { name: "Chicken Lollypop Biryani", price: 300, isVeg: false },
    { name: "Chicken Tikka Biryani", price: 320, isVeg: false },
    { name: "Mutton Biryani", price: 320, isVeg: false },
    { name: "Mutton Kheema Biryani", price: 320, isVeg: false },
    { name: "Prawns Biryani", price: 340, isVeg: false }
  ],
  bread: [
    { name: "Roti", price: 40, isVeg: true },
    { name: "Butter Roti", price: 45, isVeg: true },
    { name: "Maida Roti", price: 40, isVeg: true },
    { name: "Maida Butter Roti", price: 45, isVeg: true },
    { name: "Naan", price: 50, isVeg: true },
    { name: "Butter Naan", price: 70, isVeg: true },
    { name: "Garlic Naan", price: 80, isVeg: true },
    { name: "Cheese Naan", price: 100, isVeg: true },
    { name: "Tandoori Roti", price: 35, isVeg: true },
    { name: "Butter Tandoori Roti", price: 40, isVeg: true },
    { name: "Lachha Paratha", price: 45, isVeg: true },
    { name: "Butter Lachha Paratha", price: 65, isVeg: true }
  ],
  beverages: [
    { name: "Water", price: 20, isVeg: true },
    { name: "Soft drinks", price: 55, isVeg: true },
    { name: "Butter Milk", price: 80, isVeg: true },
    { name: "Fresh Lime Juice", price: 90, isVeg: true },
    { name: "Cold Coffee", price: 120, isVeg: true },
    { name: "Virgin Mojito", price: 140, isVeg: true }
  ]
};

export const menuCategories = [
  {
    id: "starters",
    title: "Starters",
    icon: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subcategories: [
      {
        title: "Vegetarian",
        items: menuItems.starters.filter(item => item.isVeg)
      },
      {
        title: "Non-Vegetarian",
        items: menuItems.starters.filter(item => !item.isVeg)
      },
      {
        title: "Soups",
        items: menuItems.soups
      }
    ]
  },
  {
    id: "tandoor",
    title: "Tandoor",
    icon: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subcategories: [
      {
        title: "Tandoor Vegetarian",
        items: menuItems.tandoor.filter(item => item.isVeg)
      },
      {
        title: "Tandoor Non-Vegetarian",
        items: menuItems.tandoor.filter(item => !item.isVeg)
      },
      {
        title: "Fish & Prawns",
        items: menuItems["fish-prawns"]
      }
    ]
  },
  {
    id: "main-course",
    title: "Main Course",
    icon: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subcategories: [
      {
        title: "Vegetarian",
        items: menuItems["main-course-veg"]
      },
      {
        title: "Non-Vegetarian",
        items: menuItems["main-course-non-veg"]
      },
      {
        title: "Mutton & Fish",
        items: menuItems["mutton-fish"]
      }
    ]
  },
  {
    id: "biryani",
    title: "Biryani",
    icon: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subcategories: [
      {
        title: "Vegetarian Biryani",
        items: menuItems.biryani.filter(item => item.isVeg)
      },
      {
        title: "Non-Vegetarian Biryani",
        items: menuItems.biryani.filter(item => !item.isVeg)
      }
    ]
  },
  {
    id: "bread",
    title: "Bread",
    icon: "",
    subcategories: [
      {
        title: "Breads",
        items: menuItems.bread
      }
    ]
  },
  {
    id: "beverages",
    title: "Beverages",
    icon: "",
    subcategories: [
      {
        title: "Beverages",
        items: menuItems.beverages
      }
    ]
  }
];
