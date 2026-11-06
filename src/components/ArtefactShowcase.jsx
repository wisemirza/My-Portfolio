import React, { useState } from 'react';
import { 
  FileText, 
  Workflow, 
  CheckSquare, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Layers,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ArtefactShowcase() {
  const [activeTab, setActiveTab] = useState('process-mapping');
  const { categories } = portfolioData.artefactShowcase;

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  const tabIcons = {
    'process-mapping': Workflow,
    'user-stories': FileText,
    'uat-matrix': CheckSquare,
    'stakeholder-mapping': Users
  };

  return (
    <section id="artefacts" className="py-24 relative border-t border-panel-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-panel border border-panel-border text-electric-400">
            <Workflow className="w-3.5 h-3.5" />
            <span>Interactive BA Deliverables</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I structure business analysis deliverables.
          </h2>
          <p className="text-base text-muted-slate leading-relaxed">
            Good requirements reduce development re-work and keep teams aligned. Explore real examples of process maps, user stories with acceptance criteria, UAT test matrices, and stakeholder engagement plans from my projects.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-10 flex flex-wrap gap-2.5 border-b border-panel-border pb-4">
          {categories.map((cat) => {
            const Icon = tabIcons[cat.id] || FileText;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-electric-700 text-white shadow-md shadow-electric-950 font-semibold'
                    : 'bg-panel text-slate-300 hover:text-white hover:bg-panel-hover border border-panel-border'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-electric-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 rounded-2xl glass-panel border border-panel-border p-6 sm:p-8">
          
          {/* Header of Active Tab */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-panel-border gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-electric-400">
                BA Artefact Deep-Dive • {currentCategory.exampleProject}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-slate mt-1 max-w-2xl">
                {currentCategory.description}
              </p>
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-panel border border-panel-border text-xs text-slate-300 flex-shrink-0 self-start sm:self-center">
              <span className="text-muted-subtle">Key Insight: </span>
              <span className="text-slate-100 font-medium">{currentCategory.keyTakeaway}</span>
            </div>
          </div>

          {/* TAB 1: AS-IS vs TO-BE Process Map */}
          {activeTab === 'process-mapping' && (
            <div className="mt-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* AS-IS Card */}
                <div className="rounded-xl bg-panel/80 border border-red-950/60 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-950/60 text-red-400 border border-red-800/40">
                      Current Broken AS-IS State (WhatsApp)
                    </span>
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-xs text-muted-slate">
                    High friction, exposed personal numbers, and language barriers suppressed participation.
                  </p>

                  <div className="space-y-3 pt-2">
                    {currentCategory.asIsSteps.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-void-950/60 border border-panel-border text-xs">
                        <span className="w-5 h-5 rounded-full bg-red-950/60 text-red-400 border border-red-800/40 flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-slate-200">{item.step}</div>
                          <div className="text-muted-slate mt-0.5">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TO-BE Card */}
                <div className="rounded-xl bg-panel/80 border border-emerald-950/60 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                      Streamlined TO-BE State (Student Voice Web)
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-muted-slate">
                    Frictionless account-free submission, automated translation, and verified cohort voting.
                  </p>

                  <div className="space-y-3 pt-2">
                    {currentCategory.toBeSteps.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-void-950/60 border border-emerald-900/30 text-xs">
                        <span className="w-5 h-5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-slate-100">{item.step}</div>
                          <div className="text-muted-slate mt-0.5">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Transformation Summary */}
              <div className="p-4 rounded-xl bg-panel border border-panel-border text-xs text-slate-300 flex items-center gap-3">
                <Workflow className="w-5 h-5 text-electric-400 flex-shrink-0" />
                <span>
                  <strong>Impact on Delivery:</strong> Mapping this transition helped prevent unnecessary features (e.g. mandatory user login, profile photos, multiple nested sub-categories) that would have reintroduced the friction students were actively avoiding.
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: User Stories & Acceptance Criteria */}
          {activeTab === 'user-stories' && (
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {currentCategory.stories.map((story) => (
                  <div 
                    key={story.id} 
                    className="p-5 rounded-xl bg-panel/70 border border-panel-border space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-electric-400 bg-electric-950/80 px-2.5 py-0.5 rounded-md border border-electric-800/50">
                          {story.id}
                        </span>
                        <span className="text-[11px] text-muted-slate font-medium">Gherkin FRS</span>
                      </div>

                      <h4 className="font-bold text-white text-base">
                        {story.title}
                      </h4>

                      {/* As a / I want / So that */}
                      <div className="space-y-1.5 text-xs bg-void-950/60 p-3 rounded-lg border border-panel-border">
                        <p className="text-slate-300">
                          <strong className="text-slate-400">As a:</strong> {story.asA}
                        </p>
                        <p className="text-slate-300">
                          <strong className="text-slate-400">I want:</strong> {story.iWant}
                        </p>
                        <p className="text-slate-300">
                          <strong className="text-slate-400">So that:</strong> {story.soThat}
                        </p>
                      </div>

                      {/* Given When Then Criteria */}
                      <div className="space-y-1 pt-1">
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-subtle">
                          Acceptance Criteria
                        </div>
                        <div className="space-y-1 text-xs text-slate-300 bg-panel-hover p-2.5 rounded-lg border border-panel-border font-mono text-[11px] leading-relaxed">
                          {story.acceptanceCriteria.map((line, idx) => (
                            <div key={idx} className="text-slate-300">
                              <span className="text-electric-300 font-semibold">{line.split(' ')[0]}</span>{' '}
                              {line.substring(line.indexOf(' ') + 1)}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: UAT Matrix */}
          {activeTab === 'uat-matrix' && (
            <div className="mt-8 space-y-6">
              <div className="overflow-x-auto rounded-xl border border-panel-border">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-panel-hover border-b border-panel-border text-slate-300 uppercase font-semibold text-[11px] tracking-wider">
                      <th className="py-3.5 px-4">Test ID</th>
                      <th className="py-3.5 px-4">Feature Area</th>
                      <th className="py-3.5 px-4">Test Scenario</th>
                      <th className="py-3.5 px-4">Expected Result</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Verification Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-panel-border bg-void-950/40">
                    {currentCategory.tests.map((test) => (
                      <tr key={test.id} className="hover:bg-panel/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-electric-400">
                          {test.id}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-white">
                          {test.feature}
                        </td>
                        <td className="py-3.5 px-4 text-slate-300">
                          {test.scenario}
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">
                          {test.expected}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                            <CheckCircle2 className="w-3 h-3" />
                            {test.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-muted-slate italic">
                          {test.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-muted-slate flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>All test scenarios were executed against both staging and live Netlify/Firestore production instances.</span>
              </div>
            </div>
          )}

          {/* TAB 4: Stakeholder Power/Interest Matrix */}
          {activeTab === 'stakeholder-mapping' && (
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCategory.quadrants.map((quad, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-panel/70 border border-panel-border space-y-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-electric-400">
                      {quad.group}
                    </div>
                    <div className="p-3 rounded-lg bg-void-950/60 border border-panel-border text-xs text-white font-medium">
                      <span className="text-muted-subtle block text-[10px] uppercase font-semibold mb-1">
                        Stakeholders
                      </span>
                      {quad.stakeholders}
                    </div>
                    <div className="text-xs text-muted-slate leading-relaxed">
                      <span className="text-slate-300 font-semibold">Engagement Strategy: </span>
                      {quad.strategy}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
