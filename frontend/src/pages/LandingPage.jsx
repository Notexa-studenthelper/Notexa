import { useMemo, useState } from "react";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import subjects from "../data/SubjectData"

const Icon = ({ name, className = "h-5 w-5" }) => {
  switch (name) {
    case "chevronRight":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path d="M7.5 4.5 13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path d="M8.75 15.5a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M14 14l3.25 3.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path
            d="M10 18a2.1 2.1 0 0 0 2.05-1.6H7.95A2.1 2.1 0 0 0 10 18Z"
            fill="currentColor"
            opacity="0.85"
          />
          <path
            d="M4.8 7.85A5.2 5.2 0 0 1 10 2.65a5.2 5.2 0 0 1 5.2 5.2v2.65c0 .85.3 1.65.85 2.25l.6.65H3.35l.6-.65c.55-.6.85-1.4.85-2.25V7.85Z"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
          <path
            d="M10 2l.9 3.1c.2.7.75 1.25 1.45 1.45L15.5 7.5l-3.15.95c-.7.2-1.25.75-1.45 1.45L10 13l-.9-3.1c-.2-.7-.75-1.25-1.45-1.45L4.5 7.5l3.15-.95c.7-.2 1.25-.75 1.45-1.45L10 2Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M16.25 12.25l.35 1.25c.1.35.38.63.73.73l1.25.35-1.25.35c-.35.1-.63.38-.73.73l-.35 1.25-.35-1.25a1.1 1.1 0 0 0-.73-.73l-1.25-.35 1.25-.35c.35-.1.63-.38.73-.73l.35-1.25Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      );
    default:
      return null;
  }
};

const PillButton = ({ active, children, className = "" }) => (
  <button
    type="button"
    className={[
      "inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-[16px] font-semibold leading-6 transition",
      active
        ? "bg-[#5044E3] text-white shadow-[0px_4px_6px_-4px_rgba(80,68,227,0.2),0px_10px_15px_-3px_rgba(80,68,227,0.2)]"
        : "bg-[#DEE3E6] text-[#2D3335] hover:bg-[#D6DBDE]",
      className,
    ].join(" ")}
  >
    {children}
  </button>
);

const Badge = ({ tone = "indigo", children }) => {
  const styles =
    tone === "indigo"
      ? "bg-[#EEF2FF] text-[#818CF8]"
      : tone === "purple"
        ? "bg-[rgba(108,99,255,0.10)] text-[#5044E3]"
        : tone === "rose"
          ? "bg-[#FFF1F2] text-[#E11D48]"
          : tone === "amber"
            ? "bg-[#FFFBEB] text-[#D97706]"
            : "bg-[#ECFDF5] text-[#059669]";

  return (
    <span
      className={[
        "inline-flex rounded-full px-3 py-1 text-[12px] font-bold tracking-[0.10em] uppercase leading-4",
        styles,
      ].join(" ")}
    >
      {children}
    </span>
  );
};

const SubjectCard = ({ accentBg, badgeTone, badgeText, title, description,subjectId }) => {
  const navigate = useNavigate();
  
  return(
  <article className="relative h-[310px] rounded-3xl border border-transparent bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)] ring-1 ring-black/0">
    <div className="h-full p-[33px]">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: accentBg }}>
          <Icon name="sparkles" className="h-5 w-5 text-[#2D3335]/70" />
        </div>
        <Badge tone={badgeTone}>{badgeText}</Badge>
      </div>

      <h3 className="mt-[64px] text-[24px] font-bold leading-8 tracking-[-0.01em] text-[#2D3335]">{title}</h3>
      <p className="mt-2 max-w-[32ch] text-[15px] leading-6 text-[#5A6062]">{description}</p>
      
      
         <button
         onClick={()=> navigate(`/resources/${subjectId}`)}
        type="button" 
        className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#5044E3] hover:text-[#3E34C8]"
      >
        Open Subject
        <Icon name="chevronRight" className="h-4 w-4" />
      </button>

      <div className="pointer-events-none absolute right-6 bottom-6 h-20 w-24 rounded-2xl bg-[#5044E3]/[0.05]" />
    </div>
  </article>
)};

