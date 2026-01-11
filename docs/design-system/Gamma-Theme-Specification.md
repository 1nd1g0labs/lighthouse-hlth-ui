# Lighthouse HLTH Gamma Theme Specification

**Brand:** Lighthouse HLTH
**Design Language:** "Luminous Climate Clinical" - Operational clarity for climate-resilient healthcare
**Version:** 1.0
**Date:** January 2026

---

## Overview

This specification provides exact settings for creating a Gamma theme that matches the Lighthouse HLTH brand identity. Use this when clicking "Build a theme" in Gamma's theme editor.

**Brand Keywords:** Luminous, precise, calm, intelligent, sustainable, clinical-but-warm

---

## Theme Configuration

### 1. Colors

#### Primary Accent Color
**Hex:** `#057C8B`
**Name:** Primary Deep Teal
**Usage:** Main buttons, links, charts, primary actions, CTAs

#### Secondary Accent Color
**Hex:** `#16A34A`
**Name:** Sustainability Green
**Usage:** Success states, positive metrics, secondary emphasis, environmental wins

---

### 2. Text Colors

#### Main Text
**Hex:** `#0F172A`
**Name:** Slate 900 (Almost Black)
**Usage:** Headings, primary body copy, high-contrast content

#### Secondary Text
**Hex:** `#475569`
**Name:** Slate 600
**Usage:** Subheadings, secondary content, supporting text

#### Muted Text (for labels, captions)
**Hex:** `#64748B`
**Name:** Slate 500
**Usage:** Labels, captions, tertiary information

---

### 3. Card & Page Backgrounds

#### Card Background (Primary)
**Type:** Solid Color
**Hex:** `#FFFFFF`
**Name:** White
**Usage:** Main cards, content panels, primary surfaces

#### Card Background (Secondary - for variety)
**Type:** Solid Color
**Hex:** `#F3F5F7`
**Name:** Canvas Gray
**Usage:** Alternating card backgrounds, inset sections

#### Page Background (Option 1: Solid)
**Type:** Solid Color
**Hex:** `#FAFBFC`
**Name:** Off-White
**Usage:** Clean, minimal backgrounds for professional presentations

#### Page Background (Option 2: Gradient - Recommended)
**Type:** Gradient
**Colors:**
- Start: `#EDF2F7` (top)
- End: `#F3F5F7` (bottom)
**Direction:** Top to Bottom (180deg)
**Name:** Canvas Gradient
**Usage:** Subtle depth, premium feel for CFO/board presentations

---

### 4. Typography

#### Heading Font
**Font Family:** Inter
**Weight:** 600 (Semi-Bold)
**Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

**Heading Settings:**
- **Line Height:** 1.2
- **Letter Spacing:** -0.03em (tight for professional look)

#### Body Font
**Font Family:** Inter
**Weight:** 400 (Regular) for body, 500 (Medium) for emphasized text
**Fallback:** Same as headings

**Body Settings:**
- **Line Height:** 1.6 (comfortable reading)
- **Letter Spacing:** 0em (default)
- **Base Font Size:** 18px (generous for presentations)

#### Advanced Typography Settings

**Marketing Scale (for presentations/slides):**

| Style | Size | Line Height | Letter Spacing | When to Use |
|-------|------|-------------|----------------|-------------|
| **H1 (Hero)** | 54px | 1.2 | -0.045em | Cover slides, major section opens |
| **H2 (Section)** | 42px | 1.25 | -0.04em | Main section titles |
| **H3 (Subsection)** | 38px | 1.25 | -0.03em | Subsection headers |
| **H4 (Card)** | 32px | 1.3 | -0.025em | Card titles, key points |
| **H5** | 28px | 1.35 | -0.02em | Secondary headers |
| **H6** | 24px | 1.4 | -0.015em | Tertiary headers, list titles |
| **Body Large** | 20px | 1.5 | 0em | Lead paragraphs, executive summaries |
| **Body (Standard)** | 18px | 1.6 | 0em | Standard presentation text |
| **Body Small** | 16px | 1.65 | 0em | Fine print, footnotes, sources |

---

### 5. Layout & Shapes

