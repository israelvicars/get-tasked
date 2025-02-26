'use client';

import React from 'react';

const IconButton = ({ 
  icon, 
  onClick, 
  title = '',
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`icon-button ${className}`}
      onClick={onClick}
      title={title}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton; 