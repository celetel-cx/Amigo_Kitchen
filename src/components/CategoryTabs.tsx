import React, { useState, useRef, useEffect } from "react";
import { cn, scrollToElement } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
}

interface CategoryTabsProps {
  categories: Category[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId !== "all") {
      scrollToElement(categoryId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section that is currently in view
      for (let i = categories.length - 1; i >= 0; i--) {
        const category = categories[i];
        const element = document.getElementById(category.id);

        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            // Adjust this value based on your header height
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <div className="bg-white sticky top-16 z-20 shadow-sm">
      <div className="container mx-auto">
        <div
          ref={tabsRef}
          className="category-tabs flex overflow-x-auto py-4 px-4 gap-3 no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <button
            className={cn(
              "category-tab flex-shrink-0 px-5 py-2 rounded-full font-medium focus:outline-none transition-colors",
              activeCategory === "all"
                ? "bg-[#D94E4E] text-white"
                : "bg-gray-100 text-[#343A40] hover:bg-gray-200"
            )}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "category-tab flex-shrink-0 px-5 py-2 rounded-full font-medium focus:outline-none transition-colors",
                activeCategory === category.id
                  ? "bg-[#D94E4E] text-white"
                  : "bg-gray-100 text-[#343A40] hover:bg-gray-200"
              )}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