#### Border Radius (Roundness)
**Value:** `16px`
**Name:** Moderate Roundness
**Usage:** Professional without being too soft
- Cards, buttons, images, content blocks
- Balances clinical precision with approachability

**Alternative:** `12px` for more clinical/technical presentations

#### Shadows
**Type:** Hard Shadows (Neo-brutalist professional look)
**Recommendation:** Enable **Hard Shadows** for content blocks

**Shadow Specification:**
```css
/* For cards/elevated elements */
box-shadow: 0px 4px 0px 0px rgba(5, 124, 139, 0.2);

/* For primary CTAs/buttons */
box-shadow: 0px 6px 0px 0px rgba(5, 124, 139, 0.3);
```

**Alternative:** If hard shadows not available, use:
```css
/* Soft shadow for clean professional look */
box-shadow: 0px 4px 16px rgba(15, 23, 42, 0.08);
```

#### Strokes (Outlines)
**When to Use:** For "technical data" presentations (engineering, metrics-heavy)
**Stroke Color:** `#E2E8F0` (Border Subtle)
**Stroke Width:** 1px
**Usage:** Diagram boxes, data tables, technical schematics

---

### 6. Brand Assets

#### Logo Upload
**File:** Lighthouse HLTH Logo (SVG or PNG with transparent background)
**Placement:** Top-left corner of headers (via Page Setup menu after theme creation)
**Size:** Height 32-40px recommended

**Logo Variants:**
- **Primary:** Full color logo (teal lighthouse icon + wordmark)
- **Inverse:** White logo for dark backgrounds (if using dark hero slides)

**Logo URL (if available):**
Request from brand assets repository or export from Framer:
- `lighthousehlth.com` header logo
- Export at 2x resolution for crisp rendering

#### AI Image Style Keywords
**Purpose:** Ensure AI-generated images match Lighthouse HLTH aesthetic

**Primary Keywords:**
```
clean clinical photography, bright natural lighting, teal and green accents,
modern healthcare facility, professional medical environment, sustainable design,
minimal aesthetic, white surfaces, glass and steel architecture
```

**Secondary Keywords (by use case):**

**For Energy/Sustainability Images:**
```
solar panels on hospital roof, LED lighting systems, modern HVAC equipment,
green building certification, photorealistic, bright daylight, teal color grading
```

**For Healthcare Operations:**
```
modern hospital interior, clean white hallways, medical equipment,
professional staff in scrubs, natural window light, organized supply room,
contemporary healthcare design
```

**For Mission/Community:**
```
diverse patients and staff, community health center, warm caring environment,
natural light, hopeful atmosphere, inclusive healthcare
```

**Color Grading:** Teal and green color grading preferred (matches brand palette)

**Avoid:** Cartoon illustrations, overly saturated colors, generic stock photo aesthetic, dark moody lighting

---

## Quick Reference Card

**Copy this for Gamma theme builder:**

```
LIGHTHOUSE HLTH THEME SETTINGS

COLORS:
Primary: #057C8B (Deep Teal)
Secondary: #16A34A (Green)
Text Main: #0F172A
Text Secondary: #475569
Card BG: #FFFFFF
Page BG: Gradient (#EDF2F7 → #F3F5F7)

TYPOGRAPHY:
Font: Inter (600 for headings, 400-500 for body)
H1: 54px | 1.2 line height | -0.045em spacing
Body: 18px | 1.6 line height | 0em spacing

LAYOUT:
Border Radius: 16px
Shadows: Hard shadows enabled (or soft shadow: 0 4px 16px rgba(15,23,42,0.08))
Strokes: 1px #E2E8F0 (optional, for technical content)

LOGO:
Lighthouse HLTH logo (top-left, 32-40px height)

AI IMAGES:
"clean clinical photography, bright natural lighting, teal and green accents,
modern healthcare facility, sustainable design, minimal aesthetic"
```

---

## Step-by-Step Gamma Theme Builder Instructions

