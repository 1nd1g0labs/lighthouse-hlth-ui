# Migration Guide

## v0.6.0 → v1.0.0 (BREAKING CHANGES)

**Release Date:** TBD (Q1 2026)
**Migration Timeline:** 2-3 months recommended
**Status:** Deprecation warnings active in v0.6.0

### Overview

Version 1.0.0 represents the completion of Framer design system alignment. All deprecated components and design tokens will be removed. This is a **breaking change** release.

**Critical:** Start planning migration now. v1.0.0 will break code using deprecated components/tokens.

---

### Breaking Changes

#### 1. Button Component Removal

**Status:** Deprecated in v0.6.0, removed in v1.0.0

**Old (v0.6.0 and earlier):**
```typescript
import { Button } from '@1nd1g0labs/lighthouse-hlth-ui';

<Button variant="primary">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

**New (v1.0.0+):**
```typescript
import { Button2 } from '@1nd1g0labs/lighthouse-hlth-ui';

<Button2 variant="green-right">Click me</Button>
<Button2 variant="white-right">Secondary</Button>
<Button2 variant="white-right">Outline</Button>
```

**Why:** Button2 matches Framer marketing site design exactly with animated arrow hover effects and precise color matching.

**Variant Mapping:**
| Old Button | New Button2 | Notes |
|------------|-------------|-------|
| `variant="primary"` | `variant="green-right"` | Default with animated arrow |
| `variant="secondary"` | `variant="white-right"` | White background with border |
| `variant="outline"` | `variant="white-right"` | Same as secondary |
| `variant="accent"` | `variant="green-right"` | Use primary green |
| `variant="ghost"` | Use `LinkButton` | Text link with arrow animation |
| `variant="destructive"` | Use `FormButton` | With error state |

**Size Mapping:**
| Old Button | New Button2 | Height |
|------------|-------------|--------|
| `size="sm"` | `size="default"` | 46px |
| `size="md"` | `size="default"` | 46px |
| `size="lg"` | `size="large"` | 56px |
| `size="xl"` | `size="large"` | 56px |

**Example Migration:**
```typescript
// BEFORE (v0.6.0)
<Button variant="primary" size="md">
  Learn More
</Button>

// AFTER (v1.0.0)
<Button2 variant="green-right" size="default">
  Learn More
</Button2>
```

#### 2. Design Token Removal

**Status:** Deprecated in v0.6.0, removed in v1.0.0

**Removed Tokens:**
- `colors.primaryOld` (#1A8B8B)
- `colors.accentOld` (#FF8B4B)

**TypeScript Migration:**
```typescript
// BEFORE (v0.6.0)
import { colors } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';
const color = colors.primaryOld; // #1A8B8B (old, darker)

// AFTER (v1.0.0)
import { colors } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';
const color = colors.primary[500]; // #057C8B (Framer exact)
```

**Tailwind CSS Migration:**
```tsx
// BEFORE (v0.6.0)
<div className="bg-primary-old text-accent-old">
  Content
</div>

// AFTER (v1.0.0)
<div className="bg-primary-500 text-accent-500">
  Content
</div>
```

**Color Differences:**
- Old primary: `#1A8B8B` (darker, less vibrant)
- New primary: `#057C8B` (lighter, more vibrant - Framer exact)
- Old accent: `#FF8B4B` (softer orange)
- New accent: `#FF833B` (brighter orange - Framer exact)

---

### Migration Checklist

**Phase 1: Audit (Week 1)**
- [ ] Search codebase for `<Button` usage: `grep -r "<Button" src/`
- [ ] Identify all Button variant usage
- [ ] Search for `primaryOld`: `grep -r "primaryOld" src/`
- [ ] Search for `accentOld`: `grep -r "accentOld" src/`
- [ ] Search for Tailwind classes: `grep -r "bg-primary-old\|text-primary-old\|bg-accent-old\|text-accent-old" src/`
- [ ] Count affected files and estimate effort

**Phase 2: Update Components (Weeks 2-4)**
- [ ] Replace `Button` imports with `Button2`
- [ ] Update variant props per mapping table
- [ ] Update size props per mapping table
- [ ] Remove `leftIcon` and `rightIcon` props (Button2 has built-in arrow)
- [ ] Test visual appearance matches expectations
- [ ] Update component tests to use Button2
- [ ] Update Storybook stories

**Phase 3: Update Styles (Weeks 5-6)**
- [ ] Replace `colors.primaryOld` with `colors.primary[500]`
- [ ] Replace `colors.accentOld` with `colors.accent[500]`
- [ ] Update Tailwind classes (`bg-primary-old` → `bg-primary-500`)
- [ ] Update custom CSS using old color values
- [ ] Verify color contrast still meets WCAG 2.1 AA
- [ ] Update data visualization charts using old colors

