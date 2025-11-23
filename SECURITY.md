# Security Policy

## Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**IMPORTANT: Do not create public GitHub issues for security vulnerabilities.**

The Lighthouse HLTH UI Design System is used in healthcare applications. We take
security seriously and appreciate responsible disclosure of security vulnerabilities.

### How to Report

If you discover a security vulnerability, please report it via:

**Email:** nick@onehealthcto.com

Include in your report:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested remediation (if any)
- Your contact information (for follow-up)

### What to Expect

1. **Acknowledgment**: We'll acknowledge receipt within 48 hours
2. **Investigation**: We'll investigate and provide an initial assessment within 5 business days
3. **Resolution Timeline**: We'll work to patch critical issues within 30 days
4. **Credit**: We'll credit you in our security acknowledgments (unless you prefer to remain anonymous)

### Scope

Security issues we prioritize:

✅ **In Scope:**
- Cross-Site Scripting (XSS) in components
- Injection vulnerabilities
- Authentication/authorization bypasses
- Sensitive data exposure
- Accessibility violations that create security risks
- Dependency vulnerabilities with security impact
- Build/deployment pipeline security issues

❌ **Out of Scope:**
- Social engineering attacks
- Denial of Service (DoS) attacks
- Issues in third-party dependencies (report to those projects directly)
- Theoretical vulnerabilities without proof of concept
- Issues requiring physical access to user devices
- Browser-specific bugs (report to browser vendors)

### Security Best Practices for Users

When using this design system:

1. **Keep Updated**: Always use the latest patch version
2. **Sanitize Input**: Always sanitize user input before passing to components
3. **Content Security Policy**: Implement CSP headers in your application
4. **Audit Dependencies**: Regularly run `npm audit` and update dependencies
5. **HTTPS Only**: Use only over HTTPS in production
6. **Healthcare Compliance**: Ensure your implementation meets HIPAA/HITECH requirements

### Healthcare-Specific Considerations

This design system is used in healthcare applications. When implementing:

- **PHI Protection**: Never pass Protected Health Information (PHI) directly to logging or analytics
- **Access Controls**: Implement proper role-based access controls
- **Audit Logging**: Log all access to sensitive healthcare data
- **Data Encryption**: Encrypt data at rest and in transit
- **Session Management**: Implement secure session handling and timeouts

### Vulnerability Disclosure Policy

We follow coordinated vulnerability disclosure:

1. **Private Disclosure**: Report vulnerabilities privately
2. **Investigation Period**: We'll investigate within 90 days
3. **Fix Development**: We'll develop and test a fix
4. **Coordinated Release**: We'll coordinate public disclosure with you
5. **Public Advisory**: We'll publish a security advisory after patching

### Security Acknowledgments

We appreciate the work of security researchers who help keep our users safe.
Acknowledged researchers (with permission):

- [To be added as vulnerabilities are responsibly disclosed]

### Security Updates

Security updates are announced via:
- GitHub Security Advisories
- Release notes (tagged as `[SECURITY]`)
- Email to known enterprise users

Subscribe to repository notifications to receive security updates.

### Contact

**Security Team:** nick@onehealthcto.com
**General Support:** Via GitHub Issues (non-security topics only)
**License Questions:** nick@onehealthcto.com

### PGP Key

For encrypted communication, use our PGP key:
[To be added if needed for sensitive disclosures]

---

**Thank you for helping keep Lighthouse HLTH and our users safe.**

*Last Updated: November 2025*