### Step 1: Start Theme Builder
1. Click "Build a theme" in Gamma
2. Choose "Start from scratch" (don't import a file)

### Step 2: Set Colors
**In the Colors panel:**

1. **Primary Accent Color:**
   - Click color picker
   - Enter Hex: `#057C8B`
   - Confirm

2. **Secondary Accent Color:**
   - Click color picker
   - Enter Hex: `#16A34A`
   - Confirm

3. **Text Colors:**
   - Main Text: `#0F172A`
   - Secondary Text: `#475569`
   - (If muted text option exists: `#64748B`)

4. **Card Backgrounds:**
   - Primary Card BG: `#FFFFFF` (solid)
   - Secondary Card BG (if available): `#F3F5F7` (solid)

5. **Page Background:**
   - **Recommended:** Choose "Gradient"
   - Top color: `#EDF2F7`
   - Bottom color: `#F3F5F7`
   - Direction: Top to Bottom
   - **Alternative:** Solid `#FAFBFC`

### Step 3: Set Typography
**In the Typography panel:**

1. **Heading Font:**
   - Search for and select: **Inter**
   - Weight: 600 (Semi-Bold)

2. **Body Font:**
   - Search for and select: **Inter**
   - Weight: 400 (Regular)

3. **Advanced Settings (if available):**
   - Heading Line Height: 1.2
   - Heading Letter Spacing: -0.03em
   - Body Line Height: 1.6
   - Body Letter Spacing: 0em
   - Base Font Size: 18px

### Step 4: Set Layout & Shapes
**In the Layout & Shapes panel:**

1. **Border Radius (Roundness):**
   - Set to: **16px**
   - (Or use slider to position at "moderate" roundness)

2. **Shadows:**
   - Enable: **Hard Shadows** (if available)
   - If only soft shadows: Use default or light setting

3. **Strokes (optional):**
   - Enable if creating technical/data-heavy presentations
   - Color: `#E2E8F0`
   - Width: 1px

### Step 5: Upload Brand Assets
**In the Brand Assets panel:**

1. **Logo:**
   - Click "Upload Logo"
   - Select Lighthouse HLTH logo file (SVG or high-res PNG)
   - Confirm upload

2. **AI Image Style:**
   - In the keywords field, paste:
   ```
   clean clinical photography, bright natural lighting, teal and green accents,
   modern healthcare facility, professional medical environment, sustainable design,
   minimal aesthetic, white surfaces
   ```

### Step 6: Save & Name Theme
1. Click "Save Theme"
2. Name: **Lighthouse HLTH - Professional**
3. Description: "Official Lighthouse HLTH brand theme for presentations, decks, and marketing materials"
4. Confirm save

---

## Use Cases & Recommendations

### When to Use This Theme

**✅ Perfect For:**
- CFO decks and board presentations
- Customer sales presentations (Colorado Playbook, ROI models)
- Investor pitch decks
- Partnership proposals
- Conference presentations
- Product demos
- Marketing one-pagers

**⚠️ Consider Alternatives For:**
- Internal technical documentation (use simpler, higher-contrast theme)
- Quick team updates (use default Gamma themes for speed)
- Highly visual/creative pitches (consider more image-forward theme)

### Theme Variations

**Variation 1: "Clinical Technical" (for engineering/operations audiences)**
- Same colors
- Border radius: 12px (sharper corners)
- Enable strokes: 1px on all cards
- Hard shadows disabled (flat, technical look)

**Variation 2: "Mission-Driven Warm" (for Catholic health systems, community benefit)**
- Primary: `#057C8B` (keep)
- Secondary: `#16A34A` (keep)
- Add accent: `#A3E635` (Lighthouse Lime) for energy/optimism
- Softer shadows (no hard shadows)
- Border radius: 20px (warmer, more approachable)

**Variation 3: "Data Dashboard" (for metrics-heavy presentations)**
- Same colors
- Increase contrast: Use `#0F172A` for more elements
- Enable strokes on all content blocks
- Monospace font for numeric values (if Gamma supports)

---

## Brand Consistency Checklist

Before finalizing any Gamma presentation, verify:

- [ ] Primary teal (`#057C8B`) used for CTAs and key emphasis
- [ ] Green (`#16A34A`) used only for success/sustainability wins
- [ ] Text hierarchy clear (dark for main, medium gray for secondary)
- [ ] Sufficient white space (avoid cramped layouts)
- [ ] Logo present in header (if formal presentation)
- [ ] Page backgrounds consistent (don't mix solid + gradient randomly)
- [ ] No off-brand colors introduced (red only for critical alerts)
- [ ] Inter font used throughout (no accidental font mixing)

---

## Troubleshooting

### "Inter font not available in Gamma"
**Solution:** Use these fallbacks in order:
1. **System UI** (Gamma default, similar to Inter)
2. **Helvetica Neue** (if available)
3. **Arial** (last resort, widely available)

### "Hard shadows not rendering correctly"
**Solution:** Switch to soft shadow with these settings:
- Blur: 16px
- Offset Y: 4px
- Offset X: 0px
- Color: `rgba(15, 23, 42, 0.08)`

### "Gradient backgrounds causing text readability issues"
**Solution:**
- Use solid white (`#FFFFFF`) for cards with body text
- Reserve gradient backgrounds for page-level only
- Increase text contrast if needed (use `#0F172A` for all body text)

### "Theme looks different on mobile vs desktop"
**Gamma Limitation:** Gamma optimizes for presentation display
**Workaround:** Preview in Gamma's "Mobile" view before sharing links

---

## Exporting & Sharing

### To Share This Theme with Team
1. Save theme in Gamma
2. Share Gamma workspace with team members
3. They can access theme via "Theme Picker" → "Team Themes"

### To Apply Theme to Existing Decks
1. Open existing Gamma doc
2. Click "Theme" in toolbar
3. Select "Lighthouse HLTH - Professional"
4. Gamma will auto-apply (may need to adjust individual slides)

### To Export Brand Guidelines
Use this markdown file as reference:
- Share with designers, marketers, partners
- Include in brand asset repository
- Reference in onboarding materials

---

## Version History

**v1.0 (January 2026)**
- Initial Gamma theme specification
- Based on Lighthouse HLTH Design System v1.0.0 "Luminous Climate Clinical"
- Aligned with lighthousehlth.com and lighthouse-hlth-ui brand standards

---

## Contact & Support

**Questions about theme usage:**
- Reference: `/Users/nmvinson/Projects/IndigoLabs/lighthouse_hlth/lighthouse-hlth-ui/DESIGN_SYSTEM.md`
- Framer brand reference: lighthousehlth.com
- Design system documentation: lighthouse-hlth-ui repo

**Need custom theme variations:**
Request via Lighthouse HLTH product team with specific use case requirements.

---

## Appendix: Color Palette Quick Reference

### Primary Colors
```
Deep Teal:     #057C8B  (Primary buttons, links)
Soft Teal:     #0E9BA7  (Hover states - use if Gamma supports)
Green:         #16A34A  (Success, sustainability)
Lime Accent:   #A3E635  (Sparingly, energy/optimism)
```

### Semantic Colors
```
Warning:       #F97316  (Amber - attention needed)
Critical:      #DC2626  (Red - errors, critical)
Info:          #3B82F6  (Blue - informational)
```

### Surfaces & Backgrounds
```
Canvas:        #F3F5F7  (Page backgrounds)
Surface:       #FFFFFF  (Cards, panels)
Surface Sunken:#EDF2F7  (Inset areas)
Border Subtle: #E2E8F0  (Dividers, borders)
```

### Text Colors
```
Main:          #0F172A  (Primary text, headings)
Secondary:     #475569  (Secondary content)
Muted:         #64748B  (Labels, captions)
Disabled:      #94A3B8  (Disabled states)
Inverse:       #FFFFFF  (Text on dark backgrounds)
```

### GHG Emission Colors (if creating sustainability-specific decks)
```
Scope 1:       #D97706  (Orange - direct emissions)
Scope 2:       #2563EB  (Blue - energy)
Scope 3:       #0D9488  (Teal - supply chain)
Waste:         #059669  (Green - waste management)
```

---

**Lighthouse HLTH Gamma Theme Specification**
**© 2026 Lighthouse HLTH. All rights reserved.**

**Last Updated:** January 2, 2026
**Maintained by:** Product Design Team