**Phase 4: Testing (Week 7)**
- [ ] Unit tests passing with new components
- [ ] Visual regression testing complete
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive testing (iOS Safari, Android Chrome)
- [ ] Integration tests updated and passing

**Phase 5: Deploy (Week 8)**
- [ ] Deploy to staging environment
- [ ] Stakeholder review and approval
- [ ] Monitor error tracking (Sentry) for issues
- [ ] Deploy to production with feature flag
- [ ] Gradual rollout to users
- [ ] Monitor analytics and user feedback

---

### Automated Migration

We provide a codemod to automate most of the migration:

```bash
# Install and run codemod
npx @1nd1g0labs/lighthouse-hlth-ui-codemod v0-to-v1 ./src

# Review changes
git diff

# Test thoroughly before committing
npm test
npm run storybook
```

**What the codemod does:**
- Replaces `Button` imports with `Button2`
- Updates variant prop values (primary → green-right, etc.)
- Replaces `colors.primaryOld` with `colors.primary[500]`
- Replaces `colors.accentOld` with `colors.accent[500]`
- Updates Tailwind classes (bg-primary-old → bg-primary-500)
- Generates migration report with statistics

**What requires manual review:**
- Complex variant logic (conditional variants)
- Custom styled buttons extending base Button
- Icon props (leftIcon/rightIcon removed in Button2)
- Size prop edge cases
- Color usage in custom CSS files
- Data visualization color arrays

---

### Support & Resources

**Documentation:**
- [DEPRECATION_TIMELINE.md](./DEPRECATION_TIMELINE.md) - Detailed timeline
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- Storybook: `npm run storybook` - Visual component examples

**Getting Help:**
- GitHub Issues: https://github.com/1nd1g0labs/lighthouse-hlth-ui/issues
- Email: support@lighthousehlth.com
- Migration Support: 2-3 months from v0.6.0 release

**Timeline:**
- **Nov 2025:** v0.6.0 released (deprecation warnings)
- **Dec 2025 - Jan 2026:** Migration period
- **Q1 2026:** v1.0.0 released (breaking changes)

---

### Rollback Plan

If issues arise after v1.0.0 upgrade:

**Option 1: Temporary Rollback**
```json
{
  "dependencies": {
    "@1nd1g0labs/lighthouse-hlth-ui": "0.6.0"
  }
}
```

**Option 2: Gradual Migration**
- Keep v0.6.0 in production
- Complete migration in development/staging
- Test thoroughly before production upgrade

**Important:** No rollback support after 6 months from v1.0.0 release. Security patches will only be applied to v1.x+.

---

### FAQ

**Q: Can I use both Button and Button2 during migration?**
A: Yes! v0.6.0 supports both. Migrate incrementally, file by file.

**Q: Will v0.6.0 break my existing code?**
A: No. v0.6.0 is fully backward compatible. You'll see console warnings only.

**Q: How long do I have to migrate?**
A: Recommended 2-3 months. v1.0.0 will be released in Q1 2026.

**Q: What if I can't migrate in time?**
A: Pin to v0.6.0 until migration is complete. No rush, but v1.x will have new features.

**Q: Will the codemod handle everything?**
A: It handles 80-90% of cases. Manual review required for complex scenarios.

**Q: Do I need to update my Tailwind config?**
A: No. v0.6.0+ includes all necessary Tailwind token updates.

---

## v0.2.x → v0.3.0 (Design Token Alignment)

**Status:** Completed - No breaking changes

## Overview

Version 0.3.0 introduces **Framer-aligned design tokens** as Phase 1 of the design system reconciliation. The Lighthouse HLTH Framer marketing site is now the single source of truth for design tokens.

**Breaking Changes:** NONE

All changes in this release are **additive**. Existing code will continue to work without modifications. This guide helps you adopt the new Framer-aligned tokens for visual consistency across your applications.

---

## What Changed

### 1. Color System

#### Primary Color (Lighthouse Teal)
- **Old:** `#1A8B8B` (too dark)
- **New:** `#057C8B` (Framer exact: rgb(5, 124, 139))

#### Accent Color (Orange)
- **Old:** `#FF8B4B`
- **New:** `#FF833B` (Framer exact)

#### New Neutral Colors
- `black: #000000` (Framer `/Black`)
- `ash-gray: #7F8082` (Framer `/Ash Gray`)
- `grey: #D1D1D1` (Framer `/Grey`)
- `white: #FFFFFF` (Framer `/White`)
- `white-off: #FCFCFC` (Framer `/White off`)

### 2. Typography

#### Font Family
- **Old:** Mixed Inter/JetBrains Mono
- **New:** Inter for everything (Option B - font fallback strategy)

