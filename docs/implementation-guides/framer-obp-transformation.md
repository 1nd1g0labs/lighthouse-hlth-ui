# Lighthouse HLTH Framer Website - OBP Transformation Implementation Guide

## Mission Context

This transformation serves Lighthouse HLTH's core mission of enabling healthcare systems to become exemplary stewards of creation while strengthening their financial foundation. By shifting from "sustainability compliance tool" messaging to "margin recovery engine with zero risk," we empower CFOs, mission leaders, and facilities directors to see operational sustainability as a strategic advantage that funds charity care and advances Laudato Si' goals.

---

## Stability Assessment

**Impact Level:** MEDIUM - New page creation + homepage messaging updates
**Type:** Additive change (new page) + Content updates (existing homepage)
**Consumers Affected:** Framer marketing site (lighthousehlth.com)

**Framer MCP Verification Results:**
- ✅ Current homepage structure reviewed via `getProjectXml` and `getNodeXml`
- ✅ Updates modify text content and component props only, not core structure
- ✅ New page creation is additive (zero risk to existing pages)
- ✅ Component library compatibility verified (Button, Section Tag, Stats, etc.)

**Recommendation:**
- Safe to proceed with all updates
- No migration needed for existing pages
- Existing component structure preserved
- Mobile-responsive breakpoints maintained

---

## Implementation Overview

### Scope
1. **New Page:** `/colorado-playbook` - Complete OBP landing page (10 sections)
2. **Homepage Updates:** Hero section messaging shift to margin recovery positioning
3. **ROI Calculator Enhancement:** Interactive tool displaying OBP economics with scenario comparison

### Timeline
- **Design/Content Review:** 1-2 days
- **Framer Implementation:** 3-5 days
- **Testing & QA:** 2-3 days
- **Total:** 6-10 days to launch

---

## Part 1: Homepage Hero Section Updates

### Current State (from Framer audit)
**Node ID:** `nGHJAwqUy` (Heading wrapper)
- Headline (nodeId: `ulR3RhDhW`): "Turn Healthcare Sustainability Into Margin Expansion"
- Subheadline (nodeId: `c3A3XsqwL`): Current compliance-focused messaging
- Features (nodeId: `ZAXy_sA4T`): Three hero features

### Required Changes

#### 1. Update Headline Text
**Element:** Text node `ulR3RhDhW`
**Current:** "Turn Healthcare Sustainability Into Margin Expansion"
**New:** "Healthcare Operational Sustainability as Margin Expansion"

**Implementation in Framer:**
1. Navigate to homepage (`/`)
2. Select Desktop breakpoint
3. Find HeroSection → Container → TextWrapper → HeadingWrapper
4. Double-click headline text element
5. Replace text content
6. Verify text style is still `/Heading 1`

---

#### 2. Update Subheadline Text
**Element:** Text node `c3A3XsqwL`

**Current:**
```
The only operational sustainability platform built exclusively for U.S. hospitals. Achieve 15-20% margin improvement while meeting compliance mandates like Colorado's HB21-1286.
```

**New:**
```
The only outcome-based platform that turns energy waste, supply chain inefficiency, and clinical operations into verified margin recovery. Pay only for proven results.
```

**Implementation in Framer:**
1. Same navigation as above
2. Select subheadline text element (below headline)
3. Replace text content
4. Verify text style is still `/Body`
5. Verify maxWidth is `520px`

---

#### 3. Remove Third Paragraph (Healthcare-native analytics)
**Element:** Text node `WNCf2FIgo`

**Action:** DELETE this entire text element
- It's redundant with the new subheadline positioning
- Reduces cognitive load above the fold

**Implementation in Framer:**
1. Navigate to HeadingWrapper
2. Find text node starting with "Healthcare-native analytics..."
3. Right-click → Delete
4. Verify spacing adjusts automatically (gap: 20px on parent)

---

#### 4. Update CTA Button Labels

**Primary Button (Green):**
- **Element:** Button component `o2eSGD0S3`
- **Current label:** "Calculate Your ROI"
- **New label:** "Calculate Your Margin Opportunity"
- **Link:** Keep as `/contact` (or update to ROI calculator page if created)

**Secondary Button (Link Button):**
- **Element:** Link Button component `TYknwEi7b`
- **Current label:** "Download Colorado Playbook"
- **New label:** "Explore Colorado Playbook"
- **Link:** Change from `/contact` to `/colorado-playbook`

**Implementation in Framer:**
1. Navigate to Buttons container (nodeId: `edQpG10YH`)
2. Select Primary Button component
3. In properties panel, find `bazhcxY6s` (label property)
4. Update to "Calculate Your Margin Opportunity"
5. Select Secondary Link Button component
6. Update `JnV5LW5se` property to "Explore Colorado Playbook"
7. Update `VkToTOcAG` property (link) to "/colorado-playbook"

---

#### 5. Update Hero Features (Three Stat Cards)

**Feature 1 (nodeId: `vZQEDiVs0`):**
- Component: `zlXoqTxhD` (Hero feature)
- **Current:** "Average Savings" / "$67K annual (CAH)"
- **New:** "Zero Upfront Risk" / "Pay only for verified savings"
- Properties to update:
  - `r4bJWh9hs`: "Zero Upfront Risk"
  - `ceJrjAou4`: "Pay only for verified savings"

**Feature 2 (nodeId: `UEm9bXu8d`):**
- **Current:** "ROI Payback" / "18-month ROI"
- **New:** "Proven ROI" / "15-20% margin improvement"
- Properties to update:
  - `r4bJWh9hs`: "Proven ROI"
  - `ceJrjAou4`: "15-20% margin improvement"

**Feature 3 (nodeId: `TUYa8XKVJ`):**
- **Current:** "Compliance" / "One-click HB21-1286"
- **New:** "Mission-Aligned" / "Savings fund charity care"
- Properties to update:
  - `r4bJWh9hs`: "Mission-Aligned"
  - `ceJrjAou4`: "Savings fund charity care"

**Implementation in Framer:**
1. Navigate to Features container (nodeId: `ZAXy_sA4T`)
2. For each Hero feature component:
   - Select the component
   - In properties panel, update the two text properties as specified above
3. Verify horizontal layout with gap: 28px

---

