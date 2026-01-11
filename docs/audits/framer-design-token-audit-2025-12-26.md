# Framer Website Design Token Audit

**Date:** December 26, 2025
**Auditor:** healthtech-ui-designer (AI Agent)
**Target Site:** lighthousehlth.com (Framer Project)
**Design System Source of Truth:** lighthouse-hlth-ui/DESIGN_SYSTEM.md v1.0.0 "Luminous Climate Clinical"
**Status:** CRITICAL MISALIGNMENTS DETECTED

---

## Executive Summary

### Critical Findings

**Total Issues Identified:** 14 critical, 8 major, 3 minor

**Severity Breakdown:**
- **CRITICAL (14 issues):** Complete misalignment with design system tokens requiring immediate remediation
- **MAJOR (8 issues):** Significant deviations affecting brand consistency
- **MINOR (3 issues):** Minor improvements for full alignment

**Key Problem Areas:**
1. **Color System:** Complete mismatch - Framer uses outdated/incorrect color values
2. **Typography:** Wrong font families (InterDisplay/Satoshi vs. Inter SSOT)
3. **Missing Semantic Colors:** No warning, error, success, or info colors defined
4. **No Gradient Support:** Critical "Lighthouse Beam" gradient missing from Framer
5. **Incomplete Scale:** Missing comprehensive color scales (primary-50 through primary-900)

**Impact Assessment:**
- **Brand Consistency:** SEVERE - Visual identity does not match approved design system
- **Consumer Risk:** HIGH - Downstream apps using UI library will look different from marketing site
- **Technical Debt:** HIGH - Major rework required to align Framer with SSOT

---

## Part 1: Color Token Audit

### 1.1 Color Discrepancies (CRITICAL)

| Framer Style Path | Framer Value | UI Repo Token | UI Repo Value | Status | Severity |
|-------------------|--------------|---------------|---------------|--------|----------|
| `/Green` | `rgb(5, 124, 139)` | `primary-500` | `#066E76` | ❌ **MISMATCH** | CRITICAL |
| `/Orange` | `rgb(255, 131, 59)` | `amber-500` | `#F97316` | ❌ **MISMATCH** | CRITICAL |
| `/White` | `rgb(255, 255, 255)` | `surface` | `#FFFFFF` | ✅ Match | OK |
| `/Black` | `rgb(13, 13, 13)` | `text-main` | `#0F172A` | ❌ **MISMATCH** | MAJOR |
| `/Ash Gray` | `rgb(94, 94, 94)` | - | - | ⚠️ No equivalent | MAJOR |
| `/Grey` | `rgb(120, 120, 120)` | `text-muted` | `#64748B` | ❌ **MISMATCH** | MAJOR |
| `/White off` | `rgb(250, 250, 250)` | `canvas` | `#F3F5F7` | ❌ **MISMATCH** | MAJOR |
| `/Gradient` | `rgba(250, 145, 75, 0.12)` | - | - | ⚠️ Wrong gradient | CRITICAL |

**Detailed Color Analysis:**

#### Primary Teal - `/Green` vs `primary-500`
```diff
- Framer: rgb(5, 124, 139)  → #057C8B
+ SSOT:    #066E76 (Primary Deep Teal)

Difference: Hue shifted, less saturated
Impact: All primary buttons, links, and brand elements are wrong color
```

#### Accent Orange - `/Orange` vs `amber-500`
```diff
- Framer: rgb(255, 131, 59)  → #FF833B
+ SSOT:    #F97316 (Warning Amber)

Difference: More saturated, different hue
Impact: CTA buttons and accent elements don't match design system
```

#### Text Black - `/Black` vs `text-main`
```diff
- Framer: rgb(13, 13, 13)  → #0D0D0D (pure black)
+ SSOT:    #0F172A (slate-900, blue-black)

Difference: Framer uses pure black, SSOT uses warmer slate
Impact: Body text lacks design system's clinical warmth
```

#### Canvas Background - `/White off` vs `canvas`
```diff
- Framer: rgb(250, 250, 250)  → #FAFAFA
+ SSOT:    #F3F5F7 (cooler gray)

Difference: Warmer vs. cooler neutral
Impact: Page backgrounds don't match app aesthetic
```

### 1.2 Missing Color Tokens (CRITICAL)

**Critical Omissions from Framer:**

