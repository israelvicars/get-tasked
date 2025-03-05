'use client';

import React, { useState } from 'react';
import Dropdown from '../common/Dropdown';
import Button from '../common/Button';
import IconButton from '../common/IconButton';
import { MdCopyAll, MdSettings } from "react-icons/md";

type VisitType = 'New Patient' | 'Follow-up' | 'Consultation' | 'Annual Exam';
type Pronouns = 'He/Him' | 'She/Her' | 'They/Them' | 'Select pronouns';
type NoteLength = 'Brief' | 'Standard' | 'Detailed';

const NoteActionBar: React.FC = () => {
  const [visitType, setVisitType] = useState<VisitType>('New Patient');
  const [pronouns, setPronouns] = useState<Pronouns>('Select pronouns');
  const [noteLength, setNoteLength] = useState<NoteLength>('Standard');
  
  const visitTypeOptions = ['New Patient', 'Follow-up', 'Consultation', 'Annual Exam'];
  const pronounOptions = ['He/Him', 'She/Her', 'They/Them', 'Select pronouns'];
  const noteLengthOptions = ['Brief', 'Standard', 'Detailed'];
  
  return (
    <div className="border-b border-gray-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col md:flex-row md:space-x-3 mb-4 md:mb-0">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="text-sm text-gray-500 mr-2">Visit Type</span>
          <Dropdown 
            options={visitTypeOptions}
            selectedOption={visitType}
            onSelect={(option) => setVisitType(option as VisitType)}
          />
        </div>
        
        <div className="flex items-center mb-2 md:mb-0">
          <span className="text-sm text-gray-500 mr-2">Pronouns</span>
          <Dropdown 
            options={pronounOptions}
            selectedOption={pronouns}
            onSelect={(option) => setPronouns(option as Pronouns)}
          />
        </div>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Note Length</span>
          <Dropdown 
            options={noteLengthOptions}
            selectedOption={noteLength}
            onSelect={(option) => setNoteLength(option as NoteLength)}
          />
        </div>
      </div>
      
      <div className="flex space-x-2 md:space-x-3">
        <Button variant="primary" size="small" className="flex items-center">
          <span className="mr-1">✨</span> 
          <span className="hidden md:inline">Magic Edit</span>
          <span className="md:hidden">Edit</span>
        </Button>
        
        <Button variant="secondary" size="small" className="flex items-center">
          <MdCopyAll className="mr-1" /> 
          <span className="hidden md:inline">Copy All</span>
          <span className="md:hidden">Copy</span>
        </Button>
        
        <Button variant="secondary" size="small" className="hidden md:block">
          Note Preferences
        </Button>
        <IconButton 
          icon={<MdSettings />} 
          title="Note Preferences"
          className="md:hidden"
        />
      </div>
    </div>
  );
};

export default NoteActionBar;