import React from "react";
import CategoryTabs from "@/components/CategoryTabs";
import FeaturedItems from "@/components/FeaturedItems";
import MenuCategory from "@/components/MenuCategory";
import { categories, featuredItems, menuCategories } from "@/data/menu";

const Home: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Hero Image */}
      <div className="relative h-48 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          alt="Restaurant Ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-2">Our Menu</h2>
            <p className="text-lg md:text-xl">Explore our delicious offerings</p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <CategoryTabs categories={categories} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Featured Section */}
        <FeaturedItems items={featuredItems} />

        {/* Menu Categories */}
        {menuCategories.map((category) => (
          <MenuCategory
            key={category.id}
            id={category.id}
            title={category.title}
            icon={category.icon}
            subcategories={category.subcategories}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
