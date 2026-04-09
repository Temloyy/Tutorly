# Tutorly — System Architecture Specification

## 1. Purpose

This document defines the system architecture for Tutorly.

Tutorly is a full-stack web application that connects students with tutors globally for one-on-one learning sessions. The system includes a public marketing website, authentication flows, tutor discovery, intelligent matching, booking and scheduling, payments, session management, reviews, and analytics.

This architecture is designed for:

* Next.js
* Prisma
* PostgreSQL
* server-side business logic
* database-driven workflows

The architecture must prioritize:

* simplicity
* security
* maintainability
* production readiness
* clear server boundaries
* scalability for global usage

---

## 2. Core Architecture Principles

### Principle 1: One unified full-stack application

Tutorly should be built as a single Next.js application that contains:

* public marketing pages
* authentication pages
* onboarding flows
* authenticated dashboard pages
* API routes and handlers
* server-side business logic

Avoid unnecessary microservices in the initial version.

---

### Principle 2: Server-side control of sensitive operations

All sensitive logic must run server-side, including:

* authentication
* tutor matching logic
* booking validation
* payment processing
* session lifecycle management
* review validation
* analytics computation

No sensitive credentials or business logic should be exposed in the client.

---

### Principle 3: Database-driven execution

Redis is not part of this architecture.

All operational workflows must be driven by:

* PostgreSQL records
* Prisma models
* booking states
* session states
* payment status tracking
* scheduled database queries

The database acts as the single source of truth.

---

### Principle 4: Public and private product surfaces must be clearly separated

The product has two surfaces:

#### Public surface

Used for:

* marketing pages
* landing page
* feature education
* tutor browsing (limited)
* sign-up entry

#### Private surface

Used for:

* dashboards
* tutor discovery (full)
* bookings
* sessions
* payments
* reviews
* notifications
* settings

This separation must be enforced in routing and access control.

---

### Principle 5: Schema-first architecture

The application should be built from the database schema upward.

Priority order:

1. `database_schema.md`
2. `architecture.md`
3. `agents.md`

The schema defines all relationships and constraints.

---

## 3. High-Level System Overview

The system consists of the following layers:

### Layer A: Marketing layer

Responsible for:

* landing page
* feature sections
* testimonials
* conversion flows
* “Get Started” entry points

---

### Layer B: Authentication layer

Responsible for:

* sign up
* login
* role selection (student/tutor)
* session handling
* protected routes

---

### Layer C: Application layer

Responsible for:

* student dashboard
* tutor dashboard
* tutor discovery and search
* tutor profiles
* booking flow
* payment flow
* session interface
* reviews and ratings
* notifications
* settings

---

### Layer D: Server application layer

Responsible for:

* API route handling
* server actions
* matching logic
* booking validation
* payment processing
* session lifecycle control
* review validation
* analytics computation

---

### Layer E: Persistence layer

Responsible for:

* PostgreSQL data storage
* Prisma relations
* booking integrity
* session tracking
* payment tracking
* auditability

---

## 4. Technology Stack

### Frontend

* Next.js
* React
* CSS powered by `design-tokens.css`
* Server Components where possible
* Client Components only where needed

---

### Backend

* Next.js Route Handlers
* Next.js Server Actions
* server-only logic modules
* Prisma ORM

---

### Database

* PostgreSQL

---

### ORM

* Prisma

---

### Payments

* Secure payment provider integration (e.g., Stripe)

---

### Session Infrastructure

* Real-time or pseudo real-time session handling (video/chat integration optional)

---

### Authentication

* Secure server-side authentication compatible with Next.js

---

### Scheduling

* Timezone-aware scheduling logic
* UTC normalization across the system
