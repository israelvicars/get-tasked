'use client';

import React from 'react';
import PatientProfile from '../notes/PatientProfile';
import NoteActionBar from '../notes/NoteActionBar';
import AssessmentPlan from '../notes/AssessmentPlan';
import PatientInstructions from '../notes/PatientInstructions';
import { formatDate } from '../../utils/formatters';

const MainContent = ({ selectedNote }) => {
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

  // Create assessment plan data object
  const assessmentPlanData = {
    title: "Assessment & Plan",
    content: selectedNote.assessmentPlan || 'No assessment plan available'
  };

  // Create patient instructions data object
  const patientInstructionsData = {
    title: "Patient Instructions",
    date: selectedNote.date ? formatDate(selectedNote.date) : 'No date available',
    content: selectedNote.patientInstructions || 'No patient instructions available'
  };

  return (
    <div className="main-content flex flex-col">
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <PatientProfile patient={patient} />
        <NoteActionBar />
      </div>
      <div className="overflow-y-auto flex-1 p-4">
        <AssessmentPlan data={assessmentPlanData} />
        <PatientInstructions data={patientInstructionsData} />
      </div>
    </div>
  );
};

export default MainContent; 