### Visual Result (Desktop)
```
┌─────────────────────────────────────────────────────────┐
│ Navbar                                                   │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Healthcare Operational Sustainability                  │
│  as Margin Expansion                                    │
│                                                          │
│  The only outcome-based platform that turns energy     │
│  waste, supply chain inefficiency, and clinical         │
│  operations into verified margin recovery. Pay only     │
│  for proven results.                                    │
│                                                          │
│  [Calculate Your Margin Opportunity]  [Explore Colorado Playbook →] │
│                                                          │
│  ✓ Zero Upfront Risk    ✓ Proven ROI    ✓ Mission-Aligned │
│    Pay only for           15-20% margin    Savings fund    │
│    verified savings       improvement      charity care    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Part 2: ROI Calculator Enhancement

### Overview
Create an interactive ROI calculator that displays OBP economics with three scenarios: Conservative (10%), Moderate (15%), and Aggressive (20%) operational cost reduction.

### Implementation Options

**Option 1: Framer Code Component (Recommended)**
- Create custom React component with property controls
- Full interactivity and real-time calculation
- Allows for lead capture form integration

**Option 2: Static Page with Forms**
- Build using existing Framer components
- Less interactive but faster to implement
- Can still show three scenario cards

### Option 1 Specifications: Interactive Calculator Component

**Create new code file:** `ROICalculatorOBP.tsx`

**Property Controls:**
```typescript
addPropertyControls(ROICalculatorOBP, {
    backgroundColor: {
        type: ControlType.Color,
        title: 'Background',
        defaultValue: '#FFFFFF',
    },
    primaryColor: {
        type: ControlType.Color,
        title: 'Primary Color',
        defaultValue: '#066E76', // Lighthouse primary teal
    },
    heading: {
        type: ControlType.Font,
        title: 'Heading Font',
        defaultValue: {
            fontSize: '32px',
            variant: 'Semibold',
            letterSpacing: '-0.03em',
            lineHeight: '1.2em',
        },
        controls: 'extended',
        defaultFontType: 'sans-serif',
    },
})
```

**Input Fields:**
1. Hospital Size (beds): Number input, default 150
2. Annual Energy Spend: Currency input, default $1,200,000
3. Annual Waste Spend: Currency input, default $800,000
4. Annual Water/Clinical Gas Spend: Currency input, default $150,000

**Output Display (3 Scenario Cards):**

Each card shows:
- Scenario name (Conservative/Moderate/Aggressive)
- Reduction percentage (10%/15%/20%)
- Total annual savings (calculated)
- Year 1 Lighthouse fee breakdown:
  - Base fee: $25,000
  - Success fee: 15% of savings (capped at $25,000)
  - Total fee (sum of above)
- Your Year 1 net benefit (savings minus total fee)
- ROI ratio (net benefit / total fee)
- Years 2-5 projection (if cap reached in Year 1)

**Comparison Table Below Cards:**

| Metric | Traditional SaaS | Outcome-Based (Lighthouse) |
|--------|------------------|----------------------------|
| Upfront cost | $50-100K | $25K base |
| Year 1 risk | Pay regardless of results | Only pay for verified savings |
| Year 1 ROI | Unknown | Calculated (e.g., 11.6:1) |
| 5-year cost | $250-500K fixed | Variable based on your success |

### Example Calculation Logic

```typescript
// Conservative Scenario (10% reduction)
const totalOperationalCosts = energySpend + wasteSpend + waterGasSpend;
const reductionPercentage = 0.10;
const totalAnnualSavings = totalOperationalCosts * reductionPercentage;

const baseFee = 25000;
const successFeeRate = 0.15;
const successFeeCap = 25000;
const calculatedSuccessFee = totalAnnualSavings * successFeeRate;
const actualSuccessFee = Math.min(calculatedSuccessFee, successFeeCap);
const totalYear1Fee = baseFee + actualSuccessFee;

const year1NetBenefit = totalAnnualSavings - totalYear1Fee;
const roi = year1NetBenefit / totalYear1Fee;

// Display
console.log(`Total Savings: $${totalAnnualSavings.toLocaleString()}`);
console.log(`Lighthouse Fee: $${baseFee.toLocaleString()} base + $${actualSuccessFee.toLocaleString()} success fee = $${totalYear1Fee.toLocaleString()}`);
console.log(`Your Net Benefit: $${year1NetBenefit.toLocaleString()}`);
console.log(`ROI: ${roi.toFixed(1)}:1`);
```

### Option 2 Specifications: Static Scenario Cards

If building without custom code component, create three static cards using existing Framer components:

**Layout:** Grid 3 columns on desktop, stack on mobile

**Card Component Structure:**
```
Frame (card container)
├─ Frame (header with scenario name)
│  └─ Text: "Conservative Scenario"
├─ Frame (key metric - reduction %)
│  └─ Text: "10% Operational Cost Reduction"
├─ Stats Component: Total Annual Savings
│  └─ "$240,000"
├─ Frame (breakdown section)
│  ├─ Text: "Year 1 Lighthouse Fee:"
│  ├─ Text: "• $25K base fee"
│  ├─ Text: "• $25K success fee (capped)"
│  └─ Text: "Total: $50K"
├─ Frame (benefit section)
│  ├─ Stats Component: Your Year 1 Net Benefit
│  │  └─ "$190,000"
│  └─ Stats Component: ROI
│     └─ "3.8:1"
└─ Button: "Calculate Your Custom Scenario"
   └─ Link: /contact (with form)
```

**Default Values for Three Cards:**

**Conservative (10% reduction):**
- Input assumptions: $2.15M total operational costs
- Total savings: $215,000
- Lighthouse fee: $25K base + $25K success (capped) = $50K
- Your net: $165K
- ROI: 3.3:1

**Moderate (15% reduction):**
- Input assumptions: $2.15M total operational costs
- Total savings: $322,500
- Lighthouse fee: $25K base + $25K success (capped) = $50K
- Your net: $272,500
- ROI: 5.5:1
- Note: "Success fee capped - years 2-5 uncapped earning potential"

**Aggressive (20% reduction):**
- Input assumptions: $2.15M total operational costs
- Total savings: $430,000
- Lighthouse fee: $25K base + $25K success (capped) = $50K
- Your net: $380,000
- ROI: 7.6:1
- 5-year projection: "$1.8M your net savings over 5 years"

---

## Part 3: Colorado Playbook Landing Page (`/colorado-playbook`)

### Page Creation Steps in Framer

1. **Create New Page:**
   - In Framer, go to Pages panel
   - Click "+" to add new page
   - Set path: `/colorado-playbook`
   - Set page title: "Colorado Playbook - Outcome-Based Pricing | Lighthouse HLTH"
   - Set meta description: "Pay only for proven margin recovery. Zero upfront risk. Colorado health systems achieve 15-20% margin improvement with Lighthouse HLTH's outcome-based sustainability platform."

2. **Set Page Dimensions:**
   - Desktop breakpoint: 1200px width
   - Tablet breakpoint: 810px width
   - Phone breakpoint: 400px width

3. **Add Root Container:**
   - Create Frame as root
   - Position: absolute
   - Width: 1200px (desktop), 810px (tablet), 400px (phone)
   - Height: fit-content
   - Background: /White
   - Layout: stack, vertical, start alignment

---

### Section-by-Section Build Guide

#### Section 1: Hero Section

**Components to Use:**
- Insert pre-built Hero section: `https://framer.com/m/sections-Hero-2xJX.js?detached=true`
- After insertion, call `getNodeXml` on page to see internal structure
- Customize text, images, and CTAs

