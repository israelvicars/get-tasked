'use client';

import React from 'react';
import { MdClose } from 'react-icons/md';

const SimplePDFViewer = ({ pdfUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Presentation</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <MdClose size={24} />
          </button>
        </div>
        
        <div className="flex-grow overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0"
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
};

export default SimplePDFViewer; 