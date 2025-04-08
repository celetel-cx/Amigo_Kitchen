import React from "react";
import { MenuItem } from "@/data/menu";
import MenuItemList from "./MenuItemList";

interface MenuCategoryProps {
  id: string;
  title: string;
  icon?: string;
  subcategories: {
    title: string;
    items: MenuItem[];
  }[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
  id,
  title,
  icon,
  subcategories,
}) => {
  return (
    <section id={id} className="mb-12 scroll-mt-32" data-category={id}>
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-[#D94E4E] rounded-full flex items-center justify-center mr-4 overflow-hidden">
          {icon ? (
            <img src={icon} alt="" className="w-full h-full object-cover" />
          ) : (
            <i className={`fas fa-utensils text-white text-xl`}></i>
          )}
        </div>
        <h2 className="text-2xl font-bold font-heading text-[#2C3E50]">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((subcategory, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-4 text-[#D94E4E]">
              {subcategory.title}
            </h3>
            <MenuItemList items={subcategory.items} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
