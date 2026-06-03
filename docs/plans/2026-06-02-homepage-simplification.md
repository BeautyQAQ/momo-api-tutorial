# Homepage Simplification Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Simplify the home page so it works as a focused entry page for configuring momoapi clients.

**Architecture:** The site is a static single-page documentation app. Page content is defined in `app.js` as template strings and styled by existing classes in `styles.css`; the change should reuse current components instead of adding new behavior.

**Tech Stack:** HTML, CSS, vanilla JavaScript.

---

### Task 1: Replace Long Home Content With Focused Entrypoints

**Files:**
- Modify: `app.js:84-194`

**Step 1: Update the home template**

Replace the post-hero home content with:

- A four-card entry grid for Quick Start, Codex CLI, Claude Code, and Trae / IDE clients.
- The existing `renderEntryPanel()` block.
- A short `doc` section with three compact reminders and links to deeper pages.

**Step 2: Keep existing routes intact**

Do not modify `/announcements`, `/quick-start`, `/codex`, `/claude-code`, `/trae-ide-clients`, or `/troubleshooting`.

**Step 3: Verify text density manually**

Open the resulting home template and confirm the long billing table, 10-item announcement list, reading-order list, and duplicate contact callout no longer appear on `/`.

**Step 4: Run a syntax check**

Run:

```bash
node --check app.js
```

Expected: no syntax errors.
