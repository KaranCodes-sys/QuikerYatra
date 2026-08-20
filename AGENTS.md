# QuikerYatra Agent Guide

QuikerYatra is an Indian mobility, delivery, local task and rider earning platform. Keep the foundation professional, feature-oriented and extensible.

## Principles
- Do not build customer, rider, business or admin features until their phase.
- Keep rides and deliveries aligned through the shared Job model.
- Domain logic belongs in `src/types`, `src/utils` and feature folders, not UI components.
- Custom artwork must be SVG only; use `currentColor` when practical and never embed raster images.
- Use design tokens from `src/app/globals.css`; do not scatter brand hex values in components.
- Use strict TypeScript, ESLint, Prettier and meaningful tests for domain logic, validation and transitions.

## Commands
- `npm run dev`
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

See `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md` and `docs/ROADMAP.md` for details.
