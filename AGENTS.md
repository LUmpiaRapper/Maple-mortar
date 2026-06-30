<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:image-gen-rules -->
# Image Generation — Cost Safety & Limit Reporting

**User is a student. NEVER generate images if there's any risk of incurring charges.**

## Available tools (both have cost implications)

1. **opencode-antigravity-image** (plugin) — routes through user's Google account OAuth to Gemini API.
   - Google Gemini API has a **free tier** with per-minute + per-day rate limits.
   - If the user has NOT set up Google Cloud billing, requests will simply fail with 429/403 when free quota is hit — no charges.
   - If billing IS enabled on the Google Cloud project, exceeding free quota WILL incur costs.
   - **Always assume billing may be enabled.** Never proceed without warning.

2. **nano-banana-2** — REMOVED (was RunComfy paid API, credits exhausted).

## Mandatory rules

- **Before every image generation:** warn the user that it uses Google's Gemini API free tier and confirm they want to proceed.
- **On any 429 (rate limit) or 403 (quota exhausted):** immediately stop, report the exact error and what it means, and ask before retrying.
- **Never retry aggressively.** If rate limited, stop and tell the user. Don't spam retries.
- **Never set up or enable billing** on any service.
- **If image generation consistently fails due to limits,** report it clearly — don't silently fall back to another tool that might cost money.
<!-- END:image-gen-rules -->
