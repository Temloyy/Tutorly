# CSV Import Rules

* CSV import must support column mapping.
* Invalid rows must be reported.
* Duplicate rows must be detected.
* Users must preview data before confirming import.

Additional rules specific to Tutorly:

* CSV import is used for tutor onboarding, bulk user upload, or data migration.
* Required fields must be validated (e.g., name, email, subject for tutors).
* Email addresses must be validated and normalized.
* Duplicate users must be detected and flagged.
* Invalid or missing required fields must prevent row import.
* Imported data must not overwrite existing records without confirmation.
* Users must be able to download a report of failed rows.
* Large imports must be processed asynchronously to prevent blocking.
* Import operations must be logged for auditability.
