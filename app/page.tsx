"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [interest, setInterest] = useState("Collaboration");
  const [message, setMessage] = useState("");

  const features = [
    {
      title: "Longitudinal AI",
      text: "Track meaningful change over time instead of relying on one-off imaging snapshots.",
    },
    {
      title: "Therapy Monitoring",
      text: "Support dementia pathways shaped by anti-amyloid treatment readiness and ARIA-aware follow-up.",
    },
    {
      title: "Workflow First",
      text: "Designed for radiology and memory-clinic workflows rather than research-only dashboards.",
    },
  ];

  const stats = [
    "Founder-led",
    "MRI-first",
    "Dementia focus",
    "Cambridge-built",
  ];

  const handleSend = () => {
    const subject = `CognitoDx enquiry: ${interest}`;
    const body = `Hello Festus,

I am interested in: ${interest}

Message:
${message}
`;

    window.location.href = `mailto:fs628@cam.ac.uk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen text-slate-900 relative overflow-hidden bg-white">
      {/* Animated MRI-like background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(99,102,241,0.10),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(14,165,233,0.08),transparent_28%)]" />

        <div className="absolute left-[-8%] top-[6%] h-[28rem] w-[28rem] rounded-full border border-sky-200/60 bg-sky-100/40 blur-3xl animate-pulse" />
        <div className="absolute right-[-6%] top-[10%] h-[24rem] w-[24rem] rounded-full border border-indigo-200/60 bg-indigo-100/40 blur-3xl animate-pulse" />
        <div className="absolute left-[18%] bottom-[-8%] h-[22rem] w-[22rem] rounded-full border border-cyan-200/60 bg-cyan-100/40 blur-3xl animate-pulse" />

        <div className="absolute top-[8%] left-[10%] h-[34rem] w-[34rem] animate-[spin_36s_linear_infinite] rounded-full border border-sky-200/50" />
        <div className="absolute top-[10%] left-[12%] h-[30rem] w-[30rem] animate-[spin_28s_linear_infinite] rounded-full border border-sky-100/70" />
        <div className="absolute bottom-[4%] right-[8%] h-[22rem] w-[22rem] animate-[spin_24s_linear_infinite] rounded-full border border-indigo-200/50" />

        <div className="absolute top-[22%] left-[14%] h-px w-[34rem] animate-[pulse_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-sky-300/70 to-transparent rotate-[18deg]" />
        <div className="absolute top-[34%] right-[10%] h-px w-[28rem] animate-[pulse_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-indigo-300/70 to-transparent -rotate-[14deg]" />
        <div className="absolute bottom-[20%] left-[24%] h-px w-[24rem] animate-[pulse_6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent rotate-[8deg]" />

        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50/80 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                CognitoDx • Founder-led neuroimaging venture
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Quantitative neuroimaging for the therapy era in dementia care.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                CognitoDx is building a longitudinal imaging companion for dementia diagnosis,
                therapy readiness, and treatment monitoring — starting with MRI-first clinical
                decision support designed for radiology and memory-clinic workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5"
                >
                  Explore collaboration
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Learn more
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {stats.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
                <img
                  src="/logo.png"
                  alt="CognitoDx logo"
                  className="h-auto w-full rounded-[1.5rem] object-contain"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100">
                  <p className="text-sm font-medium text-sky-700">Clinical direction</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Dementia imaging decision support with longitudinal MRI insight.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100">
                  <p className="text-sm font-medium text-indigo-700">Platform direction</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Structured reporting, quantitative workflows, and therapy-era monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Founder</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Dr Festus Slade</h2>
            <p className="mt-2 text-lg text-sky-700">Founder & CEO</p>
            <p className="mt-1 text-slate-500">MRI Physicist | Neuroimaging Scientist | Translational MedTech Founder</p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              Dr Festus Slade is an MRI physicist and quantitative neuroimaging researcher at the
              University of Cambridge. His work spans MRI physics, image reconstruction,
              spectroscopy, and quantitative biomarker development across neurological applications.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              CognitoDx translates this technical depth into a focused venture: delivering more
              clinically useful, more longitudinal, and more deployable neuroimaging for dementia
              pathways and therapy monitoring.
            </p>

            <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sky-900">
              Building the quantitative neuroimaging companion for the therapy era in dementia care.
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl shadow-slate-100">
            <h3 className="text-xl font-semibold text-slate-950">Why this company matters</h3>
            <div className="mt-6 space-y-4">
              {[
                "Dementia imaging is becoming more operationally important as therapy pathways evolve.",
                "Radiology and memory clinics need more standardised and longitudinal interpretation.",
                "Existing solutions are often too narrow, too cross-sectional, or weakly embedded in workflow.",
                "CognitoDx is positioned to bridge research-grade imaging with clinical usability.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-700">Platform vision</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              A cleaner, smarter operating layer for dementia imaging.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              CognitoDx is designed to make imaging more quantitative, more consistent, and more actionable — without making clinical workflows heavier.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
                <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">The problem</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Why now</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7">
                Dementia prevalence is increasing while clinical services face growing pressure.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7">
                New therapies are increasing the need for structured MRI monitoring, including ARIA-aware follow-up.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7">
                Imaging interpretation remains variable, qualitative, and often weak on longitudinal insight.
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-700">The solution</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">What CognitoDx delivers</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7">
                Automated MRI quantification of atrophy, vascular burden, and microbleeds.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7">
                Longitudinal change modelling for disease tracking and treatment-era monitoring.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7">
                Integration into radiology and memory clinic workflows rather than stand-alone research tooling.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Roadmap</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              From prototype to deployment.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Phase 1", "MVP and retrospective validation"],
              ["Phase 2", "NHS pilot deployment"],
              ["Phase 3", "Regulatory pathway and evidence building"],
              ["Phase 4", "Scale into therapy monitoring and broader markets"],
            ].map(([phase, text]) => (
              <div key={phase} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
                <p className="text-sm font-medium text-sky-700">{phase}</p>
                <p className="mt-3 text-base leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-medium text-slate-900">CognitoDx</p>
            <p className="mt-1">Quantitative neuroimaging for the therapy era in dementia care.</p>
          </div>
          <div>
            <p>Founder: Dr Festus Slade</p>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
                  Connect
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  Explore collaboration
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Choose your interest area and send a message directly to CognitoDx.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-500 transition hover:bg-slate-50"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                I’m interested in
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400"
              >
                <option value="Investing">Investing</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Networking">Networking</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                rows={6}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex-1"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 sm:flex-1"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
