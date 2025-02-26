'use client';

import React, { useState } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';

const SearchInput = ({ 
  placeholder = 'Search...', 
  onChange,
  className = '',
  ...props 
}) => {
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  
  const handleClear = () => {
    setValue('');
    if (onChange) {
      onChange('');
    }
  };
  
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        className="w-full py-2 pl-10 pr-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {value && (
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={handleClear}
          type="button"
          aria-label="Clear search"
        >
          <MdClose size={18} />
        </button>
      )}
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <MdSearch size={18} />
      </span>
    </div>
  );
};

export default SearchInput; 