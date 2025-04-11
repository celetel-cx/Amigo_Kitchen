import React from "react";
import FoodIndicator from "./FoodIndicator";
import { formatCurrency } from "@/lib/utils";

export interface FeaturedItem {
  id: string;
  name: string;
  price: number;
  description: string;
  isVeg: boolean;
  image: string;
}

interface FeaturedItemsProps {
  items: FeaturedItem[];
}

const FeaturedItems: React.FC<FeaturedItemsProps> = ({ items }) => {
  return (
    <section id="featured" className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-heading text-[#2C3E50]">Today's Specials</h2>
        <a href="#" className="text-[#D94E4E] font-medium text-sm flex items-center">
          See All <i className="fas fa-chevron-right ml-1 text-xs"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item.id}
            className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={item.image}
              className="w-full h-48 object-cover"
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="font-mono text-[#D94E4E] font-semibold">
                  {formatCurrency(item.price)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <FoodIndicator isVeg={item.isVeg} showLabel={true} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
