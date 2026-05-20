# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Vite)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run format     # Prettier (formats in-place)
```

## Architecture

This is a single-page portfolio website for a workflow automation specialist. It uses **TanStack Start** (full-stack React framework) with **file-based routing** via TanStack Router.

**Stack:** React 19, TanStack Start + Router, Tailwind CSS 4, shadcn/ui (Radix UI + Tailwind), React Hook Form + Zod, TanStack Query.

**Path alias:** `@/*` → `src/*`

### Routing

Routes live in `src/routes/`. The route tree is auto-generated into `src/routeTree.gen.ts` — never edit this file manually. Adding a new file under `src/routes/` will auto-register it.

- `src/routes/__root.tsx` — root layout with `<head>` meta, 404 page
- `src/routes/index.tsx` — homepage; imports and renders all page sections in order

### Component layout

`src/components/` has two tiers:

1. **Page sections** — one component per scroll section (Navbar, Hero, LogoMarquee, Process, Services, Works, Certificates, Testimonials, ScheduleCall, Contact). These hold their own local state and data; they are composed in `routes/index.tsx`.
2. **`src/components/ui/`** — 46 shadcn/ui primitives. These are generated/managed by the shadcn CLI and should not be hand-edited unless absolutely necessary.

### Design system

Defined entirely in `src/styles.css` using Tailwind 4 CSS variables with OKLCH colors:

- **Dark mode (default):** deep navy background (`oklch(0.16 0.03 260)`), neon green accent (`oklch(0.85 0.22 150)`)
- **Light mode:** off-white background, desaturated green accent
- Custom animations: `marquee` (LogoMarquee) and `float` (Hero elements)
- Radius scale: sm → 4xl defined as CSS variables

### Forms

`ScheduleCall.tsx` and `Contact.tsx` use React Hook Form + Zod. Follow the existing pattern: define a `z.object` schema, pass it to `useForm` via `zodResolver`, and use `<FormField>` from `src/components/ui/form.tsx`.

### Adding shadcn components

```bash
npx shadcn@latest add <component-name>
```

This writes into `src/components/ui/` and may update `src/styles.css`.
