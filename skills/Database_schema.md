# Tutorly — Database Schema Specification

## 1. Purpose

This document defines the database structure for Tutorly.

Tutorly is a full-stack web application for connecting students with tutors globally for one-on-one learning sessions.

The database must support:

* user authentication
* role-based access (student, tutor)
* tutor profile creation and management
* tutor discovery and filtering
* availability scheduling
* booking and session management
* payment processing and tracking
* reviews and ratings
* notifications
* analytics reporting
* activity logs
* timezone-aware scheduling

This schema is designed for:

* PostgreSQL
* Prisma ORM
* Next.js full-stack architecture

The schema must prioritize:

* relational clarity
* strong constraints
* booking integrity
* idempotency
* auditability
* analytics accuracy
* production readiness

---

## 2. General Database Principles

### Primary database

* PostgreSQL

### ORM

* Prisma

### Required principles

* all important relations must be explicit
* all core tables must use stable primary keys
* all critical workflows must persist state transitions
* booking and payments must be auditable
* duplicate bookings must be prevented
* timestamps must exist on all major entities
* timezone normalization must be enforced

### ID strategy

Use UUIDs for all major entity identifiers.

---

## 3. Core Entities Overview

* users
* sessions
* tutor_profiles
* subjects
* tutor_subjects
* availability_slots
* bookings
* payments
* sessions_live
* reviews
* notifications
* saved_tutors
* activity_logs
* analytics_snapshots

---

## 4. Enum Definitions

### UserRole

* STUDENT
* TUTOR
* ADMIN

### BookingStatus

* PENDING
* CONFIRMED
* CANCELLED
* COMPLETED
* FAILED

### SessionStatus

* SCHEDULED
* ACTIVE
* COMPLETED
* MISSED
* CANCELLED

### PaymentStatus

* PENDING
* SUCCESS
* FAILED
* REFUNDED

### NotificationType

* BOOKING_CONFIRMED
* BOOKING_CANCELLED
* SESSION_REMINDER
* PAYMENT_SUCCESS
* PAYMENT_FAILED
* REVIEW_REQUEST

### EventType

* USER_REGISTERED
* PROFILE_UPDATED
* BOOKING_CREATED
* BOOKING_CONFIRMED
* BOOKING_CANCELLED
* SESSION_STARTED
* SESSION_COMPLETED
* PAYMENT_PROCESSED
* REVIEW_SUBMITTED

---

## 5. users

Represents all platform users.

### Fields

* id
* name
* email
* password_hash
* role
* is_active
* timezone
* created_at
* updated_at

### Constraints

* email must be unique

---

## 6. sessions

Represents authentication sessions.

### Fields

* id
* user_id
* token_hash
* expires_at
* created_at
* updated_at

### Constraints

* token_hash must be unique

---

## 7. tutor_profiles

Extends user for tutor-specific data.

### Fields

* id
* user_id
* bio
* hourly_rate
* rating_avg
* total_reviews
* is_verified
* response_rate
* completion_rate
* created_at
* updated_at

### Relations

* belongs to users

### Constraints

* user_id must be unique

---

## 8. subjects

Represents subjects available on platform.

### Fields

* id
* name
* created_at

### Constraints

* name must be unique

---

## 9. tutor_subjects

Join table between tutors and subjects.

### Fields

* id
* tutor_profile_id
* subject_id

### Constraints

* unique(tutor_profile_id, subject_id)

---

## 10. availability_slots

Defines tutor availability.

### Fields

* id
* tutor_profile_id
* day_of_week
* start_time
* end_time
* timezone
* created_at
* updated_at

### Notes

Used to generate bookable slots.

---

## 11. bookings

Represents session bookings.

### Fields

* id
* student_id
* tutor_profile_id
* subject_id
* scheduled_at
* duration_minutes
* status
* price
* created_at
* updated_at

### Constraints

* prevent overlapping bookings per tutor

---

## 12. payments

Tracks payment transactions.

### Fields

* id
* booking_id
* amount
* currency
* status
* payment_provider_id
* created_at
* updated_at

### Constraints

* one payment per booking (initial)

---

## 13. sessions_live

Represents actual session lifecycle.

### Fields

* id
* booking_id
* status
* started_at
* ended_at
* created_at
* updated_at

---

## 14. reviews

Student feedback after sessions.

### Fields

* id
* booking_id
* student_id
* tutor_profile_id
* rating
* comment
* created_at

### Constraints

* one review per booking

---

## 15. saved_tutors

Users can bookmark tutors.

### Fields

* id
* student_id
* tutor_profile_id
* created_at

### Constraints

* unique(student_id, tutor_profile_id)

---

## 16. notifications

User notifications.

### Fields

* id
* user_id
* type
* message
* is_read
* created_at

---

## 17. activity_logs

Tracks system activity.

### Fields

* id
* user_id
* event_type
* metadata_json
* created_at

---

## 18. analytics_snapshots

Precomputed analytics.

### Fields

* id
* date
* total_bookings
* total_revenue
* total_sessions_completed
* created_at

---

## 19. Required Relationship Map

### users has many

* sessions
* bookings (as student)
* tutor_profiles (1)
* notifications
* activity_logs

### tutor_profiles has many

* tutor_subjects
* availability_slots
* bookings
* reviews

### bookings has one

* payment
* session_live
* review

---

## 20. Idempotency Rules

### Rule 1

Prevent duplicate bookings:

* unique(tutor_profile_id, scheduled_at)

### Rule 2

Prevent duplicate payments:

* unique(payment_provider_id)

---

## 21. Timezone Rules

* All times stored in UTC
* User timezone stored separately
* Conversion handled at UI level

---

## 22. Soft Delete vs Hard Delete

### Soft delete

* users
* tutor_profiles
* bookings

Field:

* deleted_at

---

## 23. Indexing Strategy

### users

* index(email)

### bookings

* index(student_id)
* index(tutor_profile_id)
* index(status)

### tutor_profiles

* index(rating_avg)

---

## 24. Final Build Rules

The system must ensure:

* one student can book many tutors
* one tutor can have many students
* bookings do not overlap
* payments map correctly to bookings
* reviews only exist after sessions
* all flows are auditable

---

## 25. Placement Recommendation

Place this file in root:

`/database_schema.md`

---

## 26. Source of Truth Priority

1. database_schema.md
2. architecture.md
3. agents.md
