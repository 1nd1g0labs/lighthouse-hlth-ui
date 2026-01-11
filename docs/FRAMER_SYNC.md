# Framer Design Token Sync

**Version:** 1.0.0
**Last Updated:** December 26, 2025
**Author:** Lighthouse HLTH Engineering Team

---

## Overview

The Framer Design Token Sync automation (`sync-framer-tokens.ts`) automatically synchronizes all design tokens from the UI repository to the live Framer project using the Framer MCP (Model Context Protocol) API.

This tool ensures that the lighthousehlth.com marketing website (built in Framer) stays perfectly aligned with the design system source of truth defined in this repository.

---

## Features

- **Automatic Token Sync:** Updates all color and text styles in Framer with a single command
- **Create & Update:** Automatically creates missing styles and updates existing ones
- **Migration Support:** Handles renaming and restructuring of style paths
- **Dry-Run Mode:** Preview all changes before applying them
- **Selective Sync:** Sync only colors or only text styles
- **Comprehensive Logging:** Detailed output with color-coded status messages
- **Audit Trail:** Complete JSON logs of all changes made
- **Error Handling:** Graceful failure handling with detailed error messages

---

## Quick Start

### 1. Prerequisites

Ensure you have:
- Node.js 18+ installed
- Framer MCP server connected (configured in `.claude/mcp.json`)
- Generated tokens file (run `npm run generate:tokens` if missing)

### 2. Run a Dry-Run Test

Preview all changes without modifying Framer:

```bash
npm run sync:framer -- --dry-run
```

### 3. Sync to Production

Once you've verified the changes, run the full sync:

```bash
npm run sync:framer
```

---

## Command Line Options

| Flag | Description | Example |
|------|-------------|---------|
| `--dry-run` | Preview changes without applying them | `npm run sync:framer -- --dry-run` |
| `--colors-only` | Sync only color styles, skip text styles | `npm run sync:framer -- --colors-only` |
| `--text-only` | Sync only text styles, skip color styles | `npm run sync:framer -- --text-only` |
| `--verbose` | Show detailed output for each change | `npm run sync:framer -- --verbose` |

**Combine flags:**
```bash
npm run sync:framer -- --dry-run --verbose
```

---

## What Gets Synced

### Color Styles

**Total:** 22 color styles across 6 categories

