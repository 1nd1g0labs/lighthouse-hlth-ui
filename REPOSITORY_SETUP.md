# Repository Setup Guide

This document outlines the GitHub repository settings required before making the
repository public. These settings protect your intellectual property while allowing
public code review.

## Pre-Publication Checklist

Before making the repository public, complete ALL items in this checklist:

### 1. Repository Settings

Navigate to: `https://github.com/1nd1g0labs/lighthouse-hlth-ui/settings`

#### General Settings

- [ ] Repository visibility: **Public** *(after completing this checklist)*
- [ ] Default branch: `main`
- [ ] **Disable** "Allow merge commits" (optional, keeps history clean)
- [ ] **Enable** "Allow squash merging" (recommended)
- [ ] **Enable** "Allow rebase merging" (recommended)
- [ ] **Enable** "Automatically delete head branches" (clean up merged branches)

#### Features

- [ ] **Disable** Wikis (use docs in repo instead)
- [ ] **Disable** Projects (use GitHub Projects separately if needed)
- [ ] **Enable** Issues (for bug reports)
- [ ] **Disable** Discussions (or enable if you want controlled discussions)

### 2. Branch Protection Rules

Navigate to: `https://github.com/1nd1g0labs/lighthouse-hlth-ui/settings/branches`

Click "Add branch protection rule" for `main`:

#### Branch Protection for `main`

**Branch name pattern:** `main`

- [ ] **Enable** "Require a pull request before merging"
  - [ ] **Enable** "Require approvals" → Set to **1** or **2**
  - [ ] **Enable** "Dismiss stale pull request approvals when new commits are pushed"
  - [ ] **Enable** "Require review from Code Owners" (if you create CODEOWNERS file)

- [ ] **Enable** "Require status checks to pass before merging"
  - [ ] **Enable** "Require branches to be up to date before merging"
  - Add required checks (after first workflow run):
    - `build`
    - `deploy`

- [ ] **Enable** "Require conversation resolution before merging"

- [ ] **Enable** "Require signed commits" (optional but recommended)

- [ ] **Enable** "Require linear history" (optional, keeps history clean)

- [ ] **Enable** "Do not allow bypassing the above settings"
  - [ ] **Uncheck** "Allow force pushes" → Nobody
  - [ ] **Uncheck** "Allow deletions"

- [ ] **Restrict who can push to matching branches** (CRITICAL)
  - Add only: Your GitHub username and/or Indigo Labs LLC organization members
  - This prevents the public from pushing directly

### 3. GitHub Pages Setup

Navigate to: `https://github.com/1nd1g0labs/lighthouse-hlth-ui/settings/pages`

- [ ] **Source:** "GitHub Actions"
- [ ] **Custom domain:** (optional) e.g., `design.lighthousehlth.com`
- [ ] **Enforce HTTPS:** Enabled (automatically enabled)

After first deployment, Storybook will be available at:
`https://1nd1g0labs.github.io/lighthouse-hlth-ui/`

### 4. Collaborators & Teams

Navigate to: `https://github.com/1nd1g0labs/lighthouse-hlth-ui/settings/access`

- [ ] Add only authorized Indigo Labs LLC team members
- [ ] Set appropriate permissions:
  - **Admin:** Owner only (you)
  - **Maintain:** Authorized maintainers
  - **Write:** Authorized contributors
  - **Read:** No public read access needed (repo is public)

### 5. Security Settings

Navigate to: `https://github.com/1nd1g0labs/lighthouse-hlth-ui/settings/security_analysis`

#### Security & Analysis

- [ ] **Enable** "Dependency graph"
- [ ] **Enable** "Dependabot alerts"
- [ ] **Enable** "Dependabot security updates"
- [ ] **Enable** "Secret scanning"
- [ ] **Enable** "Push protection" (prevents committing secrets)

#### Code Security & Analysis

- [ ] **Enable** "Private vulnerability reporting"
  - This allows security researchers to report vulnerabilities privately

### 6. Code Owners (Optional but Recommended)

Create `.github/CODEOWNERS` file:

```bash
# Default owners for everything in the repo
* @your-github-username @indigo-labs-team

# Specific owners for critical files
/LICENSE @your-github-username
/NOTICE @your-github-username
/package.json @your-github-username
/src/tokens/* @your-github-username @design-team
```

### 7. Issue Templates

Create `.github/ISSUE_TEMPLATE/` directory with templates:

#### Bug Report Template

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Report a bug (authorized users only)
title: '[BUG] '
labels: bug
assignees: ''
---

**Are you an authorized user of this library?**
- [ ] Yes, I have permission to use @1nd1g0labs/lighthouse-hlth-ui

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Import component '...'
2. Use with props '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Package version: [e.g., 1.0.0]
- React version: [e.g., 18.2.0]
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]

