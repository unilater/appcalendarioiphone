# Almanacco Cattolico

## Overview

Almanacco Cattolico is a Catholic almanac web application that provides daily liturgical content, Catholic news, practical advice for home/garden/cooking/farming, and a liturgical calendar with personal spiritual diary. The application combines traditional Catholic aesthetics (inspired by "Almanacco di Frate Indovino") with modern web design principles, creating a reverent yet accessible digital experience.

The app is built as a full-stack TypeScript application with a React frontend and Express backend, designed to present religious content and practical wisdom in an elegant, user-friendly interface.

## Recent Changes (Phase 2 Completed - November 19, 2025)

**Calendario Liturgico + Diario Spirituale**:
- ✅ Backend route `/api/liturgy/range?start=YYYY-MM-DD&end=YYYY-MM-DD` fetches 14 days of liturgical data from external API
- ✅ Graceful degradation: backend filters failed API calls, returns only valid dates (handles partial failures)
- ✅ Calendar page (`/calendario`) displays current + next week with liturgical colors and feast days
- ✅ Week navigation (previous/next/today) with date-based grouping (not array indices)
- ✅ DiaryEditor component for personal spiritual notes with localStorage persistence
- ✅ Real-time UI updates: note indicators and button states sync immediately after save/delete (no dialog close needed)
- ✅ Date normalization: start-of-day/end-of-day boundaries prevent filtering out Monday or other days
- ✅ SSR-safe localStorage utilities with `typeof window !== 'undefined'` guards
- ✅ End-to-end playwright tests passed: navigation, diary CRUD, real-time updates verified

**Bug Fixes Applied**:
1. Backend: Promise.all with individual catch → filters null responses → 503 only if all fail
2. Frontend: Date-math grouping instead of `.slice(0,7)` → no misalignment when dates missing
3. DiaryEditor: useMemo with `diaryVersion` dependency → button variant/text update in real-time
4. Calendar: Normalized date boundaries (setHours) → Monday and all days correctly filtered

**External API Integration**:
- `calendariodellafede.it/api/liturgia.php?date=YYYY-MM-DD` for daily readings
- Backend caches requests, validates with Zod schemas, logs warnings for individual failures

## User Preferences

Preferred communication style: Simple, everyday language.
Target audience: Priests, nuns, bishops, journalists seeking reliable Catholic content.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **UI Component Library**: Radix UI primitives with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens

**Design System**:
- Hybrid approach combining Apple HIG principles with traditional Catholic liturgical aesthetics
- Custom typography system using Crimson Text (serif, for liturgical content) and Inter (sans-serif, for UI)
- Color-coded liturgical elements (red, purple, green, white, gold) reflecting Catholic traditions
- Dark/light theme support with localStorage persistence
- Responsive design with mobile-first approach

**Key UI Components**:
- `LiturgyCard`: Displays daily liturgy with readings, saint of the day, and liturgical color
- `NewsCard`: Catholic news with verification badges and reliability scoring
- `AdviceCard`: Practical tips for home, garden, cooking, and farming categorized by season
- `CalendarDay`: Interactive calendar cells with saint names and liturgical colors
- `AppSidebar`: Navigation sidebar with collapsible states

### Backend Architecture

**Framework**: Express.js on Node.js
- **Build Tool**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Hot module replacement (HMR) via Vite middleware
- **API Design**: RESTful endpoints under `/api` prefix (currently minimal backend implementation)

**Storage Strategy**:
- **Current**: In-memory storage (`MemStorage` class) for user data
- **Planned**: PostgreSQL integration via Drizzle ORM (infrastructure configured but not yet connected)
- **Schema**: User authentication schema defined in shared types

**Server Features**:
- Request logging with response time tracking
- JSON body parsing with raw body preservation (for webhook verification)
- Static file serving in production
- Development-only Replit integration plugins

### Database Design

**ORM**: Drizzle ORM with PostgreSQL dialect (configured but not actively used)
- Connection: Neon serverless PostgreSQL driver
- Migrations: Managed via `drizzle-kit` with migrations stored in `/migrations`
- Schema validation: Drizzle-Zod for runtime type checking

**Current Schema** (defined but not implemented):
- `users` table: id (UUID), username (unique), password

**Note**: The application currently uses in-memory storage. Database integration is configured but not connected to actual data flows.

### External Dependencies

**Third-Party UI Libraries**:
- Radix UI: Accessible component primitives (dialogs, dropdowns, accordions, tooltips, etc.)
- Lucide React: Icon library for UI elements
- Embla Carousel: Touch-friendly carousel component
- date-fns: Date manipulation and formatting
- cmdk: Command palette component

**Development Tools**:
- Replit-specific plugins: Cartographer, dev banner, runtime error overlay
- TypeScript compiler with strict mode
- PostCSS with Autoprefixer for CSS processing

**Fonts**:
- Google Fonts: Crimson Text (liturgical content), Inter (UI elements)
- Loaded via CDN in HTML head

**Potential External Services** (not yet implemented):
- Catholic liturgical calendar API for daily readings
- Vatican News or Catholic news aggregation service
- Weather/seasonal data for advice recommendations

### Authentication & Authorization

Currently minimal - user schema defined but no active authentication system implemented. The infrastructure suggests planned session-based authentication using `connect-pg-simple` for PostgreSQL session storage.

### Build & Deployment

**Development**:
- `npm run dev`: Runs Express server with Vite middleware, HMR enabled
- Frontend served at root, API routes at `/api/*`
- TypeScript type checking via `npm run check`

**Production**:
- `npm run build`: Vite builds frontend to `dist/public`, esbuild bundles backend to `dist`
- `npm start`: Runs production Express server serving static files
- Environment variable required: `DATABASE_URL` (though not actively used)

**Database Management**:
- `npm run db:push`: Pushes Drizzle schema changes to database (requires active DB connection)