**Alternative (Manual Build):**

```
Frame (Hero container)
├─ Navbar Component (reuse existing)
├─ Frame (Grid 2 columns, gap: 34px)
│  ├─ Frame (Text column, stack vertical)
│  │  ├─ Text (Headline, /Heading 1):
│  │  │  "Colorado Healthcare's Margin Recovery Partner"
│  │  ├─ Text (Subheadline, /Heading 5):
│  │  │  "Pay only for verified operational savings. Zero upfront risk. 5:1 ROI guaranteed or full refund."
│  │  ├─ Frame (Bullet points, stack vertical, gap: 12px)
│  │  │  ├─ Bullet Point Component:
│  │  │  │  "✅ Zero upfront investment — Platform access included, pay only for documented savings"
│  │  │  ├─ Bullet Point Component:
│  │  │  │  "✅ Audit-ready compliance — CMS, Joint Commission, and Laudato Si' reporting built-in"
│  │  │  └─ Bullet Point Component:
│  │  │     "✅ Mission-aligned margins — Every dollar saved funds charity care, not vendor fees"
│  │  ├─ Frame (CTA buttons, stack horizontal, gap: 20px)
│  │  │  ├─ Button Component (variant="Green"):
│  │  │  │  Label: "Book 30-Minute Savings Assessment"
│  │  │  │  Link: /contact
│  │  │  └─ Link Button Component (variant="Forward - Black"):
│  │  │     Label: "Download Colorado Playbook"
│  │  │     Link: /contact (with form)
│  │  └─ Frame (Trust badges, stack horizontal, gap: 16px)
│  │     ├─ Label Component: "HIPAA Compliant"
│  │     ├─ Label Component: "FHIR Compatible"
│  │     ├─ Label Component: "SOC 2 Ready"
│  │     ├─ Label Component: "Laudato Si' Partner"
│  │     └─ Label Component: "CMS Aligned"
│  └─ Frame (Image column)
│     └─ Background image: Colorado hospital with dashboard overlay
│        Border radius: 20px
```

**Content:**
- Headline: "Colorado Healthcare's Margin Recovery Partner"
- Subheadline: "Pay only for verified operational savings. Zero upfront risk. 5:1 ROI guaranteed or full refund."
- Value props: (see structure above)
- CTAs: (see structure above)
- Trust badges: (see structure above)

**Styling:**
- Background: /White
- Padding: 100px 25px 50px 25px
- Max-width: 1200px (centered)

**Mobile Adjustments:**
- Stack grid to single column
- Reduce padding to 50px 20px
- Image height: 400px (fixed)

---

#### Section 2: Problem Statement ("Why Traditional Platforms Fail")

**Component Structure:**

```
Frame (Section container)
├─ Frame (Content wrapper, max-width: 1200px)
│  ├─ Section Tag Component (variant="Section tag dark")
│  │  └─ "The Problem"
│  ├─ Text (/Heading 2, text-align: center)
│  │  └─ "Why Traditional Sustainability Software Fails Healthcare CFOs"
│  ├─ Text (/Body, max-width: 800px, text-align: center)
│  │  └─ Body copy (see content below)
│  └─ Frame (Comparison table, grid or manual layout)
│     └─ (See table structure below)
```

**Content:**

**Body Copy:**
```
Colorado health systems face a perfect storm: CMS mandating decarbonization metrics, Joint Commission sustainability requirements, and mission leaders demanding Laudato Si' compliance—all while margins compress to historic lows.

Traditional sustainability platforms charge $50K-$200K annually for dashboards that require 6-12 months of implementation, dedicated FTEs to manage, and produce generic metrics unusable for healthcare compliance—all while charging regardless of whether you achieve savings.
```

**Comparison Table:**

Create as grid layout (2 columns + header row, 7 rows total):

| Metric | Traditional Platform | Lighthouse HLTH OBP |
|--------|---------------------|---------------------|
| Upfront cost | $75K-$150K annual license | $25K base fee |
| Implementation time | 6-12 months | 30 days to first insights |
| Healthcare specificity | Generic sustainability metrics | FHIR-integrated, clinical workflows |
| Payment model | Pay regardless of savings | Pay only for verified savings |
| Support model | Consultant-dependent | Self-service + white-glove onboarding |
| Compliance | Afterthought | CMS/Joint Commission/Laudato Si' built-in |

**Styling:**
- Background: /Surfaces/Surface Sunken
- Padding: 80px 25px
- Text color: /Text Main
- Table: Border /Borders/Subtle, alternating row backgrounds

**Mobile Adjustments:**
- Table becomes card-based layout (one comparison per card)
- Stack vertically with dividers

---

#### Section 3: Stakeholder Value Props (4 Cards)

**Component Structure:**

```
Frame (Section container)
├─ Frame (Header)
│  ├─ Section Tag: "Who We Serve"
│  └─ Text (/Heading 2): "One Platform, Four Mission-Critical Outcomes"
└─ Frame (Grid 2x2 on desktop, stack on mobile)
   ├─ Frame (Card 1: CFO)
   │  ├─ Frame (Icon container)
   │  │  └─ Icon or emoji: 💰
   │  ├─ Text (/Heading 4): "Turn Sustainability from Cost Center to Margin Engine"
   │  ├─ Text (/Body): Body copy
   │  └─ Stats Component (3 metrics in row)
   │     ├─ "$480K" - "Average first-year savings"
   │     ├─ "$38K" - "Year 1 success fee (capped)"
   │     └─ "$442K" - "Your net benefit"
   ├─ Frame (Card 2: Mission Leader)
   │  └─ [Same structure as Card 1]
   ├─ Frame (Card 3: COO)
   │  └─ [Same structure as Card 1]
   └─ Frame (Card 4: Facilities Director)
      └─ [Same structure as Card 1]
```

**Card Content:**

**Card 1: For CFOs**
```
Title: "Turn Sustainability from Cost Center to Margin Engine"
Icon: 💰 or dollar sign SVG

Body:
"Most sustainability platforms charge $50-100K annually regardless of results. We charge $25K base for compliance automation, then 15% of every dollar we help you save (capped at $25K in Year 1). If we can't identify $300K+ savings opportunity within 90 days, full refund."

Metrics:
- Average first-year savings: $480K
- Year 1 success fee: $38K (capped at $25K)
- Your net benefit: $442K
- ROI: 11.6:1
```

**Card 2: For Mission Leaders**
```
Title: "Fund More Charity Care Through Operational Excellence"
Icon: ❤️ or heart SVG

Body:
"Pope Francis calls for integral ecology in Laudato Si', but you lack tools to measure progress. We help you quantify Laudato Si' goals in CFO language while expanding your capacity for community benefit programs."

Callout:
"$400K operational savings = 800 charity care visits"
"Laudato Si' 7 Goals dashboard — board-ready reporting"
"Creation care quantified → Mission accelerated"
```

