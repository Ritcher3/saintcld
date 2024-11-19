"use client";

import React, { useState } from "react";
import Card from "../Cards/cards";

const CostCalculator = () => {
  const featuresData = {
    "Core Features": [
      {
        subHeader: "Pages",
        options: [
          { name: "1-5 Pages", price: 250 },
          { name: "6-10 Pages", price: 500 },
          { name: "11-20 Pages", price: 750 },
          { name: "20+ Pages", price: 1000 },
        ],
      },
      {
        subHeader: "Design",
        options: [
          { name: "Basic", price: 800 },
          { name: "Premium", price: 1400 },
          { name: "Complex", price: 2500 },
        ],
      },
    ],

    ContentManagementSystem: [
      { name: "Basic CMS", price: 1200 },
      { name: "Enhanced Store", price: 5000 },
    ],

    Ecommerce: [
      { name: "Standard Store", price: 2500 },
      { name: "Enhanced Store", price: 5000 },
      { name: "Enterprise Solution", price: 7500 },
    ],
    SEO: [
      { name: "Basic SEO", price: 1000 },
      { name: "Advanced SEO", price: 2000 },
      { name: "Enterprise SEO", price: 3000 },
    ],
    Responsiveness: [
      { name: "Basic", price: 1000 },
      { name: "Advanced", price: 1500 },
    ],
  };

  const [selectedOptions, setSelectedOptions] = useState({});
  const handleChange = (category, price) => {
    setSelectedOptions({ ...selectedOptions, [category]: price });
  };

  const calculateTotal = () =>
    Object.values(selectedOptions).reduce((total, price) => total + price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Cost Calculator</h1>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-4xl">
        {Object.entries(featuresData).map(([title, options], index) => (
          <Card
            key={index}
            title={title}
            options={options}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold">
          Total Cost: <span className="text-indigo-600">${calculateTotal()}</span>
        </h2>
      </div>
    </div>
  );
};

export default CostCalculator;
