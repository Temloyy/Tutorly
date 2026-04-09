# General skills rules

This file defines baseline engineering and product standards applied across this repository.

---

## Code Organization

Readable and maintainable code is prioritized.

Large files are avoided. Features are organized into modules such as:

* Authentication
* Users (Students & Tutors)
* Tutor Profiles
* Discovery & Matching
* Booking & Scheduling
* Payments
* Sessions
* Reviews & Ratings
* Notifications
* Analytics
* Settings

Each module should be self-contained with clear responsibilities and minimal cross-dependencies.

---

## Naming Conventions

* Files are named in kebab-case
* Components are named in PascalCase
* Functions are named in camelCase
* Constants are named in UPPER_SNAKE_CASE
* Variables are named in camelCase

All names must be descriptive and reflect business intent.

---

## Data Validation

Client input is treated as untrustworthy. All input must be validated and sanitized before use.

Validation rules:

* All inputs are validated server-side before persistence
* Email formats must be validated
* Passwords must meet minimum security requirements
* Pricing values must be validated (no negative or invalid values)
* Booking times must be validated against tutor availability

Additional rules:

* Timezone data must be normalized and stored in UTC
* Duplicate bookings must be prevented
* Session conflicts must be blocked
* Review submissions must be tied to completed sessions only

---

## Compliance Enforcement

Platform operations must enforce trust, fairness, and proper usage.

Key rules:

* Only authenticated users can book sessions
* Payments must be completed before session confirmation
* Reviews can only be submitted after completed sessions
* Tutors must not be double-booked
* Trial sessions must be limited to prevent abuse

Abuse prevention:

* Repeated cancellations or no-shows may trigger restrictions
* Suspicious activity must be flagged for review

---

## User Interface Rules

UI styling must follow the design tokens defined in:

* design-tokens.tokens.json
* design-tokens.css

Rules:

* Colour usage must reference tokens only
* Typography must reference defined tokens
* Spacing, borders, radii, and layout use Tailwind CSS utility classes

Restrictions:

* Direct hex colour usage is prohibited
* Arbitrary font sizes are prohibited
* All typography must follow predefined scale
* UI must follow a flat design system (no gradients or glassmorphism)

Consistency across all screens is mandatory.

---

## Product Safety Rules

Critical actions must include safeguards.

Booking & session controls:

* Booking must require confirmation before payment
* Session cancellation must require confirmation
* Time-sensitive actions must show clear warnings

Session integrity:

* Prevent double booking
* Enforce session duration limits
* Handle no-show scenarios

Payment safety:

* Prevent duplicate charges
* Handle failed payments gracefully
* Ensure refunds follow defined rules

---

## Testing Expectations

Each feature must include verification of:

* Successful primary workflow
* Invalid input behavior
* Booking and scheduling conflicts
* Payment success and failure scenarios
* Session lifecycle (start, active, end)
* Review submission rules
* Edge case behavior (timezone mismatch, no availability, etc.)

Testing must ensure system reliability across all user flows.