**Card 3: For COOs**
```
Title: "Compliance-Ready Reporting with Zero Administrative Burden"
Icon: ✓ or checklist SVG

Body:
"HB21-1286 compliance. Joint Commission sustainability reporting. Laudato Si' scorecards. All automated through one platform. Audit-ready reports quarterly with verified, defensible data."

Metrics:
- Hours saved on sustainability reporting: 40/quarter
- Compliance risk eliminated: 100%
- No dedicated FTE needed
```

**Card 4: For Facilities Directors**
```
Title: "Verified Savings, Not Vendor Promises"
Icon: 🔧 or wrench SVG

Body:
"We analyze your actual utility bills, identify the top 5 quick wins, implement tracking, and verify results using IPMVP methodology. Complete data transparency and audit rights. Every savings claim is defensible."

Metrics:
- Energy reduction: 20%
- Waste diversion: 12%
- Clinical gas optimization: 15%
```

**Styling:**
- Card background: /Surfaces/Surface
- Card padding: 32px
- Card border radius: 16px
- Card border: 1px solid /Borders/Subtle
- Gap between cards: 24px
- Hover effect: Slight shadow increase

---

#### Section 4: Colorado Market Positioning (4 Customer Type Cards)

**Component Structure:**

```
Frame (Section container)
├─ Frame (Header)
│  ├─ Section Tag: "Built for Colorado"
│  └─ Text (/Heading 2): "Built for Colorado Healthcare: From CommonSpirit to Critical Access"
└─ Frame (Grid 2x2 on desktop, stack on mobile)
   ├─ Frame (Card 1: CommonSpirit Health)
   ├─ Frame (Card 2: SCL Health Heritage)
   ├─ Frame (Card 3: Rural CAH)
   └─ Frame (Card 4: Academic Medical Centers)
```

**Card Content:**

**Card 1: CommonSpirit Health**
```
Image/Icon: CommonSpirit logo or Catholic cross symbol
Title: "System-Wide Laudato Si' Goals + Margin Protection"

Body:
"Multi-site rollout proven across 20+ European hospitals. Standardized KPIs with hospital-level customization. Direct reporting to Laudato Si' Action Platform. System-level procurement optimization, distributed margin improvement."

Outcome:
"System achieves 2030 carbon goals while expanding charity care capacity by $5M+ annually"
```

**Card 2: SCL Health Heritage**
```
Image/Icon: Mission symbol or Sisters of Charity emblem
Title: "Mission Alignment with Financial Sustainability"

Body:
"Honoring the Sisters of Charity legacy of serving the marginalized. Sustainability as an instrument of social justice, not just environmental compliance. Link operational savings to expanded access programs."

Quote:
"The Sisters of Charity of Leavenworth built SCL Health to serve those others wouldn't. Lighthouse HLTH continues that mission by ensuring every dollar saved through stewardship directly funds care for the underserved."
```

**Card 3: Rural Critical Access Hospitals**
```
Image/Icon: Rural hospital building or mountain landscape
Title: "Sustainability as Survival Strategy"

Body:
"$0 upfront for CAHs. Outcome-based pricing means zero capital outlay. Quick wins prioritized (e.g., desflurane elimination saves $40K/year at 25-bed hospital). Rural-specific playbooks for limited staff, aging infrastructure."

Case Example:
"30-bed hospital with $2M margin. Traditional platform wanted $60K—30% of margin. Lighthouse found $120K savings year one, charged $24K, netted hospital $96K to keep OB unit open."
```

**Card 4: Academic Medical Centers**
```
Image/Icon: Research beaker or university building
Title: "Research Partnership Opportunities"

Body:
"Anonymized operational sustainability data for health services research. Test desflurane alternatives, single-use reduction protocols. Train residents/fellows in sustainability + quality improvement. Publish in JAMA, NEJM on 'Operational Sustainability as Quality Improvement.'"

Partnership Model:
- Data for research
- Clinical decarbonization trials
- Workforce development
- Publication partnerships
```

**Styling:**
- Same as Section 3 cards
- Add image/icon at top of each card (height: 80px)
- Include subtle gradient overlay on background

---

#### Section 5: How It Works (Timeline - 4 Steps)

**Component Structure:**

```
Frame (Section container)
├─ Frame (Header)
│  ├─ Section Tag: "Our Process"
│  └─ Text (/Heading 2): "From Assessment to Margin Expansion in 90 Days"
└─ Frame (Timeline horizontal on desktop, vertical on mobile)
   ├─ How it Work Component (Step 01)
   ├─ How it Work Component (Step 02)
   ├─ How it Work Component (Step 03)
   └─ How it Work Component (Step 04)
```

**Using Existing "How it work" Component:**

**Step 01:**
```
Property: PxTvqEFbW = "01"
Property: NwHtAWiJx = "Baseline Assessment"
Property: FZ9J1QACR = "Upload 12 months of utility bills. Automated benchmarking analysis. Top 5 quick-win opportunities identified. Go/no-go decision: $300K+ savings potential?"
```

**Step 02:**
```
Property: PxTvqEFbW = "02"
Property: NwHtAWiJx = "Action Plan Implementation"
Property: FZ9J1QACR = "Customized sustainability playbooks. No-code integration with building management systems. Staff training and adoption support. Real-time tracking dashboard activated."
```

**Step 03:**
```
Property: PxTvqEFbW = "03"
Property: NwHtAWiJx = "Verification & Results"
Property: FZ9J1QACR = "Baseline vs. current comparison. Weather-normalized savings calculation. Quarterly reconciliation report. Success fee invoice (only if savings verified)."
```

**Step 04:**
```
Property: PxTvqEFbW = "04"
Property: NwHtAWiJx = "Continuous Optimization"
Property: FZ9J1QACR = "Monthly savings tracking. Predictive analytics for new opportunities. Annual true-up and third-party audit rights. Unlimited upside (Years 2+)."
```

**Alternative Manual Build:**

If not using existing component, create timeline with:
- Horizontal connector line between steps
- Circular step numbers (background: /Primary, text: /White)
- Step title (/Heading 5)
- Step body (/Body)

---

#### Section 6: OBP Pricing Model Explained (3-Part Breakdown)

**Component Structure:**

```
Frame (Section container)
├─ Frame (Header)
│  ├─ Section Tag: "How We Get Paid"
│  ├─ Text (/Heading 2): "Outcome-Based Pricing: Aligned Incentives, Shared Risk"
│  └─ Text (/Body): "Traditional vendors charge whether you succeed or fail. Lighthouse HLTH only wins when you win."
└─ Frame (Grid 3 columns on desktop, stack on mobile)
   ├─ Frame (Card 1: Platform Access)
   ├─ Frame (Card 2: Compliance Tier)
   └─ Frame (Card 3: Savings Share)
```

