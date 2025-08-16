# replit.md

## Overview

This is a modern full-stack web application built with React frontend and Express.js backend, designed as a business website for "Automation Architect" - a company that specializes in LLM applications, data pipelines, and system workflows. The application features a clean, professional design with service-specific landing pages and contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: CSS-in-JS approach with HSL color system and CSS custom properties
- **Routing**: React Router for client-side navigation
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module")
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for production bundling
- **Request Logging**: Custom middleware for API request logging

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL sessions with connect-pg-simple

### Development Strategy
- **Monorepo Structure**: Shared types and schemas between frontend and backend
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Path Aliases**: TypeScript path mapping for clean imports
- **Linting**: TypeScript strict mode with comprehensive type checking

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing page with animated interactions
- **Services**: Grid layout showcasing three main service offerings
- **About**: Company information with statistics and testimonials
- **Contact**: Interactive contact form with toast notifications
- **Footer**: Site links and company information

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Vite Integration**: Development server with SSR capabilities
- **Error Handling**: Global error middleware with proper status codes

### Shared Components
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Safety**: Shared TypeScript types between client and server

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests through storage interface
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with proper error handling
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe SQL toolkit
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **react-hook-form**: Form handling
- **zod**: Schema validation

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Static type checking

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with auto-restart on file changes
- **Database**: Development database with Drizzle migrations

### Production Build
- **Frontend**: Vite production build to `/dist/public`
- **Backend**: esbuild bundle to `/dist/index.js`
- **Static Assets**: Served by Express in production
- **Database**: PostgreSQL with connection pooling

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string
- **NODE_ENV**: Environment detection for development/production modes
- **Build Scripts**: Separate commands for development, build, and production

### Replit Integration
- **Development Mode**: Automatic Replit banner injection
- **Error Handling**: Runtime error modal for development
- **Hot Reload**: Cartographer plugin for enhanced development experience

## Changelog

```
Changelog:
- August 16, 2025. Converted to Static Site Generator (SSG) with hash-based routing
- July 03, 2025. Initial setup
```

## Static Site Generation (SSG) Configuration

The project has been converted to support Static Site Generation for deployment to any static hosting service.

### Key Changes Made:
- **Router**: Switched from BrowserRouter to HashRouter for client-side routing compatibility
- **Build Process**: Created custom static build script (`build-static.js`)
- **Navigation**: Updated all navigation links to use hash-based routing (`/#/route`)
- **HTML Generation**: Automated creation of individual HTML files for each route
- **SEO Optimization**: Enhanced meta tags, Open Graph, and Twitter Card tags

### Build Commands:
- `node build-static.js` - Generates static files for deployment
- `node preview-static.js` - Local preview server for testing static build

### Deployment Options:
- **Netlify**: Drag and drop `dist/public` folder
- **Vercel**: Deploy `dist/public` directory
- **GitHub Pages**: Push contents to gh-pages branch
- **Any CDN or static hosting service**

### Generated Static Files:
- `index.html` - Main application entry point
- Individual HTML files for each route (for SEO)
- `_redirects` file for Netlify routing support
- All assets and optimized bundles

## User Preferences

```
Preferred communication style: Simple, everyday language.
```