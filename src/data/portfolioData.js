export const portfolioData = {
  personal: {
    fullName: "Mohammad Waiz Mirza",
    preferredName: "Waiz Mirza",
    role: "Junior Business Analyst",
    subRole: "Digital Products & Process Optimisation",
    location: "Bristol, United Kingdom",
    email: "Mohammad2.Mirza@live.uwe.ac.uk",
    github: "https://github.com/wisemirza",
    tableauPublic: "https://public.tableau.com",
    avatar: "/waizavatar.jpg",
    availability: "Available for Junior Business Analyst & Product Analyst roles",
    shortBio: "Data Science & AI student at UWE Bristol with an NCC Business & Computing foundation. I look past buzzwords to uncover why users drop off, map AS-IS processes, and write clear functional requirements teams can actually build."
  },

  keyStats: [
    { label: "YouTube Audience Built", value: "500K+", detail: "264M+ views; retention & drop-off analysis" },
    { label: "Operational Logs Processed", value: "17.3K+", detail: "Capital Bikeshare demand analytics" },
    { label: "Essay Samples Evaluated", value: "44.8K+", detail: "Explainable AI stylometric model" },
    { label: "Live BA Initiatives", value: "3+", detail: "Student Voice, Bikeshare & Safety Explorer" }
  ],

  caseStudies: [
    {
      id: "student-voice",
      title: "Student Voice — Bilingual Cohort Feedback & Voting Platform",
      category: "Business Analysis",
      tag: "Live Platform & BA Case Study",
      year: "2026",
      summary: "Identified communication barriers in our university cohort's WhatsApp chat, mapped the broken process, and delivered a bilingual, account-free web app that enables anonymous submission and prioritised voting.",
      liveUrl: "https://studentvc.netlify.app/",
      githubUrl: "https://github.com/wisemirza/Studentrep",
      context: {
        role: "Student Representative & Business Analyst",
        cohort: "UWE Bristol Data Science & AI",
        duration: "Oct 2026 – Present (Live)"
      },
      problem: "Cohort communications were handled in an informal WhatsApp group. Many international students—particularly Chinese speakers—faced language barriers, while others avoided sharing critical feedback because their names and private phone numbers were exposed to everyone. As a result, urgent module issues were either discussed in private silos or never reached university staff.",
      approach: "Conducted user discovery interviews with cohort members. Mapped the AS-IS communication flow to expose why students dropped out of giving feedback. Authored formal BA documentation: stakeholder analysis, functional specifications, user stories with acceptance criteria, and a UAT test matrix. Designed and deployed a simple bilingual web platform.",
      keySteps: [
        "Mapped the AS-IS process to pinpoint why students avoided raising issues in WhatsApp.",
        "Defined 3 key stakeholder personas: Student (Submitter/Voter), Student Rep (Curator/Liaison), and Course Leader (Reviewer).",
        "Wrote functional requirements covering bilingual translation (EN / 中文), account-free submissions, and admin moderation.",
        "Implemented anonymous voting via hashed browser voter tokens (HMAC-SHA256) stored in Firestore transactions to prevent vote tampering.",
        "Created an Admin console with a one-click QR code generator for live in-lecture feedback collection."
      ],
      tools: ["Firebase Cloud Firestore", "Node.js", "Express", "Netlify", "Miro", "HTML5/CSS3", "JavaScript"],
      artefacts: [
        "AS-IS vs TO-BE Process Map",
        "Stakeholder Power/Interest Matrix",
        "Functional Requirements Specification (FRS)",
        "User Stories & Given-When-Then Acceptance Criteria",
        "UAT Test Scenarios & Traceability Matrix"
      ],
      outcomes: [
        "Removed identity fear: 100% anonymous submission without requiring accounts or phone numbers.",
        "Language parity: Automatic full-page toggle between English and Simplified Chinese.",
        "Actionable liaison: Enabled student reps to present ranked, evidence-based feedback at Student-Staff Liaison Committee (SSLC) meetings."
      ],
      baDeepDive: {
        asIs: "Student experiences issue -> Reluctant to post in 100+ person WhatsApp -> Translates message manually -> Fears peer judgment / phone number leak -> Issue remains unaddressed.",
        toBe: "Student accesses web app via QR code -> Plain text input box (optional title) -> Instant automatic translation -> Upvotes from peers -> Auto-ranked priority feed reviewed in SSLC."
      }
    },
    {
      id: "capital-bikeshare",
      title: "Capital Bikeshare — Operations & Fleet Demand Analytics Dashboard",
      category: "Operations Dashboards",
      tag: "Live Dashboard & Analytics",
      year: "2026",
      summary: "Built an interactive operational intelligence dashboard visualizing 17,379 hours and 731 days of rental logs to help fleet managers balance bikes between commuter surges and leisure riders.",
      liveUrl: "https://wisemirza.github.io/Capital-bikeshare-dashboard/",
      githubUrl: "https://github.com/wisemirza/Capital-bikeshare-dashboard",
      context: {
        role: "Product Analyst & UI Architect",
        domain: "Urban Mobility / Fleet Operations",
        duration: "Portfolio Project (2026)"
      },
      problem: "Fleet rebalancing teams in Washington D.C. juggle two very different customer segments: registered commuters who need bikes at 08:00 and 17:00 on weekdays, and casual tourists who rent spontaneously on warm weekend afternoons. Operations staff lacked a single, fast view to correlate hourly load, seasonal weather, and user types without digging into multi-megabyte CSV files.",
      approach: "Structured requirements around the day-to-day decisions of an Operations Manager. Selected high-signal metrics (Trips, Daily Average, Registered/Casual Split, Weather Impact), designed an executive visual hierarchy, and built an interactive client-side dashboard with instant multi-filtering.",
      keySteps: [
        "Audited 17,379 hourly records from the UCI Machine Learning repository and defined operational metrics.",
        "Designed an executive KPI layout: top-level volume cards, a radial utilization gauge, and monthly/hourly demand breakdowns.",
        "Engineered a 168-cell 24-Hour × 7-Day Demand Heatmap to highlight the exact transition between commuter surges and weekend leisure volume.",
        "Built dynamic filters (Year: All/2011/2012, Day Type: All/Working Days/Weekends) with zero backend lag.",
        "Ensured responsive layout across mobile, tablet, and desktop screens for field managers."
      ],
      tools: ["HTML5", "Tailwind CSS", "Chart.js", "Vanilla JavaScript", "UCI Dataset"],
      artefacts: [
        "Operations Manager Persona & Decision Flow",
        "KPI Definition & Data Aggregation Sheet",
        "Demand Heatmap Specification",
        "Filter Logic & Edge Case Documentation"
      ],
      outcomes: [
        "Uncovered that registered commuters account for ~81% of total volume with narrow morning (8 AM) and evening (5 PM) peaks.",
        "Proved that casual demand quadruples on sunny weekends between 12:00 and 16:00, requiring distinct rebalancing routes.",
        "Delivered a zero-latency web tool hosted directly on GitHub Pages with no recurring database costs."
      ],
      baDeepDive: {
        asIs: "Managers pull separate raw CSV tables -> Manually calculate pivot tables in Excel -> Delays fleet van dispatch -> Stations run empty during morning commuter spikes.",
        toBe: "Instant browser dashboard -> Filter by Working Day -> See 8 AM station demand heatmap -> Rebalance van routes scheduled before 07:15 AM."
      }
    },
    {
      id: "explainable-ai-detector",
      title: "Explainable AI Text Classifier — Transparent Stylometric Analysis",
      category: "Explainable AI & ML",
      tag: "Final Year Academic Project",
      year: "2026",
      summary: "Developed an explainable machine learning prototype that estimates whether text resembles AI or human writing using 7 measurable writing habits, accompanied by TreeSHAP feature contributions.",
      liveUrl: "https://github.com/wisemirza/Detect-AI",
      githubUrl: "https://github.com/wisemirza/Detect-AI",
      context: {
        role: "Researcher & Machine Learning Lead",
        institution: "UWE Bristol (BSc Data Science & AI)",
        duration: "Sep 2026 – Nov 2026"
      },
      problem: "Commercial AI detectors (such as Turnitin and GPTZero) act as 'black boxes', outputting arbitrary percentage scores. Research (Liang et al., 2023) proves these tools frequently misclassify non-native English speakers as AI simply because they write in formal structures. Students face severe academic penalties without any transparent explanation.",
      approach: "Focused on explainability rather than inflated detection claims. Formulated a research scope limited to student essays, extracted 7 length-invariant writing habits (sentence length variation, comma density, transition words, etc.), trained a Random Forest model, and integrated TreeSHAP to expose the exact mathematical influence of every habit.",
      keySteps: [
        "Curated and preprocessed 44,868 essays from the DAIGT-V2 dataset (27,371 human essays and 17,497 LLM generations).",
        "Engineered 7 length-invariant stylometric features to ensure fair comparisons regardless of text length.",
        "Split data by prompt topic (12 prompts train, 3 prompts held-out test) to evaluate performance strictly on unseen subjects.",
        "Trained a Random Forest classifier and integrated TreeSHAP to calculate additive feature contributions for every single prediction.",
        "Authored clear ethical caveats in the UI, highlighting that stylometric scores must never be used punitively."
      ],
      tools: ["Python", "Scikit-learn", "TreeSHAP", "Pandas", "Flask", "DAIGT-V2 Kaggle"],
      artefacts: [
        "Academic Project Proposal (Module UFCEKP-30-3)",
        "Feature Engineering & Length-Invariance Specification",
        "Held-Out Evaluation Matrix (83.1% Accuracy, 4.4% Human FPR at 0.60 threshold)",
        "Ethical Risk Assessment & Humanizer Limitation Report"
      ],
      outcomes: [
        "Replaced black-box percentages with transparent feature breakdowns (e.g., '+12% due to uniform sentence length').",
        "Documented a 4.4% false-positive rate on human student essays, proving why automated punishment is ethically flawed.",
        "Successfully submitted and accepted for university individual project assessment."
      ],
      baDeepDive: {
        asIs: "Student submits essay -> Commercial detector outputs '78% AI' -> Tutor accuses student -> Neither party can inspect why the text was flagged.",
        toBe: "Text scanned -> Model shows score + exact SHAP contribution of 7 habits -> Tutor and student see standard formal grammar caused the flag -> Misunderstandings avoided."
      }
    },
    {
      id: "bristol-road-safety",
      title: "Bristol Road Safety Explorer — DfT Police Collision Analytics",
      category: "Operations Dashboards",
      tag: "Data & Spatial Analytics",
      year: "2026",
      summary: "Processed 5 years of police collision data across Great Britain to build a standalone Bristol hotspot explorer with DBSCAN spatial clustering and multi-table grain controls.",
      liveUrl: "https://github.com/wisemirza/bristol_road_safety_explorer",
      githubUrl: "https://github.com/wisemirza/bristol_road_safety_explorer",
      context: {
        role: "Data Analyst & Dashboard Designer",
        dataset: "UK Department for Transport (DfT) 2021–2025",
        duration: "Portfolio Project (2026)"
      },
      problem: "The UK Department for Transport publishes massive multi-table collision datasets covering Great Britain. Local road safety officers need to inspect repeat collision locations in Bristol, but raw data has complex joins (collisions vs vehicles vs casualties) and changes in reporting methods (Avon & Somerset Police's 2025 shift to injury-based reporting).",
      approach: "Conducted strict data-grain analysis to avoid row-multiplication errors when joining vehicles and casualties. Implemented DBSCAN spatial clustering (25-metre radius, min 3 collisions) to identify repeat collision sites objectively. Created a single standalone HTML browser tool.",
      keySteps: [
        "Filtered GB records to Bristol City ONS boundary (`E06000023`) while retaining highway boundary QA notes.",
        "Grouped vehicles and casualties separately by `collision_index` to prevent Cartesian join count inflation.",
        "Applied DBSCAN clustering with haversine distance (25m radius) to find candidate repeat collision points.",
        "Built interactive Leaflet street maps, weekday-by-hour heatmaps, and casualty circumstance filters.",
        "Authored VALIDATION.md documenting row counts, code discrepancies, and police reporting changes."
      ],
      tools: ["Python", "Pandas", "Scikit-learn (DBSCAN)", "Leaflet", "OpenStreetMap", "Chart.js"],
      artefacts: [
        "Multi-Table Grain & Relational Join Architecture",
        "DBSCAN Parameter Selection & Evaluation Document",
        "QA & Limitation Disclosure (VALIDATION.md)",
        "One-Click Filtered CSV Export Mechanism"
      ],
      outcomes: [
        "Delivered a zero-server standalone file that runs locally in any browser with no API costs.",
        "Identified 35+ candidate repeat collision clusters across Bristol for priority street inspections.",
        "Explicitly documented data caveats to prevent officers from misinterpreting reporting changes as accident surges."
      ],
      baDeepDive: {
        asIs: "Officers download 3 raw CSVs with millions of rows -> Joining vehicle and casualty records multiplies counts -> Unclear whether high numbers reflect real danger or reporting shifts.",
        toBe: "Open standalone file -> Select severe casualty slice -> DBSCAN cluster rings highlight repeat collision sites -> 1-click filtered CSV export for field team."
      }
    },
    {
      id: "creator-prompt-platform",
      title: "AI Prompt Sharing Platform — User Journey & Retention Analysis",
      category: "User Insights",
      tag: "Analytics & Product Growth",
      year: "2025 – 2026",
      summary: "Analysed user sessions and drop-off heatmaps on an image-prompt platform attracting 10,000 monthly visitors to diagnose why readers were not contributing, onboarding 16 creator sellers.",
      liveUrl: "https://wisemirza.github.io",
      githubUrl: "https://github.com/wisemirza",
      context: {
        role: "Product Growth & User Insights Analyst",
        domain: "Creator Economy / Web App",
        duration: "2025 – 2026"
      },
      problem: "The platform achieved strong initial traffic (~10,000 monthly visitors), but user behavior was entirely one-sided: people copied prompts and bounced immediately. Almost no visitors were submitting new prompts, putting community growth at risk.",
      approach: "Conducted funnel and session replay analysis using Google Analytics 4 and Microsoft Clarity. Identified that the prompt upload form was too tedious and there was zero motivation for creators to share their proprietary prompts for free.",
      keySteps: [
        "Analysed scroll depth and click heatmaps across 1,200+ user sessions in Microsoft Clarity.",
        "Identified high abandonment at the multi-field prompt submission modal (68% drop-off).",
        "Interviewed 8 active community members to understand what would motivate them to publish prompts.",
        "Proposed a creator compensation feature: allowed creators to sell prompt packs or earn platform reward badges.",
        "Simplified the upload flow from 7 mandatory fields down to 3 quick inputs."
      ],
      tools: ["Google Analytics 4", "Microsoft Clarity", "Heatmap Analysis", "Session Replay Audits", "Figma / Miro"],
      artefacts: [
        "User Funnel Drop-off Report",
        "Creator Motivation & Incentive Canvas",
        "Streamlined Form UX Wireframe",
        "Creator Onboarding Journey Map"
      ],
      outcomes: [
        "Onboarded 16 independent creator sellers who began posting exclusive prompt libraries.",
        "Reduced submission flow abandonments by simplifying input requirements.",
        "Shifted the platform from a one-way consumption directory into a two-sided community."
      ],
      baDeepDive: {
        asIs: "10,000 visitors read prompts -> Click upload -> Faced with 7 mandatory fields and zero reward -> 68% drop-off -> Platform content stagnates.",
        toBe: "Simplified 3-field submission -> Contributor badge + monetization option -> 16 creator sellers onboarded -> Regular community supply."
      }
    },
    {
      id: "tableau-portfolio",
      title: "Executive Tableau Visualisation Portfolio",
      category: "Operations Dashboards",
      tag: "Business Intelligence & BI",
      year: "2026",
      summary: "Designed a collection of focused Tableau dashboards covering Bristol road safety, Cardiff climate variations, and Alibaba quarterly ecommerce sales, mastering chart selection and executive communication.",
      liveUrl: "https://public.tableau.com",
      githubUrl: "https://github.com/wisemirza",
      context: {
        role: "Business Intelligence Analyst",
        domain: "Cross-Industry Visual Analytics",
        duration: "2026"
      },
      problem: "Decision-makers often struggle to extract actionable priorities when presented with raw data tables or overloaded charts that suffer from excessive visual clutter.",
      approach: "Built three specialized Tableau dashboards tailored to distinct executive audiences, applying strict visual hierarchy, appropriate chart selection, and guided storytelling.",
      keySteps: [
        "Bristol Road Safety: Visualised five-year collision trends, pedestrian vulnerability ratios, and high-frequency corridors.",
        "Cardiff Climate Variations: Mapped temperature and precipitation anomalies over multiple decades.",
        "Alibaba Commercial Sales: Analysed regional revenue distribution, quarterly growth rates, and category profitability.",
        "Designed clear interactive filters, tooltip summaries, and parameter toggles to minimise cognitive load."
      ],
      tools: ["Tableau Desktop", "Tableau Public", "Calculated Fields", "Parameter Controls"],
      artefacts: [
        "Audience Persona & Chart Suitability Matrix",
        "Executive Dashboard Layout Guidelines",
        "Calculated Fields Logic Documentation"
      ],
      outcomes: [
        "Demonstrated the ability to communicate clear insights to non-technical stakeholders.",
        "Applied best-practice data visualisation standards (chart-type matching, minimal ink ratio).",
        "Published live on Tableau Public for stakeholder review."
      ],
      baDeepDive: {
        asIs: "Business stakeholders comb through multi-sheet spreadsheets -> Misinterpret quarterly variance -> Decisions delayed by weeks.",
        toBe: "Role-specific Tableau views -> Immediate visual variance highlights -> Faster, confident decision-making."
      }
    }
  ],

  artefactShowcase: {
    categories: [
      {
        id: "process-mapping",
        title: "AS-IS vs TO-BE Process Maps",
        description: "Visualising the gap between broken current workflows and streamlined future states to remove user friction.",
        exampleProject: "Student Voice Feedback Platform",
        asIsSteps: [
          { step: "1. Problem Occurs", detail: "Student experiences issue during a module or assessment." },
          { step: "2. Hesitation", detail: "Student considers posting in 100+ member WhatsApp group; fears phone number exposure." },
          { step: "3. Language Barrier", detail: "International Chinese students hesitate due to English translation anxiety." },
          { step: "4. Loss of Signal", detail: "Issue is buried under casual chatter or kept private; rep never learns about it." }
        ],
        toBeSteps: [
          { step: "1. Rapid Access", detail: "Student scans lecture slide QR code or visits web link on mobile." },
          { step: "2. Anonymous Submission", detail: "Types issue into a single text box with zero account registration." },
          { step: "3. Dual-Language Display", detail: "Server translates all issues automatically; students toggle EN / 中文 seamlessly." },
          { step: "4. Evidence-Based Action", detail: "Rep presents top-voted issues directly at university liaison meetings." }
        ],
        keyTakeaway: "Process mapping proved that the barrier was not a lack of student feedback, but privacy fears and language anxiety in WhatsApp."
      },
      {
        id: "user-stories",
        title: "User Stories & Acceptance Criteria",
        description: "Translating stakeholder needs into precise, testable requirements using the Gherkin syntax.",
        exampleProject: "Student Voice — Feedback & Moderation",
        stories: [
          {
            id: "US-01",
            title: "Anonymous Issue Submission",
            asA: "student who wants to report a course concern",
            iWant: "to submit feedback without creating an account or revealing my phone number",
            soThat: "I can share honest, constructive feedback without fear of personal exposure or grading bias.",
            acceptanceCriteria: [
              "Given I am on the main submission page,",
              "When I enter text in the description field (minimum 10 characters) and tap 'Submit',",
              "Then the issue is saved to Firestore without requesting personal identifying info,",
              "And my browser session is assigned an HMAC-hashed token to prevent spam."
            ]
          },
          {
            id: "US-02",
            title: "Instant Bilingual Language Switch",
            asA: "Chinese-speaking international student",
            iWant: "to read all existing submissions and post my own in Simplified Chinese",
            soThat: "I can understand peer feedback and express myself comfortably in my native language.",
            acceptanceCriteria: [
              "Given I am viewing the student feed,",
              "When I tap the '中文' button in the navigation header,",
              "Then all interface buttons, headings, and submitted post cards are translated into Simplified Chinese,",
              "And the language preference is remembered for my return visits."
            ]
          },
          {
            id: "US-03",
            title: "Duplicate Vote Prevention",
            asA: "student rep reviewing cohort priorities",
            iWant: "to ensure each student can only upvote an issue once",
            soThat: "the vote tally accurately reflects true cohort consensus rather than ballot stuffing.",
            acceptanceCriteria: [
              "Given a student has already voted on Issue #104,",
              "When they tap the upvote button again,",
              "Then an atomic transaction checks for composite key `${issueId}_${voterHash}`,",
              "And the vote is cleanly toggled off (or rejected) without altering other tallies."
            ]
          }
        ],
        keyTakeaway: "Strict acceptance criteria prevent misunderstandings between business needs and software delivery."
      },
      {
        id: "uat-matrix",
        title: "User Acceptance Testing (UAT) Matrix",
        description: "Validating that the delivered solution matches functional requirements before release.",
        exampleProject: "Student Voice Release Verification",
        tests: [
          {
            id: "TC-01",
            feature: "Anonymous Submission",
            scenario: "Submit issue with valid text (>10 chars)",
            expected: "Record created in Firestore, success toast shown, feed refreshes immediately",
            status: "PASS",
            notes: "Verified on iOS Safari and Desktop Chrome"
          },
          {
            id: "TC-02",
            feature: "Validation Guard",
            scenario: "Submit blank text or fewer than 5 characters",
            expected: "Submit button disabled, helper text warns 'Please enter at least 10 characters'",
            status: "PASS",
            notes: "Zero invalid records written to database"
          },
          {
            id: "TC-03",
            feature: "Bilingual Switching",
            scenario: "Toggle between EN and 中文 on active feed",
            expected: "Server-side cache loads translations in <200ms without layout shift",
            status: "PASS",
            notes: "Tested across 25 simultaneous translated cards"
          },
          {
            id: "TC-04",
            feature: "Admin QR Code",
            scenario: "Admin logs in and opens QR display on projector",
            expected: "SVG QR code scales cleanly, points to clean student URL with UTM tracking",
            status: "PASS",
            notes: "Scanned successfully from 8 metres away in lecture room"
          }
        ],
        keyTakeaway: "UAT ensures that edge cases and security protections are verified before asking real users to adopt the system."
      },
      {
        id: "stakeholder-mapping",
        title: "Stakeholder Power/Interest Matrix",
        description: "Categorising key individuals to determine communication channels and engagement cadences.",
        exampleProject: "Cohort Representation & Digital Products",
        quadrants: [
          {
            group: "High Power, High Interest (Manage Closely)",
            stakeholders: "Programme Leader, Module Leaders, Student Union Faculty Reps",
            strategy: "Monthly structured SSLC briefings with evidence-backed issue summaries and vote tallies."
          },
          {
            group: "Low Power, High Interest (Keep Informed)",
            stakeholders: "Cohort Students, International Student Peer Groups",
            strategy: "Real-time transparent platform feed, transparent resolution status, cohort announcements."
          },
          {
            group: "High Power, Low Interest (Keep Satisfied)",
            stakeholders: "Department Heads, Academic Quality Review Board",
            strategy: "End-of-term summary reports showing issue resolution rates and student sentiment trends."
          },
          {
            group: "Low Power, Low Interest (Monitor)",
            stakeholders: "Casual site visitors, external university observers",
            strategy: "Public privacy policy and high-level platform status documentation."
          }
        ],
        keyTakeaway: "Stakeholder mapping ensures communications are tailored to influence and interest levels."
      }
    ]
  },

  skillsMatrix: {
    businessAnalysis: [
      { name: "Problem Discovery & Scoping", level: "Core Strength", description: "Uncovering underlying operational friction before jumping to software solutions." },
      { name: "AS-IS / TO-BE Process Mapping", level: "Core Strength", description: "Visualising current vs target states in Miro to remove bottlenecks." },
      { name: "Functional Requirements (FRS)", level: "Core Strength", description: "Writing structured functional requirements with clear boundary scopes." },
      { name: "User Stories & Acceptance Criteria", level: "Core Strength", description: "Gherkin syntax (Given-When-Then) for clean developer handoff." },
      { name: "User Acceptance Testing (UAT)", level: "Core Strength", description: "Test scenario design, traceability matrices, and edge-case auditing." },
      { name: "Stakeholder Mapping & Liaison", level: "Experienced", description: "Bridging communication between international student cohorts and faculty." },
      { name: "Miro Collaborative Workshops", level: "Experienced", description: "Running visual discovery sessions and information architecture planning." }
    ],
    analyticsAndInsights: [
      { name: "Google Analytics 4 (GA4)", level: "Experienced", description: "Event tracking, user journey flows, and traffic source attribution." },
      { name: "Microsoft Clarity", level: "Experienced", description: "Heatmap evaluation, scroll depth analysis, and session replay audits." },
      { name: "Tableau & Tableau Public", level: "Experienced", description: "Building interactive dashboards with calculated fields and parameters." },
      { name: "Executive KPI Design", level: "Core Strength", description: "Distilling complex raw data into clear, actionable operational indicators." },
      { name: "Drop-off & Funnel Analysis", level: "Core Strength", description: "Diagnosing where users abandon web flows and formulating fixes." }
    ],
    digitalDelivery: [
      { name: "Firebase (Firestore & Auth)", level: "Experienced", description: "NoSQL schema design, atomic transactions, and backend rule locking." },
      { name: "Netlify Continuous Delivery", level: "Experienced", description: "Automated git-integrated deployment, redirects, and production hosting." },
      { name: "Git & GitHub", level: "Experienced", description: "Version control, branching, PR reviews, and open repository management." },
      { name: "HTML5, Tailwind CSS, JavaScript", level: "Working Knowledge", description: "Building fast, responsive web prototypes and interactive interfaces." },
      { name: "Python (Pandas, Scikit-learn)", level: "Working Knowledge", description: "Data cleaning, statistical feature extraction, and ML evaluation." }
    ],
    aiWorkflow: [
      { name: "AI-Assisted Workflow", level: "Core Strength", description: "Using Google Antigravity, Cursor, Claude, and ChatGPT to rapidly scaffold prototypes." },
      { name: "Explainable AI (TreeSHAP)", level: "Specialist", description: "Calculating exact local feature attributions to audit machine learning outputs." },
      { name: "Ethical AI Evaluation", level: "Specialist", description: "Identifying algorithmic biases, false-positive impacts, and misuse risks." }
    ]
  },

  academicBackground: [
    {
      institution: "University of the West of England (UWE Bristol)",
      degree: "BSc (Hons) Data Science and Artificial Intelligence (Top-Up)",
      period: "2026 – 2027 (Expected)",
      status: "In Progress (Final Year)",
      studentId: "26041374",
      highlight: "Focusing on applied machine learning, explainable AI, ethical algorithmic governance, and modern data architectures.",
      details: "Final year individual project on detecting AI-generated text using 7 length-invariant stylometric features and TreeSHAP on Kaggle's DAIGT-V2 dataset (44,868 essays)."
    },
    {
      institution: "NCC Education (Britan International Academy, Kuwait)",
      degree: "Level 5 Diploma in Computing (with Business Management) — L5DCBM",
      period: "2025 – 2026",
      status: "Pass (120 Credits, Level 5 RQF)",
      candidateId: "P00204914",
      highlight: "Comprehensive study of enterprise information systems, business operations, and organizational management.",
      details: "Authored in-depth 4,300+ word assessment on Information Systems in Organisations (ISO) and 4,100+ word research study on Principles of Business Operations (PBO)."
    },
    {
      institution: "NCC Education (Britan International Academy, Kuwait)",
      degree: "Level 4 Diploma in Computing (with Business Management) — L4DCBM",
      period: "2024 – 2025",
      status: "Pass (120 Credits, Level 4 RQF)",
      highlight: "Core foundation in IT Project Management, systems analysis, databases, and eBusiness.",
      details: "Delivered comprehensive ITPM coursework: SMART project objectives, vendor buy-vs-build evaluation, risk register, Gantt schedules, and UAT test plans."
    },
    {
      institution: "NCC Education",
      degree: "Level 3 International Foundation Diploma for Higher Education Studies",
      period: "2023 – 2024",
      status: "Completed",
      highlight: "Foundation computing, business studies, academic communication, and quantitative methods.",
      details: "Prepared foundational knowledge for UK higher education degree studies."
    }
  ],

  experience: [
    {
      role: "Student Representative — Data Science & AI",
      organisation: "University of the West of England (UWE Bristol)",
      period: "2026 – Present",
      location: "Bristol, UK",
      type: "Cohort Representation & Governance",
      bullets: [
        "Elected to represent cohort views across the BSc Data Science & AI degree programme.",
        "Gather direct feedback from a diverse international and domestic cohort regarding coursework, schedule collisions, and lab tools.",
        "Synthesise feedback into structured agenda items for Student-Staff Liaison Committee (SSLC) meetings with faculty leaders.",
        "Created the 'Student Voice' bilingual platform to solve language and anonymity barriers in cohort communications."
      ]
    },
    {
      role: "Digital Content & Product Creator",
      organisation: "Independent Online Channels & Communities",
      period: "2020 – Present",
      location: "Remote / Bristol",
      type: "Audience Growth & Analytics",
      bullets: [
        "Built and grew the 'Secret Facts' YouTube channel to over 500,000 subscribers and 264 million lifetime views.",
        "Used YouTube Studio analytics to inspect viewer retention graphs, thumbnail CTRs, and drop-off points, iteratively improving production formats.",
        "Published reusable web components and UI templates on 21st.dev, contributing to open developer design systems.",
        "Managed high-performing short-form video campaigns across creator reward platforms like Whop."
      ]
    }
  ]
};
