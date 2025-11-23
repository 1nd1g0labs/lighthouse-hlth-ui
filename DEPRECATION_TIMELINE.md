# Deprecation Timeline

## Overview

This document outlines the deprecation and removal timeline for components and tokens being replaced in the Framer design system alignment initiative.

**Purpose:** Provide clear, predictable migration path for consumers of `@1nd1g0labs/lighthouse-hlth-ui`

**Philosophy:** Gradual, well-communicated deprecations with generous migration windows

---

## Timeline Overview

| Version | Release Date | Status | User Impact | Action Required |
|---------|--------------|--------|-------------|-----------------|
| v0.6.0 | November 2025 | Deprecation warnings | Low - Warnings only | Start planning migration |
| v0.7.0 - v0.9.0 | Dec 2025 - Jan 2026 | Transition period | Low - Both APIs available | Complete migration |
| v1.0.0 | Q1 2026 | Breaking changes | HIGH - Code breaks | Migration must be complete |

---

## Detailed Timeline

### v0.6.0 (November 2025)

**Status:** Deprecation Warnings Added
**Release Type:** Non-breaking (minor version)

**What happens:**
- Console warnings appear when using deprecated components
- JSDoc `@deprecated` tags added for IDE support
- All old code continues to work exactly as before
- Migration documentation published (MIGRATION.md)

