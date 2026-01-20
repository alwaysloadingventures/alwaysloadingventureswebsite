# AlwaysLoading Ventures — Design System (Raycast/Vercel Hybrid)

## Visual goals
- Premium, crisp, minimal
- Strong typography hierarchy
- Subtle surfaces (cards), quiet borders, soft shadows
- No heavy gradients, no animations

## Layout
- Container: max-w-5xl or max-w-6xl
- Page padding: px-6 (mobile), px-8 (desktop)
- Section spacing: py-14 to py-20, consistent vertical rhythm

## Typography
- H1: text-4xl sm:text-5xl font-semibold tracking-tight
- H2: text-2xl sm:text-3xl font-semibold tracking-tight
- Body: text-base sm:text-lg leading-relaxed text-muted-foreground for secondary text
- Eyebrow: uppercase text-xs tracking-widest text-muted-foreground

## Components
- Use shadcn/ui: Button, Card, Badge, Separator
- Buttons:
  - Primary: default
  - Secondary: outline
  - Size: lg for CTAs
- Cards:
  - Use Card + subtle border + soft shadow
  - Use consistent padding (p-6)
- CTA group:
  - Desktop: inline
  - Mobile: stacked full-width

## Homepage hero
- Add an eyebrow line (e.g. "Operator-Led")
- Optional small Badge next to eyebrow
- Optional subtle background: light neutral + border (no loud gradients)

## Navigation
- Clean header, slightly larger spacing
- Active link state subtle (text-foreground + underline or muted difference)