**Card 1: Platform Access**
```
Header (background: /Primary, text: /White):
"$0 Upfront Platform Access"

What You Get (bulleted list):
• Unified sustainability dashboard
• Automated data integration (BMS, EHR/FHIR, utilities)
• Real-time anomaly detection
• Mobile app for sustainability rounds
• White-glove onboarding

Comparison:
Traditional Cost: $50K-$100K annual
Lighthouse Model: $0 upfront—included in outcome-based agreement

Why We Do This:
"We're confident in our technology. If it doesn't find savings, we don't deserve payment."
```

**Card 2: Compliance Tier**
```
Header (background: /Primary, text: /White):
"Audit-Ready Reporting Included"

What You Get (bulleted list):
• CMS, Joint Commission, state regulatory reports
• Laudato Si' Action Platform integration
• SOC 2 Type II data security
• HIPAA-compliant FHIR integration
• Annual third-party verification

Comparison:
Traditional Cost: $25K-$50K annual
Lighthouse Model: Included in base agreement (>100 beds)

Why This Matters:
"CMS will mandate carbon reporting by 2026. Having audit-ready data now prevents scrambling later."
```

**Card 3: Savings Share**
```
Header (background: /Brand/Sustainability, text: /White):
"15% of Verified Savings (Year 1 Capped)"

How It Works:
Year 1: We earn 15% of documented savings, capped at $25K max
Years 2+: Uncapped because you've seen the results

Example Calculation (150-bed hospital):
┌─────────────────────┬───────────┬─────────────┬──────────────┐
│ Category            │ Baseline  │ Savings     │ Split        │
├─────────────────────┼───────────┼─────────────┼──────────────┤
│ Energy              │ $1.2M     │ $240K (20%) │ You: $180K   │
│                     │           │             │ Us: $60K→$25K│
├─────────────────────┼───────────┼─────────────┼──────────────┤
│ Supply chain        │ $800K     │ $120K (15%) │ You: $90K    │
│                     │           │             │ Us: $30K→$25K│
├─────────────────────┼───────────┼─────────────┼──────────────┤
│ Clinical ops        │ $150K     │ $120K (80%) │ You: $90K    │
│ (desflurane)        │           │             │ Us: $30K→$0  │
├─────────────────────┼───────────┼─────────────┼──────────────┤
│ TOTAL               │ $2.15M    │ $480K       │ You: $360K   │
│                     │           │             │ Us: $50K cap │
└─────────────────────┴───────────┴─────────────┴──────────────┘

YOU KEEP 75-85% OF ALL SAVINGS FOREVER
```

**Below Cards: Risk-Sharing Protections Callout**

```
Frame (background: /Surfaces/Surface Sunken, padding: 32px)
├─ Text (/Heading 5): "Risk-Sharing Protections"
├─ Frame (2 columns)
│  ├─ Frame (Left: For Hospitals)
│  │  ├─ Text (/Heading 6): "For Hospitals"
│  │  └─ Bullet points:
│  │     • No savings, no payment beyond $0 upfront
│  │     • Third-party verification of all claims
│  │     • Quarterly true-ups if projections don't materialize
│  │     • 90-day cancellation notice, no lock-in
│  │     • Full refund if <$300K savings identified in 90 days
│  └─ Frame (Right: For Lighthouse)
│     ├─ Text (/Heading 6): "For Lighthouse"
│     └─ Bullet points:
│        • Sustained savings requirement (must persist 12 months)
│        • Implementation support if savings targets slip
│        • Co-develop business cases for facility upgrades
```

---

#### Section 7: Educational Content Hub (4 Blog Post Teasers)

**Component Structure:**

```
Frame (Section container)
├─ Frame (Header)
│  ├─ Section Tag: "Insights & Resources"
│  └─ Text (/Heading 2): "The Colorado Healthcare CFO's Guide to Margin Recovery"
└─ Frame (Grid 4 columns on desktop, 2x2 on tablet, stack on mobile)
   ├─ Blog Card Component (Article 1)
   ├─ Blog Card Component (Article 2)
   ├─ Blog Card Component (Article 3)
   └─ Blog Card Component (Article 4)
```

**Using Existing Blog Card Component:**

**Article 1:**
```
Component: NuygYOqzZ (Blog card)
Property: jVgAb9Yfa = "Why Traditional Sustainability Software Fails in Healthcare"
Property: mYVJ6Fxcx = "Dec 15, 2025"
Property: Iz1DV2rTd = "8 min read"
Property: pwP1ZlTRR = "/blog/why-traditional-sustainability-fails"
Background image: Dashboard screenshot or analytics graphic
```

**Article 2:**
```
Property: jVgAb9Yfa = "The CFO's Guide to Auditable Carbon Reduction"
Property: mYVJ6Fxcx = "Dec 10, 2025"
Property: Iz1DV2rTd = "12 min read"
Property: pwP1ZlTRR = "/blog/cfos-guide-auditable-carbon"
Background image: CFO reviewing charts
```

**Article 3:**
```
Property: jVgAb9Yfa = "From Desflurane to Dollars: Clinical Decarbonization ROI"
Property: mYVJ6Fxcx = "Dec 5, 2025"
Property: Iz1DV2rTd = "10 min read"
Property: pwP1ZlTRR = "/blog/desflurane-to-dollars-roi"
Background image: Operating room or anesthesia equipment
```

**Article 4:**
```
Property: jVgAb9Yfa = "Rural Hospital Survival: How Sustainability Saves Critical Access"
Property: mYVJ6Fxcx = "Nov 30, 2025"
Property: Iz1DV2rTd = "15 min read"
Property: pwP1ZlTRR = "/blog/rural-hospital-cah-playbook"
Background image: Rural hospital exterior
```

---

#### Section 8: Social Proof & Trust Signals

**Component Structure:**

```
Frame (Section container)
├─ Frame (Header)
│  ├─ Section Tag: "Trust & Compliance"
│  └─ Text (/Heading 2): "Built on Proven Technology, Aligned with Your Mission"
└─ Frame (Grid 3 columns on desktop, stack on mobile)
   ├─ Frame (Column 1: Regulatory Alignment)
   ├─ Frame (Column 2: Mission Alignment)
   └─ Frame (Column 3: Technology Validation)
```

**Column 1: Regulatory Alignment**
```
Frame
├─ Text (/Heading 5): "Regulatory Alignment"
└─ Frame (Stack vertical, gap: 16px)
   ├─ Frame (Badge)
   │  ├─ Icon or logo: CMS logo
   │  └─ Text: "Supports upcoming carbon reporting mandates (2026)"
   ├─ Frame (Badge)
   │  ├─ Icon: Joint Commission logo
   │  └─ Text: "Meets Environment of Care standards"
   └─ Frame (Badge)
      ├─ Icon: FHIR logo
      └─ Text: "HL7 FHIR R4 integration for clinical data"
```

