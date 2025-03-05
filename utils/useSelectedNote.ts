'use client';

import { useState, useEffect } from 'react';
import { notes, Note } from './data';

export const useSelectedNote = () => {
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(notes[0]?.id || null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // Update the selected note whenever the ID changes
  useEffect(() => {
    if (selectedNoteId) {
      const note = notes.find(n => n.id === selectedNoteId);
      if (note) {
        // Create a new object to ensure reactivity
        setSelectedNote({...note});
      }
    } else {
      setSelectedNote(null);
    }
  }, [selectedNoteId]);

  // Initialize with the first note
  useEffect(() => {
    if (notes.length > 0 && !selectedNote) {
      setSelectedNoteId(notes[0].id);
    }
  }, [selectedNote]);

  const selectNote = (noteId: number) => {
    setSelectedNoteId(noteId);
  };

  return {
    selectedNote,
    selectNote,
    selectedNoteId
  };
};

export default useSelectedNote; 