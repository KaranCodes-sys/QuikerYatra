# PRODUCT REQUIREMENTS DOCUMENT

# Indian Mobility, Delivery & Local Commerce Platform

**Version:** 2.0
**Product Type:** Web Platform / PWA → Mobile Application
**Primary Market:** India
**Initial Focus:** Local city transportation + on-demand parcel delivery
**Design Direction:** Modern Indian / Premium / Saffron / SVG-first

---

# 1. Product Vision

Build a modern Indian local mobility and delivery platform that combines:

* Bike taxi
* Local transportation
* Individual parcel delivery
* Hotel/business deliveries
* Local merchant delivery
* Scheduled deliveries
* Local commerce
* Driver/rider earning opportunities

The platform should not feel like a copy of Rapido, Uber, or DoorDash.

It should establish its own identity around:

> **Moving People. Moving Things. Connecting the City.**

The product should feel like a **professional Indian technology company**, with a strong cultural visual identity and a carefully designed product experience.

---

# 2. Product Positioning

Instead of positioning the product as:

> "Another bike taxi app"

Position it as:

> **A local movement network for people, parcels and businesses.**

A customer can use the same platform to:

### Move themselves

Book a bike ride.

### Move something

Send a parcel across the city.

### Move business orders

Allow hotels, restaurants and local businesses to request deliveries.

### Move scheduled shipments

Schedule a pickup for later.

This creates a unified ecosystem rather than several disconnected features.

---

# 3. Core Product Pillars

The platform should be built around four pillars.

## 3.1 Ride

Affordable local transportation.

## 3.2 Send

Send parcels anywhere within the service area.

## 3.3 Business

Businesses can request and manage deliveries.

## 3.4 Earn

Riders can earn by completing rides and deliveries.

---

# 4. User Types

## 4.1 Passenger

Uses the platform to:

* Book rides
* Send parcels
* Track deliveries
* Pay
* Save locations
* Manage bookings

---

## 4.2 Individual Sender

A user who wants to send something to another person.

Examples:

* Send documents to college
* Send forgotten items to a friend
* Send keys to family
* Send clothes
* Send food
* Send small packages
* Send gifts
* Send items between home and workplace

---

## 4.3 Recipient

A person receiving a parcel.

The recipient does not necessarily need to have an account.

They can receive:

* SMS
* WhatsApp notification
* Tracking link
* Delivery PIN

---

# 4.4 Business / Hotel

Businesses can use the platform for recurring deliveries.

Examples:

### Hotels

* Guest item delivery
* Laundry
* Food delivery
* Forgotten-item delivery
* Inter-hotel transfers
* Guest-to-airport parcel transfer

### Restaurants

* Food delivery
* Catering delivery
* Bulk orders

### Retail stores

* Customer deliveries
* Returns
* Exchanges

### Pharmacies

* Local delivery

### Offices

* Documents
* Equipment
* Inter-office parcels

---

# 4.5 Rider

A rider can perform multiple types of jobs.

Instead of having separate fleets, the platform can create a unified earning system.

A rider may receive:

```text
Ride
Parcel
Business Delivery
Scheduled Delivery
```

depending on eligibility and availability.

---

# 4.6 Admin

Platform operators manage:

* Users
* Riders
* Businesses
* Orders
* Rides
* Deliveries
* Payments
* Pricing
* Service zones
* Complaints
* Promotions
* Analytics

---

# 5. Core Navigation

The customer application should have a distinctive primary navigation.

Instead of copying existing ride apps:

```text
Home
Move
Send
Activity
Profile
```

The Home screen should provide two dominant actions:

# GO SOMEWHERE

**Book a Ride**

and

# SEND SOMETHING

**Send a Parcel**

This creates immediate product differentiation.

---

# 6. Home Screen

The home screen should behave like a local mobility dashboard.

Example:

```text
Good morning, Karan

Where are you going?

[ Pickup ]

[ Destination ]

-------------------------

What do you need?

[ 🚲 Ride ]

[ 📦 Send Parcel ]

-------------------------

Quick Actions

Home
Work
College
Hotel
Saved Places

-------------------------

Recent Activity

Ride to College
Parcel → Dharwad
```

The interface should not simply copy a standard ride-hailing layout.

---

# 7. "MOVE" System