**Deprecated Items:**
- `Button` component
- `colors.primaryOld` design token (#1A8B8B)
- `colors.accentOld` design token (#FF8B4B)

**User Impact:** LOW
- No code changes required
- Console warnings in development
- IDE will show deprecation notices
- Production code unaffected

**Recommended Action:**
- Review deprecation warnings
- Read MIGRATION.md
- Plan migration timeline (2-3 months)
- Start migrating low-risk components

**Example Console Warning:**
```
[@1nd1g0labs/lighthouse-hlth-ui] DEPRECATION WARNING:
The "Button" component is deprecated and will be removed in v1.0.0.
Please migrate to "Button2" for Framer-aligned design.
See MIGRATION.md for details.
```

---

### v0.7.0 - v0.9.0 (December 2025 - January 2026)

**Status:** Transition Period
**Release Type:** Non-breaking (minor versions)

**What happens:**
- Both old and new components available
- Deprecation warnings continue
- Codemod tool released (v0.8.0)
- Migration support provided via GitHub Issues
- Potential new features added to new components only

**User Impact:** LOW
- Choose your own migration timeline
- Both APIs work side-by-side
- No forced changes
- Incremental migration possible

**Recommended Action:**
- Use codemod to automate migration: `npx @1nd1g0labs/lighthouse-hlth-ui-codemod v0-to-v1`
- Migrate components file-by-file
- Test thoroughly in staging
- Deploy incrementally to production
- Complete migration before v1.0.0

**Migration Phases:**
1. **Week 1-2:** Audit codebase, identify affected files
2. **Week 3-4:** Migrate Button components to Button2
3. **Week 5-6:** Migrate design tokens (primaryOld/accentOld)
4. **Week 7:** Testing and visual regression
5. **Week 8:** Deploy to production

---

### v1.0.0 (Q1 2026)

**Status:** Breaking Changes - Deprecated Items Removed
**Release Type:** Major version (breaking)

**What happens:**
- `Button` component completely removed from codebase
- `colors.primaryOld` and `colors.accentOld` removed
- Code using deprecated items will break with errors
- Only new Framer-aligned components available
- Security patches only for v1.x+ going forward

**Breaking Changes:**
```typescript
// This will ERROR in v1.0.0
import { Button } from '@1nd1g0labs/lighthouse-hlth-ui';
// Error: Module '"@1nd1g0labs/lighthouse-hlth-ui"' has no exported member 'Button'

// This will ERROR in v1.0.0
import { colors } from '@1nd1g0labs/lighthouse-hlth-ui/tokens';
const color = colors.primaryOld;
// Error: Property 'primaryOld' does not exist on type 'Colors'
```

**User Impact:** HIGH
- Code breaks if migration incomplete
- TypeScript compilation errors
- Runtime errors in JavaScript
- Must upgrade to v1.0.0 code before upgrading package

**Migration Required:** YES

**Action Required:**
- Ensure all migration complete before upgrading to v1.0.0
- Test thoroughly on v0.9.0
- Only upgrade to v1.0.0 when ready
- Or pin to v0.6.0-v0.9.0 until migration complete

**Rollback Plan:**
- Pin to v0.6.0+ if not ready: `"@1nd1g0labs/lighthouse-hlth-ui": "0.6.0"`
- Complete migration offline
- Upgrade when ready

**Important:** Security patches and bug fixes will only be applied to v1.x+ after 6 months from v1.0.0 release.

---

## Component-Specific Timelines

### Button → Button2

| Version | Date | Status | Details |
|---------|------|--------|---------|
| v0.6.0 | Nov 2025 | **Deprecated** | Warning appears in console on every render |
| v0.7.0 | Dec 2025 | **Deprecated** | Migration guide published in docs |
| v0.8.0 | Jan 2026 | **Deprecated** | Codemod available for automated migration |
| v0.9.0 | Feb 2026 | **Deprecated** | Final warning - 1 month to v1.0.0 |
| v1.0.0 | Q1 2026 | **REMOVED** | Must use Button2, no Button export |

**Migration Path:**
```typescript
// v0.6.0 - v0.9.0 (Both work)
import { Button } from '...';  // ⚠️ Warning
import { Button2 } from '...'; // ✅ Recommended

// v1.0.0+ (Only Button2)
import { Button2 } from '...'; // ✅ Required
import { Button } from '...';  // ❌ Error: no export 'Button'
```

---

### Design Tokens: primaryOld / accentOld

| Version | Date | Status | Details |
|---------|------|--------|---------|
| v0.6.0 | Nov 2025 | **Deprecated** | JSDoc @deprecated tag added |
| v0.7.0 | Dec 2025 | **Deprecated** | IDE shows strikethrough |
| v0.8.0 | Jan 2026 | **Deprecated** | Codemod updates references |
| v0.9.0 | Feb 2026 | **Deprecated** | Final warning |
| v1.0.0 | Q1 2026 | **REMOVED** | Property removed from colors object |

**Migration Path:**
```typescript
// v0.6.0 - v0.9.0 (Both work)
colors.primaryOld      // ⚠️ Deprecated
colors.primary[500]    // ✅ Recommended

// v1.0.0+ (Only new tokens)
colors.primary[500]    // ✅ Required
colors.primaryOld      // ❌ Error: property doesn't exist
```

---

## Migration Support Resources

### Documentation
- **MIGRATION.md** - Complete migration guide with code examples
- **CHANGELOG.md** - Version history and breaking changes
- **Storybook** - Visual comparison of old vs new components

### Tools
- **Codemod** (v0.8.0+) - Automated migration: `npx @1nd1g0labs/lighthouse-hlth-ui-codemod v0-to-v1`
- **TypeScript** - Compilation errors for deprecated API usage
- **ESLint Plugin** (planned) - Lint rules to flag deprecated usage

### Community Support
- **GitHub Issues** - https://github.com/1nd1g0labs/lighthouse-hlth-ui/issues
- **Email Support** - support@lighthousehlth.com
- **Migration Timeline** - 2-3 months recommended from v0.6.0

---

## Communication Plan

### v0.6.0 Release (Nov 2025)
- [ ] Publish blog post announcing deprecations
- [ ] Email notification to known library consumers
- [ ] Update README with deprecation notice
- [ ] Post in company Slack/Teams channels
- [ ] Tweet/LinkedIn announcement

### v0.8.0 Release (Jan 2026)
- [ ] Announce codemod availability
- [ ] Publish migration tutorial video
- [ ] Host office hours for migration support

### v0.9.0 Release (Feb 2026)
- [ ] Final warning email (1 month to v1.0.0)
- [ ] Blog post with migration checklist
- [ ] Reminder in company channels

### v1.0.0 Release (Q1 2026)
- [ ] Release announcement
- [ ] Breaking changes blog post
- [ ] Update documentation
- [ ] Monitor GitHub Issues for migration help

---

## Success Metrics

**Measuring Migration Progress:**
- Track deprecation warning volume in Sentry/logging
- Monitor package version adoption (npm stats)
- GitHub Issues related to migration
- Survey consumers about migration experience

**Goals:**
- 80% of known consumers migrated before v1.0.0
- Zero critical migration blockers
- Positive migration experience (NPS > 7)

---

## FAQ

**Q: Why deprecate Button instead of just updating it?**
A: Button2 has fundamentally different API (variants, animations). Breaking changes require major version. Deprecation path allows gradual migration.

**Q: Can I keep using v0.6.0 forever?**
A: Yes, but security patches will stop 6 months after v1.0.0. Recommend migrating within 1 year.

**Q: What if I find a bug in deprecated component?**
A: Critical security/accessibility bugs will be patched through v0.9.0. Feature requests only for new components.

**Q: Will there be more deprecations after v1.0.0?**
A: No planned deprecations. v1.0.0 represents stable, Framer-aligned API.

**Q: How often will you do breaking changes?**
A: Rarely. v1.0.0 is first major version. Future majors will follow similar deprecation timeline.

---

## Appendix: Deprecation Policy

**General Principles:**
1. **Generous Timelines** - Minimum 2-3 months warning
2. **Clear Communication** - Multiple channels, repeated notices
3. **Migration Tools** - Codemods and automation where possible
4. **Backward Compatibility** - Old code works through transition
5. **Support** - Help via Issues, docs, and direct support

**Version Numbering:**
- **Major (X.0.0)** - Breaking changes, deprecations removed
- **Minor (0.X.0)** - New features, deprecation warnings added
- **Patch (0.0.X)** - Bug fixes, no API changes

---

**Last Updated:** 2025-11-22
**Version:** 1.0
**Status:** Active for v0.6.0 → v1.0.0 migration

---

**Questions?** Contact support@lighthousehlth.com or open a GitHub Issue.
