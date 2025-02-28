'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Freed Logo" 
          width={100} 
          height={30} 
          className="mr-4"
        />
      </div>
      
      <div className="flex items-center">
        <a 
          href="https://github.com/israelvicars/get-tasked" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:text-blue-400 transition-colors"
        >
          <FaGithub className="text-xl mr-2" />
          <span className="font-medium hidden md:inline">@israelvicars/get-tasked</span>
        </a>
      </div>
    </header>
  );
};

export default Header; 