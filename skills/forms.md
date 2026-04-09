# Tables

This defines how tables behave across the app.

The app will have many tables such as:

* bookings table
* sessions table
* tutor management table
* payments table
* reviews table
* analytics tables

---

## Define table behavior

### Core rules

* Tables must support pagination
* Columns must not overflow horizontally or vertically
* Status values must use badges
* Tables must include empty states
* Tables must support search or filtering when datasets exceed 50 rows
* Tables must support sorting and filtering

---

## Tutorly-specific table behavior

### Bookings table

* Columns: tutor, subject, date, time, status, price
* Status displayed as badge
* Sorting by date and status

### Sessions table

* Columns: session time, duration, status
* Filter by upcoming, completed, cancelled

### Tutor management table (for admins)

* Columns: name, rating, subjects, status
* Search by name or subject

### Payments table

* Columns: amount, status, date, method
* Filter by payment status

---

## Interaction rules

* Row click should open detail view
* Actions (edit, cancel, view) must be clearly visible
* Hover states must indicate interactivity

---

## Responsiveness

* Tables must adapt to smaller screens
* Collapse into stacked or card layout on mobile
* Maintain readability without horizontal scroll where possible

---

## Performance

* Use pagination or lazy loading for large datasets
* Avoid rendering excessive rows at once

---

## Accessibility

* Tables must be keyboard navigable
* Headers must be properly defined
* Screen readers must interpret table structure correctly