The MOVE section contains transportation.

## Ride categories

### Bike

Fast and affordable.

### Bike Plus

Higher-end bike category.

### Auto

Future.

### Cab

Future.

The system should allow new categories to be introduced without redesigning the product.

---

# 8. "SEND" System

This is one of the platform's major differentiators.

Users can send parcels without booking a ride for themselves.

Flow:

```text
Send Parcel

Pickup
↓
Recipient
↓
Package
↓
Delivery Speed
↓
Price
↓
Payment
↓
Rider Assigned
↓
Track
↓
Delivered
```

---

# 9. Parcel Types

The sender can select:

### Document

Letters, certificates, paperwork.

### Small Parcel

Small packages.

### Food

Prepared food or home food.

### Clothing

Clothes, shoes, etc.

### Electronics

Small electronic items.

### Fragile

Requires special handling.

### Other

Custom package.

---

# 10. Parcel Size

Provide simple size selection.

```text
Small
Fits in a backpack

Medium
Small box

Large
Larger package
```

Future:

Allow users to enter:

* Length
* Width
* Height
* Weight

---

# 11. Parcel Value

Allow optional declaration:

```text
Approximate item value

₹ ______
```

This can be used for:

* Insurance logic
* Delivery eligibility
* Risk assessment

Do not automatically guarantee compensation based solely on this field.

---

# 12. Package Restrictions

The system should clearly inform users about prohibited items.

Examples:

* Weapons
* Explosives
* Illegal substances
* Hazardous materials
* Certain restricted goods

The exact prohibited-item policy should be configurable by the platform.

---

# 13. Recipient System

The sender can enter:

```text
Recipient Name
Phone Number
Delivery Address
```

Optional:

```text
WhatsApp Number
Delivery Instructions
```

Recipient does not necessarily need an account.

They receive a tracking link.

Example:

> Your parcel is on the way.

---

# 14. Delivery PIN

Every delivery should generate a secure delivery PIN.

Example:

```text
DELIVERY PIN

4821
```

The rider enters the PIN or recipient confirms it before the order is marked delivered.

---

# 15. Proof of Delivery

Businesses should be able to select proof requirements.

Options:

* PIN
* Signature
* Photo
* Recipient confirmation

For sensitive deliveries, multiple verification methods can be required.

---

# 16. DoorDash-Inspired Business Delivery System

Businesses should have a dedicated dashboard.

The experience should be closer to a **delivery operations platform** than a normal customer booking screen.

Business dashboard:

```text
Today's Orders

Pending       8
In Transit    5
Delivered     42
Cancelled     2

-------------------------

ACTIVE DELIVERY

Order #48291

Hotel → Guest

Rider:
Rahul

ETA:
12 min

[ Track ]
```

---

# 17. Hotel Mode

Create a dedicated hotel workflow.

Hotels can create delivery requests for:

### Guest parcels

Guest left an item.

### Room service

Internal/future integration.

### Guest luggage

Hotel → airport.

### Documents

Hotel → corporate office.

### Laundry

Hotel → laundry provider.

### Partner deliveries

Hotel → another hotel.

---

# 18. Hotel Guest Delivery

A hotel staff member can create:

```text
Guest Name
Room Number
Pickup
Destination
Package Type
Recipient Phone
Delivery Instructions
```

The system generates:

```text
Delivery ID
Tracking link
Delivery PIN
```

This allows hotels to provide a premium delivery service without maintaining their own delivery fleet.

---

# 19. Business Order Management

Businesses should have:

* Order creation
* Bulk orders
* Order history
* Delivery tracking
* Rider tracking
* Delivery proof
* Invoices
* Payment history
* Staff accounts

---

# 20. Bulk Delivery

A business should be able to create multiple deliveries.

Example:

```text
Upload CSV

Name
Phone
Address
Package Type
Order ID
```

The platform creates multiple delivery jobs.

This can become a major B2B differentiator.

---

# 21. Business API

Future businesses should be able to integrate directly.

Example:

```text
POST /business/deliveries
GET /business/deliveries/:id
GET /business/deliveries
POST /business/deliveries/:id/cancel
```

This allows hotels, restaurants and e-commerce businesses to integrate delivery directly into their systems.

---

# 22. Business Staff Accounts

Allow:

