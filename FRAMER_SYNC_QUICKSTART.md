# Framer Sync Quick Start Guide

**TL;DR:** Automatically sync all design tokens to Framer with one command.

---

## 5-Minute Quick Start

### 1. Preview Changes (Dry-Run)

```bash
cd lighthouse-hlth-ui
npm run sync:framer -- --dry-run --verbose
```

**What you'll see:**
- All 22 color styles to be synced (16 created, 6 updated)
- All 22 text styles to be synced (12 created, 10 updated)
- Detailed changes for each style

### 2. Review the Audit Report

Before syncing, understand what's changing:

```bash
cat docs/audits/framer-design-token-audit-2025-12-26.md
```

**Key findings:**
- 14 critical misalignments between Framer and design system
- Wrong colors: `/Green`, `/Orange`, `/Black`, `/Grey`, `/White off`
- Wrong fonts: InterDisplay/Satoshi → should be Inter
- 9 missing semantic colors

### 3. Sync to Framer

```bash
npm run sync:framer
```

**What happens:**
- Updates existing Framer color styles to correct values
- Creates 16 new color styles (semantic, GHG, surfaces, text, borders)
- Updates text styles: fixes fonts (Inter SemiBold/Medium), letter spacing, line heights
- Generates audit log in `logs/framer-sync/`

### 4. Verify in Framer

1. Open Framer project
2. Check color styles panel: Should see all new `/Brand/`, `/Semantic/`, `/GHG/`, etc. folders
3. Check text styles: All should now use Inter font
4. Preview pages for visual changes

---

## Common Use Cases

### Sync Only Colors (Test First)

```bash
npm run sync:framer -- --dry-run --colors-only
npm run sync:framer -- --colors-only
```

### Sync Only Text Styles (Test First)

```bash
npm run sync:framer -- --dry-run --text-only
npm run sync:framer -- --text-only
```

### Full Sync with Verbose Logging

```bash
npm run sync:framer -- --verbose
```

---

## What Gets Fixed

### Colors Fixed (6 updates)

| Old Framer Value | New Design System Value | Impact |
|------------------|------------------------|--------|
| `/Green`: rgb(5, 124, 139) | `/Brand/Primary`: rgb(6, 110, 118) | All primary buttons, links, brand elements |
| `/Orange`: rgb(255, 131, 59) | `/Semantic/Warning`: rgb(249, 115, 22) | Warning states, CTAs |
| `/Black`: rgb(13, 13, 13) | `/Text/Text Main`: rgb(15, 23, 42) | Body text (more warmth) |
| `/Grey`: rgb(120, 120, 120) | `/Text/Text Muted`: rgb(100, 116, 139) | Secondary text |
| `/White off`: rgb(250, 250, 250) | `/Surfaces/Canvas`: rgb(243, 245, 247) | Page backgrounds |
| `/White`: Stays same | `/Surfaces/Surface`: rgb(255, 255, 255) | Card backgrounds |

### New Colors Added (16 creates)

**Brand:**
- `/Brand/Sustainability` - #16A34A (sustainability green)
- `/Brand/Lime` - #A3E635 (accent highlights)

**Semantic:**
- `/Semantic/Critical` - #DC2626 (errors)
- `/Semantic/Success` - #16A34A (success states)
- `/Semantic/Error` - #DC2626 (error states)
- `/Semantic/Info` - #3B82F6 (informational)

**GHG Scope Colors:**
- `/GHG/Scope 1` - #D97706 (direct emissions)
- `/GHG/Scope 2` - #2563EB (energy emissions)
- `/GHG/Scope 3` - #0D9488 (supply chain)
- `/GHG/Waste` - #059669 (waste management)

**Plus:** Surface Sunken, Text Secondary, Text Disabled, Border styles

### Text Styles Fixed (10 updates)

**Font Changes:**
- All headings: InterDisplay Medium → **Inter SemiBold** (GF;Inter-600)
- All body text: Satoshi Medium → **Inter Medium** (GF;Inter-500)

**Letter Spacing:**
- Body text: -0.035em → **0em** (normal, better readability)

**Line Heights:**
- All adjusted to match design system specs

### New Text Styles Added (12 creates)

**App Scale:**
- Page titles, panel headers, card titles
- App-specific body sizes (15px, 14px, 13px, 12px)
- Metric styles (monospace for numbers)

---

## Before You Sync - Checklist

- [ ] Backup Framer project (note current version number)
- [ ] Run dry-run first: `npm run sync:framer -- --dry-run --verbose`
- [ ] Review audit report: `docs/audits/framer-design-token-audit-2025-12-26.md`
- [ ] Notify team (designers, marketers)
- [ ] Schedule during low-traffic period

---

## After Sync - Verification

### Visual QA Checklist

- [ ] All pages render correctly in Framer preview
- [ ] Primary color looks correct on buttons/links
- [ ] Text is readable (Inter font loaded correctly)
- [ ] Mobile responsive layouts still work
- [ ] No broken components

### Accessibility Check

- [ ] Color contrast passes WCAG AA (use browser DevTools)
- [ ] Text is readable at all sizes
- [ ] Interactive elements are clearly visible

### Cross-Browser Test

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] iOS Safari
- [ ] Android Chrome

---

## Rollback Instructions

### Option 1: Revert via Framer Version History (Fastest)

1. Open Framer project
2. Go to File → Version History
3. Restore to version before sync

### Option 2: Re-run Sync with Fixes

1. Fix issue in `tailwind.config.js` or sync script
2. Regenerate tokens: `npm run generate:tokens`
3. Test: `npm run sync:framer -- --dry-run`
4. Re-sync: `npm run sync:framer`

---

## Troubleshooting

### "Tokens file not found"

```bash
npm run generate:tokens
```

### "Framer MCP not connected"

Check `.claude/mcp.json` configuration and MCP server status.

### Colors look different in preview

1. Check Framer color style values (should be rgb format)
2. Verify component doesn't have hardcoded colors
3. Clear Framer cache and refresh

### Text looks wrong

1. Verify Inter font is loaded in Framer
2. Check font selector: should be `GF;Inter-600` or `GF;Inter-500`
3. Check component uses inlineTextStyle (not hardcoded font)

---

## Full Documentation

For complete documentation, see:

- **Comprehensive Guide:** `/docs/FRAMER_SYNC.md`
- **Script Documentation:** `/scripts/README.md`
- **Design System:** `/DESIGN_SYSTEM.md`
- **Audit Report:** `/docs/audits/framer-design-token-audit-2025-12-26.md`

---

## Support

**Need help?**
- Engineering: Open issue in `lighthouse-hlth-ui` repo
- Design: Contact healthtech-ui-designer agent
- Emergency: Revert via Framer version history

---

**Version:** 1.0.0
**Last Updated:** December 26, 2025

---

**Proprietary and Confidential**
© 2025 Indigo Labs LLC. All rights reserved.
