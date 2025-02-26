'use client';

import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import SearchInput from '../common/SearchInput';
import { notes } from '../../utils/data';
import { MdAdd } from 'react-icons/md';

const NoteListItem = ({ note, isSelected, onClick }) => {
  return (
    <div 
      className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${isSelected ? 'bg-blue-50' : ''}`}
      onClick={() => onClick(note.id)}
    >
      <div className="font-medium">{note.patientName}</div>
      <div className="text-sm text-gray-500">
        {note.date} {note.time} {note.duration}
      </div>
      <div className="text-sm mt-1 text-gray-700">{note.summary}</div>
    </div>
  );
};

const Sidebar = ({ onSelectNote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(notes[0]?.id);
  
  const filteredNotes = notes.filter(note => 
    note.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleNoteClick = (noteId) => {
    setSelectedNoteId(noteId);
    if (onSelectNote) {
      onSelectNote(noteId);
    }
  };
  
  return (
    <div className="sidebar border-r border-gray-200 h-full overflow-y-auto">
      <div className="sticky top-0 bg-white p-4 z-10">
        <button 
          className="w-full mb-4 flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm"
        >
          <MdAdd className="mr-2" size={18} /> Start a Visit
        </button>
        
        <SearchInput 
          placeholder="Search notes by name"
          onChange={setSearchTerm}
          className="mb-4"
        />
        
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="font-medium text-sm text-gray-700">All Notes</span>
        </div>
      </div>
      
      <div className="overflow-y-auto">
        {filteredNotes.map(note => (
          <NoteListItem 
            key={note.id}
            note={note}
            isSelected={note.id === selectedNoteId}
            onClick={handleNoteClick}
          />
        ))}
        {filteredNotes.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No notes found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar; 