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
        subHeader: "Design and Layout",
        options: [
          { name: "Basic", price: 800 },
          { name: "Premium", price: 1400 },
          { name: "Complex", price: 2500 },
        ],
      },
    ],
    
    "Systems & Security": [
      {
        subHeader: "Database",
        options: [
          { name: "Basic", price: 3000 },
          { name: "Advanced", price: 10000 },
        ],
      },
      {
        subHeader: "Security",
        options: [
          { name: "Basic", price: 700 },
          { name: "Advanced", price: 5000 },
        ],
      },
    ],
    
    "Content & Commerce": [
      {
        subHeader: "eCommerce",
        options: [
          { name: "Standard", price: 2500 },
          { name: "Enhanced", price: 5000 },
          { name: "Enterprise", price: 7500 },
        ],
      },
      {
        subHeader: "CMS",
        options: [
          { name: "Basic", price: 700 },
          { name: "Advanced", price: 5000 },
          { name: "Enterprise", price: 5000 },
        ],
      },
    ],
  
    "Digital Outreach": [
      {
        subHeader: "Campaign Packages",
        options: [
          { name: "Essentials", price: 700 },
          { name: "Premium", price: 1200 },
          { name: "Enterprise", price: 2000 },
        ],
      },
    ],
  
    "Responsiveness": [
      {
        subHeader: "Device Compatibility",
        options: [
          { name: "Basic", price: 1000 },
          { name: "Advanced", price: 1500 },
        ],
      },
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
