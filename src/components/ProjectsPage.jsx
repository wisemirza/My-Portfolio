import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Workflow, 
  ArrowUpRight, 
  BarChart3, 
  Cpu, 
  MapPin, 
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function ProjectsPage({ onBack }) {
  const [iconLoaded, setIconLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-purple-600 selection:text-white antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20 space-y-16">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </button>

          <span className="text-xs text-zinc-600 font-mono">
            Waiz Mirza &middot; Projects
          </span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            A selection of my business analysis deliverables, operational dashboards, and digital product initiatives.
          </p>
        </div>

        {/* ==============================================================
            PROJECT 1: STUDENT VOICE (FEATURED WITH MIRO EMBED)
           ============================================================== */}
        <section className="space-y-6 pt-4 border-t border-zinc-800/80">
          
          {/* Project Title & Logo Header */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden p-1 bg-zinc-900 border border-zinc-800 shadow-lg flex-shrink-0">
              <img
                src="/icon.svg"
                alt="Student Voice Logo"
                onLoad={() => setIconLoaded(true)}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Student Voice
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-950/80 text-purple-300 border border-purple-800/40">
                  Cohort Initiative &middot; 2026
                </span>
              </div>
              <p className="text-sm text-zinc-400">
                Bilingual Student Feedback &amp; Voting Platform (UWE Bristol)
              </p>
            </div>
          </div>

          {/* Context & The Problem */}
          <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            <p>
              As Student Representative for our Data Science &amp; AI cohort at UWE Bristol, I found that cohort discussions were trapped inside a 100+ member WhatsApp group. This caused two major issues:
            </p>

            <ul className="space-y-2 pl-4 border-l-2 border-zinc-800 text-sm sm:text-base text-zinc-300">
              <li>
                <strong className="text-white">Language barriers:</strong> International students—particularly Chinese speakers—often hesitated to post questions or raise issues due to English translation anxiety.
              </li>
              <li>
                <strong className="text-white">Privacy &amp; exposure:</strong> Students avoided giving honest feedback about course modules or assessment schedules because their private phone numbers and personal identities were exposed to everyone in the chat.
              </li>
            </ul>

            <p>
              Critical feedback was either never voiced or buried under hundreds of casual messages, leaving student reps without clear, evidence-backed priorities to bring to university meetings.
            </p>
          </div>

          {/* What I Did (The BA Process) */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400">
              The Business Analysis Process
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Before jumping to write any code, I structured the solution through formal business analysis deliverables:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 pt-1">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="font-semibold text-white">Problem &amp; Stakeholder Mapping</div>
                <div className="text-zinc-400 text-xs">Mapped needs across Students, Student Reps, and Course Leaders.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="font-semibold text-white">AS-IS vs. TO-BE Process Flows</div>
                <div className="text-zinc-400 text-xs">Exposed WhatsApp friction points vs. a frictionless anonymous web flow.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="font-semibold text-white">User Stories &amp; Acceptance Criteria</div>
                <div className="text-zinc-400 text-xs">Documented using Gherkin (Given-When-Then) syntax.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="font-semibold text-white">User Acceptance Testing (UAT)</div>
                <div className="text-zinc-400 text-xs">Executed test scenarios for anonymity, translation, and voting integrity.</div>
              </div>
            </div>
          </div>

          {/* Interactive Miro Deliverables Embed */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                <Workflow className="w-4 h-4 text-purple-400" />
                <span>Interactive BA Deliverables (Miro Board)</span>
              </div>
              <a
                href="https://miro.com/app/live-embed/uXjVETfGO_E=/?embedMode=view_only_without_ui&moveToViewport=-1760,-1854,8746,4156&embedId=804057529450"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <span>Open full screen</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </div>

            {/* Responsive Iframe Container */}
            <div className="relative w-full aspect-video sm:h-[432px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              <iframe
                className="w-full h-full border-0"
                src="https://miro.com/app/live-embed/uXjVETfGO_E=/?embedMode=view_only_without_ui&moveToViewport=-1760,-1854,8746,4156&embedId=804057529450"
                frameBorder="0"
                scrolling="no"
                allow="fullscreen; clipboard-read; clipboard-write"
                allowFullScreen
                title="Student Voice Business Analysis Deliverables"
              />
            </div>

            <p className="text-xs text-zinc-500 leading-normal">
              You can pan, zoom, and inspect the deliverables directly inside the board above, including the Problem Statement, AS-IS / TO-BE maps, functional requirements, user stories, and UAT test scenarios.
            </p>
          </div>

          {/* Direct Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-sm">
            <a
              href="https://studentrep.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
            >
              <span>Live Student Voice App</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </a>

            <span className="text-zinc-700">&middot;</span>

            <a
              href="https://github.com/wisemirza/Studentrep"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
            </a>
          </div>

        </section>


        {/* ==============================================================
            PROJECT 2: CAPITAL BIKESHARE DASHBOARD
           ============================================================== */}
        <section className="space-y-5 pt-8 border-t border-zinc-800/80">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Capital Bikeshare — Operations &amp; Demand Dashboard
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
                Live Dashboard &middot; 2026
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Operational intelligence across 17,379 hourly rental logs (Washington, D.C.)
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Fleet rebalancing teams in Washington D.C. juggle two very different customer segments: registered commuters who need bikes at 08:00 and 17:00 on weekdays, and casual tourists who rent spontaneously on weekends. Operations staff lacked a fast view to correlate hourly load and weather impacts without digging into spreadsheets.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I built a lightweight, interactive client-side operations dashboard with executive KPI cards, a 24-hour &times; 7-day demand heatmap (168-cell matrix), and instant dynamic filters. The analysis proved registered commuters represent ~81% of total volume with sharp commuter spikes, enabling logistics teams to schedule rebalancing vans before 07:15 AM.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
            <a
              href="https://wisemirza.github.io/Capital-bikeshare-dashboard/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
            >
              <span>View Live Dashboard</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </a>

            <span className="text-zinc-700">&middot;</span>

            <a
              href="https://github.com/wisemirza/Capital-bikeshare-dashboard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
            </a>
          </div>
        </section>


        {/* ==============================================================
            PROJECT 3: EXPLAINABLE AI TEXT CLASSIFIER
           ============================================================== */}
        <section className="space-y-5 pt-8 border-t border-zinc-800/80">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Explainable AI Text Classifier
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
                UWE Capstone &middot; 2026
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Replacing black-box AI detection scores with transparent stylometric feature contributions
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Commercial AI detection tools output opaque probability percentages that frequently misclassify non-native English students as AI simply for using formal grammar. For my final year university project at UWE Bristol, I built an explainable prototype trained on 44,868 essays from Kaggle's DAIGT-V2 dataset.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            The system measures 7 length-invariant writing habits (sentence length variation, comma frequency, transition words, etc.) and uses TreeSHAP to expose the exact additive contribution of each habit to the prediction, paired with ethical warnings preventing punitive automated decisions.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
            <a
              href="https://github.com/wisemirza/Detect-AI"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>Inspect on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
            </a>
          </div>
        </section>


        {/* ==============================================================
            PROJECT 4: BRISTOL ROAD SAFETY EXPLORER
           ============================================================== */}
        <section className="space-y-5 pt-8 border-t border-zinc-800/80">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Bristol Road Safety Explorer
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
                Spatial Analytics &middot; DfT Open Data
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              DBSCAN spatial clustering and multi-table police collision analytics
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            The UK Department for Transport publishes massive road collision datasets with multi-table relationships (collisions vs. vehicles vs. casualties). Joining them naively multiplies counts, while local police recording changes (such as Avon &amp; Somerset's 2025 reporting shift) distort trends.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I conducted strict relational data-grain analysis to keep collision, vehicle, and casualty headcounts separated. I then implemented DBSCAN spatial clustering (25-metre radius) to help road safety officers spot repeat collision locations without needing expensive GIS server setups.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
            <a
              href="https://github.com/wisemirza/bristol_road_safety_explorer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>Inspect on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
            </a>
          </div>
        </section>


        {/* ==============================================================
            PROJECT 5: AI PROMPT PLATFORM FUNNEL ANALYSIS
           ============================================================== */}
        <section className="space-y-5 pt-8 border-t border-zinc-800/80">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                AI Prompt Platform — Retention &amp; Supply Funnel
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
                User Insights &amp; Growth
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Diagnosing user drop-off with Google Analytics 4 &amp; Microsoft Clarity
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            An online prompt-sharing site attracted ~10,000 monthly visitors, but user behavior was completely one-sided: visitors copied prompts and bounced, with near-zero community contributions.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            By auditing session replays and scroll heatmaps in Microsoft Clarity, I found a 68% drop-off at the multi-field upload modal. I proposed a creator compensation model and reduced mandatory form fields from 7 down to 3, successfully onboarding 16 independent creator sellers.
          </p>
        </section>


        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-800/80 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to top &middot; Home</span>
          </button>
          <span>&copy; {new Date().getFullYear()} Mohammad Waiz Mirza &middot; Bristol, UK</span>
        </footer>

      </div>
    </div>
  );
}
