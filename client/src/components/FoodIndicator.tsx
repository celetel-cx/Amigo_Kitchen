import React from "react";

interface FoodIndicatorProps {
  isVeg: boolean;
  showLabel?: boolean;
}

const FoodIndicator: React.FC<FoodIndicatorProps> = ({ isVeg, showLabel = false }) => {
  return (
    <div className="flex items-center">
      <span
        className={`${
          isVeg ? "veg-indicator" : "non-veg-indicator"
        } mr-2 w-3 h-3 inline-block relative`}
        style={{
          border: `1px solid ${isVeg ? "#28A745" : "#D94E4E"}`,
          position: "relative",
        }}
      >
        <span
          className="absolute rounded-full"
          style={{
            width: "5px",
            height: "5px",
            background: isVeg ? "#28A745" : "#D94E4E",
            top: "2px",
            left: "2px",
          }}
        ></span>
      </span>
      {showLabel && (
        <span className="text-xs text-gray-500">
          {isVeg ? "Vegetarian" : "Non-Vegetarian"}
        </span>
      )}
    </div>
  );
};

export default FoodIndicator;