**Additional context**
Any other relevant information.
```

#### License Inquiry Template

Create `.github/ISSUE_TEMPLATE/license_inquiry.md`:

```markdown
---
name: License Inquiry
about: Questions about licensing or commercial use
title: '[LICENSE] '
labels: license
assignees: ''
---

**IMPORTANT:** This template is for licensing questions only.

For commercial licensing inquiries, email: nick@onehealthcto.com

**Do NOT include:**
- Proprietary business information
- Private contact details
- Competitive product plans

This is a public issue tracker. Sensitive licensing discussions should occur via email.

**Your Question:**
[Brief description]

**For faster response, email nick@onehealthcto.com with:**
- Organization name
- Intended use case
- Expected scope
```

### 8. Secrets & Environment Variables

Navigate to: `https://github.com/1nd1g0labs/lighthouse-hlth-ui/settings/secrets/actions`

Ensure no sensitive secrets are exposed. For GitHub Pages deployment, no secrets
are needed (it uses `GITHUB_TOKEN` automatically).

### 9. Repository Description & Topics

Navigate to: `https://github.com/1nd1g0labs/lighthouse-hlth-ui`

Click the gear icon next to "About":

- **Description:** "Proprietary design system for Lighthouse HLTH healthcare sustainability platform. Public for review, restricted for use."

- **Website:** `https://lighthousehlth.com`

- **Topics:** Add tags:
  ```
  design-system
  react
  typescript
  healthcare
  sustainability
  lighthouse-hlth
  proprietary
  tailwindcss
  storybook
  component-library
  ```

- [ ] **Uncheck** "Releases"
- [ ] **Check** "Packages" (if publishing to GitHub Packages)
- [ ] **Uncheck** "Deployments" (or check if you want to show Pages deployment)

### 10. README Badges (Optional)

Add status badges to README.md:

```markdown
[![License: PROPRIETARY](https://img.shields.io/badge/License-PROPRIETARY-red.svg)](./LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Storybook-Live-blue)](https://1nd1g0labs.github.io/lighthouse-hlth-ui/)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](./package.json)
```

### 11. Pre-Publication Code Review

- [ ] Review all files for sensitive information:
  - API keys (search: `key`, `secret`, `token`, `password`)
  - Internal URLs or endpoints
  - Employee names or emails (replace with nick@onehealthcto.com)
  - Customer/client information
  - Proprietary algorithms or trade secrets beyond what you want public

- [ ] Review commit history:
  - [ ] No sensitive information in commit messages
  - [ ] No large files accidentally committed
  - [ ] Clean, professional commit history

- [ ] Review all documentation files:
  - [ ] LICENSE is correct
  - [ ] NOTICE has proper attribution
  - [ ] CONTRIBUTING.md clearly states restrictions
  - [ ] CODE_OF_CONDUCT.md in place
  - [ ] SECURITY.md has correct contact info

### 12. Post-Publication Monitoring

After making the repository public:

#### Week 1:
- [ ] Monitor Issues for spam or inappropriate content
- [ ] Check for unauthorized forks (can't prevent, but can DMCA if violated)
- [ ] Review any pull requests (should auto-close with message)
- [ ] Check Dependabot alerts

#### Monthly:
- [ ] Review repository access list
- [ ] Check for any license violations (search GitHub for your code)
- [ ] Update dependencies via Dependabot
- [ ] Review security advisories

#### Quarterly:
- [ ] Audit branch protection rules still in place
- [ ] Review and update documentation as needed
- [ ] Check GitHub Pages deployment is working

## Automated Protections

Consider adding a GitHub Action to auto-close unauthorized PRs:

Create `.github/workflows/close-unauthorized-prs.yml`:

```yaml
name: Close Unauthorized PRs

on:
  pull_request:
    types: [opened]

jobs:
  close-unauthorized:
    runs-on: ubuntu-latest
    steps:
      - name: Check if contributor is authorized
        env:
          AUTHORIZED_USERS: "NMVW,authorized-contributor-1,authorized-contributor-2"
        run: |
          if [[ ! "$AUTHORIZED_USERS" =~ "${{ github.actor }}" ]]; then
            echo "Unauthorized contributor detected"
            gh pr close ${{ github.event.pull_request.number }} --comment "Thank you for your interest. This is proprietary software and we cannot accept unsolicited contributions. Please see CONTRIBUTING.md for details. For licensing inquiries: nick@onehealthcto.com"
          fi
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Emergency Response Plan

If you need to quickly restrict access:

1. **Make repo private immediately:**
   Settings → Danger Zone → Change repository visibility → Private

2. **Disable Issues and Discussions:**
   Settings → Features → Uncheck

3. **Review recent activity:**
   Insights → Traffic/Clones/Forks

4. **For DMCA takedown of unauthorized forks:**
   https://github.com/contact/dmca

## Questions or Issues?

If you encounter issues with these settings, contact GitHub Support or consult:
- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features
- https://docs.github.com/en/code-security

---

© 2025 Indigo Labs LLC. All rights reserved.
