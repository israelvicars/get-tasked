'use client';

import React from 'react';
import VisitSummary from './VisitSummary';
import Subjective from './Subjective';
import Objective from './Objective';
import AssessmentPlan from './AssessmentPlan';
import PatientInstructions from './PatientInstructions';
import TranscriptSummary from './TranscriptSummary';
import { formatDate } from '../../utils/formatters';
import { Note } from '../../utils/data';

interface NotesContentProps {
  note: Note;
}

interface VisitSummaryData {
  visitSummary: string;
  defaultOpen: boolean;
}

interface SubjectiveData {
  subjectiveNotes: string;
  defaultOpen: boolean;
}

interface ObjectiveData {
  objectiveNotes: string;
  defaultOpen: boolean;
}

interface AssessmentPlanData {
  content: string;
  title: string;
  defaultOpen: boolean;
}

interface PatientInstructionsData {
  title: string;
  date: string;
  content: string;
  defaultOpen: boolean;
}

interface TranscriptSummaryData {
  transcriptSummary: string;
  defaultOpen: boolean;
}

const NotesContent: React.FC<NotesContentProps> = ({ note }) => {
  // Prepare data objects for each component
  const visitSummaryData: VisitSummaryData = {
    visitSummary: note?.visitSummary,
    defaultOpen: false
  };
  
  const subjectiveData: SubjectiveData = {
    subjectiveNotes: note?.subjectiveNotes,
    defaultOpen: false
  };
  
  const objectiveData: ObjectiveData = {
    objectiveNotes: note?.objectiveNotes,
    defaultOpen: false
  };
  
  const assessmentPlanData: AssessmentPlanData = {
    content: note?.assessmentPlan,
    title: 'Assessment & Plan',
    defaultOpen: true
  };
  
  const patientInstructionsData: PatientInstructionsData = {
    title: 'Patient Instructions',
    date: note?.date ? formatDate(note?.date) : 'No date available',
    content: note?.patientInstructions,
    defaultOpen: false
  };
  
  const transcriptSummaryData: TranscriptSummaryData = {
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