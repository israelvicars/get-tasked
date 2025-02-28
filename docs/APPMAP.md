# Get-Tasked-AI Codebase Mindmap

## 🏗️ Project Structure
- **Frontend Framework**: Next.js 15.1.7
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS
- **Icons**: react-icons

## 📁 Directory Structure
- **app/**
  - layout.jsx (Root layout)
  - page.jsx (Main application page)
- **components/**
  - **common/** (Reusable UI components)
  - **layout/** (Page layout components)
  - **notes/** (Note-related components)
- **public/** (Static assets)
- **styles/** (Global styles)
- **utils/** (Utility functions)

## 🧩 Components

### 📊 Layout Components
- **Header.jsx**
  - Application header with navigation
  - Contains subscription button
- **Sidebar.jsx**
  - Patient notes list
  - Search functionality
  - Note selection
- **MainContent.jsx**
  - Displays selected note details
  - Responsive layout handling
  - Contains patient profile and note content

### 📝 Notes Components
- **NotesContent.jsx**
  - Container for all note sections
  - Organizes the different note components
- **AssessmentPlan.jsx**
  - Displays and manages assessment and plan
  - Inline editing functionality
  - Task management with checkboxes
  - Modal editor for content
- **PatientInstructions.jsx**
  - Displays instructions for patients
- **Subjective.jsx**
  - Displays subjective patient information
- **Objective.jsx**
  - Displays objective medical findings
- **TranscriptSummary.jsx**
  - Displays summary of transcripts
- **VisitSummary.jsx**
  - Displays summary of patient visits
- **NoteActionBar.jsx**
  - Action buttons for note management
- **PatientProfile.jsx**
  - Displays patient information

### 🧰 Common Components
- **Button.jsx**
  - Reusable button component
- **IconButton.jsx**
  - Button with icon
- **CollapsibleSection.jsx**
  - Expandable/collapsible section
- **Dropdown.jsx**
  - Dropdown menu component
- **SearchInput.jsx**
  - Search input field

## 🛠️ Utilities
- **data.js**
  - Mock patient data
  - Note templates and structure
- **formatters.js**
  - Date and text formatting functions
- **useSelectedNote.ts**
  - Custom hook for note selection

## 📱 Features
- **Responsive Design**
  - Mobile-friendly layout
  - Sidebar toggle for small screens
- **Note Management**
  - View patient notes
  - Edit assessment plans
  - Task management within notes
- **Inline Editing**
  - Edit text directly in the interface
  - Toggle between view and edit modes
- **PDF Viewer**
  - Simple PDF viewer using iframe
  - Modal display for documents

## 🔄 State Management
- **React Hooks**
  - useState for component state
  - useEffect for side effects
  - Custom hooks for shared logic
- **Context API**
  - Note selection state management

## 🎨 UI/UX
- **Modern Interface**
  - Clean, professional design
  - Medical-focused UI elements
- **Collapsible Sections**
  - Organized information display
  - Focus on relevant content
- **Interactive Elements**
  - Buttons, checkboxes, and modals
  - Feedback mechanisms

## 🧪 Data Flow
- **Mock Data** → **Component Props** → **UI Rendering**
- **User Interactions** → **State Updates** → **UI Updates**
- **Note Selection** → **Content Display** → **Editing Capabilities** 