'use client';

import React, { useEffect, useState } from 'react';
import PatientProfile from '../notes/PatientProfile';
import NoteActionBar from '../notes/NoteActionBar';
import NotesContent from '../notes/NotesContent';
import { formatDate } from '../../utils/formatters';

/**
 * MainContent component
 * @param {Object} props
 * @param {Object} props.selectedNote - The selected note to display
 * @param {boolean} [props.showSidebar=false] - Whether the sidebar is visible (for mobile)
 */
const MainContent = (props) => {
  const { selectedNote, showSidebar = false } = props;
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // On mobile, if sidebar is visible, don't render the component at all
  if (isMobile && showSidebar) {
    return null;
  }
  
  // If no note is selected, show a placeholder or empty state
  if (!selectedNote) {
    return (
      <div className="main-content flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-xl">Select a patient note to view details</p>
        </div>
      </div>
    );
  }

  // Create a patient object from the selected note
  const patient = {
    name: selectedNote.patientName || 'Unknown Patient',
    oneLiner: selectedNote.oneLiner || 'No medical history available',
  };

  return (
    <div className="main-content flex flex-col">
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <PatientProfile patient={patient} />
        <NoteActionBar />
      </div>
      <div className="overflow-y-auto flex-1">
        <NotesContent note={selectedNote} />
      </div>
    </div>
  );
};

export default MainContent; 