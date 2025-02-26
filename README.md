# Freed Medical Notes Application

A modern web application for healthcare providers to manage patient notes and medical records.

## Features

- View and manage patient notes
- Search functionality for finding patient records
- Collapsible sections for assessment plans and patient instructions
- Copy functionality for easy sharing of information
- Responsive design for various screen sizes

## Technologies Used

- Next.js 15
- React 19
- TailwindCSS
- TypeScript

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/freed-medical-notes.git
cd freed-medical-notes
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/components
  /layout
    Header.jsx - Application header with logo and navigation
    Sidebar.jsx - Side navigation with note list
    MainContent.jsx - Main content area for displaying patient data
  /common
    Button.jsx - Reusable button component
    SearchInput.jsx - Search input with clear functionality
    Dropdown.jsx - Dropdown select component
    IconButton.jsx - Button with icon
    CollapsibleSection.jsx - Expandable/collapsible section
  /notes
    NoteActionBar.jsx - Action bar for note operations
    PatientProfile.jsx - Patient profile information
    AssessmentPlan.jsx - Assessment and plan section
    PatientInstructions.jsx - Patient instructions section
/utils
  data.js - Mock data for the application
  formatters.js - Utility functions for formatting
/styles
  globals.css - Global styles
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
