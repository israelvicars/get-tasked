'use client';

import React from 'react';
import VisitSummary from './VisitSummary';
import Subjective from './Subjective';
import Objective from './Objective';
import AssessmentPlan from './AssessmentPlan';
import PatientInstructions from './PatientInstructions';
import TranscriptSummary from './TranscriptSummary';
import { formatDate } from '../../utils/formatters';

const NotesContent = ({ note }) => {
  // Prepare data objects for each component
  const visitSummaryData = {
    visitSummary: note?.visitSummary,
    defaultOpen: false
  };
  
  const subjectiveData = {
    subjectiveNotes: note?.subjectiveNotes,
    defaultOpen: false
  };
  
  const objectiveData = {
    objectiveNotes: note?.objectiveNotes,
    defaultOpen: false
  };
  
  const assessmentPlanData = {
    content: note?.assessmentPlan,
    title: 'Assessment & Plan',
    defaultOpen: true
  };
  
  const patientInstructionsData = {
    title: 'Patient Instructions',
    date: note?.date ? formatDate(note?.date) : 'No date available',
    content: note?.patientInstructions,
    defaultOpen: false
  };
  
  const transcriptSummaryData = {
    transcriptSummary: note?.transcriptSummary,
    defaultOpen: false
  };
  
  return (
    <div className="flex flex-col max-w-[780px] mx-auto w-full">
      <VisitSummary data={visitSummaryData} />
      <Subjective data={subjectiveData} />
      <Objective data={objectiveData} />
      <AssessmentPlan data={assessmentPlanData} />
      <PatientInstructions data={patientInstructionsData} />
      <TranscriptSummary data={transcriptSummaryData} />
    </div>
  );
};

export default NotesContent; 