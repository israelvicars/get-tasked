'use client';

import React from 'react';
import CollapsibleSection from '../common/CollapsibleSection';
import IconButton from '../common/IconButton';
import Button from '../common/Button';
import { MdOutlineThumbUp, MdOutlineThumbDown, MdContentCopy } from "react-icons/md";

const Objective = ({ data }) => {
  const actionButtons = (
    <div className="flex space-x-2">
      <IconButton 
        icon={<MdOutlineThumbUp />} 
        title="Like"
        className="text-gray-500"
      />
      
      <IconButton 
        icon={<MdOutlineThumbDown />} 
        title="Dislike"
        className="text-gray-500"
      />
    </div>
  );
  
  return (
    <div className="py-2 px-4">
      <CollapsibleSection 
        title="Objective"
        actions={actionButtons}
        defaultOpen={data?.defaultOpen}
      >
        <div>
          <div className="whitespace-pre-wrap">
            {data?.objectiveNotes || 'No objective notes available'}
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" size="small" className="flex items-center">
              <MdContentCopy className="mr-1" /> Copy
            </Button>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default Objective; 