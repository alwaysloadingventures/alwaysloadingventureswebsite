# CLAUDE.md — AlwaysLoading Ventures

## Source of Truth
All business logic, sitemap, copy, and forms live in /docs.
Claude must treat /docs as authoritative and must NOT invent:
- new pages
- new copy
- new form questions
- new engagement models

## Stack
- Next.js App Router (app/)
- React 19
- TypeScript
- Tailwind CSS + shadcn/ui
- pnpm

## Pages
Implement pages exactly as defined in:
docs/01_sitemap.md

## Copy
Use copy verbatim from:
docs/03_copy_blocks.md

## Forms
Build forms exactly as defined in:
- docs/10_forms_advisory.md
- docs/11_forms_partnership.md

## API
Create API routes per:
docs/20_implementation_notes.md

## Build Order
1. Routing & page scaffolds
2. Apply router page
3. Advisory form
4. Partnership form
5. Navigation & layout
6. Styling polish last