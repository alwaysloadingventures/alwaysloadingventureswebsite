# Implementation Notes

## Form Endpoints
POST /api/forms/advisory
POST /api/forms/partnership

## Storage (recommended)
- Save to database (Supabase/Postgres) OR Airtable
- Each record includes:
  - id
  - submission_type ("advisory" | "partnership")
  - created_at
  - answers JSON
  - score (optional)
  - status ("new" | "reviewed" | "contacted" | "rejected")

## Admin Routing
- Send notification email on submission
- Optionally push to Slack webhook

## UX rules
- /apply is a router page with two buttons
- /apply/advisory shorter, 1-page form
- /apply/partnership longer, multi-section with progress indicator
- Conditional fields:
  - subscription → churn question
  - raised capital → type question