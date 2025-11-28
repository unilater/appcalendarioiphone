# Design Guidelines: Almanacco Cattolico - Frate Indovino Edition

## Design Approach

**Hybrid**: Apple HIG iOS optimization + Italian folk art tradition inspired by Almanacco di Frate Indovino (est. 1946). Monastic simplicity meets warm, cheerful folk aesthetics.

**Core Principle**: Dense information delivered with Franciscan warmth - traditional missal meets friendly AI assistant.

## Color System

### Light Mode: Parchment
- **Primary**: Crimson Red (#B8312F) - buttons, liturgical accents, active states
- **Background**: Parchment (#F5F1E8), cream sections (#FAF7F0)
- **Text**: Deep brown (#3E2723), medium brown (#5D4037) for secondary
- **Accents**: Ochre (#D4A574), terracotta (#C46448), sage green (#8B9D7C)
- **Borders/Ornaments**: Umber (#6D4C41) at 30% opacity

### Dark Mode: Candlelit
- **Primary**: Warm crimson (#D84A48) - increased brightness for visibility
- **Background**: Deep umber (#2C1810), warm charcoal sections (#3D2817)
- **Text**: Warm cream (#F5E6D3), muted cream (#D4C4B0) for secondary
- **Accents**: Burnt orange (#E67E50), warm ochre (#B8935C), muted sage (#6B7A5E)
- **Borders/Ornaments**: Golden brown (#B8935C) at 40% opacity

### Liturgical Colors (subtle left border indicators, 6px width)
- Ordinary Time: Sage green (#7A9D6B)
- Advent/Lent: Royal purple (#6B4C9A)
- Feast Days: Rich crimson (#C2423F)
- Solemnities: Gold (#D4A03A)

## Typography

**Primary**: Crimson Text (Google Fonts) - all body content
- Headers: 28px/24px/20px (bold)
- Body: 17px (regular, line-height 1.8 for readability)
- Liturgical citations: 15px italic

**Display**: Bebas Neue (Google Fonts, condensed) - section headers, "Frate AI" branding
- Main title: 40px/36px (uppercase, letter-spacing: 0.05em)
- Section headers: 24px (uppercase)

**UI Elements**: Inter (Google Fonts) - navigation, labels
- Navigation: 16px medium
- Small labels: 13px

## Layout System

**Spacing**: Tailwind units of 3, 4, 6, 8, 12 (maintain existing)
- Dense sections: py-6, gap-3
- Breathing room: py-8 md:py-12 between major sections
- Cards: p-4 (tighter than before for density)

**Container**: max-w-5xl (wider for dense layout)
- Mobile: px-4
- Desktop: px-6

## Core Components

### Header
Fixed top bar with folk art border bottom (decorative pattern, 3px)
- Left: Hamburger menu icon (Heroicons)
- Center: "ALMANACCO CATTOLICO" (Bebas Neue, 24px) with small "Assistente Frate AI" badge below (12px, rounded pill, crimson bg)
- Right: Mode toggle (sun/candle icon), date display
- Height: 72px (accommodates badge)

### Liturgical Cards
Dense information blocks with folk ornamental corners (CSS decorative borders)
- Top: Liturgical day + liturgical color stripe (6px left border)
- Saint section: circular folk art icon (48px) + name + brief bio (condensed)
- Readings: Expandable accordions, scripture in indented block format
- Bottom: "Rifletti con Frate AI" button (opens AI meditation prompt)

### News Feed
Compact cards with folk border treatment
- Small square thumbnail (80px, rounded)
- Headline (18px semibold, 2 lines max)
- Source + time (12px)
- Divider: decorative folk dash pattern

### Consigli Pratici Grid
Dense 2-column mobile, 3-column desktop
- Category icon in folk art style (garden tools, vegetables, cooking pot)
- Seasonal banner ribbon (Inverno/Primavera with decorative ends)
- Advice text (15px, tight spacing)
- "Consiglio del Frate" badge for featured tips

### Calendario
Monthly grid with liturgical feast markers
- Day cells show number + saint initial
- Feast days: bold crimson border + folk star icon
- Tap expands daily details in modal with full folk decoration

### AI Assistant Indicator
Persistent bottom-right floating badge (desktop) or bottom bar (mobile)
- "Frate AI" with small Franciscan cord icon
- Pulsing subtle glow effect in crimson
- Tap opens chat interface with warm greeting

## Images & Decorative Elements

**Folk Art Illustrations**: Use throughout
- Saint portraits: Circular medallion style with decorative border (60-80px)
- Seasonal headers: Simple line art (gardening tools, vegetables, cooking implements)
- News thumbnails: Square/landscape mixed, warm color treatment
- Background patterns: Subtle missal-style repeating motifs (10% opacity) in section backgrounds

**Decorative Borders**: CSS-based folk patterns
- Corner ornaments on cards (fleur-de-lis style)
- Divider lines with center medallion breaks
- Header/footer decorative bands (3-4px with pattern)

**No Large Hero**: This remains a content-first utility app with functional navigation.

## Responsive Behavior

**Mobile**: Single column, stacked dense cards, collapsible sections, full-width touch targets (44px min)
**Tablet (md: 768px)**: 2-column advice grids, wider calendar, side-by-side readings
**Desktop (lg: 1024px)**: 3-column grids, persistent sidebar option, hover tooltips for saints/feasts

## Accessibility

- WCAG AAA contrast in both modes (test dark mode crimson against umber)
- 44px touch targets throughout
- Semantic HTML for liturgical structure
- Font scaling support (elder-friendly)
- Mode toggle remembers preference