```text
Owner
Manager
Dispatcher
Staff
Finance
```

Each role gets different permissions.

Example:

Staff:

* Create delivery
* Track delivery

Manager:

* View all orders
* Cancel delivery
* Manage staff

Finance:

* View invoices
* Payment history

---

# 23. Scheduled Delivery

Users should be able to schedule a parcel.

Example:

```text
Pickup:

Tomorrow
10:30 AM
```

This creates a scheduled job.

Use cases:

* Hotel airport transfers
* Office documents
* Birthday gifts
* Business shipments
* Morning food deliveries

---

# 24. Multi-Stop Delivery

A future feature:

```text
Pickup
↓
Stop 1
↓
Stop 2
↓
Stop 3
↓
Final Destination
```

Useful for:

* Businesses
* Catering
* Offices
* Retail
* Local commerce

---

# 25. Smart Delivery Bundling

A unique platform feature.

If multiple businesses send parcels in the same direction, the platform can eventually optimize rider routes.

Example:

```text
Restaurant A
       ↓
Restaurant B
       ↓
Office
       ↓
Customer
```

The system can suggest optimized delivery routes.

This should be introduced only after sufficient delivery volume exists.

---

# 26. Rider "Flexible Work" Mode

Instead of forcing riders into a single category:

Riders can select:

```text
I want to:

[ 🚲 Rides ]

[ 📦 Deliveries ]

[ Both ]
```

This gives riders greater flexibility.

---

# 27. Rider Job Queue

Riders receive jobs based on:

* Location
* Availability
* Vehicle
* Package size
* Rating
* Current trip
* Delivery requirements

Example:

```text
Nearby Jobs

Ride
1.2 km away
₹62

Parcel
0.8 km away
₹55

Business Delivery
2.1 km away
₹94
```

The rider can choose depending on platform rules.

---

# 28. Unique Feature: "Ride + Send"

A user can combine a ride and delivery.

Example:

> "I'm going to the office. Take this parcel with me and deliver it on the way."

The system can calculate whether the parcel can travel with the passenger.

This creates a unique mobility experience.

Example:

```text
Your trip

You → Office

Add parcel?

[ Yes, send on my route ]

Estimated additional fee: ₹25
```

This should be carefully implemented around package restrictions and safety.

---

# 29. Unique Feature: "Local Runner"

Create a category specifically for quick local tasks.

Users can request:

* Pick up document
* Collect keys
* Deliver forgotten item
* Pick up purchased item
* Drop off paperwork

Instead of forcing everything into a "parcel" mental model.

Example:

```text
Need something done locally?

[ Send a Parcel ]

[ Pick Something Up ]

[ Drop Something Off ]
```

---

# 30. Unique Feature: "City Pass"

Future subscription product.

Example:

```text
City Pass

₹199/month

Benefits:

Lower platform fees
Priority matching
Discounted parcel deliveries
Ride coupons
Business perks
```

This creates recurring revenue.

---

# 31. Unique Feature: "Local Network"

Users can save trusted locations.

Examples:

```text
Home
College
Office
Parents
Hotel
Shop
```

The system can make these destinations extremely fast to access.

---

# 32. Unique Feature: "Business Delivery Desk"

Businesses get a permanent delivery workspace.

Instead of creating a new delivery manually every time:

```text
Saved Customers

Rahul
Hotel Guest #104
Supplier A
Office B
```

Staff can create deliveries in seconds.

---

# 33. Unique Feature: Delivery Tracking Link

Recipients should not need the application.

A tracking link can show:

```text
Parcel #48291

Picked up ✓
On the way ✓
Arriving soon
Delivered

Rider:
Rahul

ETA:
8 minutes
```

This dramatically reduces friction.

---

# 34. Unique Feature: Recipient Experience

Instead of simply receiving:

> "Your parcel has been delivered."

The recipient gets a lightweight tracking experience.

They can:

* Track
* Call rider
* View ETA
* Confirm delivery
* Contact support

No account required.

---

# 35. Unique Feature: "Local Business Network"

Businesses can eventually discover nearby delivery services.

Examples:

* Hotels
* Restaurants
* Pharmacies
* Retailers
* Florists
* Bakeries
* Laundry businesses

This can evolve into a local commerce ecosystem.

---

