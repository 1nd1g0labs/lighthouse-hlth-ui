# Publishing Guide for Lighthouse HLTH UI

This guide explains how to publish the Lighthouse HLTH UI component library to GitHub Package Registry (`npm.pkg.github.com`) for consumption by downstream applications.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [One-Time Setup](#one-time-setup)
3. [Publishing Workflow](#publishing-workflow)
4. [Consuming the Package](#consuming-the-package)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you can publish, ensure you have:

- Write access to the `1nd1g0labs/lighthouse-hlth-ui` GitHub repository
- A GitHub Personal Access Token (PAT) with `write:packages` scope
- Node.js and npm installed

---

## One-Time Setup

### Step 1: Create a GitHub Personal Access Token

You can create either a **personal PAT** or an **organization-level PAT**.

#### Option A: Personal Access Token

1. Go to [GitHub Settings → Developer Settings → Personal Access Tokens](https://github.com/settings/tokens)
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a descriptive name: `lighthouse-hlth-ui-publishing`
4. Set expiration (recommended: 90 days or custom)
5. Select the following scopes:
   - ✅ `write:packages` (allows publishing)
   - ✅ `read:packages` (allows installing)
   - ✅ `delete:packages` (optional, for removing versions)
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again)

#### Option B: Organization-Level PAT (Recommended for Team)

1. Go to your organization settings: `https://github.com/organizations/1nd1g0labs/settings/personal-access-tokens`
2. Follow similar steps as above
3. Organization PATs can be managed centrally and have better audit trails

### Step 2: Configure NPM Authentication

1. **Copy the example npmrc file:**
   ```bash
   cp .npmrc.example .npmrc
   ```

2. **Edit `.npmrc` and replace `YOUR_GITHUB_PAT` with your actual token:**
   ```
   @1nd1g0labs:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=ghp_YourActualTokenHere
   ```

3. **Verify `.npmrc` is gitignored:**
   ```bash
   git check-ignore .npmrc
   # Should output: .npmrc
   ```

   ⚠️ **NEVER commit `.npmrc` to version control!** It contains your authentication token.

---

## Publishing Workflow

Follow this workflow every time you want to publish a new version:

### Step 1: Complete Your Component Changes

Ensure all component edits, tests, and Storybook stories are complete.

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build Storybook to verify all stories work
npm run build-storybook
```

### Step 2: Build the Library

The build step compiles your TypeScript components into distributable JavaScript:

```bash
npm run build:lib
```

This will:
- Generate `dist/index.js` (CommonJS)
- Generate `dist/index.mjs` (ES Modules)
- Generate `dist/index.d.ts` (TypeScript definitions)
- Copy `dist/styles.css` (Tailwind styles)
- Generate token and Framer exports

**Verify the build:**
```bash
ls -la dist/
# Should show: index.js, index.mjs, index.d.ts, styles.css, tokens/, framer/
```

### Step 3: Update CHANGELOG.md

Add an entry to `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com/) format:

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New Component: MetricCard with variant system

### Changed
- Button: Updated focus ring to match brand standards

### Fixed
- Select: Fixed aria-invalid attribute (now boolean)

### Breaking Changes
- Card: Renamed `sustainability` variant to `impact` (migration: find/replace)
```

### Step 4: Version Bump

Use npm's built-in versioning to update `package.json` and create a git tag:

```bash
# For bug fixes (0.1.0 → 0.1.1)
npm version patch -m "Fix: Description of fixes"

# For new features (0.1.0 → 0.2.0)
npm version minor -m "Feature: Description of features"

# For breaking changes (0.1.0 → 1.0.0)
npm version major -m "Breaking: Description of changes"
```

**What this does:**
- Updates the `version` field in `package.json`
- Creates a git commit with the version bump
- Creates a git tag (e.g., `v0.2.0`)

**Semantic Versioning Guidelines:**
- **Patch (0.0.X)**: Bug fixes, documentation updates, internal refactors
- **Minor (0.X.0)**: New features, new components, non-breaking enhancements
- **Major (X.0.0)**: Breaking changes that require consumer code updates

### Step 5: Publish to GitHub Package Registry

```bash
npm publish
```

**What this does:**
- Runs `prepublishOnly` script (builds library and runs type-check)
- Authenticates using your `.npmrc` token
- Uploads the package to `https://npm.pkg.github.com/@1nd1g0labs/lighthouse-hlth-ui`

**Verify the publish:**
1. Go to https://github.com/orgs/1nd1g0labs/packages
2. Find `lighthouse-hlth-ui`
3. Confirm the new version appears

### Step 6: Push Git Tags

Push your version commit and tag to GitHub:

```bash
git push
git push --tags
```

### Step 7: Communicate the Release

Notify your team with:
- **Version number**: e.g., `v0.2.0`
- **Summary of changes**: Copy from CHANGELOG.md
- **Installation instructions**: See [Consuming the Package](#consuming-the-package)
- **Storybook URL**: Link to deployed Storybook docs (if applicable)
- **Breaking changes**: Highlight any migration steps required

---

## Consuming the Package

Downstream applications need to configure GitHub Package Registry to install your library.

### For Consumer Applications

#### Step 1: Configure NPM Registry

Create or update `.npmrc` in the consuming application:

```
@1nd1g0labs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

**Note:** Consumers need a GitHub PAT with `read:packages` scope.

#### Step 2: Install the Package

```bash
npm install @1nd1g0labs/lighthouse-hlth-ui@0.2.0
```

Or add to `package.json`:

```json
{
  "dependencies": {
    "@1nd1g0labs/lighthouse-hlth-ui": "^0.2.0"
  }
}
```

#### Step 3: Import Components

```tsx
import { Button, Card, MetricCard } from '@1nd1g0labs/lighthouse-hlth-ui';
import '@1nd1g0labs/lighthouse-hlth-ui/dist/styles.css';

export default function Dashboard() {
  return (
    <Card variant="impact">
      <MetricCard
        label="Carbon Saved"
        value="1,234"
        unit="tons CO₂e"
        trend="up"
        trendValue="23%"
      />
      <Button variant="primary">View Details</Button>
    </Card>
  );
}
```

---

## Troubleshooting

### Error: `401 Unauthorized`

**Cause:** Invalid or missing authentication token.

**Fix:**
1. Verify your `.npmrc` has the correct token
2. Check token hasn't expired
3. Ensure token has `write:packages` scope
4. Try regenerating the token

### Error: `404 Not Found`

**Cause:** Package name doesn't match GitHub org or repo settings.

**Fix:**
1. Verify package name in `package.json` is `@1nd1g0labs/lighthouse-hlth-ui`
2. Ensure repository exists and you have write access

### Error: `403 Forbidden`

**Cause:** Token lacks required permissions or package visibility restrictions.

**Fix:**
1. Check token has `write:packages` scope
2. Verify you're a member of the `1nd1g0labs` organization with appropriate permissions

### Error: Build Fails During Publish

**Cause:** `prepublishOnly` script failed (type errors or build issues).

**Fix:**
1. Run `npm run type-check` to see TypeScript errors
2. Run `npm run build:lib` to see build errors
3. Fix issues and try publishing again

### Package Not Showing in GitHub Packages

**Cause:** Publish succeeded but visibility is restricted.

**Fix:**
1. Go to https://github.com/orgs/1nd1g0labs/packages
2. Find your package
3. Check **Package settings** → **Danger Zone** → **Change visibility**

### Consumers Can't Install the Package

**Cause:** They lack authentication or package is private.

**Fix:**
1. Ensure consumers have `.npmrc` configured with a valid token
2. Their token needs `read:packages` scope
3. They must be members of `1nd1g0labs` org (for private packages)

---

## Quick Reference

### Common Commands

```bash
# Build library for distribution
npm run build:lib

# Version bump (patch/minor/major)
npm version patch -m "Fix: Description"

# Publish to GitHub Package Registry
npm publish

# Push version tag
git push --tags

# Check what files will be published
npm pack --dry-run
```

### Version Strategy

| Change Type | Version | Example |
|------------|---------|---------|
| Bug fix | `patch` | 0.1.0 → 0.1.1 |
| New feature | `minor` | 0.1.0 → 0.2.0 |
| Breaking change | `major` | 0.1.0 → 1.0.0 |

### Publishing Checklist

- [ ] Component changes complete and tested
- [ ] Storybook stories updated
- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] `npm run build:lib` succeeds
- [ ] `CHANGELOG.md` updated
- [ ] Version bumped with `npm version`
- [ ] Published with `npm publish`
- [ ] Git tags pushed with `git push --tags`
- [ ] Team notified with release notes

---

## Additional Resources

- [GitHub Packages Documentation](https://docs.github.com/en/packages)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [npm-version CLI](https://docs.npmjs.com/cli/v10/commands/npm-version)
- [npm-publish CLI](https://docs.npmjs.com/cli/v10/commands/npm-publish)

---

**Questions?** Contact the Lighthouse HLTH development team or open an issue in the repository.
