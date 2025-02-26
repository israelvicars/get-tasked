'use client';

import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'small', 
  onClick, 
  className = '',
  ...props 
}) => {
  // Only apply the base classes if a custom className is not provided
  const classes = className || `button button-${variant} button-${size}`;
  
  return (
    <button 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 