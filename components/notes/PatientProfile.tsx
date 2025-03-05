'use client';

import React from 'react';
import Button from '../common/Button';

interface Patient {
  name: string;
  oneLiner: string;
}

interface PatientProfileProps {
  patient: Patient;
}

const PatientProfile: React.FC<PatientProfileProps> = ({ patient }) => {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">{patient?.name || 'Unknown Patient'}</h2>
        <Button variant="secondary">
          Manage Profile
        </Button>
      </div>
      
      <div className="mb-2">
        <div className="text-sm text-gray-500">One Liner</div>
        <div>{patient?.oneLiner || 'No medical history available'}</div>
      </div>
    </div>
  );
};

export default PatientProfile;