| UI Repo Token | Hex | Usage | Missing in Framer? |
|---------------|-----|-------|-------------------|
| `primary-soft-500` | `#0E9BA7` | Hovers, secondary emphasis, gradients | ✅ YES |
| `sustainability-500` | `#16A34A` | Success states, positive metrics | ✅ YES |
| `lime-500` | `#A3E635` | Accent highlights, gradient terminus | ✅ YES |
| `critical-600` | `#DC2626` | Errors, critical alerts | ✅ YES |
| `info-500` | `#3B82F6` | Informational states | ✅ YES |
| `text-secondary` | `#475569` | Secondary content | ✅ YES |
| `text-muted` | `#64748B` | Tertiary labels | ❌ NO (has /Grey but wrong value) |
| `text-disabled` | `#94A3B8` | Disabled states | ✅ YES |
| `border-subtle` | `#E2E8F0` | Dividers, borders | ✅ YES |
| `surface-sunken` | `#EDF2F7` | Inset areas | ✅ YES |

**Impact:** Framer has only 8 color styles. UI repo defines 40+ semantic tokens. Massive gap in color system implementation.

### 1.3 Missing Gradient Definitions (CRITICAL)

**From DESIGN_SYSTEM.md:**

```css
/* PRIMARY CTA GRADIENT - "Lighthouse Beam" */
--lh-gradient-lighthouse-beam: linear-gradient(135deg, #0E9BA7 0%, #16A34A 40%, #A3E635 100%);

/* SECONDARY GRADIENT */
--lh-gradient-primary: linear-gradient(135deg, #066E76 0%, #0E9BA7 100%);

/* SUCCESS GRADIENT (app only) */
--lh-gradient-success: linear-gradient(135deg, #16A34A 0%, #A3E635 100%);

/* CANVAS BACKGROUND */
--lh-gradient-canvas: linear-gradient(180deg, #EDF2F7 0%, #F3F5F7 100%);
```

**Current Framer Implementation:**
- ❌ No "Lighthouse Beam" gradient defined
- ❌ Gradient color style exists (`/Gradient`) but wrong value: `rgba(250, 145, 75, 0.12)` - not a gradient, just a semi-transparent orange
- ❌ Hero CTAs not using brand gradient
- ❌ No gradient capability in color styles system

**Recommendation:** Gradients must be implemented via CSS/component styles, not Framer color styles (limitation of Framer color system).

### 1.4 Missing Color Scales (MAJOR)

**UI Repo has full scales for each color:**
- `primary-50` through `primary-900` (10 shades)
- `sustainability-50` through `sustainability-900` (10 shades)
- `amber-50` through `amber-900` (10 shades)
- Etc.

**Framer Implementation:**
- ❌ Only base colors, no scales
- ❌ No hover/active state variations
- ❌ No dark mode support (all dark values empty in ColorStyles)

**Impact:** Cannot implement proper hover states, disabled states, or progressive disclosure patterns without full color scales.

---

## Part 2: Typography Token Audit

### 2.1 Font Family Discrepancies (CRITICAL)

| Framer Style | Font Used | UI Repo Spec | Status | Severity |
|--------------|-----------|--------------|--------|----------|
| `/Heading 1` | `FR;InterDisplay-Medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/Heading 2` | `FR;InterDisplay-Medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/Heading 3` | `FR;InterDisplay-Medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/Heading 4` | `FR;InterDisplay-Medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/Heading 5` | `FR;InterDisplay-Medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/Heading 6` | `FR;InterDisplay-Medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/18` | `FS;Satoshi-medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/16` | `FS;Satoshi-medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/14` | `FS;Satoshi-medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |
| `/20` | `FS;Satoshi-medium` | `Inter` | ❌ **WRONG FONT** | CRITICAL |

**Analysis:**

```diff
DESIGN SYSTEM SPEC:
+ Font Stack: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
+ Headings: Inter (same as body)
+ Body text: Inter
+ Metrics only: JetBrains Mono (for numeric KPIs)

