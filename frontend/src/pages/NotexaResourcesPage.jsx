import React from "react";
import { useNavigate } from "react-router-dom";

const PdfIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
      className="stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 3v5h5"
      className="stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 16h8M8 19h6"
      className="stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 2l1.2 4.2L17.4 8 13.2 9.2 12 13.4 10.8 9.2 6.6 8l4.2-1.8L12 2Z"
      className="fill-current"
    />
    <path
      d="M19 11l.8 2.7L22 15l-2.2.3L19 18l-.8-2.7L16 15l2.2-.3L19 11Z"
      className="fill-current"
      opacity="0.9"
    />
    <path
      d="M5 12l.9 3.1L9 16l-3.1.4L5 19.5l-.9-3.1L1 16l3.1-.4L5 12Z"
      className="fill-current"
      opacity="0.85"
    />
  </svg>
);

function ResourceCard({ item }) {
  const isPrimary = item.action?.variant === "primary";
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <PdfIcon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">{item.title}</p>
              {item.meta ? (
                <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
              ) : (
                <p className="mt-1 text-xs text-slate-500">PDF • Notexa Resources</p>
              )}
            </div>

            <button
              type="button"
              onClick={() => {}}
              className={[
                "shrink-0 rounded-xl px-3 py-2 text-xs font-semibold ring-1 ring-inset transition",
                isPrimary
                  ? "bg-indigo-600 text-white ring-indigo-600 hover:bg-indigo-700"
                  : "bg-slate-50 text-slate-900 ring-slate-200 hover:bg-slate-100",
              ].join(" ")}
            >
              {item.action?.label ?? "View"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NotexaResourcesPage() {
  const navigate = useNavigate();
  const subject = {
    category: "Advanced Sciences",
    title: "Molecular Biology",
    description:
      "Deep dive into cellular structures, DNA replication, and protein synthesis with curated expert materials.",
  };

  const notes = [
    { id: "n1", title: "Unit 1: Cell Structure — Complete Notes", meta: "12 pages • PDF", action: { label: "View" } },
    { id: "n2", title: "DNA Replication — Quick Revision Sheet", meta: "6 pages • PDF", action: { label: "Download" } },
    { id: "n3", title: "Protein Synthesis — Diagrams & Flowcharts", meta: "9 pages • PDF", action: { label: "View" } },
    { id: "n4", title: "Important NCERT Highlights (Bio)", meta: "8 pages • PDF", action: { label: "Download" } },
  ];

  const pyqs = [
    { id: "p1", title: "PYQs 2025 — Molecular Biology", meta: "Question paper • PDF", action: { label: "View" } },
    { id: "p2", title: "PYQs 2024 — Molecular Biology", meta: "Question paper • PDF", action: { label: "View" } },
    { id: "p3", title: "PYQs 2023 — Molecular Biology", meta: "Question paper • PDF", action: { label: "Download" } },
    { id: "p4", title: "PYQs 2022 — Molecular Biology", meta: "Question paper • PDF", action: { label: "Download" } },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 p-6 text-white shadow-sm sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-inset ring-white/15">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {subject.category}
              </div>

              <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{subject.title}</h1>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">{subject.description}</p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/mcq")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <SparkIcon className="h-5 w-5" />
              Practice MCQ
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-8">
          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Notes</h2>
                <p className="mt-1 text-sm text-slate-600">Curated lecture notes and revision material.</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {notes.map((item) => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Previous Year Questions (PYQs)</h2>
                <p className="mt-1 text-sm text-slate-600">Practice past papers to strengthen concepts.</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {pyqs.map((item) => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}