#### Brand Colors (4)
- `/Brand/Primary` (#066E76) - Primary Deep Teal
- `/Brand/Primary Soft` (#0E9BA7) - Primary Soft Teal (new)
- `/Brand/Sustainability` (#16A34A) - Sustainability Green
- `/Brand/Lime` (#A3E635) - Lighthouse Lime

#### Semantic Colors (5)
- `/Semantic/Warning` (#F97316) - Warning Amber
- `/Semantic/Critical` (#DC2626) - Critical Red
- `/Semantic/Success` (#16A34A) - Success Green
- `/Semantic/Error` (#DC2626) - Error Red
- `/Semantic/Info` (#3B82F6) - Info Blue

#### GHG Scope Colors (4)
- `/GHG/Scope 1` (#D97706) - Direct Emissions
- `/GHG/Scope 2` (#2563EB) - Energy Emissions
- `/GHG/Scope 3` (#0D9488) - Supply Chain
- `/GHG/Waste` (#059669) - Waste Management

#### Surfaces (3)
- `/Surfaces/Canvas` (#F3F5F7) - Page background
- `/Surfaces/Surface` (#FFFFFF) - Card/panel background
- `/Surfaces/Surface Sunken` (#EDF2F7) - Inset areas

#### Text Colors (4)
- `/Text/Text Main` (#0F172A) - Primary body text
- `/Text/Text Secondary` (#475569) - Secondary content
- `/Text/Text Muted` (#64748B) - Tertiary labels
- `/Text/Text Disabled` (#94A3B8) - Disabled states

#### Border Colors (3)
- `/Borders/Border Subtle` (#E2E8F0) - Subtle dividers
- `/Borders/Border` (#E2E8F0) - Default borders
- `/Borders/Border Strong` (#94A3B8) - Emphasized borders

### Text Styles

**Total:** 22 text styles across 2 scales

#### Marketing Scale (10)
Used for lighthousehlth.com marketing site

**Headings:**
- `/Marketing / Heading 1` - 54px, Inter SemiBold
- `/Marketing / Heading 2` - 42px, Inter SemiBold
- `/Marketing / Heading 3` - 38px, Inter SemiBold
- `/Marketing / Heading 4` - 32px, Inter SemiBold
- `/Marketing / Heading 5` - 28px, Inter SemiBold
- `/Marketing / Heading 6` - 24px, Inter SemiBold

**Body Text:**
- `/Marketing / Body XL` - 20px, Inter Medium
- `/Marketing / Body Large` - 18px, Inter Medium
- `/Marketing / Body` - 16px, Inter Medium
- `/Marketing / Body Small` - 14px, Inter Medium

#### App Scale (12)
Used for app.lighthousehlth.com dashboard (included for completeness)

**Headings:**
- `/App / Page Title` - 32px, Inter SemiBold
- `/App / Panel Header` - 24px, Inter SemiBold
- `/App / Card Title` - 20px, Inter SemiBold
- `/App / Section Header` - 18px, Inter SemiBold
- `/App / Widget Title` - 16px, Inter SemiBold

**Body Text:**
- `/App / Body Large` - 15px, Inter Medium
- `/App / Body` - 14px, Inter Medium
- `/App / Body Small` - 13px, Inter Medium
- `/App / Body XSmall` - 12px, Inter Medium

**Metrics (Monospace):**
- `/App / Metric Hero` - 36px, JetBrains Mono SemiBold
- `/App / Metric` - 28px, JetBrains Mono SemiBold
- `/App / Metric Small` - 20px, JetBrains Mono SemiBold

---

## Migration Handling

The sync script automatically handles migration from old Framer style paths to new design system paths:

### Color Migrations

| Old Framer Path | New Design System Path | Action |
|----------------|----------------------|--------|
| `/Green` | `/Brand/Primary` | UPDATE existing style |
| `/Orange` | `/Semantic/Warning` | UPDATE existing style |
| `/Black` | `/Text/Text Main` | UPDATE existing style |
| `/Grey` | `/Text/Text Muted` | UPDATE existing style |
| `/White off` | `/Surfaces/Canvas` | UPDATE existing style |
| `/White` | `/Surfaces/Surface` | UPDATE existing style |

**Deprecated:**
- `/Ash Gray` - No equivalent in new system (manual cleanup required)
- `/Gradient` - Will be replaced by code component (see DESIGN_SYSTEM.md)

### Text Style Migrations

| Old Framer Path | New Design System Path | Action |
|----------------|----------------------|--------|
| `/Heading 1-6` | `/Marketing / Heading 1-6` | UPDATE existing styles |
| `/20` | `/Marketing / Body XL` | UPDATE + rename |
| `/18` | `/Marketing / Body Large` | UPDATE + rename |
| `/16` | `/Marketing / Body` | UPDATE + rename |
| `/14` | `/Marketing / Body Small` | UPDATE + rename |

**Key Changes:**
- **Font Family:** All styles switch from InterDisplay/Satoshi to Inter
- **Letter Spacing:** Body text changes from -0.035em to 0em (normal)
- **Line Heights:** Adjusted to match design system specs

---

## Output & Logs

### Console Output

The script provides real-time color-coded output:

```
============================================================
ℹ Framer Design Token Sync
============================================================

ℹ Loading tokens from: dist/tokens/framer-tokens.json
✅ Loaded 22 color styles
✅ Loaded 22 text styles

ℹ Syncing 22 color styles...
✅ ↻ /Brand/Primary
✅ ＋ /Brand/Primary Soft
✅ ↻ /Semantic/Warning
...

ℹ Syncing 22 text styles...
✅ ↻ /Marketing / Heading 1
✅ ↻ /Marketing / Heading 2
...

============================================================
ℹ Sync Summary
============================================================

Color Styles:
✅   9 created
✅   8 updated

Text Styles:
✅   12 created
✅   10 updated

Total:
✅   39 successful

============================================================
```

### Audit Logs

Every sync operation creates a detailed JSON log in:
```
logs/framer-sync/sync-2025-12-26T14-30-00.json
```

**Log Contents:**
```json
{
  "timestamp": "2025-12-26T14:30:00.000Z",
  "options": {
    "dryRun": false,
    "colorsOnly": false,
    "textOnly": false,
    "verbose": false
  },
  "summary": {
    "total": 39,
    "successful": 39,
    "failed": 0,
    "colors": {
      "created": 9,
      "updated": 8
    },
    "text": {
      "created": 12,
      "updated": 10
    }
  },
  "results": [
    {
      "type": "color",
      "action": "update",
      "stylePath": "/Brand/Primary",
      "success": true,
      "changes": [
        "Update color at /Green",
        "  Light: rgb(6, 110, 118)"
      ]
    }
    // ... (all 39 changes)
  ]
}
```

---

## Troubleshooting

### Error: "Tokens file not found"

**Solution:**
```bash
npm run generate:tokens
```

This generates `dist/tokens/framer-tokens.json` from the Tailwind config.

---

### Error: "Framer MCP not connected"

**Solution:**
1. Check `.claude/mcp.json` configuration
2. Ensure Framer MCP server is running
3. Verify MCP credentials in environment

---

### Warning: "Some styles failed to sync"

**Diagnosis:**
1. Check the audit log for detailed error messages
2. Look for permission issues or network errors
3. Verify Framer project access

**Recovery:**
```bash
# Re-run sync for failed items
npm run sync:framer -- --verbose
```

---

### Issue: "Colors look different in Framer preview"

**Common Causes:**
1. **Color Format:** Ensure hex colors are converted to `rgb()` format
2. **Dark Mode:** Dark mode variants not yet implemented (coming in Phase 2)
3. **Component Overrides:** Some components may have hardcoded colors

**Verification:**
1. Inspect color styles in Framer
2. Check component XML for hardcoded color values
3. Use Framer's "Audit Design Tokens" feature

---

### Issue: "Text looks wrong after sync"

**Common Causes:**
1. **Font Not Available:** Inter font may not be loaded in Framer
2. **Font Selector Wrong:** Verify `GF;Inter-600` format is correct
3. **Component Text Overrides:** Some text may not use inlineTextStyle

**Verification:**
1. Check if Inter font is available in Framer project
2. Verify font selectors with `searchFonts` MCP tool
3. Audit components for hardcoded font properties

---

## Rollback Instructions

### If Sync Causes Issues

**Option 1: Revert via Framer Version History**
1. Open Framer project
2. Go to File → Version History
3. Restore to version before sync
4. Document issues found

**Option 2: Manual Rollback of Specific Styles**

Use the audit log to identify problematic styles, then manually revert in Framer:

```typescript
// Example: Revert /Brand/Primary to old value
await mcp__framer-mcp__manageColorStyle({
  type: 'update',
  stylePath: '/Green',
  properties: {
    light: 'rgb(5, 124, 139)', // Old value
  }
});
```

**Option 3: Re-run Sync with Fixes**

1. Fix issues in `tailwind.config.js` or `sync-framer-tokens.ts`
2. Regenerate tokens: `npm run generate:tokens`
3. Test with dry-run: `npm run sync:framer -- --dry-run`
4. Re-sync: `npm run sync:framer`

---

## Best Practices

### Before Running Sync

1. **Always dry-run first:**
   ```bash
   npm run sync:framer -- --dry-run --verbose
   ```

2. **Review audit report:**
   - Check `docs/audits/framer-design-token-audit-2025-12-26.md`
   - Understand what will change

3. **Backup Framer project:**
   - Framer auto-saves versions, but note the current version number
   - Take screenshot of current state

4. **Notify team:**
   - Alert designers/marketers before making changes
   - Schedule sync during low-traffic period

### After Running Sync

1. **Visual QA:**
   - Preview all Framer pages
   - Check mobile responsive views
   - Verify color contrast (WCAG AA)

2. **Component Testing:**
   - Test all interactive components (buttons, forms, etc.)
   - Verify hover/active states
   - Check dark mode (if implemented)

3. **Cross-Browser Check:**
   - Test in Chrome, Safari, Firefox
   - Verify on iOS/Android

4. **Document Changes:**
   - Update changelog
   - Notify stakeholders
   - Archive audit logs

### Development Workflow

**Recommended Process:**

```bash
# 1. Make changes to design tokens in tailwind.config.js
vim tailwind.config.js

# 2. Generate updated tokens
npm run generate:tokens

# 3. Preview changes
npm run sync:framer -- --dry-run --verbose

# 4. Review output, fix any issues

# 5. Sync to Framer
npm run sync:framer

# 6. Visual QA in Framer preview

# 7. Publish Framer site (if everything looks good)
```

---

## Technical Details

### Color Conversion

Framer expects colors in `rgb(r, g, b)` format, not hex:

```typescript
// Input: #066E76
// Output: rgb(6, 110, 118)

function hexToRgb(hex: string): string {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
```

### Font Selectors

Framer uses special font selector format:

| Font Source | Selector Format | Example |
|------------|----------------|---------|
| Google Fonts | `GF;FontName-Weight` | `GF;Inter-600` |
| Framer Fonts | `FR;FontName-Weight` | `FR;InterDisplay-Medium` |
| System Fonts | `FS;FontName-Weight` | `FS;Satoshi-medium` |

**Design System Uses:**
- **Inter:** `GF;Inter-500` (Medium) for body, `GF;Inter-600` (SemiBold) for headings
- **JetBrains Mono:** `GF;JetBrains-Mono-600` (SemiBold) for metrics

### MCP API Calls

The script uses Framer MCP tools:

```typescript
// Update color style
await mcp__framer-mcp__manageColorStyle({
  type: 'update',           // or 'create'
  stylePath: '/Brand/Primary',
  properties: {
    name: 'Primary',
    light: 'rgb(6, 110, 118)',
    dark: null              // Optional dark mode
  }
});

// Update text style
await mcp__framer-mcp__manageTextStyle({
  type: 'update',
  stylePath: '/Marketing / Heading 1',
  properties: {
    font: 'GF;Inter-600',
    fontSize: '54px',
    lineHeight: '1.2em',
    letterSpacing: '-0.045em',
    alignment: 'left',
    tag: 'h1'
  }
});
```

---

## Roadmap

### Phase 1 (Current) ✅
- [x] Color style sync
- [x] Text style sync
- [x] Migration handling
- [x] Dry-run mode
- [x] Audit logging

### Phase 2 (Q1 2026)
- [ ] Dark mode color values
- [ ] Gradient support via code components
- [ ] Full color scales (50-900 shades)
- [ ] Automated visual regression testing
- [ ] CI/CD integration

### Phase 3 (Q2 2026)
- [ ] Bi-directional sync (Framer → UI repo)
- [ ] Real-time sync on token changes
- [ ] Figma → Framer → UI repo workflow
- [ ] Design token versioning

---

## Related Documentation

- **Design System:** `DESIGN_SYSTEM.md` - Source of truth for all tokens
- **Audit Report:** `docs/audits/framer-design-token-audit-2025-12-26.md` - Current state analysis
- **Framer MCP:** `.claude/mcp.json` - MCP server configuration
- **Token Generation:** `scripts/generate-framer-tokens.ts` - How tokens are generated

---

## Support

**Questions or Issues?**

- **Engineering:** Open issue in `lighthouse-hlth-ui` repo
- **Design:** Contact healthtech-ui-designer agent
- **Product:** Contact healthtech-product-manager agent

**Emergency Rollback:**

If production is broken:
1. Revert via Framer version history (fastest)
2. Notify engineering team immediately
3. Document issue for post-mortem

---

**Document Version:** 1.0.0
**Last Updated:** December 26, 2025
**Next Review:** After Phase 1 completion

---

**Proprietary and Confidential**
© 2025 Indigo Labs LLC. All rights reserved.