# 36. Future Marketplace

Eventually businesses can list:

```text
Business
Products
Delivery
```

Customers can order locally.

The platform provides:

**Discovery + Ordering + Delivery**

This moves the product beyond mobility.

Do NOT build this in MVP.

---

# 37. Brand Differentiation

The platform should own a distinct vocabulary.

Instead of copying:

"Book a Ride"

The product can use:

### MOVE

Go somewhere.

### SEND

Send something.

### RUN

Get a local task completed.

### EARN

Make money.

This terminology should become part of the brand.

---

# 38. Visual Identity

The design should combine:

## Modern Indian technology

with

## Traditional Indian visual language.

Primary elements:

* Saffron orange
* Cream
* Deep brown
* Warm gold
* Subtle green

---

# 39. SVG-First Design System

Mandatory requirement:

> **Every custom visual design element must be SVG.**

This includes:

* Logo
* Icons
* Bike illustrations
* Parcel illustrations
* Rangoli
* Kolam
* Temple-inspired patterns
* Decorative borders
* Empty states
* Loading states
* Onboarding
* Festival decorations
* Map markers
* Business illustrations
* Rider illustrations

No raster artwork should be used for custom UI illustrations.

---

# 40. Indian Visual System

The design language should combine:

### North Indian

* Rangoli
* Mandala geometry
* Lotus
* Diya-inspired shapes
* Decorative arches

### South Indian

* Kolam
* Temple architecture geometry
* Gopuram-inspired silhouettes
* Traditional borders
* Bell motifs

The combination should be abstract and modern.

---

# 41. Cultural Design Ratio

Maintain:

```text
70% Modern Product UI
20% Indian Brand Identity
10% Decorative Culture
```

This prevents the platform from becoming visually overwhelming.

---

# 42. Anti-Vibe-Coding Design Requirement

This is a mandatory product quality requirement.

The application must NOT look like an AI-generated template or student project.

Avoid:

* Random gradients
* Excessive glassmorphism
* Huge rounded cards everywhere
* Generic SaaS dashboards
* Random animations
* Emoji used as primary icons
* Inconsistent spacing
* Different button styles
* Excessive shadows
* Random font combinations
* AI-generated stock illustrations
* Unnecessary sections
* Generic landing page copy

---

# 43. Professional Design System

Before building screens, establish:

### Design tokens

* Colors
* Typography
* Spacing
* Radius
* Shadows
* Borders
* Motion
* Icons

### Components

* Buttons
* Inputs
* Cards
* Modals
* Bottom sheets
* Navigation
* Maps
* Ride cards
* Delivery cards
* Status indicators

Every page must use the same system.

---

# 44. Layout System

Use a consistent spacing scale.

Example:

```text
4
8
12
16
24
32
48
64
80
```

Do not manually choose random spacing values for each section.

---

# 45. Border Radius

Use a restrained radius system.

Example:

```text
Small: 8px
Medium: 12px
Large: 16px
Modal: 20px
```

Not every element needs a 24–32px rounded corner.

---

# 46. Shadows

Use subtle shadows.

Avoid:

```text
Huge shadow
+
Gradient
+
Glow
+
Border
```

on every card.

Professional interfaces generally use hierarchy through:

* spacing
* typography
* contrast
* borders
* restrained shadows

---

# 47. Typography Hierarchy

Use a limited typography system.

Example:

```text
Display
Heading 1
Heading 2
Heading 3
Body
Small
Caption
```

Avoid using different fonts randomly.

---

# 48. Iconography

Use one coherent icon family.

Custom Indian illustrations can complement the icon system.

Do not mix:

* Material icons
* Font Awesome
* random SVG icons
* emojis

without a clear design system.

---

# 49. Animation

Animation should communicate state.

Use animation for:

* Rider matching
* Location tracking
* Delivery progress
* Loading
* Success
* Navigation transitions

Avoid animation simply because it looks impressive.

---

# 50. Professional UX Rules

Every screen should answer:

1. Where am I?
2. What can I do?
3. What is the primary action?
4. What happens next?
5. What happens if something fails?

The interface should never make users guess.

---

# 51. Customer App Structure

