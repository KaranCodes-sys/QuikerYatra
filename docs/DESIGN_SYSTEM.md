# Design System

## Direction
Modern Indian, premium, minimal and functional. Maintain a 70% modern UI, 20% Indian identity and 10% decorative cultural ratio.

## Colors
Base brand colors are mapped to semantic CSS variables in `src/app/globals.css`: primary, primary hover, primary active, background, surface, elevated surface, text, border, success, warning and error.

## Typography
Manrope is the primary typeface. Typography roles are Display, Heading 1, Heading 2, Heading 3, Body, Small and Caption. Decorative Indian fonts are not part of the product UI foundation.

## Spacing, radius and shadows
Spacing follows a restrained 4/8/12/16/24/32/48/64 scale. Radius tokens include small, medium, large and modal. Shadows are subtle and used for hierarchy, not spectacle.

## SVG system
All custom visual assets live under `src/assets/svg` and must be reusable, scalable, accessible where meaningful, recolorable with `currentColor` where practical and raster-free. Categories are brand, icons, transport, delivery, rangoli, kolam, temple, status and decorative.

## Components
Reusable primitives live in `src/components/ui`. Components should expose small APIs, use tokens, avoid random variants and keep business logic out of rendering.

## Responsive rules
Mobile-first breakpoints cover 320, 375, 390, 430, 768, 1024 and 1440px. Navigation should evolve from bottom/mobile behavior to desktop structure without duplicating product logic.