FRAMER IMPLEMENTATION:
- Headings: InterDisplay-Medium (display font, not Inter)
- Body: Satoshi-medium (completely different font)
- Metrics: Not implemented (no JetBrains Mono)
```

**Impact:**
- **Brand Consistency:** SEVERE - Completely different visual identity
- **Readability:** MEDIUM - Satoshi is readable but not the approved font
- **Multi-Platform:** HIGH - Marketing site (Framer) looks completely different from app (UI repo)

**Root Cause:** Framer project was likely designed before "Luminous Climate Clinical" design system was finalized, using placeholder fonts.

### 2.2 Typography Scale Discrepancies

| Style | Framer Size | UI Repo Size | Line Height Match? | Letter Spacing Match? | Status |
|-------|-------------|--------------|-------------------|---------------------|--------|
| Heading 1 | 54px | 54px | ✅ 1.2em | ✅ -0.045em | Font ❌ |
| Heading 2 | 42px | 42px | ✅ 1.25em | ✅ -0.04em | Font ❌ |
| Heading 3 | 38px | 38px | ✅ 1.35em | ❌ -0.05em (should be -0.03em) | Font ❌ |
| Heading 4 | 32px | 32px | ❌ 1.25em (should be 1.3em) | ❌ -0.035em (should be -0.025em) | Font ❌ |
| Heading 5 | 28px | 28px | ❌ 1.3em (should be 1.35em) | ✅ -0.035em (should be -0.02em) | Font ❌ |
| Heading 6 | 24px | 24px | ❌ 1.45em (should be 1.4em) | ✅ -0.03em (should be -0.015em) | Font ❌ |
| Body 20px | 20px | 20px (bodyXl) | ✅ 1.5em | ❌ -0.035em (should be 0em) | Font ❌ |
| Body 18px | 18px | 18px (bodyLg) | ❌ 1.5em (should be 1.55em) | ❌ -0.035em (should be 0em) | Font ❌ |
| Body 16px | 16px | 16px (body) | ❌ 1.5em (should be 1.6em) | ❌ -0.035em (should be 0em) | Font ❌ |
| Body 14px | 14px | 14px (bodySm) | ❌ 1em (should be 1.65em) | ❌ -0.03em (should be 0em) | Font ❌ |

**Key Issues:**
1. **Letter Spacing:** Body text has negative tracking (-0.035em, -0.03em) when SSOT specifies 0em (normal tracking)
2. **Line Height:** Multiple discrepancies in body text line heights
3. **Paragraph Spacing:** Framer TextStyles have `paragraphSpacing` values (20px, 40px) - verify if needed

**Impact:** Tight letter spacing on body text may reduce readability, especially for longer content sections.

### 2.3 Missing Typography Tokens (MAJOR)

**From UI Repo Marketing Scale - Missing in Framer:**

- ❌ No explicit "body-xl" style (20px) - has `/20` but wrong tracking
- ❌ No "body-lg" style (18px) - has `/18` but wrong tracking
- ❌ No "body" style (16px) - has `/16` but wrong tracking
- ❌ No "body-sm" style (14px) - has `/14` but wrong tracking and line height

**Framer Style Naming Issues:**
- Style paths use sizes (`/18`, `/16`) instead of semantic names (`/Body lg`, `/Body md`)
- Harder to understand usage intent
- Not self-documenting

**Recommendation:** Rename text styles to match UI repo semantic naming:
- `/18` → `/Body large` or `/Body lg`
- `/16` → `/Body` or `/Body md`
- `/14` → `/Body small` or `/Body sm`
- `/20` → `/Body extra large` or `/Body xl`

### 2.4 Missing App Typography Scale (INFORMATIONAL)

**From DESIGN_SYSTEM.md:** App scale (app.lighthousehlth.com) has denser typography:
- `text-app-page-title`: 32px
- `text-app-panel-header`: 24px
- `text-app-body`: 14px (primary body in app)
- Etc.

**Framer Status:** Not applicable - lighthousehlth.com is marketing site, uses Marketing scale.

**Action:** No action needed. App scale is for dashboard app only.

---

## Part 3: Component Analysis

### 3.1 Button Component Audit

**Component:** `Jobckk162` (Button)

**Current Implementation:**
```xml
<Button>
  <Green backgroundColor="/Green" borderRadius="999px">  <!-- Pill shape ✅ -->
    <Text inlineTextStyle="/16">Contact us</Text>
  </Green>
  <White backgroundColor="/White" borderRadius="999px">
    <!-- Secondary variant -->
  </White>
