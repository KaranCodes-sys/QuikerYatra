# Architecture

## PRD analysis
Core domains are Authentication, Users, Rides, Deliveries, Riders, Businesses, Payments, Notifications, Support, Pricing and Analytics. Frontend owns typed UI composition, client validation, design system usage and API consumption. Backend will own OTP/session security, authoritative state transitions, pricing, matching, payments, document storage and analytics. Shared domain logic includes identifiers, job abstractions, statuses, route and payment contracts. Database needs normalized records for users, riders, businesses, jobs, rides, deliveries, parcels, payments, proofs and support. Realtime infrastructure will later support rider location, assignment, ETA and tracking. External services include maps, UPI-enabled payments, object storage, SMS/WhatsApp and analytics.

## Folder structure
- `src/app`: Next.js App Router shell and global tokens.
- `src/components`: reusable UI, map and future domain components.
- `src/features`: feature boundaries for auth, rides, deliveries, payments, profile, rider and business.
- `src/lib`: provider-facing API, map, payment, realtime, validation and mock boundaries.
- `src/types`: shared domain contracts.
- `src/utils`: pure utilities and transition helpers.
- `src/assets/svg`: SVG-only visual asset system.

## API strategy
Versioned API paths are centralized in `src/lib/api/client.ts`. UI components must depend on feature services or typed clients, not hardcoded endpoints.

## State strategy
Server data will be backend-authoritative. Client state should remain local and ephemeral until a server-state library is justified. Ride and delivery transition definitions are pure helpers for validation and tests, not fake frontend state machines.

## Future backend and realtime strategy
A Node/NestJS backend with PostgreSQL, Redis and WebSockets is expected. Redis/WebSockets should coordinate matching, rider location, ETA updates and tracking links while the database remains the source of truth.