```text
HOME
 ├── Ride
 ├── Send
 ├── Run
 ├── Saved Places
 └── Recent Activity

MOVE
 ├── Bike
 ├── Auto
 └── Cab

SEND
 ├── Parcel
 ├── Pick Something Up
 ├── Schedule
 └── Track

ACTIVITY
 ├── Rides
 ├── Deliveries
 └── Payments

PROFILE
 ├── Personal Details
 ├── Payment
 ├── Saved Places
 ├── Pass
 ├── Support
 └── Safety
```

---

# 52. Rider App Structure

```text
HOME
 ├── Online/Offline
 ├── Current Job
 └── Nearby Jobs

TRIPS
 ├── Rides
 ├── Deliveries
 └── Completed

EARNINGS
 ├── Today
 ├── Week
 ├── Month
 └── Withdraw

PROFILE
 ├── Vehicle
 ├── Documents
 ├── Rating
 └── Support
```

---

# 53. Business Platform

Business dashboard:

```text
OVERVIEW
ORDERS
CREATE DELIVERY
CUSTOMERS
RIDER TRACKING
BULK DELIVERY
INVOICES
ANALYTICS
STAFF
SETTINGS
```

---

# 54. Admin Platform

```text
DASHBOARD
USERS
RIDERS
BUSINESSES
RIDES
DELIVERIES
PAYMENTS
PRICING
PROMOTIONS
SERVICE AREAS
SUPPORT
ANALYTICS
SETTINGS
```

---

# 55. Core Database

Main entities:

```text
User
Rider
Vehicle
Business
BusinessStaff
Ride
Delivery
Parcel
Recipient
Location
Route
Payment
Transaction
Wallet
Rating
Review
Coupon
Promotion
PricingRule
RiderDocument
SupportTicket
Notification
SavedLocation
Subscription
BusinessInvoice
DeliveryProof
```

---

# 56. Delivery State Machine

```text
CREATED
 ↓
SEARCHING_RIDER
 ↓
RIDER_ASSIGNED
 ↓
RIDER_ARRIVING
 ↓
PICKED_UP
 ↓
IN_TRANSIT
 ↓
ARRIVING
 ↓
DELIVERED
 ↓
CONFIRMED
```

Handle:

```text
CANCELLED
FAILED
RETURN_REQUESTED
RETURNED
```

as separate states.

---

# 57. Ride + Delivery Unified Architecture

Both rides and deliveries should use a shared job architecture.

Conceptually:

```text
JOB
│
├── RIDE
│
└── DELIVERY
```

This allows the platform to eventually support:

* Multi-job riders
* Route optimization
* Shared fleet
* Unified earnings
* Unified analytics

without rewriting the backend.

---

# 58. Recommended Technology

## Frontend

Next.js + React + TypeScript

## Styling

Tailwind CSS + custom design tokens

## Backend

Node.js + NestJS

## Database

PostgreSQL

## Cache / Real-time

Redis + WebSockets

## Maps

Google Maps or Mapbox

## Payments

Indian UPI-enabled payment provider

## Authentication

OTP + secure session/JWT architecture

## Storage

Object storage for:

* KYC documents
* Profile photos
* Delivery proof

---

# 59. Code Quality Requirements

The project must use:

* TypeScript strict mode
* ESLint
* Prettier
* Component architecture
* Feature-based folder structure
* Reusable hooks
* API service layer
* Schema validation
* Error boundaries
* Loading states
* Empty states
* Proper error handling

Avoid:

* Giant components
* Copy-pasted UI
* Hardcoded pricing
* Hardcoded locations
* Hardcoded user data
* Duplicate components
* Business logic inside UI components

---

# 60. Recommended Frontend Structure

```text
src/

app/

components/
    ui/
    maps/
    rides/
    deliveries/
    business/
    rider/

features/
    auth/
    rides/
    deliveries/
    payments/
    profile/
    business/
    rider/

lib/
    api/
    maps/
    payments/
    validation/

hooks/

types/

utils/

assets/
    svg/
```

---

# 61. API Architecture

Use versioned APIs.

```text
/api/v1/auth
/api/v1/users
/api/v1/rides
/api/v1/deliveries
/api/v1/riders
/api/v1/businesses
/api/v1/payments
/api/v1/support
```

---

# 62. Notifications

Passenger:

