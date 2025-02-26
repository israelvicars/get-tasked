'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import IconButton from '../common/IconButton';
import { 
  MdOutlineQuestionMark, 
  MdChatBubbleOutline, 
  MdOutlinePersonOutline,
  MdAttachMoney 
} from 'react-icons/md';

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
        <span className="mr-4 text-sm hidden md:inline">Your trial expires in 6 days</span>
        <Button 
          variant="secondary" 
          className="mr-4"
        >
          <span className="hidden md:inline">Subscribe</span>
          <span className="md:hidden"><MdAttachMoney /></span>
        </Button>
        
        <div className="flex space-x-2 md:space-x-4">
          <IconButton 
            icon={<MdOutlineQuestionMark />} 
            title="Help"
            className="text-white"
          />
          <IconButton 
            icon={<MdChatBubbleOutline />} 
            title="Chat"
            className="text-white"
          />
          <IconButton 
            icon={<MdOutlinePersonOutline />} 
            title="Profile"
            className="text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header; 