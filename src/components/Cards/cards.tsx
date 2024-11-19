"use client";
import React, { useState } from "react";

const Card = ({ title, options, handleChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleButtonClick = (option) => {
    setSelectedOption(option.name); // Mark the selected option
    handleChange(title, option.price); // Update the total cost in the parent
  };

  return (
    <div className="card bg-base-100 w-96 shadow-lg m-4 rounded-lg">
      <div className="card-body">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 text-center">{title}</h2>
        
        {/* Separator Bar */}
        <div className="h-1 bg-indigo-500 my-4 rounded"></div>
        
          {/* Sub-Headers and Options */}
          <div className="space-y-6">
          {options.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Sub-Header */}
              <h3 className="text-lg font-medium text-gray-700 mb-2">{section.subHeader}</h3>
              {/* Buttons for Options */}
              <div className="space-y-3">
                {section.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleButtonClick(option)}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg border transition-all w-full
                    ${
                      selectedOption === option.name
                        ? "border-[#E85C41] bg-[#E85C41]/10 text-gray-900"
                        : "border-gray-700 hover:border-[#E85C41] hover:bg-[#E85C41]/5 text-gray-300"
                    }`}
                  >
                    <span>{option.name}</span>
                    <span className="text-sm font-medium">${option.price}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;