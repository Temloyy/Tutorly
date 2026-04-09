# Color System Rules

This document defines how color is used across the Tutorly product.

It does not define raw color values.

Raw values belong in:

* `design-tokens.css`

This file defines the **usage rules**, **semantic meaning**, and **application standards** for color across the product.

The color system is influenced by **Material Design 3**, with emphasis on:

* semantic color roles
* accessible contrast
* clear hierarchy
* surface-based layouts
* restrained use of accent colors

All color usage in the product must follow these rules.

---

# 1. Source of Truth

The single source of truth for colors is:

* `design-tokens.css`

All product colors must be referenced through CSS variables defined there.

Examples:

* `var(--color-primary)`
* `var(--color-on-primary)`
* `var(--color-surface)`
* `var(--color-on-surface)`
* `var(--color-outline)`
* `var(--color-error)`

Direct hex color usage is prohibited.

Do not hardcode values such as:

* `#0466C8`
* `#ffffff`
* `#000000`

Do not use raw rgb, hsl, or hex values in components when an approved token exists.

---

# 2. Color Philosophy

Tutorly is a product for:

* tutor discovery
* personalized learning
* session booking
* real-time learning interactions
* global education access

The color system must therefore communicate:

* trust
* clarity
* focus
* guidance
* calm confidence

The UI should feel:

* clean
* modern
* calm
* structured
* learner-focused

Avoid overly playful or loud color application.

Accent colors should be intentional and minimal.

---

# 3. Material Design 3 Influence

The color system follows a Material Design 3 style of thinking.

That means:

* colors are assigned by **role**, not decoration
* surfaces define structure
* contrast ensures readability
* hierarchy is visually clear
* interactive states are consistent

---

# 4. Semantic Color Roles

All colors used in the UI must map to semantic roles.

## Brand and emphasis

* `--color-primary`
* `--color-on-primary`
* `--color-primary-container`
* `--color-on-primary-container`

## Secondary support

* `--color-secondary`
* `--color-on-secondary`
* `--color-secondary-container`
* `--color-on-secondary-container`

## Accent or tertiary emphasis

* `--color-tertiary`
* `--color-on-tertiary`
* `--color-tertiary-container`
* `--color-on-tertiary-container`

## Surface system

* `--color-background`
* `--color-surface`
* `--color-surface-variant`
* `--color-surface-container`
* `--color-surface-container-high`
* `--color-on-background`
* `--color-on-surface`
* `--color-on-surface-variant`

## Borders and separation

* `--color-outline`
* `--color-outline-variant`

---

# 5. Primary Color Usage

The primary color represents Tutorly’s core brand and action signal.

Use primary color for:

* primary CTAs (e.g., "Get Started", "Book Session")
* active navigation states
* selected filters
* key links
* important highlights

Do not overuse primary color.

Primary color should guide attention and indicate action.

Avoid using primary color for:

* large background fills
* long-form text
* non-interactive elements

---

# 6. Secondary and Tertiary Color Usage

Secondary and tertiary colors support hierarchy and visual balance.

Use them for:

* supporting actions
* secondary buttons
* tags and chips
* tutor availability indicators
* subtle highlights

They must not compete with primary actions.

Use sparingly to avoid visual noise.

---

# 7. Surface and Background Usage

Tutorly is a content-heavy and card-based interface.

Surface colors are critical.

Use surface roles for:

* dashboards
* tutor cards
* session cards
* modals
* forms
* dropdowns
* filters

Recommended behavior:

* page background → `--color-background`
* cards → `--color-surface`
* elevated sections → `--color-surface-container`
* subtle grouping → `--color-surface-variant`

Avoid using brand colors as general backgrounds.

The interface should feel calm and readable, not promotional.

---

# 8. Text Color Usage

Text must always follow semantic color roles.

Use:

* `--color-on-background` for main text
* `--color-on-surface` for text in cards
* `--color-on-surface-variant` for secondary text
* `--color-on-primary` for text on primary buttons

Text must always be readable and accessible.

Do not use low-contrast text.

---

# 9. Border and Divider Usage

Borders define structure subtly.

Use:

* `--color-outline`
* `--color-outline-variant`

Apply borders to:

* cards
* input fields
* tables
* sections
* dropdowns

Borders should be light and non-dominant.

---

# 10. Status Color Usage

Status colors communicate system state and user feedback.

Tutorly relies on:

* booking states
* session states
* tutor availability
* payment status
* review status

Status color usage must be consistent across the product.

---

# 11. Color Usage by Product Area

## 11.1 Marketing pages

Marketing pages may use slightly more expressive color.

Allowed:

* primary color for CTAs
* primary/secondary containers for highlights
* limited accent use

Still maintain a clean and trustworthy look.

Avoid excessive gradients or flashy visuals.

---

## 11.2 Dashboard pages

Dashboard pages should be restrained.

Use mostly:

* background
* surface
* outline
* semantic colors

Primary color only for key actions.

---

## 11.3 Forms

Forms must be minimal and clear.

Use:

* surface tokens for inputs
* outline tokens for borders
* error tokens for validation

Focus states must use primary or approved outline tokens.

Avoid overuse of color.

---

## 11.4 Tables and Lists

Used in sessions, bookings, and tutor management.

Rules:

* background → surface
* separators → outline
* headers → surface container
* statuses → semantic colors

Avoid heavy row coloring.

---

## 11.5 Tutor Discovery

This is a high-conversion area.

Use color to highlight:

* rating
* availability
* pricing clarity
* CTA buttons

Cards must remain clean and scannable.

Avoid overwhelming users with too many colored elements.

---

## 11.6 Session Interface

Session screens must be calm and focused.

Use:

* neutral backgrounds
* minimal accents
* clear controls

Avoid distractions during live learning.

---

## 11.7 Analytics

Analytics should be readable and minimal.

Rules:

* charts use primary, secondary, tertiary, and semantic colors
* avoid random color palettes
* highlight only meaningful insights

---

# 12. Status Mapping Guidance

## Booking status

* Pending → neutral or info
* Confirmed → primary or success-container
* Completed → success
* Cancelled → warning or muted
* Failed → error

## Session status

* Scheduled → neutral
* Active → primary
* Completed → success
* Missed → warning
* Cancelled → muted or warning

## Tutor availability

* Available → success or tertiary
* Busy → warning
* Offline → neutral-muted

## Payment status

* Pending → info
* Successful → success
* Failed → error
* Refunded → warning-muted

These mappings must remain consistent across all UI elements.

---

# 13. Accessibility Rules

Color must support accessibility.

Requirements:

* sufficient contrast
* no reliance on color alone
* include icons or labels for status
* visible focus states

Color supports meaning, it does not replace it.

---

# 14. Prohibited Color Practices

The following are prohibited:

* direct hex usage
* arbitrary Tailwind color classes
* decorative-only color usage
* overuse of primary color
* overly saturated backgrounds
* inconsistent color meanings

---

# 15. Implementation Rules

All components must use tokens from `design-tokens.css`.

Examples:

* background-color: `var(--color-surface)`
* color: `var(--color-on-surface)`
* border-color: `var(--color-outline)`

Do not use Tailwind color utilities unless mapped to tokens.

Prohibited:

* `bg-blue-500`
* `text-red-500`
* `border-gray-300`

---

# 16. Final Rule

The Tutorly color system must feel:

* trustworthy
* calm
* structured
* modern
* focused on learning

Color should guide users through:

* discovering tutors
* evaluating profiles
* booking sessions
* attending sessions
* tracking progress

Every color decision must reinforce clarity, trust, and usability.
