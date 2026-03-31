import React, { useMemo, useState } from "react";

export default function MCQPracticePage() {
  const questions = useMemo(
    () => [
      {
        id: 1,
        category: "Medicine & Healthcare",
        prompt:
          'Which neurotransmitter is primarily responsible for the "reward" feeling in the human brain and plays a central role in addiction and motivation?',
        options: ["Serotonin", "Dopamine", "GABA", "Acetylcholine"],
        correctIndex: 1,
      },
      {
        id: 2,
        category: "Medicine & Healthcare",
        prompt: "Which vitamin deficiency is classically associated with scurvy?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        correctIndex: 2,
      },
      {
        id: 3,
        category: "Medicine & Healthcare",
        prompt: "What is the normal resting adult respiratory rate (breaths/min) range?",
        options: ["6–10", "12–20", "22–30", "30–40"],
        correctIndex: 1,
      },
      {
        id: 4,
        category: "Medicine & Healthcare",
        prompt: "Which organ primarily produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Spleen"],
        correctIndex: 2,
      },
      {
        id: 5,
        category: "Medicine & Healthcare",
        prompt: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
        options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
        correctIndex: 1,
      },
    ],
    []
  );

  const total = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);

  const isFinished = currentIndex >= total;
  const current = questions[currentIndex];

  const letters = ["A", "B", "C", "D"];

  function handleNext() {
    if (selectedIndex === null) return;

    if (selectedIndex === current.correctIndex) setScore((s) => s + 1);

    setSelectedIndex(null);
    setCurrentIndex((i) => i + 1);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
  }

  const resultMessage =
    score === total
      ? "Perfect score. Outstanding work."
      : score >= Math.ceil(total * 0.7)
      ? "Great job. Keep the streak going."
      : score >= Math.ceil(total * 0.4)
      ? "Nice effort. A quick review will boost your score."
      : "Good start. Practice a bit more and try again.";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              Practice Mode
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Medicine &amp; Healthcare
            </h1>
          </div>

          {!isFinished && (
            <div className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm">
              Question {currentIndex + 1} of {total}
            </div>
          )}
        </div>

        {isFinished ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Your result</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {score} / {total}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{resultMessage}</p>
              </div>
              <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">
                <div className="text-xs text-white/70">Score</div>
                <div className="text-lg font-semibold">
                  {Math.round((score / total) * 100)}%
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            >
              Restart
            </button>
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-900">
                  {currentIndex + 1}
                </div>
                <p className="pt-1 text-base leading-relaxed text-slate-900">
                  {current.prompt}
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.options.map((opt, idx) => {
                  const selected = selectedIndex === idx;

                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className={[
                        "group w-full rounded-2xl border p-4 text-left transition",
                        "focus:outline-none focus:ring-2 focus:ring-slate-900/10",
                        selected
                          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={[
                            "flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold",
                            selected
                              ? "bg-white/10 text-white"
                              : "bg-slate-100 text-slate-900 group-hover:bg-slate-200",
                          ].join(" ")}
                        >
                          {letters[idx]}
                        </div>
                        <div className="pt-1 text-sm font-medium">{opt}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selectedIndex === null}
                  className={[
                    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium shadow-sm transition",
                    selectedIndex === null
                      ? "cursor-not-allowed bg-slate-200 text-slate-500"
                      : "bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20",
                  ].join(" ")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-center text-xs text-slate-500">
          Notexa · MCQ Practice
        </div>
      </div>
    </div>
  );
}