#### Heading Sizes (Framer Exact)
- h1: 54px (was 36px)
- h2: 42px (was 30px)
- h3: 38px (was 24px)
- h4: 32px (was 20px)
- h5: 28px (was 18px)
- h6: 24px (was 16px)

#### Body Sizes (Framer Exact)
- xl: 20px
- lg: 18px
- base: 16px (default)
- sm: 14px

#### Line Heights & Letter Spacing
All typography now uses Framer-exact line heights and negative letter spacing for headings.

### 3. Spacing

**New Framer-specific gaps:**
- 5px (spacing 1.25)
- 7px (spacing 1.75)
- 9px (spacing 2.25)

### 4. Border Radius

**Updated `full` value:**
- **Old:** `9999px`
- **New:** `999px` (Framer button pill shape)

---

## Migration Strategies

### Strategy A: Gradual Migration (Recommended)

Adopt new tokens incrementally as you work on components. Old tokens remain available.

**Timeline:** 1-3 months
**Risk:** Low
**Benefit:** No disruption to existing work

### Strategy B: All-At-Once Migration

Update all components to use new tokens in a single sprint.

**Timeline:** 1-2 weeks
**Risk:** Medium (visual regression testing required)
**Benefit:** Complete consistency achieved quickly

---

## Step-by-Step Migration

### Colors

#### Tailwind CSS Classes

```tsx
// OLD - Still works, but deprecated
<div className="bg-primary-old text-accent-old">

// NEW - Framer-aligned
<div className="bg-primary-500 text-accent-500">

// OR use named neutrals
<div className="bg-ash-gray text-black border-grey">
```

#### Design Tokens (TypeScript)

```typescript
import { colors } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';

// OLD
const oldPrimary = colors.primaryOld; // #1A8B8B - deprecated

// NEW
const newPrimary = colors.primary[500]; // #057C8B - Framer aligned
```

#### Chart/Data Visualization

```typescript
import { colors } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';

// Charts automatically use new colors
const chartColors = colors.dataViz.chart;
// chartColors[0] = '#057C8B' (new Framer primary)
// chartColors[2] = '#FF833B' (new Framer accent)
```

### Typography

#### Tailwind CSS Classes

```tsx
// OLD - Standard Tailwind (still works)
<h1 className="text-4xl font-bold">Heading</h1>
<p className="text-lg">Body text</p>

// NEW - Framer-aligned utilities
<h1 className="text-h1">Heading</h1>  {/* 54px, -0.045em tracking */}
<p className="text-body-lg">Body text</p>  {/* 18px, 1.55em line-height */}

// With line height and letter spacing
<h2 className="text-h2 leading-h2 tracking-h2">Subheading</h2>
```

#### Design Tokens (TypeScript)

```typescript
import { typography } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';

// Access Framer text styles
const h1Style = typography.textStyles.heading.h1;
// {
//   fontSize: '54px',
//   fontWeight: 600,
//   lineHeight: '1.2em',
//   letterSpacing: '-0.045em',
//   fontFamily: 'Inter'
// }

const bodyStyle = typography.textStyles.body.base;
// {
//   fontSize: '16px',
//   fontWeight: 400,
//   lineHeight: '1.6em',
//   letterSpacing: '0em',
//   fontFamily: 'Inter'
// }
```

#### Framer Text Style Mappings

| Framer Style | Token | Tailwind Class | Size |
|--------------|-------|----------------|------|
| `/Heading xl` | `typography.textStyles.heading.xl` | `text-h1` | 54px |
| `/Heading l` | `typography.textStyles.heading.l` | `text-h2` | 42px |
| `/Heading m` | `typography.textStyles.heading.m` | `text-h3` | 38px |
| `/Heading s` | `typography.textStyles.heading.s` | `text-h4` | 32px |
| `/Heading xs` | `typography.textStyles.heading.xs` | `text-h5` | 28px |
| `/Heading xxs` | `typography.textStyles.heading.xxs` | `text-h6` | 24px |
| `/Paragraph xl` | `typography.textStyles.body.xl` | `text-body-xl` | 20px |
| `/Paragraph l` | `typography.textStyles.body.lg` | `text-body-lg` | 18px |
| `/Paragraph m` | `typography.textStyles.body.base` | `text-body` | 16px |
| `/Paragraph s` | `typography.textStyles.body.sm` | `text-body-sm` | 14px |

### Spacing

#### Framer-Specific Gaps

```tsx
// OLD - Standard gaps
<div className="gap-2">  {/* 8px */}

// NEW - Framer-specific gaps
<div className="gap-1.25">  {/* 5px - Framer gap */}
<div className="gap-1.75">  {/* 7px - Framer gap */}
<div className="gap-2.25">  {/* 9px - Framer gap */}
```

