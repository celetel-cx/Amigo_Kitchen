import { useState } from "react";
import Search from "./ui/search";
import logoImage from "@assets/logo.jpeg";

const Header = () => {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  const toggleMobileSearch = () => {
    setIsMobileSearchVisible(!isMobileSearchVisible);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="Amigos Kitchen Logo" 
            className="h-12 w-12 rounded-full object-cover border-2 border-[#D94E4E]" 
          />
          <h1 className="text-3xl font-bold text-[#D94E4E] font-heading">
            amiGos<span className="text-[#2C3E50]">Kitchen</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Search />
        </div>
        
        <div className="block md:hidden">
          <button
            onClick={toggleMobileSearch}
            className="p-2 text-[#D94E4E] focus:outline-none"
          >
            <i className="fas fa-search text-xl"></i>
          </button>
        </div>
      </div>
      
      {isMobileSearchVisible && (
        <div className="md:hidden px-4 pb-4">
          <Search />
        </div>
      )}
    </header>
  );
};

export default Header;
