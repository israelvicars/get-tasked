'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const Dropdown = ({ 
  options = [], 
  selectedOption, 
  onSelect,
  placeholder = 'Select an option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <button 
        className="button button-secondary button-small flex items-center justify-between w-full"
        onClick={toggleDropdown}
        type="button"
      >
        <span>{selectedOption || placeholder}</span>
        <MdArrowDropDown className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div 
              key={index}
              className="px-3 py-1 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown; 