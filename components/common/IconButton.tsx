'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  title?: string;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ 
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