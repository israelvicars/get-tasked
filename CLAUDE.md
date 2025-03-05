# Build Commands
- `npm run dev` - Start development server with turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

# Code Style Guidelines
- **Imports**: 'use client' at top, React first, Next.js second, third-party libs next, local files last
- **Formatting**: 2-space indent, single quotes, trailing commas in multiline objects/arrays
- **Types**: Use TypeScript, explicit param/return types, interfaces for complex types
- **Naming**: PascalCase for components, camelCase for variables/functions/hooks
- **Components**: Functional components with arrow functions, props destructuring
- **JSX**: Props on separate lines when multiple, parentheses for multiline JSX
- **Error Handling**: Try/catch blocks, optional chaining, default values with || operator
- **State Management**: React hooks (useState, useEffect) with explicit typing
- **Styling**: Use Tailwind CSS classes, prefer composition over inheritance

# Project Structure
- `/app` - Next.js app directory (layout.jsx, page.jsx)
- `/components` - Reusable React components (common, layout, notes)
- `/utils` - Helper functions and hooks
- `/styles` - Global CSS and Tailwind configuration
- `/public` - Static assets