#### Design Tokens

```typescript
import { semanticSpacing } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';

// Access Framer gaps
const framerGap5 = semanticSpacing.gap.framer5;  // '0.3125rem' (5px)
const framerGap7 = semanticSpacing.gap.framer7;  // '0.4375rem' (7px)
const framerGap9 = semanticSpacing.gap.framer9;  // '0.5625rem' (9px)
```

### Border Radius

#### Button Pill Shape

```tsx
// OLD - Worked but not Framer-exact
<button className="rounded-full">  {/* 9999px */}

// NEW - Framer-exact pill shape
<button className="rounded-full">  {/* 999px */}
```

**Note:** Tailwind class stays the same, but the underlying value changed from 9999px to 999px to match Framer.

---

## Component-Specific Migrations

### Button Component

```tsx
// OLD
<Button className="bg-primary-old rounded-full">
  Click Me
</Button>

// NEW - Framer-aligned
<Button className="bg-primary-500 rounded-full text-body">
  Click Me
</Button>
```

### Card Component

```tsx
// OLD
<Card className="text-lg">
  <h2 className="text-2xl font-bold">Title</h2>
  <p>Description</p>
</Card>

// NEW - Framer-aligned
<Card className="text-body">
  <h2 className="text-h2 leading-h2 tracking-h2">Title</h2>
  <p className="text-body-lg">Description</p>
</Card>
```

### MetricCard Component

```tsx
// OLD
<MetricCard
  title="Carbon Reduction"
  value="23%"
  className="text-primary-old"
/>

// NEW - Framer-aligned
<MetricCard
  title="Carbon Reduction"
  value="23%"
  className="text-primary-500"
/>
```

---

## Testing Your Migration

### Visual Regression Testing

1. **Before Migration:**
   - Screenshot components in Storybook
   - Document current color values

2. **After Migration:**
   - Screenshot same components
   - Compare against Framer marketing site
   - Look for:
     - Lighter primary teal (#057C8B vs #1A8B8B)
     - Slightly different orange (#FF833B vs #FF8B4B)
     - Larger heading sizes (if using new utilities)

### Automated Testing

```typescript
// Test token values
import { colors, typography } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';

describe('Framer Alignment', () => {
  it('should have Framer-exact primary color', () => {
    expect(colors.primary[500]).toBe('#057C8B');
  });

  it('should have Framer-exact h1 size', () => {
    expect(typography.fontSize.h1).toBe('54px');
  });

  it('should have Framer-exact h1 letter spacing', () => {
    expect(typography.letterSpacing.h1).toBe('-0.045em');
  });
});
```

---

## Checklist

Use this checklist to track your migration progress:

### Colors
- [ ] Update primary color from `#1A8B8B` to `#057C8B`
- [ ] Update accent color from `#FF8B4B` to `#FF833B`
- [ ] Replace deprecated `primaryOld` and `accentOld` references
- [ ] Adopt named neutrals (black, ash-gray, grey, white, white-off) where appropriate
- [ ] Update data visualization charts to use new colors

### Typography
- [ ] Replace standard heading classes with Framer utilities (`text-h1`, `text-h2`, etc.)
- [ ] Replace body text classes with Framer utilities (`text-body-xl`, `text-body-lg`, etc.)
- [ ] Add line height utilities (`leading-h1`, `leading-body`, etc.)
- [ ] Add letter spacing utilities (`tracking-h1`, `tracking-h2`, etc.)
- [ ] Verify all fonts use Inter family

### Spacing
- [ ] Use Framer gaps (1.25, 1.75, 2.25) where appropriate
- [ ] Verify button and card spacing matches Framer

### Border Radius
- [ ] Verify pill buttons use `rounded-full` (now 999px)

### Testing
- [ ] Visual regression testing complete
- [ ] Components match Framer marketing site
- [ ] Storybook updated and reviewed
- [ ] Automated tests passing

---

## Support

### Resources
- **Framer Marketing Site:** https://lighthousehlth.com
- **Design Token Documentation:** See token files in `src/tokens/`
- **Storybook:** Run `npm run storybook` to see components

### Questions?
- Review `CHANGELOG.md` for complete list of changes
- Check token file comments for Framer mappings
- Inspect Framer site for exact color/typography values

---

## Next Steps (Phase 2+)

After completing Phase 1 migration, future phases will include:

1. **Phase 2:** Component library updates to use Framer tokens by default
2. **Phase 3:** Advanced Framer features (animations, interactions)
3. **Phase 4:** Accessibility audit and WCAG compliance verification
4. **Phase 5:** Performance optimization and tree-shaking

---

**Version:** 0.3.0
**Last Updated:** 2025-11-22
**Status:** Phase 1 Complete - Tokens Aligned