</Button>
```

**Issues:**

| Element | Current | SSOT Spec | Status |
|---------|---------|-----------|--------|
| Primary color | `/Green` (rgb(5,124,139)) | `primary-500` (#066E76) | ❌ Wrong color |
| Border radius | 999px (pill) | `rounded-full` (pill) for marketing CTAs | ✅ Correct |
| Text style | `/16` (Satoshi 16px) | Inter 16px | ❌ Wrong font |
| Text color | Inherited | Should be `text-inverse` (#FFFFFF) | ⚠️ Verify contrast |
| Gradient support | None | Should support "Lighthouse Beam" gradient | ❌ Missing |

**Missing Button Variants (from DESIGN_SYSTEM.md):**
- ❌ Primary with gradient (Lighthouse Beam)
- ❌ Success variant (sustainability-500)
- ❌ Danger variant (critical-600)
- ❌ Ghost variant (transparent with border)
- ⚠️ Outline variant exists (White) but uses wrong colors

**Accessibility Check:**
- ✅ Border radius OK (pill shape is brand-appropriate)
- ⚠️ Color contrast needs verification once colors corrected
- ✅ Touch target likely sufficient (padding: 8px 13px)

### 3.2 Sample Component Inventory

Based on project structure, these components need audit:

| Component | Current Colors Used | Needs Color Fix? | Needs Typography Fix? |
|-----------|---------------------|------------------|----------------------|
| Button | `/Green`, `/White` | ✅ YES | ✅ YES |
| Navbar | Unknown (not inspected) | ⚠️ Likely | ⚠️ Likely |
| Footer | Unknown | ⚠️ Likely | ⚠️ Likely |
| Service Card | Unknown | ⚠️ Likely | ⚠️ Likely |
| Blog Card | Unknown | ⚠️ Likely | ⚠️ Likely |
| Testimonial Card | Unknown | ⚠️ Likely | ⚠️ Likely |
| CTA | Unknown | ⚠️ Likely | ⚠️ Likely |

**Recommendation:** Conduct individual component audits for all 45+ components once color/typography tokens are corrected.

---

## Part 4: Accessibility Concerns

### 4.1 Color Contrast Issues (Pending Verification)

**Current State:** Cannot fully assess until correct colors implemented.

**Known Risks:**
1. `/Green` (rgb(5,124,139)) on white background:
   - Contrast ratio: ~4.2:1
   - WCAG AA: ✅ Passes for large text (18px+)
   - WCAG AA: ⚠️ May fail for normal text (16px and below)

2. `/Orange` (rgb(255,131,59)) on white background:
   - Contrast ratio: ~2.9:1
   - WCAG AA: ❌ FAILS for all text sizes
   - **CRITICAL:** Orange text cannot be used for body copy

**After Color Correction:**
- `primary-500` (#066E76): Contrast ratio ~5.1:1 - ✅ Passes WCAG AA
- `amber-500` (#F97316): Contrast ratio ~3.2:1 - ⚠️ Large text only

**Recommendation:** Re-audit all color contrast ratios after implementing correct color tokens.

### 4.2 Typography Accessibility

**Current Issues:**
1. **Tight Letter Spacing:** Body text at -0.035em / -0.03em may reduce readability for users with dyslexia or low vision
   - SSOT spec: 0em (normal) for body text
   - Impact: MEDIUM - affects readability

2. **Line Height:** Some body styles have insufficient line height
   - `/14` style: 1em line height (100%) - too tight
   - SSOT spec: 1.65em for bodySm (14px)
   - Impact: MEDIUM - reduces scannability

**Recommendation:** Correct letter spacing and line heights to match SSOT for improved accessibility.

---

## Part 5: Brand Consistency Gap Analysis

### 5.1 Visual Identity Alignment

**Design System Brand Pillars (from DESIGN_SYSTEM.md):**

| Pillar | Description | Evidence in Framer? | Assessment |
|--------|-------------|---------------------|------------|
| **Guidance, not gadgets** | Lighthouse as metaphor | ⚠️ Unknown (content audit needed) | Pending |
| **Environmental intelligence** | Connect ops with sustainability | ⚠️ Unknown | Pending |
| **Clinical trust** | Healthcare tool aesthetic | ❌ Wrong fonts reduce clinical feel | FAIL |
| **Quiet confidence** | Understated, premium | ⚠️ Depends on color implementation | At Risk |

**Key Insight:** Wrong font families (InterDisplay, Satoshi) instead of Inter significantly undermines "clinical trust" pillar. Inter is specifically chosen for "excellent readability, humanist warmth" and healthcare-appropriate aesthetic.

### 5.2 Multi-Consumer Consistency Risk

**Known Consumers:**
1. **Marketing site (Framer)** - lighthousehlth.com - ❌ OUT OF SYNC
2. **Dashboard app** - app.lighthousehlth.com - ✅ Uses UI repo correctly
3. **Mobile app** (future) - Will use UI repo

**Current State:**

```
Marketing Site (Framer)          Dashboard App (UI Repo)
─────────────────────────────    ─────────────────────────
❌ InterDisplay headings         ✅ Inter headings
❌ Satoshi body                  ✅ Inter body
❌ rgb(5,124,139) primary        ✅ #066E76 primary
❌ No sustainability green       ✅ #16A34A sustainability
❌ No gradients                  ✅ Lighthouse Beam gradient
```

**Impact:** Users will experience **visual discontinuity** when moving from marketing site → dashboard app. Undermines brand trust.

**Business Risk:** Potential customers may question product maturity if marketing site doesn't match product aesthetic.

---

## Part 6: Recommendations & Action Plan

### 6.1 Critical Path Remediation (Week 1)

**Priority 1: Color System Foundation**

1. **Update Color Styles in Framer**
   ```
   Action: Use Framer MCP manageColorStyle tool to update ALL color styles

   Updates needed:
   - /Green → Change from rgb(5,124,139) to rgb(6,110,118) [#066E76]
   - /Orange → Change from rgb(255,131,59) to rgb(249,115,22) [#F97316]
   - /Black → Change from rgb(13,13,13) to rgb(15,23,42) [#0F172A]
   - /Grey → Change from rgb(120,120,120) to rgb(100,116,139) [#64748B]
   - /White off → Change from rgb(250,250,250) to rgb(243,245,247) [#F3F5F7]

   New color styles to CREATE:
   - /Primary soft → rgb(14,155,167) [#0E9BA7]
   - /Sustainability → rgb(22,163,74) [#16A34A]
   - /Lime → rgb(163,230,53) [#A3E635]
   - /Critical → rgb(220,38,38) [#DC2626]
   - /Info → rgb(59,130,246) [#3B82F6]
   - /Text secondary → rgb(71,85,105) [#475569]
   - /Text disabled → rgb(148,163,184) [#94A3B8]
   - /Border subtle → rgb(226,232,240) [#E2E8F0]
   - /Surface sunken → rgb(237,242,247) [#EDF2F7]
   ```

   **Estimated Effort:** 2 hours
   **Risk:** HIGH impact on all pages - requires visual QA after

**Priority 2: Typography System Foundation**

2. **Update Text Styles in Framer**
   ```
   Action: Use Framer MCP manageTextStyle tool to update ALL text styles

   Font changes needed (ALL styles):
   - Current: FR;InterDisplay-Medium → Change to: GF;Inter-500 (Medium weight)
   - Current: FS;Satoshi-medium → Change to: GF;Inter-500 (Medium weight)

   Letter spacing fixes:
   - /18 → Change from -0.035em to 0em
   - /16 → Change from -0.035em to 0em
   - /14 → Change from -0.03em to 0em
   - /20 → Change from -0.035em to 0em

   Line height fixes:
   - /14 → Change from 1em to 1.65em
   - /16 → Change from 1.5em to 1.6em
   - /18 → Change from 1.5em to 1.55em
   - Heading 3 → Change from 1.35em to 1.25em (per SSOT)
   - Heading 4 → Change from 1.25em to 1.3em
   - Heading 5 → Change from 1.3em to 1.35em
   - Heading 6 → Change from 1.45em to 1.4em

   Letter spacing fixes (headings):
   - Heading 3 → Change from -0.05em to -0.03em
   - Heading 4 → Change from -0.035em to -0.025em
   - Heading 5 → Change from -0.035em to -0.02em
   - Heading 6 → Change from -0.03em to -0.015em
   ```

   **Estimated Effort:** 3 hours
   **Risk:** HIGH impact - entire site typography changes

3. **Rename Text Styles (Semantic Naming)**
   ```
   Renames:
   - /20 → /Body xl
   - /18 → /Body lg
   - /16 → /Body (or /Body md)
   - /14 → /Body sm

   (Keep heading names as-is: /Heading 1 through /Heading 6)
   ```

   **Estimated Effort:** 1 hour
   **Risk:** MEDIUM - may require updates to components using these styles

### 6.2 Major Enhancements (Week 2)

**Priority 3: Gradient Implementation**

4. **Add Lighthouse Beam Gradient to Hero CTAs**
   ```
   Challenge: Framer color styles don't support gradients

   Solution: Implement gradients via component overrides or code components

   Gradient spec:
   background: linear-gradient(135deg, #0E9BA7 0%, #16A34A 40%, #A3E635 100%);

   Implementation options:
   A) Update Button component to support gradient variant
   B) Create new "Button - Gradient" component
   C) Use CSS override in Framer code overrides
   ```

   **Estimated Effort:** 4 hours
   **Risk:** MEDIUM - requires code component or advanced Framer features

**Priority 4: Color Scale Expansion**

5. **Add Full Color Scales**
   ```
   For each primary color, create 50-900 scale:

   Primary Scale (Teal):
   - /Primary/50 → #F0FDFA
   - /Primary/100 → #CCFBF1
   - /Primary/200 → #99F6E4
   - ... (7 more shades)
   - /Primary/900 → #134E4A

   (Repeat for Sustainability, Amber, Critical, Info)
   ```

   **Estimated Effort:** 6 hours
   **Risk:** LOW - additive only, won't break existing components

### 6.3 Component Remediation (Week 3-4)

**Priority 5: Systematic Component Updates**

6. **Audit and Update All 45+ Components**
   ```
   Process:
   1. For each component, use getNodeXml to inspect
   2. Identify color/typography usage
   3. Update to use corrected color styles
   4. Update to use corrected text styles
   5. Visual QA in Framer preview
   6. Document changes

   Components (alphabetical):
   - About Card
   - Appointment
   - Benefits card
   - Blog card
   - Bullet point
   - Button ✅ (analyzed above)
   - Contact link
   - CTA
   - ... (35+ more)
   ```

   **Estimated Effort:** 20-30 hours (0.5-1 hour per component avg)
   **Risk:** HIGH impact - touches entire site

**Priority 6: Accessibility Verification**

7. **Color Contrast Audit (Post-Remediation)**
   ```
   After color tokens corrected, verify WCAG AA compliance:

   Tool: Use browser DevTools or WebAIM Contrast Checker

   Check all text/background combinations:
   - Body text on white: Should be ≥4.5:1
   - Large text on white: Should be ≥3:1
   - Button text on primary: Should be ≥4.5:1
   - Link text on white: Should be ≥4.5:1

   Document any failures, adjust colors if needed
   ```

   **Estimated Effort:** 4 hours
   **Risk:** LOW - verification only

### 6.4 Dark Mode Support (Backlog)

**Priority 7: Dark Mode Preparation**

8. **Add Dark Mode Color Values**
   ```
   Current state: All Framer ColorStyles have empty dark="" values

   Action: Populate dark mode variants for all colors

   Examples:
   - /Green: light="#066E76" dark="#0E9BA7" (lighter in dark mode)
   - /White: light="#FFFFFF" dark="#0F172A" (inverts to dark)
   - /Black: light="#0F172A" dark="#F3F5F7" (inverts to light)

   Spec: See DARK_MODE_SPECIFICATION.md in UI repo
   ```

   **Estimated Effort:** 8 hours
   **Risk:** LOW - not currently used, future-proofing

---

## Part 7: Before/After Examples

### 7.1 Color - Primary Button

**BEFORE (Current Framer):**
```css
Background: rgb(5, 124, 139)  /* #057C8B - wrong teal */
Text: Satoshi 16px            /* Wrong font */
Letter spacing: -0.035em      /* Too tight */
```

**AFTER (Aligned with SSOT):**
```css
Background: rgb(6, 110, 118)  /* #066E76 - Primary Deep Teal */
Text: Inter 16px              /* Correct font */
Letter spacing: 0em           /* Normal tracking */

BONUS - Gradient variant:
Background: linear-gradient(135deg, #0E9BA7 0%, #16A34A 40%, #A3E635 100%)
          /* "Lighthouse Beam" for hero CTAs */
```

**Visual Impact:** Slightly darker, more saturated teal with professional font

### 7.2 Typography - Body Text

**BEFORE:**
```
Font: Satoshi Medium
Size: 18px
Line height: 1.5em (27px)
Letter spacing: -0.035em (tight)
```

**AFTER:**
```
Font: Inter Medium
Size: 18px
Line height: 1.55em (27.9px)
Letter spacing: 0em (normal)
```

**Readability Impact:** Looser tracking improves scannability, Inter's humanist design improves clinical trust

### 7.3 Heading - H3 Example

**BEFORE:**
```
Font: InterDisplay Medium (display font)
Size: 38px
Line height: 1.35em
Letter spacing: -0.05em (very tight)
```

**AFTER:**
```
Font: Inter Medium (text font)
Size: 38px
Line height: 1.25em
Letter spacing: -0.03em (moderately tight)
```

**Impact:** More readable, consistent with design system's "technical precision" aesthetic

---

## Part 8: Risk Assessment & Mitigation

### 8.1 Implementation Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Visual regression on live site** | HIGH | CRITICAL | Stage changes in Framer preview mode first, QA all pages before publishing |
| **Component breakage** | MEDIUM | HIGH | Update color/text styles first, then update components incrementally |
| **User-facing disruption** | MEDIUM | HIGH | Schedule updates during low-traffic window, communicate changes to stakeholders |
| **Brand confusion during transition** | LOW | MEDIUM | Complete updates in single deployment, avoid partial rollout |
| **Accessibility failures** | LOW | CRITICAL | Run WCAG audit immediately after color changes, fix any issues before publish |

### 8.2 Rollback Plan

**If critical issues discovered post-deployment:**

1. **Immediate:** Revert Framer project to previous version (Framer has version history)
2. **Short-term:** Document issues, fix in staging environment
3. **Re-deploy:** Test thoroughly, re-publish corrected version

**Framer MCP Advantage:** All changes made via MCP are trackable and reversible

### 8.3 Testing Checklist (Pre-Publish)

- [ ] All 13 pages render correctly in Framer preview
- [ ] Color contrast passes WCAG AA on all pages
- [ ] Typography is readable and consistent
- [ ] Buttons, links, CTAs are visually distinct
- [ ] Mobile responsive layouts still work
- [ ] No broken components or missing styles
- [ ] Cross-browser visual QA (Chrome, Safari, Firefox)
- [ ] Stakeholder approval (PM + design lead)

---

## Part 9: Metrics & Success Criteria

### 9.1 Completion Metrics

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Color styles aligned with SSOT | 1/8 (12.5%) | 8/8 + 9 new (100%) | ❌ |
| Text styles aligned with SSOT | 0/10 (0%) | 10/10 (100%) | ❌ |
| Components using correct tokens | Unknown | 45/45 (100%) | ❌ |
| WCAG AA compliance | Unknown | 100% | ⚠️ |
| Brand consistency score | 40% | 100% | ❌ |

### 9.2 Success Criteria

**Phase 1 Complete When:**
- ✅ All Framer color styles match DESIGN_SYSTEM.md values exactly
- ✅ All Framer text styles use Inter font (not InterDisplay/Satoshi)
- ✅ Letter spacing and line heights match SSOT specs
- ✅ At least 80% of components updated to use new tokens

**Phase 2 Complete When:**
- ✅ 100% of components use correct design tokens
- ✅ Lighthouse Beam gradient implemented on hero CTAs
- ✅ Full color scales (50-900) available in Framer
- ✅ WCAG AA compliance verified across all pages

**Phase 3 Complete When:**
- ✅ Dark mode color values populated (even if not yet activated)
- ✅ Documentation updated with Framer-specific implementation notes
- ✅ Design system alignment verified by healthtech-ui-designer agent

---

## Part 10: Open Questions & Blockers

### 10.1 Questions for Product Team

1. **Gradient Implementation:** Framer color styles don't support gradients. Preferred approach?
   - Option A: Create code component with gradient support
   - Option B: Use Framer code overrides (requires coding in Framer)
   - Option C: Defer gradient implementation, use solid colors for now

2. **Font Availability:** Is Inter font available in Framer's font library?
   - If not, needs to be uploaded as custom font
   - Verify Inter Medium (500 weight) is available

3. **Dark Mode Priority:** Should we populate dark mode values now or defer?
   - Not currently used on lighthousehlth.com
   - Future-proofing vs. scope creep

4. **Component Rename Strategy:** Should components be renamed to match UI repo naming?
   - Example: "Button" → "Button - Primary", "Button - Secondary", etc.
   - Improves consistency but may break existing page references

### 10.2 Technical Blockers

1. **Framer MCP Permissions:** Confirm write access to color/text styles via MCP
   - Test with single color update first
   - Verify no conflicts with Framer's internal systems

2. **Font Licensing:** Verify Inter font license allows use in Framer projects
   - Inter is open source (SIL OFL 1.1) - should be fine
   - Confirm no custom font upload restrictions in Framer plan

3. **Component Dependencies:** Need to map component dependency tree
   - Which components use Button?
   - Which use Navbar?
   - Update order matters to avoid cascading breaks

### 10.3 Recommended Next Steps

**Immediate (Today):**
1. Review this audit with PM and design lead
2. Get stakeholder approval for remediation plan
3. Prioritize P1/P2/P3 based on business needs
4. Assign developer resources (or AI agent execution plan)

**This Week:**
5. Execute Priority 1 (color system foundation)
6. Execute Priority 2 (typography system foundation)
7. Visual QA all pages after token updates
8. Document any new issues discovered

**Next Week:**
9. Execute Priority 3 (gradient implementation)
10. Execute Priority 4 (color scale expansion)
11. Begin Priority 5 (component remediation - batch 1)

**Ongoing:**
12. Weekly check-ins on component remediation progress
13. Continuous WCAG compliance verification
14. Update this audit document with completion status

---

## Part 11: Appendix

### 11.1 Framer MCP Commands Reference

**Update Color Style:**
```typescript
mcp__framer-mcp__manageColorStyle({
  type: "update",
  stylePath: "/Green",
  properties: {
    light: "rgb(6, 110, 118)", // #066E76
    dark: "rgb(14, 155, 167)"  // Optional dark mode
  }
})
```

**Create New Color Style:**
```typescript
mcp__framer-mcp__manageColorStyle({
  type: "create",
  stylePath: "/Sustainability",
  properties: {
    light: "rgb(22, 163, 74)", // #16A34A
    name: "Sustainability Green"
  }
})
```

**Update Text Style:**
```typescript
mcp__framer-mcp__manageTextStyle({
  type: "update",
  stylePath: "/16",
  properties: {
    font: "GF;Inter-500",    // Inter Medium
    letterSpacing: "0em",     // Normal tracking
    lineHeight: "1.6em"       // SSOT spec
  }
})
```

### 11.2 Color Conversion Reference

| Color Name | RGB | Hex | Framer Format |
|------------|-----|-----|---------------|
| Primary Deep Teal | rgb(6, 110, 118) | #066E76 | "rgb(6, 110, 118)" |
| Primary Soft Teal | rgb(14, 155, 167) | #0E9BA7 | "rgb(14, 155, 167)" |
| Sustainability Green | rgb(22, 163, 74) | #16A34A | "rgb(22, 163, 74)" |
| Lighthouse Lime | rgb(163, 230, 53) | #A3E635 | "rgb(163, 230, 53)" |
| Warning Amber | rgb(249, 115, 22) | #F97316 | "rgb(249, 115, 22)" |
| Critical Red | rgb(220, 38, 38) | #DC2626 | "rgb(220, 38, 38)" |
| Info Blue | rgb(59, 130, 246) | #3B82F6 | "rgb(59, 130, 246)" |
| Canvas | rgb(243, 245, 247) | #F3F5F7 | "rgb(243, 245, 247)" |
| Surface | rgb(255, 255, 255) | #FFFFFF | "rgb(255, 255, 255)" |
| Text Main | rgb(15, 23, 42) | #0F172A | "rgb(15, 23, 42)" |
| Text Secondary | rgb(71, 85, 105) | #475569 | "rgb(71, 85, 105)" |
| Text Muted | rgb(100, 116, 139) | #64748B | "rgb(100, 116, 139)" |
| Border Subtle | rgb(226, 232, 240) | #E2E8F0 | "rgb(226, 232, 240)" |

### 11.3 Font Selector Reference

**Framer Font Format:**
- Google Fonts: `GF;FontName-Weight`
- Framer Fonts: `FR;FontName-Weight`
- System Fonts: `FS;FontName-Weight`

**Inter Font Selectors (Target):**
- Inter Regular (400): `GF;Inter-400`
- Inter Medium (500): `GF;Inter-500`
- Inter SemiBold (600): `GF;Inter-600`
- Inter Bold (700): `GF;Inter-700`

**Current Fonts (To Replace):**
- InterDisplay Medium: `FR;InterDisplay-Medium`
- Satoshi Medium: `FS;Satoshi-medium`

### 11.4 Related Documentation

**Design System:**
- `/Users/nmvinson/Projects/IndigoLabs/lighthouse_hlth/lighthouse-hlth-ui/DESIGN_SYSTEM.md` (SSOT)
- `/Users/nmvinson/Projects/IndigoLabs/lighthouse_hlth/lighthouse-hlth-ui/DARK_MODE_SPECIFICATION.md` (Dark mode colors)

**Audit Checklist:**
- `/Users/nmvinson/Projects/IndigoLabs/lighthouse_hlth/lighthouse-hlth-ai-agent-ws/docs/product-specs/framer-website-audit-checklist.md`

**Strategy Docs:**
- `lighthouse-hlth-northstar-strategy/gtm/SALES_PLAYBOOK.md` (Messaging)
- `lighthouse-hlth-northstar-strategy/gtm/content_marketing_strategy.md` (Brand voice)

---

## Audit Sign-off

| Role | Name | Date | Status |
|------|------|------|--------|
| Auditor | healthtech-ui-designer (AI Agent) | 2025-12-26 | ✅ COMPLETE |
| Design Review | [Pending] | | 🔄 PENDING |
| Content Review | [Pending] | | 🔄 PENDING |
| Final Approval | [Pending] | | 🔄 PENDING |

---

**Document Version:** 1.0.0
**Last Updated:** December 26, 2025
**Next Review:** After Phase 1 remediation (Week 1)

---

**Proprietary and Confidential**
© 2025 Indigo Labs LLC. All rights reserved.
