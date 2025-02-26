'use client';

import React, { useState, useRef, useEffect } from 'react';
import CollapsibleSection from '../common/CollapsibleSection';
import IconButton from '../common/IconButton';
import Button from '../common/Button';
import { MdOutlineThumbUp, MdOutlineThumbDown, MdContentCopy, MdEdit, MdClose, MdCheck } from "react-icons/md";

const EditorModal = ({ initialContent, onSave, onCancel }) => {
  const [modalContent, setModalContent] = useState(initialContent);
  const textareaRef = useRef(null);
  
  useEffect(() => {
    // Focus the textarea when the modal opens
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const handleChange = (e) => {
    setModalContent(e.target.value);
  };
  
  const handleSave = () => {
    onSave(modalContent);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Edit Assessment & Plan</h3>
          <button 
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <MdClose size={24} />
          </button>
        </div>
        
        <textarea
          ref={textareaRef}
          className="flex-grow p-4 w-full focus:outline-none"
          value={modalContent}
          onChange={handleChange}
          style={{ minHeight: '300px', resize: 'none' }}
        />
        
        <div className="p-4 border-t flex justify-end space-x-2">
          <Button 
            variant="secondary" 
            size="small"
            onClick={onCancel}
            className="flex items-center"
          >
            <MdClose className="mr-1" /> Cancel
          </Button>
          <Button 
            variant="primary" 
            size="small"
            onClick={handleSave}
            className="flex items-center"
          >
            <MdCheck className="mr-1" /> Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

const AssessmentPlan = ({ data }) => {
  const [content, setContent] = useState(data?.content || 'No assessment plan available');
  const [showEditor, setShowEditor] = useState(false);
  
  // Update content when data changes
  useEffect(() => {
    if (data?.content) {
      setContent(data.content);
    }
  }, [data?.content]);
  
  const handleEditClick = () => {
    setShowEditor(true);
  };
  
  const handleSave = (newContent) => {
    setContent(newContent);
    setShowEditor(false);
  };
  
  const handleCancel = () => {
    setShowEditor(false);
  };
  
  const actionButtons = (
    <div className="flex space-x-2">
      <div className="dropdown">
        <Button variant="secondary" size="small">
          Learn Format
        </Button>
      </div>
      
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
  
  const copyButton = (
    <Button variant="secondary" size="small" className="flex items-center">
      <MdContentCopy className="mr-1" /> Copy
    </Button>
  );
  
  const editButton = (
    <Button 
      variant="secondary" 
      size="small" 
      className="flex items-center mr-2"
      onClick={handleEditClick}
    >
      <MdEdit className="mr-1" /> Edit
    </Button>
  );
  
  return (
    <>
      <div className="p-4">
        <CollapsibleSection 
          title={data?.title || 'Assessment & Plan'}
          actions={actionButtons}
        >
          <div className="whitespace-pre-wrap">
            {content}
          </div>
          
          <div className="mt-4 flex justify-end">
            {editButton}
            {copyButton}
          </div>
        </CollapsibleSection>
      </div>
      
      {showEditor && (
        <EditorModal 
          initialContent={content}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default AssessmentPlan; 