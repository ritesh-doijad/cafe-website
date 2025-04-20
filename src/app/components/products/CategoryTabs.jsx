"use client"

import React, { useState } from 'react';

const categories = [
  "All Products",
  "Birthday cakes",
  "Anniversary Specials",
  "Kids Favorites",
  "Custom Order's",
];

const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 py-4 mb-8">
      {categories.map((cat, idx) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full ${
            cat === selectedCategory
              ? "bg-[#da8554] text-white" // Active category style
              : "bg-white text-[#1e1e1e]" // Inactive category style
          }`}
          onClick={() => handleCategoryChange(cat)} // Update selected category
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
