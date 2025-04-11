import React, { useState } from "react";
import { menuItems } from "@/data/menu";
import { scrollToElement } from "@/lib/utils";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    { category: string; name: string }[]
  >([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length >= 2) {
      // Search through all menu items
      const results: { category: string; name: string }[] = [];

      Object.entries(menuItems).forEach(([category, items]) => {
        items.forEach((item) => {
          if (item.name.toLowerCase().includes(term.toLowerCase())) {
            results.push({ category, name: item.name });
          }
        });
      });

      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (category: string) => {
    scrollToElement(category);
    setShowResults(false);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search menu..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D94E4E] focus:border-transparent"
        />
        <button className="absolute right-3 top-2.5 text-gray-500">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchResults.map((result, index) => (
            <div
              key={index}
              onClick={() => handleResultClick(result.category)}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded text-sm"
            >
              <span className="font-medium">{result.name}</span>
              <span className="text-xs text-gray-500 ml-2">
                in {result.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