const Sidebar = () => (
  <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-64 lg:bg-[#F8FAFC] lg:p-4">
    <div className="flex h-full flex-col rounded-2xl bg-[#F8FAFC]">
      <div className="px-4 py-3">
        <div className="text-[18px] font-extrabold tracking-tight text-[#2D3335]">Notexa</div>
        <div className="mt-1 text-[13px] font-medium text-[#5A6062]">College Workspace</div>
      </div>

      <nav className="mt-2 space-y-1 px-2">
        {/* <SideLink to="/">Subjects</SideLink> */}
        <SideLink to="/">Home</SideLink>
        <SideLink to="/mcq">Practice</SideLink>
        <SideLink to="resources">Resources</SideLink>
        <SideLink to="/pathNotDecide">Community</SideLink>
      </nav>

      <div className="mt-auto px-4 pb-4 pt-6 text-[13px] text-[#5A6062]">
        <div className="space-y-2">
          <a className="block hover:text-[#2D3335]" href="#privacy">
            Privacy Policy
          </a>
          <a className="block hover:text-[#2D3335]" href="#terms">
            Terms of Service
          </a>
          <a className="block hover:text-[#2D3335]" href="#help">
            Help Center
          </a>
          <a className="block hover:text-[#2D3335]" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </aside>
);

const SideLink = ({ to, children }) => (
  <NavLink  
  to={to}   
  className={({ isActive }) =>
      [
        "flex items-center justify-between rounded-xl px-3 py-2 text-[14px] font-semibold",
        isActive
          ? "bg-[#E0E7FF] text-[#2D3335]"
          : "text-[#2D3335]/80 hover:bg-black/5",
      ].join(" ")
    }>
       
         <span>{children}</span>
    <span className="text-[#2D3335]/30">
      <Icon name="chevronRight" className="h-4 w-4" />
    </span>

  </NavLink>
);

const TopNav = ({ search, setSearch }) => (
  <header className="sticky top-0 z-30 w-full bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0px_1px_0_rgba(15,23,42,0.06)]">
    <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-6">
        <NavLink to="/"><div className="text-[18px] font-extrabold tracking-tight text-[#2D3335]">Notexa</div></NavLink>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-[14px] font-semibold text-[#5A6062] hover:text-[#2D3335]">
            Dashboard
          </a>
          <a href="#" className="text-[14px] font-semibold text-[#5A6062] hover:text-[#2D3335]">
            Resources
          </a>
          <a
            href="#"
            className="rounded-xl border border-[#2D3335]/15 px-3 py-2 text-[14px] font-semibold text-[#2D3335] hover:bg-black/5"
          >
            Practice
          </a>
          <a href="#" className="text-[14px] font-semibold text-[#5A6062] hover:text-[#2D3335]">
            Community
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center rounded-full bg-[#EEF2FF] px-4 py-2 md:flex">
          <span className="text-[#5A6062]">
            <Icon name="search" className="h-4 w-4" />
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search knowledge..."
            className="ml-3 w-72 bg-transparent text-[14px] font-medium text-[#2D3335] placeholder:text-[#5A6062]/70 outline-none"
          />
        </div>

        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5">
          <Icon name="bell" className="h-5 w-5 text-[#5A6062]" />
        </button>

        <div className="h-10 w-10 rounded-full bg-[#E2E8F0] shadow-[0px_6px_14px_rgba(15,23,42,0.10)]" />
      </div>
    </div>
  </header>
);

const FeaturedSection = () => (
  <section className="relative overflow-hidden rounded-3xl bg-[#5044E3] p-8 sm:p-12">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="max-w-xl">
        <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-[12px] font-bold tracking-[0.10em] uppercase leading-4 text-white">
          Pro Feature
        </span>

        <h2 className="mt-4 text-[32px] sm:text-[36px] font-black leading-[1.25] tracking-tight text-white">
          Unlock Personalized MCQ
          <br />
          Learning Paths
        </h2>

        <p className="mt-4 text-[16px] sm:text-[18px] leading-7 text-[#E0E7FF]">
          Notexa Pro uses AI to identify your weak spots in any subject and generates targeted practice sessions.
        </p>

        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-[16px] font-bold text-[#5044E3] shadow-sm hover:bg-white/95"
        >
          Upgrade to Pro
        </button>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-[616px] rounded-3xl bg-white/10" />
        <div className="absolute inset-y-0 right-0 w-[616px] rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  const [search, setSearch] = useState("");

  

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3335]">
      <Sidebar />
      <TopNav search={search} setSearch={setSearch} />

      <main className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:pl-[280px]">
        <div className="py-12 pb-24">
          <section className="space-y-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-[40px] sm:text-[48px] font-black leading-none tracking-[-0.05em]">
                  Choose Your Subject
                </h1>
                <p className="mt-3 text-[16px] sm:text-[18px] leading-7 text-[#5A6062]">
                  Select a core discipline to start your focused study session or
                  <br className="hidden sm:block" /> practice curated MCQ banks.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <PillButton>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/10" />
                  All Levels
                </PillButton>
                <PillButton active>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/20" />
                  Custom Study
                </PillButton>
              </div>
            </div>

            <section>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {subjects
                  .filter((s) => {
                    const q = search.trim().toLowerCase();
                    if (!q) return true;
                    return (s.title + " " + s.description + " " + s.badgeText).toLowerCase().includes(q);
                  })
                  .map((s) => (
                    <SubjectCard key={s.subjectId} {...s} />
                  ))}
              </div>
            </section>

            <FeaturedSection />
          </section>
        </div>
      </main>
    </div>
  );
}