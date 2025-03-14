# GetTasked: Task Management for SOAP Notes

**Inline Task UI**

![GetTasked Checkbox UI](/docs/checkbox-interaction.gif)

**Live Prototype**: [gettasked.fyi](https://www.gettasked.fyi/) 

![GetTasked MVP Demo](/docs/editing-workflow.gif)

---
## Introduction
GetTasked is a functional prototype that embeds seamless task management into medical SOAP notes. Built in one week, it demonstrates how generative AI can accelerate software development—from research to deployment—to deliver user-focused solutions. This project aims to enhance healthcare workflows by providing innovative solutions for task management.
---
## Project Summary and AI Utilization
I leveraged generative AI to streamline GetTasked's development process:
- **Research & Planning**: Used [Grok](https://grok.com/) to analyze healthcare provider needs, draft a Product Requirements Document (PRD), and generate synthetic SOAP note data.
- **Prototyping**: Employed [Cursor](https://cursor.com/) with [Claude 3.7](https://www.anthropic.com/) to quickly build the app structure and refine it with stubbed data.
- **UI Design**: Implemented Grok-suggested Markdown checkboxes for tasks, blending simplicity with functionality inspired by tools like GitHub.
This AI-powered approach enabled a rapid, effective build, highlighting the potential to optimize development workflows.
---
## Problem Statement and Solution
Medical professionals often struggle to track follow-up tasks within SOAP notes, risking oversight of critical actions like scheduling tests. GetTasked addresses this by integrating task management directly into notes using Markdown syntax (`[]` and `[x]`), rendered as interactive checkboxes. Key benefits include:
- Inline task visibility and tracking.
- A progress bar for quick status checks.
- Compatibility with existing note workflows.
This solution boosts efficiency without disrupting established habits, delivering immediate value to users.
---
## Technical Implementation
GetTasked combines modern tools and a clean architecture:
- **Stack**: React, NextJS, deployed on Vercel.
- **Components**:
  - **Layout**: `Header`, `Sidebar`, `MainContent`.
  - **Common**: `Button`, `SearchInput`, `CollapsibleSection`.
  - **Note-specific**: `NoteList`, `PatientProfile`, `AssessmentPlan`.
- **Features**:
  - Collapsible note sections and task checkboxes.
  - Markdown parsing for interactive tasks.
  - Copy functionality for note snippets.
- **Data**: Stubbed SOAP notes in `data.js`.
- **Design**: Custom "Tasked" logo (a stretched checkbox) and healthcare-aligned styling.
- **Mobile**: Responsive design supports desktop and mobile devices.
- **Hosting**: Live at [gettasked.fyi](https://www.gettasked.fyi/).
This prototype demonstrates the ability to deliver polished, scalable solutions under tight deadlines.
---
## Feature Roadmap
Future enhancements could amplify GetTasked's impact:
- **EMR Integration**: Export tasks to EMR systems.
- **Task Dashboard**: Aggregate tasks across patients and visits.
- **AI Automation**: Use agents for routine task handling (e.g., scheduling).
These features would be prioritized based on user feedback and healthcare provider needs.
---
## Background
At [HEAVY.AI](https://www.heavy.ai/), I led engineering teams to deliver data-intensive products. GetTasked showcases strengths in:
- **AI-Driven Development**: Using tools like Grok and Cursor to innovate quickly.
- **Technical Leadership**: Building a functional MVP in a week.
- **Strategic Planning**: Proposing a roadmap tied to customer needs.
These experiences inform the approach to building healthcare productivity tools that focus on user experience and workflow optimization.
---
**Check It Out**:  
- [Live Prototype](https://www.gettasked.fyi/)
