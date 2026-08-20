# QuikerYatra

QuikerYatra is a modern Indian mobility and delivery platform foundation for MOVE, SEND, RUN and EARN experiences. Day 1 establishes the technical architecture, domain model, design tokens, SVG system, documentation and quality gates without implementing product screens.

## Stack
- Next.js App Router, React and TypeScript strict mode
- Tailwind CSS v4 with CSS-variable design tokens
- ESLint, Prettier and Vitest
- Zod for environment validation

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Commands
```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Environment variables
See `.env.example` for future database, Redis, maps, payments and storage configuration. Do not commit real secrets.

## Architecture overview
The repository uses feature-oriented boundaries under `src/features`, reusable UI under `src/components`, shared domain types under `src/types`, and provider abstractions under `src/lib`. Rides and deliveries share a unified `Job` concept for future rider matching, earnings and analytics.
