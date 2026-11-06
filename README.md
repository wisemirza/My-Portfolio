# Mohammad Waiz Mirza — Business Analyst Portfolio

A modern, responsive, high-contrast Business Analyst portfolio website built with **React**, **Tailwind CSS**, and **Lucide icons**. Designed to showcase grounded case studies, functional requirements, AS-IS/TO-BE process maps, user stories, UAT matrices, and data-driven product insights.

Live preview ready for **Netlify** and **GitHub**.

---

## 🚀 Key Highlights & Sections

1. **Grounded Hero & Executive KPI Overview**:
   - High-contrast visual identity using void black (`#050505` to `#0A0A0A`), subtle strategy whiteboard grid patterns, and purposeful electric purple (`#6F00FF` / `#7C3AED`) interactive accents.
   - Verified audience and data throughput indicators (500K+ YouTube audience with 264M+ views, 17.3K+ operational bike-share logs, 44.8K+ evaluated essay samples, and 3+ live initiatives).
   - Real avatar photo, Bristol UK location indicator, and current role availability.

2. **Real Case Studies (No Filler or Mock Data)**:
   - **Student Voice — Bilingual Student Feedback Platform**: Solving WhatsApp communication bottlenecks with an account-free, bilingual (English & Simplified Chinese) web app backed by Firebase Cloud Firestore.
   - **Capital Bikeshare — Operations & Demand Dashboard**: Interactive operational intelligence tool analysing 17,379 hours and 731 days of rental patterns for fleet managers (Live at [wisemirza.github.io/Capital-bikeshare-dashboard](https://wisemirza.github.io/Capital-bikeshare-dashboard/)).
   - **Explainable AI Text Classifier**: Academic final year project developing a transparent stylometric evaluation tool using 7 length-invariant writing habits and TreeSHAP explainability on Kaggle's DAIGT-V2 dataset (44,868 essays).
   - **Bristol Road Safety Explorer**: DBSCAN spatial clustering and multi-table collision analysis for Department for Transport (DfT) 2021–2025 records.
   - **AI Prompt Sharing Platform**: Funnel and drop-off analysis using Google Analytics 4 and Microsoft Clarity to onboard 16 creator sellers.
   - **Tableau Visualisation Portfolio**: Executive dashboards across Bristol road safety, Cardiff climate variation, and Alibaba quarterly ecommerce sales.

3. **Interactive BA Deliverables Showcase**:
   - **AS-IS vs TO-BE Process Maps**: Visualising the step-by-step transition from broken WhatsApp channels to a streamlined student platform.
   - **User Stories & Acceptance Criteria**: Standard Gherkin syntax (`Given-When-Then`) with persona justifications and validation rules.
   - **User Acceptance Testing (UAT) Execution Matrix**: Test IDs, features, test scenarios, expected results, and pass/fail verification notes.
   - **Stakeholder Power/Interest Matrix**: 2x2 grid categorising course leaders, international cohorts, student reps, and department heads with bespoke communication cadences.

4. **Academic Credentials & Leadership**:
   - BSc (Hons) Data Science & AI (Top-Up) at UWE Bristol (2026–2027 expected, Student ID: 26041374).
   - NCC Level 5 Diploma in Computing (with Business Management) — Pass (120 credits).
   - NCC Level 4 Diploma in Computing (with Business Management) — Pass (120 credits).
   - NCC Level 3 International Foundation Diploma.
   - Elected Student Representative for the Data Science & AI cohort at UWE Bristol.

5. **In-Browser CV Reader**:
   - Built-in full-text CV inspection modal with one-click print/PDF support.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS 3 (configured with custom void black, electric purple, and strategy whiteboard patterns)
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono (clean sans-serif and tabular monospace)
- **Deployment Target**: Netlify (preconfigured `netlify.toml` and `public/_redirects`)

---

## 📁 Repository Structure

```text
├── infobase/                                         # Source documents and extracted records
│   ├── Data Science and AI Project Proposal.txt      # UWE individual project proposal
│   ├── Mohammad_Waiz_Mirza_Business_Analyst_CV_Final.docx # Authentic CV source
│   ├── receipt-UFCEKP-30-3_...txt                    # UWE submission receipt
│   ├── waizavatar.jpg                                # Authentic photo
│   └── extracted_profile.json                        # Structured JSON summary
├── public/
│   ├── _redirects                                    # Netlify SPA fallback rule
│   └── waizavatar.jpg                                # Static avatar asset
├── src/
│   ├── components/
│   │   ├── ArtefactShowcase.jsx                      # Interactive AS-IS/TO-BE, User Stories, UAT
│   │   ├── CaseStudies.jsx                           # Filterable project grid
│   │   ├── CaseStudyModal.jsx                        # Project deep-dive modal
│   │   ├── ContactSection.jsx                        # Grounded contact block with 1-click copy
│   │   ├── CVModal.jsx                               # In-browser printable CV reader
│   │   ├── Education.jsx                             # UWE Bristol & NCC qualifications
│   │   ├── Experience.jsx                            # Student Rep & YouTube growth analytics
│   │   ├── Footer.jsx                                # Site footer & back-to-top
│   │   ├── Hero.jsx                                  # Headline, stats, and profile badge
│   │   ├── Navbar.jsx                                # Navigation with CV trigger & mobile menu
│   │   └── SkillsMatrix.jsx                          # Grouped BA, analytics, and tech skills
│   ├── data/
│   │   └── portfolioData.js                          # Single source of truth for portfolio data
│   ├── App.jsx                                       # App root
│   ├── index.css                                     # Tailwind directives & whiteboard dots
│   └── main.jsx                                      # React DOM entry point
├── index.html                                        # HTML entry with SEO & OpenGraph tags
├── netlify.toml                                      # Netlify build and redirect configuration
├── package.json                                      # Pinned dependencies and scripts
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended, tested on v22.14)
- npm (v10 or higher)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
Builds the static production bundle into the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚀 Deploying to Netlify

### Option 1: Direct GitHub Integration (Recommended)
1. Commit and push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Business Analyst portfolio website"
   git branch -M main
   git remote add origin https://github.com/wisemirza/La-portfolio.git
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your GitHub repository.
5. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**. Every push to `main` will automatically trigger a fresh production build.

### Option 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 📄 Tone of Voice & Copywriting
- **Style**: Plain, direct, human English.
- **Principles**: Avoid corporate buzzwords and artificial fluff. Grounded focus on what the problem was, what methodical steps were taken, what tools were used, and the direct tangible outcome.
- **Author**: Mohammad Waiz Mirza • Bristol, UK • [Mohammad2.Mirza@live.uwe.ac.uk](mailto:Mohammad2.Mirza@live.uwe.ac.uk)
