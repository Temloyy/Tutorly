# Tutorly - Agent Coordination Document
## 1. Product Definition
Tutorly is a web application designed to connect students with tutors globally for personalized one-on-one learning sessions.

The system enables tutors to register their subjects (majors), define pricing, and manage availability, while students can discover, evaluate, and book tutors based on their learning needs.

The platform provides intelligent tutor matching, timezone-aware booking, session management, and trust-driven insights to improve learning outcomes.

Primary user groups include:
- students seeking personalized academic or skill-based learning

- tutors offering expertise across various subjects globally

- parents and professionals seeking guided learning support

Core user outcomes:
- discovering tutors based on subject and preferences

- receiving intelligent tutor recommendations

- comparing tutors using trust signals and performance metrics

- booking sessions across timezones

- trying tutors before committing (trial sessions)

- attending structured one-on-one sessions

- reviewing tutors after sessions

- tutors managing profiles, pricing, and availability

- tutors tracking earnings and performance

## 2. Compliance Principles

All platform interactions must ensure fairness, transparency, and trust across a global marketplace.

Key principles include:

User authenticity

All users must register with valid credentials

Tutor verification

Tutors may be verified via identity or qualification checks
Verified tutors receive a visible badge

Payment security

All payments must be securely processed before session access

Review integrity

Only completed sessions can be reviewed
Spam or abusive reviews must be moderated

Session accountability

Users must honor scheduled sessions
Repeated no-shows or cancellations may trigger restrictions

Data privacy

User data must be securely stored and protected

Abuse prevention

The system must support:

reporting users

blocking users

flagging suspicious behavior

## 3. Product Scope

### Authentication and Onboarding

The onboarding flow will consist of:
1. User authentication (Sign up / Login)
2. Role selection (Student or Tutor)
#### Student Onboarding (Smart Matching Flow)
3. Subject / major selection
4. Learning goal selection
5. Budget selection
6. Availability preference
7. Tutor recommendations
#### Tutor Onboarding
3. Basic profile setup
4. Subject / major selection
5. Teaching style tags
6. Pricing configuration (session, package, subscription)
7. Availability setup
8. Intro video upload (optional)
### Tutor Discovery and Matching
The system supports:
- intelligent tutor recommendations
- manual search and filtering
Filter options include:
- subject / major
- price
- rating
- availability
- teaching style

Key rules:

- must return at least 3 tutors
- prioritize relevance over popularity
- avoid repetitive recommendations

### Tutor Profile System
Each tutor profile includes:
- name and profile image
- subjects / majors
- bio
- pricing options
- availability
- teaching style tags
- intro video (optional)
- performance metrics:
- - response rate
- - session completion rate
- - repeat student rate
- reviews and ratings
- verification badge

### Booking and Scheduling
The system supports:
- timezone-aware scheduling
- session type selection:
- - trial
- - full session
- - package
- calendar-based booking
Key rules:
- prevent double booking
- enforce tutor availability
- store all times in UTC
- display times in user timezone
- enforce buffer time between sessions

### Payment System
The system supports:
- per-session payments
- package payments
- subscription payments
Key rules:
- payment must be completed before booking confirmation
- failed payments must not create bookings
- refunds must follow defined policies

### Session Management
The system supports:
- session start and end tracking
- session timer
- optional notes or shared content
Key rules:
- sessions start only after payment confirmation
- sessions auto-end after scheduled duration
- late joins do not extend session time

### Trial Sessions
The system supports:

- short introductory sessions
Key rules:
- limited number of trials per tutor per student
- trial pricing must be predefined
- prevent repeated abuse

### Reviews and Feedback

The system supports:
- star ratings
- written feedback
Key rules:
- only completed sessions can be reviewed
- reviews affect tutor ratings
- abusive reviews must be flagged

### Tutor Dashboard
Tutors can:
- manage profile
- update pricing
- manage availability
- view bookings
- track earnings
- monitor performance metrics

### Student Dashboard
Students can:
- view recommended tutors
- manage bookings
- track upcoming sessions
- view past sessions
- rebook tutors

### Notifications System
The system supports:
- booking confirmations
- session reminders
- post-session prompts
Key rules:
- reminders sent at predefined intervals (e.g., 24hr, 1hr)
- users can manage notification preferences

### Trust and Safety System
The system includes:
- tutor verification badges
- reporting system
- user blocking
- fraud detection

## 4. Agent Responsibilities
### Matching Agent
- generates tutor recommendations
- ranks tutors based on relevance

### Discovery Agent
- handles search and filtering
- returns tutor lists

### Booking Agent
- manages scheduling
- validates availability
- prevents conflicts

### Payment Agent
- processes payments
- validates transactions

### Session Agent
- manages session lifecycle
- tracks session data

### Review Agent
- collects and stores feedback
- updates ratings

### Notification Agent
- sends reminders and alerts

### Trust & Safety Agent
- verifies tutors
- monitors platform activity
- handles reports

### Pricing Agent
- calculates pricing across models

### Analytics Agent

- tracks platform metrics

## 5. System Flow
- User completes onboarding
- Matching agent generates recommendations
- User selects tutor
- Booking agent schedules session
- Payment agent confirms payment
- Session agent manages session
- Review agent collects feedback
- Analytics agent tracks activity

## 6. Data Model
### User

- id
- role
- name
- email
- timezone
- status
- created_at

### Tutor Profile
- user_id
- subjects / majors
- bio
- pricing models
- hourly_rate
- currency
- availability
- teaching style tags
- intro video
- verified (boolean)
- rating_average
- total_reviews

###Booking
- booking_id
- student_id
- tutor_id
- session_type
- scheduled_time (UTC)
- timezone
- duration
- price
- status
- created_at

### Review
- review_id
- booking_id
- rating
- feedback

### Payment
- payment_id
- user_id
- amount
- currency
- payment_type
- status
- payment_provider
- created_at

## 7. System Constraints
### Booking Constraints
- no double bookings
- enforce session buffers
- validate availability

### Payment Constraints
- payment required before session
- failed payments invalidate booking

### Trial Constraints

- limit trial usage per tutor
- prevent abuse

### Matching Constraints
- ensure minimum result set
- avoid duplicate recommendations

## 8. Edge Cases
The system must handle:
- payment failure
- tutor cancellation
- student no-show
- timezone mismatch
- unavailable tutors
- duplicate bookings