* Rider assigned
* Rider arriving
* Ride started
* Ride completed
* Parcel picked up
* Parcel in transit
* Parcel arriving
* Parcel delivered
* Payment
* Promotions

Rider:

* New job
* Cancellation
* Earnings
* Incentives
* Document expiry

Business:

* Delivery created
* Rider assigned
* Pickup complete
* Delivery complete
* Failed delivery

---

# 63. Analytics

Track separate funnels.

## Ride Funnel

```text
Opened
→ Location entered
→ Fare viewed
→ Ride booked
→ Rider assigned
→ Ride completed
```

## Delivery Funnel

```text
Send opened
→ Pickup entered
→ Recipient entered
→ Price viewed
→ Delivery booked
→ Rider assigned
→ Parcel picked up
→ Delivered
```

## Business Funnel

```text
Business registered
→ Verified
→ First delivery
→ Repeat delivery
→ Monthly active business
```

---

# 64. MVP

Do NOT attempt to build the entire ecosystem initially.

## MVP Customer

* OTP login
* Home
* Bike rides
* Fare estimate
* Booking
* Live tracking
* Ride PIN
* Payment
* Rating
* Parcel delivery
* Recipient tracking
* Delivery PIN
* Delivery proof
* Ride/delivery history

## MVP Rider

* Registration
* KYC
* Vehicle
* Online/offline
* Ride requests
* Delivery requests
* Accept/reject
* Navigation
* Start/end job
* Earnings

## MVP Business

* Business registration
* Create delivery
* Track delivery
* Delivery history
* Basic invoices

## MVP Admin

* Dashboard
* Users
* Riders
* Businesses
* Rides
* Deliveries
* KYC
* Pricing
* Payments
* Support

---

# 65. Post-MVP

Phase 2:

* Scheduled deliveries
* Bulk delivery
* Hotel dashboard
* Business staff
* Multi-stop
* City Pass
* Referral system
* Advanced analytics

Phase 3:

* Route optimization
* Delivery bundling
* Local business marketplace
* Business API
* Corporate accounts
* Subscriptions

Phase 4:

* Multiple cities
* Auto
* Cab
* Intercity
* Advanced logistics

---

# 66. Success Metrics

## Mobility

* Completed rides
* Ride completion rate
* Cancellation rate
* Average fare
* Repeat riders

## Delivery

* Deliveries/day
* Successful delivery rate
* Average delivery time
* Cost per delivery
* Repeat senders

## Business

* Active businesses
* Deliveries/business/month
* Business retention
* Average business order value

## Marketplace

* GMV
* Revenue
* Take rate
* Contribution margin

---

# 67. Brand Experience

Every major user interaction should reinforce the brand.

Examples:

### Booking

Subtle rangoli animation.

### Parcel pickup

SVG parcel opening animation.

### Delivery complete

Small traditional celebratory motif.

### Empty state

Indian geometric illustration.

### Loading

Kolam drawing animation.

### Error

Minimal Indian-inspired illustration.

These should remain subtle and professional.

---

# 68. Homepage Brand Message

The landing page should communicate:

> One platform for moving around your city — and moving what matters.

Primary actions:

**Book a Ride**

**Send a Parcel**

**Become a Rider**

**For Businesses**

---

# 69. Brand Personality

The platform should feel:

* Confident
* Indian
* Modern
* Reliable
* Friendly
* Fast
* Practical
* Premium

It should NOT feel:

* Corporate and cold
* Overly traditional
* Cartoonish
* Cheap
* AI-generated
* Like a Rapido clone

---

# 70. Final Product Identity

The product should ultimately be recognizable even without seeing the name.

Someone should see:

**Saffron + Cream interface

* Indian geometric SVG patterns
* Modern mobility UI
* Parcel ecosystem
* Clean typography**

and immediately associate it with this platform.

The goal is not:

> "Rapido but orange."

The goal is:

> **A distinct Indian mobility and local delivery network that happens to compete with Rapido in rides and DoorDash-style platforms in delivery.**

---

# 71. Final Design Principle

The product should follow this rule throughout development:

> **Traditional in identity. Modern in interaction. Professional in execution.**

Every screen should look intentional, every component should belong to the same design system, and every feature should have a clear reason to exist.

The website should feel like it was designed and engineered by a **real product, UX, engineering and branding team**, not assembled from AI-generated templates.