**Column 2: Mission Alignment**
```
Frame
├─ Text (/Heading 5): "Mission Alignment"
└─ Frame (Stack vertical, gap: 16px)
   ├─ Frame (Badge)
   │  ├─ Icon: CHA logo
   │  └─ Text: "Aligns with 'Caring for Our Common Home' framework"
   ├─ Frame (Badge)
   │  ├─ Icon: Laudato Si' logo
   │  └─ Text: "Direct reporting to Vatican sustainability tracker"
   └─ Frame (Badge)
      ├─ Icon: Colorado Hospital Association logo
      └─ Text: "Colorado Hospital Association Member"
```

**Column 3: Technology Validation**
```
Frame
├─ Text (/Heading 5): "Technology Validation"
└─ Frame (Stack vertical, gap: 16px)
   ├─ Frame (Badge)
   │  ├─ Icon: Europe map or flag
   │  └─ Text: "Proven deployment across 20+ European hospitals"
   ├─ Frame (Badge)
   │  ├─ Icon: Security shield
   │  └─ Text: "SOC 2 Type II Readiness (Q2 2026)"
   └─ Frame (Badge)
      ├─ Icon: HIPAA logo
      └─ Text: "Business Associate Agreement compliant"
```

**Styling:**
- Badge background: /Surfaces/Surface
- Badge padding: 16px
- Badge border: 1px solid /Borders/Subtle
- Badge border radius: 8px
- Icon size: 40px x 40px
- Text: /Body (small, 14px)

---

#### Section 9: FAQ Accordion

**Component Structure:**

```
Frame (Section container)
├─ Frame (Header)
│  ├─ Section Tag: "Common Questions"
│  └─ Text (/Heading 2): "Answers About Outcome-Based Pricing"
└─ FAQ Full Accordion Component (wgfI9zCnz)
   └─ Customize with 5 FAQ items
```

**Using Existing FAQ Full Accordion Component:**

If the component supports dynamic items, add these 5 Q&A pairs:

**Q1:**
```
Question: "What if the savings don't materialize?"
Answer: "Then we don't earn success fees. If we can't even identify $300K+ in savings opportunity within 90 days, we refund your $25K base fee. We're that confident in our proven methodology."
```

**Q2:**
```
Question: "How do you verify savings?"
Answer: "Complete transparency. Our Head of Customer Success Operations is a Certified Energy Manager using IPMVP methodology. You get all raw data, quarterly reconciliation reports, and third-party audit rights anytime. Every dollar we claim is auditable and traceable to your P&L."
```

**Q3:**
```
Question: "Why cap success fees in Year 1?"
Answer: "To prove we're partners, not just vendors. We deliberately leave money on the table to build trust. Once you've seen verified results, Years 2+ are uncapped because you know the value we deliver."
```

**Q4:**
```
Question: "How is this different from consultants?"
Answer: "Consultants charge $250-500/hour, deliver a PDF, and leave. We charge $25K base for ongoing platform access, verification, and compliance automation—then only succeed financially when you do. We're invested in your long-term success, not billable hours."
```

**Q5:**
```
Question: "What about our existing sustainability vendor?"
Answer: "Do they guarantee 5:1 ROI? Do they share your risk? Most platforms charge $50-100K annually regardless of results. We only get paid when you see verified margin expansion. Many hospitals use our platform alongside existing vendors to verify claims and ensure accountability."
```

**Alternative: Manual Build**

If accordion component doesn't support customization, create manual accordion:

```
Frame (Each FAQ item)
├─ Frame (Question bar, clickable)
│  ├─ Text (/Heading 6): Question text
│  └─ Icon: Chevron (rotates when expanded)
└─ Frame (Answer panel, hidden by default)
   └─ Text (/Body): Answer text
```

Use Framer's interaction panel to:
- Set initial state: Answer panel height = 0
- On click: Toggle answer panel height (0 ↔ auto)
- On click: Rotate chevron icon (0deg ↔ 180deg)

---

#### Section 10: Final CTA

**Component Structure:**

```
Frame (Full-width background with gradient)
├─ Frame (Content wrapper, max-width: 800px, center-aligned)
│  ├─ Text (/Heading 2 White): "Start Your $0-Risk Margin Assessment Today"
│  ├─ Text (/Body White): "Three Simple Steps to Proven Margin Recovery"
│  ├─ Frame (3-step process, stack horizontal on desktop)
│  │  ├─ Frame (Step 1)
│  │  │  ├─ Icon or number: "1"
│  │  │  ├─ Text (/Heading 6 White): "30-Minute Discovery Call"
│  │  │  └─ Text (/Body White): "Tell us your challenges, we'll share our approach"
│  │  ├─ Frame (Step 2)
│  │  │  ├─ Icon or number: "2"
│  │  │  ├─ Text (/Heading 6 White): "Free Savings Analysis"
│  │  │  └─ Text (/Body White): "We analyze your data and quantify opportunities"
│  │  └─ Frame (Step 3)
│  │     ├─ Icon or number: "3"
│  │     ├─ Text (/Heading 6 White): "Go/No-Go Decision"
│  │     └─ Text (/Body White): "If the numbers work, we partner. If not, free insights."
│  ├─ Frame (CTA buttons, stack horizontal, gap: 20px)
│  │  ├─ Button Component (variant="White" or custom white button)
│  │  │  └─ Label: "Book Discovery Call"
│  │  │     Link: /contact or Calendly URL
│  │  └─ Link (text link, white, underlined)
│  │     └─ "Download Colorado Playbook PDF"
│  │        Link: /contact (lead capture form)
│  ├─ Frame (Contact info, stack vertical, center-aligned)
│  │  ├─ Text (/Body White, small): "Email: colorado@lighthouse-hlth.com"
│  │  ├─ Text (/Body White, small): "Phone: (720) 555-HLTH"
│  │  └─ Text (/Body White, small): "Office: Denver, Colorado (serving health systems statewide)"
│  └─ Frame (Trust footer)
│     ├─ Text (/Body White, small, opacity: 0.8, max-width: 700px):
│     │  "Lighthouse HLTH is a healthcare-native operational sustainability platform built on proven European technology and adapted for US health systems. We partner with mission-driven hospitals to turn sustainability from compliance burden into margin opportunity—with outcome-based pricing that aligns our success with yours."
│     ├─ Text (/Body White, small, opacity: 0.7):
│     │  "Backed by: [Venture firms] | Partnered with: Practice Greenhealth, CHA, Colorado Hospital Association"
│     ├─ Text (/Body White, small, opacity: 0.7):
│     │  "Compliant with: HIPAA, FHIR, CMS, Joint Commission, Laudato Si' Action Platform"
│     └─ Text (/Body White, small, opacity: 0.6):
│        "© 2025 Lighthouse HLTH. All rights reserved. Technology in service of creation care and human flourishing."
```

**Styling:**
- Background: Linear gradient from /Brand/Sustainability to /Primary
- Padding: 100px 50px
- All text: /Text/Inverse (white)
- Buttons: White background with primary color text (inverse of normal)

