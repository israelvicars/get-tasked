'use client';

import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const CollapsibleSection = ({ 
  title, 
  children,
  defaultOpen = true,
  className = '',
  actions = null,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={`collapsible-section ${className}`}>
      <div className="collapsible-header" onClick={toggleSection}>
        <h3>{title}</h3>
        <div className="flex items-center">
          {actions && <div className="mr-4">{actions}</div>}
          {isOpen ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
        </div>
      </div>
      
      {isOpen && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection; 