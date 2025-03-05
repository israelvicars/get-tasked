'use client';

import React, { useState, ReactNode } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  actions?: ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  children,
  defaultOpen = true,
  className = '',
  actions = null,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  
  const toggleSection = (): void => {
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