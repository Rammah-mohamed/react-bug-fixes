# نور للحلول التقنية - Landing Page

A modern, professional Arabic landing page for a software/web agency built with React + Vite + Tailwind CSS.

## Features

- ✅ Arabic (RTL) support with `dir="rtl"`
- ✅ Responsive design (mobile-first approach)
- ✅ Sticky navbar with smooth navigation
- ✅ Hero section with statistics
- ✅ Services showcase (3 cards)
- ✅ Contact form with async submission
- ✅ Professional footer with contact info

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx       # Sticky navigation header
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Services.tsx     # Service cards showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with links
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── globals.css          # Tailwind + design tokens
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The app runs on `http://localhost:5173` by default.

## Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **lucide-react** - Icons

## Notes on Intentional Issues

This project includes three intentional bugs for demonstration purposes:

### Bug 1: RTL Spacing (CSS)

Uses physical properties (`margin-left`, `padding-left`) instead of logical properties. This causes incorrect spacing in RTL mode.

### Bug 2: Form Submission (React)

Contact form lacks proper async handling - the submit button doesn't disable during submission, allowing rapid double-clicks to trigger multiple submissions.

### Bug 3: Mobile Overflow (Responsive)

Services section uses fixed 3-column grid with minimum card width (~400px), causing horizontal overflow on narrow viewports (375px).

These bugs are present intentionally and have not been fixed.
