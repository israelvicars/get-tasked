'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import MainContent from '../components/layout/MainContent';
import useSelectedNote from '../utils/useSelectedNote';
import { MdContentCopy, MdClose } from "react-icons/md";

export default function Home() {
  const { selectedNote, selectNote, selectedNoteId } = useSelectedNote();
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  
  // Hide sidebar by default on mobile
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleNoteSelect = (noteId: number): void => {
    selectNote(noteId);
    
    // Hide sidebar on mobile after selecting a note
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };
  
  const toggleSidebar = (): void => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden relative">
        {showSidebar && (
          <div className="w-full md:w-80 flex-shrink-0 md:h-full">
            <Sidebar 
              onSelectNote={handleNoteSelect} 
            />
          </div>
        )}
        <MainContent 
          selectedNote={selectedNote} 
          key={selectedNoteId} 
          showSidebar={showSidebar}
        />
        <div className="md:hidden fixed bottom-4 right-4 z-10">
          <button 
            className="bg-[var(--primary-color)] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            onClick={toggleSidebar}
            aria-label={showSidebar ? "Hide sidebar" : "Show sidebar"}
          >
            {showSidebar ? <MdClose /> : <MdContentCopy />}
          </button>
        </div>
      </div>
    </div>
  );
}