**Mobile Adjustments:**
- Stack 3-step process vertically
- Reduce padding to 50px 20px
- Reduce headline to /Heading 3
- Stack CTA buttons vertically

---

## Part 4: Mobile Responsive Design Guidelines

### Breakpoints
- **Desktop:** 1200px width
- **Tablet:** 810px width
- **Phone:** 400px width

### General Mobile Adjustments (Apply to All Sections)

1. **Grid Layouts:**
   - Desktop 3-column → Tablet 2-column → Phone 1-column (stack)
   - Desktop 2-column → Phone 1-column (stack)

2. **Padding & Spacing:**
   - Desktop: 80px vertical, 25px horizontal
   - Tablet: 60px vertical, 20px horizontal
   - Phone: 40px vertical, 16px horizontal

3. **Typography Scale:**
   - Desktop /Heading 1 (54px) → Phone /Heading 2 (42px)
   - Desktop /Heading 2 (42px) → Phone /Heading 3 (38px)
   - Desktop /Body (18px) → Phone /Body (16px)

4. **Button Sizing:**
   - Desktop: padding 16px 32px
   - Phone: padding 14px 24px, full-width on very small screens

5. **Images:**
   - Maintain aspect ratio
   - Set max-height on phone to prevent excessive scrolling
   - Ensure background-position: center for crops

6. **Tables:**
   - Desktop: Full table layout
   - Tablet: Reduce font size, compact cells
   - Phone: Transform into card-based layout (one row per card)

### Section-Specific Mobile Adjustments

**Hero Section:**
- Phone: Stack text column above image column
- Image height: 400px (fixed) on phone
- CTA buttons: Stack vertically on phone
- Trust badges: Reduce to 3 visible, scrollable horizontal

**Stakeholder Cards (Section 3):**
- Phone: Full-width cards, stack vertically
- Reduce card padding: 24px → 20px
- Stats in cards: Stack vertically instead of horizontal

**Timeline (Section 5):**
- Desktop: Horizontal timeline with connector line
- Phone: Vertical timeline with vertical connector

**Pricing Cards (Section 6):**
- Phone: Stack vertically
- Tables within cards: Simplify to key metrics only

**Blog Cards (Section 7):**
- Tablet: 2x2 grid
- Phone: Stack vertically, full-width

**FAQ (Section 9):**
- Phone: Reduce question font size
- Ensure touch targets for accordion are minimum 44x44px

---

## Part 5: SEO & Meta Tags

### Page: `/colorado-playbook`

```html
<title>Colorado Playbook - Outcome-Based Pricing | Lighthouse HLTH</title>
<meta name="description" content="Pay only for proven margin recovery. Zero upfront risk. Colorado health systems achieve 15-20% margin improvement with Lighthouse HLTH's outcome-based sustainability platform.">
<meta name="keywords" content="healthcare sustainability Colorado, hospital operational efficiency, outcome-based pricing healthcare, margin recovery, Laudato Si compliance, CMS carbon reporting, Joint Commission sustainability">

<!-- Open Graph / Social Media -->
<meta property="og:title" content="Colorado Healthcare's Margin Recovery Partner | Lighthouse HLTH">
<meta property="og:description" content="Pay only for verified operational savings. 5:1 ROI guaranteed. Zero upfront risk for Colorado hospitals.">
<meta property="og:image" content="[URL to hero image with Colorado hospital + dashboard]">
<meta property="og:url" content="https://lighthousehlth.com/colorado-playbook">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Colorado Healthcare's Margin Recovery Partner">
<meta name="twitter:description" content="Pay only for verified savings. 15-20% margin improvement. Zero risk.">
<meta name="twitter:image" content="[URL to hero image]">
```

### Homepage Updates

Update existing homepage meta description to include OBP positioning:

```html
<meta name="description" content="Healthcare operational sustainability as margin expansion. The only outcome-based platform that turns energy waste and clinical inefficiency into verified margin recovery. Pay only for proven results.">
```

---

## Part 6: Analytics & Tracking

### Key Events to Track (Google Analytics 4)

**Colorado Playbook Page:**
```javascript
// Page view
gtag('event', 'page_view', {
  page_title: 'Colorado Playbook - OBP',
  page_location: '/colorado-playbook'
});

// CTA clicks
gtag('event', 'cta_click', {
  cta_type: 'primary',
  cta_text: 'Book 30-Minute Savings Assessment',
  cta_location: 'hero'
});

gtag('event', 'cta_click', {
  cta_type: 'secondary',
  cta_text: 'Download Colorado Playbook',
  cta_location: 'hero'
});

// Scroll depth milestones
gtag('event', 'scroll', {
  percent_scrolled: 25 // Track at 25%, 50%, 75%, 100%
});

// Engagement with stakeholder cards
gtag('event', 'card_interaction', {
  card_type: 'stakeholder_value_prop',
  stakeholder: 'CFO' // or 'Mission Leader', 'COO', 'Facilities'
});

// FAQ accordion expansions
gtag('event', 'faq_interaction', {
  question: '[Question text]'
});

// Time on page milestone
gtag('event', 'time_on_page', {
  duration_seconds: 60 // Track at 30s, 60s, 120s
});
```

**ROI Calculator Interactions:**
```javascript
// Calculator input changes
gtag('event', 'calculator_interaction', {
  field_changed: 'hospital_size', // or 'energy_spend', etc.
  value: 150
});

// Scenario comparison
gtag('event', 'calculator_result', {
  scenario: 'conservative', // or 'moderate', 'aggressive'
  estimated_savings: 215000,
  estimated_roi: 3.3
});

// CTA from calculator
gtag('event', 'calculator_cta_click', {
  cta_text: 'Calculate Your Custom Scenario',
  estimated_savings: 215000
});
```

### Conversion Goals

Set up in Google Analytics:
1. **Primary Conversion:** Form submission from "Book Discovery Call" CTA
2. **Secondary Conversion:** PDF download (Colorado Playbook)
3. **Micro Conversion:** Email click (colorado@lighthouse-hlth.com)
4. **Micro Conversion:** Phone number click
5. **Engagement Goal:** >60 seconds on page + scroll >50%

---

## Part 7: Quality Assurance Checklist

### Before Launch

**Content Review:**
- [ ] All text content matches approved OBP messaging
- [ ] No typos or grammatical errors
- [ ] All dollar amounts and statistics are accurate
- [ ] Contact information is correct (email, phone, address)
- [ ] All CTAs have proper links (no broken links)
- [ ] Legal disclaimer reviewed (especially ROI guarantee claims)

**Design Review:**
- [ ] Brand colors used correctly (/Primary, /Brand/Sustainability, etc.)
- [ ] Typography styles consistent (/Heading 1-6, /Body)
- [ ] Proper hierarchy and visual flow
- [ ] Images optimized for web (compressed, correct dimensions)
- [ ] Icons/logos display correctly at all sizes
- [ ] Spacing and alignment consistent across sections

