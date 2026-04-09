# System notifications

Use notifications for:

* successful actions
* validation errors
* booking confirmations
* payment status updates
* session reminders
* API failures

---

## Notification types in Tutorly

* Booking confirmed
* Booking cancelled
* Payment successful
* Payment failed
* Session starting soon
* Session completed
* Review request
* Profile updated successfully
* Error or failure alerts

---

## Notification rules

Notifications should be:

* non-blocking
* dismissible
* persistent for 5–10 seconds
* visually distinct by type (success, error, warning, info)

---

## Behavior rules

* Success notifications confirm completed actions
* Error notifications must explain what went wrong
* Warning notifications should indicate potential issues (e.g., missed session)
* Info notifications provide helpful updates (e.g., reminders)

---

## UX guidelines

* Keep messages short and clear
* Avoid technical language
* Do not stack too many notifications at once
* Use icons alongside text for clarity

---

## Example

**Success:**
Booking confirmed

**Error:**
Payment failed. Try again

**Info:**
Your session starts in 10 minutes
