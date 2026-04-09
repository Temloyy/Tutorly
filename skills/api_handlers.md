# API handlers

* All API handlers must validate input.
* All API responses must use structured JSON.
* Errors must return appropriate HTTP status codes.
* Unauthorized requests must return 401.

Additional rules specific to Tutorly:

* Booking endpoints must validate tutor availability and prevent double booking.
* Payment endpoints must verify transaction status before confirming bookings.
* Session endpoints must enforce valid session states (scheduled, active, completed).
* Review endpoints must ensure only completed sessions can be reviewed.
* Search and matching endpoints must sanitize query parameters and enforce filtering constraints.
* All time-related inputs must be normalized to UTC before processing.
* Sensitive operations (payments, bookings, profile updates) must require authenticated users.
* Rate limiting should be applied to search, booking, and authentication endpoints.
* All responses must include consistent status and message fields.
