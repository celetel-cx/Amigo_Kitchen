import React from "react";
import { MenuItem } from "@/data/menu";
import FoodIndicator from "./FoodIndicator";
import { formatCurrency } from "@/lib/utils";

interface MenuItemListProps {
  items: MenuItem[];
}

const MenuItemList: React.FC<MenuItemListProps> = ({ items }) => {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between">
          <div>
            <div className="flex items-center">
              <FoodIndicator isVeg={item.isVeg} />
              <span className="font-medium">{item.name}</span>
            </div>
          </div>
          <span className="font-mono">{formatCurrency(item.price)}</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuItemList;
