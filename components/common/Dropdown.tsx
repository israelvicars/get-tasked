'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

interface DropdownProps {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ 
  options = [], 
  selectedOption, 
  onSelect,
  placeholder = 'Select an option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  
  const handleSelect = (option: string): void => {
    onSelect(option);
    setIsOpen(false);
  };
  
  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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