**Functionality:**
- [ ] All buttons clickable and link to correct destinations
- [ ] Accordion/expandable elements work properly
- [ ] Forms submit correctly (if applicable)
- [ ] Analytics tracking firing correctly
- [ ] No console errors in browser DevTools

**Responsive Design:**
- [ ] Desktop (1200px+): All sections display correctly
- [ ] Tablet (810px): Grid adjustments work, no overflow
- [ ] Phone (400px): Stacking works, no horizontal scroll
- [ ] Test on actual devices (iPhone, Android, iPad)
- [ ] Touch targets minimum 44x44px on mobile

**Accessibility (WCAG 2.1 AA):**
- [ ] Color contrast passes (4.5:1 for text, 3:1 for UI components)
- [ ] All images have alt text
- [ ] Semantic HTML used (headings, nav, sections)
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Screen reader tested (VoiceOver, NVDA)
- [ ] Focus indicators visible (2px ring)
- [ ] Form labels properly associated with inputs

**Performance:**
- [ ] Page load time < 3 seconds (desktop)
- [ ] Page load time < 5 seconds (mobile 3G)
- [ ] Images lazy-loaded where appropriate
- [ ] No render-blocking resources
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)

**SEO:**
- [ ] Meta title and description set
- [ ] Open Graph tags set
- [ ] Twitter Card tags set
- [ ] Canonical URL set
- [ ] Heading hierarchy correct (single H1, proper nesting)
- [ ] Internal links use descriptive anchor text

**Cross-Browser:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Part 8: Post-Launch Optimization

### Week 1: Monitor & Adjust
- Review analytics daily
- Check for error logs/broken links
- Monitor page load performance
- Collect initial user feedback

### Week 2-4: A/B Testing Opportunities

**Test 1: Hero CTA Copy**
- Variant A: "Book 30-Minute Savings Assessment"
- Variant B: "Calculate Your ROI (Zero Risk)"
- Metric: Click-through rate to /contact

**Test 2: Stakeholder Card Order**
- Variant A: CFO first (current)
- Variant B: Mission Leader first
- Metric: Time spent in section, scroll depth

**Test 3: Pricing Table Format**
- Variant A: Comparison table (Traditional vs. Lighthouse)
- Variant B: Feature checklist with pricing tiers
- Metric: Scroll-through rate, CTA clicks

**Test 4: FAQ Placement**
- Variant A: FAQ near bottom (current)
- Variant B: FAQ immediately after OBP pricing explanation
- Metric: FAQ expansion rate, bounce rate

### Ongoing Optimization

**Content Updates:**
- Add real customer testimonials as pilots complete
- Update statistics with actual results (replace hypotheticals)
- Add case study content to blog posts
- Incorporate customer logos (with permission)

**Conversion Rate Optimization:**
- Heatmap analysis (Hotjar or similar)
- Session recordings of user behavior
- Exit intent surveys ("Why are you leaving?")
- A/B test headline variations
- Optimize form fields (reduce friction)

**SEO Improvements:**
- Publish blog posts from Educational Content Hub
- Build backlinks from Colorado Hospital Association, Practice Greenhealth
- Create localized content (Denver, Colorado Springs, Fort Collins, etc.)
- Schema markup for organization, FAQs, service offerings

---

## Part 9: Developer Handoff Checklist

### Assets Needed

**Images:**
- [ ] Hero image: Colorado hospital with mountains (1600x900px, optimized)
- [ ] Dashboard mockup overlay (semi-transparent PNG)
- [ ] Stakeholder card icons (CFO, Mission, COO, Facilities) - 80x80px SVG
- [ ] Customer type card images (CommonSpirit, SCL, Rural, AMC) - 400x300px
- [ ] Blog post thumbnails (4 images) - 800x600px
- [ ] Trust badge logos (CMS, Joint Commission, FHIR, CHA, Laudato Si', etc.) - SVG preferred
- [ ] Final CTA background gradient (if not CSS gradient)

**Copy:**
- [ ] All section headlines, subheadlines, body copy (from this guide)
- [ ] CTA button labels and links
- [ ] FAQ questions and answers
- [ ] Meta tags (title, description, OG tags)
- [ ] Alt text for all images

**Design Specs:**
- [ ] Color palette with hex codes
- [ ] Typography scale with font sizes, weights, line heights
- [ ] Spacing system (padding, margins, gaps)
- [ ] Border radius values
- [ ] Shadow definitions
- [ ] Breakpoint specifications

**Functional Requirements:**
- [ ] Link destinations for all CTAs
- [ ] Form endpoints (if lead capture forms built)
- [ ] Analytics event tracking specifications
- [ ] Third-party integrations (Calendly, email service, etc.)

---

## Summary & Next Steps

### Implementation Priority

**Phase 1 (Launch Critical):**
1. Homepage hero section updates (messaging shift)
2. Colorado Playbook page (Sections 1-6: Hero through Pricing Model)
3. Basic mobile responsive design

**Phase 2 (Week 2):**
4. Colorado Playbook page (Sections 7-10: Educational Hub through Final CTA)
5. ROI calculator (static scenario cards if not custom component)
6. Full mobile optimization

**Phase 3 (Post-Launch):**
7. ROI calculator (interactive custom component)
8. Blog post content for Educational Hub
9. A/B testing implementation
10. Advanced analytics and conversion optimization

### Success Metrics (90 Days Post-Launch)

**Traffic Goals:**
- 1,000+ page views on /colorado-playbook
- 500+ unique visitors to /colorado-playbook
- Avg. time on page: 3+ minutes
- Scroll depth: 60%+ reach bottom

**Conversion Goals:**
- 50+ discovery call requests (5% conversion rate)
- 100+ playbook downloads (10% conversion rate)
- 20+ qualified leads (2% conversion rate)
- 5+ sales opportunities (0.5% conversion rate)

**Engagement Goals:**
- 40%+ CTA click-through rate (hero buttons)
- 30%+ FAQ expansion rate
- 20%+ stakeholder card interactions
- 50%+ ROI calculator usage (of page visitors)

---

## Mission Impact

By implementing this OBP transformation, we empower Colorado healthcare systems to:
- **See sustainability as strategic advantage**, not compliance burden
- **Fund charity care** through operational margin recovery
- **Advance Laudato Si' goals** with auditable, mission-aligned data
- **Serve the vulnerable** with dollars reclaimed from waste
- **Become exemplary stewards** of creation and community resources

Every CTA click, every calculator interaction, every discovery call scheduled is a step toward healthcare systems realizing that **operational excellence and environmental stewardship are two sides of the same coin**—and that Lighthouse HLTH shares their risk and their mission.

---

**End of Implementation Guide**

For questions or clarifications, contact:
- **Design Lead:** [Name]
- **Technical Lead:** [Name]
- **Content Lead:** [Name]
- **Project Manager:** [Name]

**Document Version:** 1.0
**Last Updated:** January 1, 2026
**Status:** Ready for Implementation
