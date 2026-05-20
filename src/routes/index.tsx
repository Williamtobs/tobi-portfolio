import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tobi William Akeem — Flutter Developer" },
      {
        name: "description",
        content:
          "Tobi William Akeem is a Flutter developer crafting elegant, performant cross-platform mobile experiences.",
      },
      { property: "og:title", content: "Tobi William Akeem — Flutter Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Tobi William Akeem — Flutter developer building thoughtful mobile products.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    year: "2025",
    name: "Lumen Banking",
    role: "Lead Mobile Engineer",
    summary:
      "A neo-banking app for emerging markets. Built end-to-end in Flutter with biometric auth, instant transfers, and offline-first ledgers.",
    stack: ["Flutter", "Riverpod", "Firebase", "Hive"],
  },
  {
    year: "2024",
    name: "Tide — Habit Companion",
    role: "Founding Engineer",
    summary:
      "A mindful habit tracker with custom Rive animations and a tactile haptic layer. 120k+ downloads across iOS and Android.",
    stack: ["Flutter", "Rive", "Supabase", "Bloc"],
  },
  {
    year: "2024",
    name: "Field Atlas",
    role: "Mobile Architect",
    summary:
      "Field operations app for agritech teams in West Africa. Works offline, syncs intelligently, and ships GPS-tagged reports.",
    stack: ["Flutter", "Isar", "Mapbox", "Dio"],
  },
  {
    year: "2023",
    name: "Cadence Studio",
    role: "Independent",
    summary:
      "A pocket music sketchpad. Real-time audio engine bridged to native via Platform Channels with sub-20ms latency.",
    stack: ["Flutter", "Swift", "Kotlin", "FFI"],
  },
];

const experience = [
  {
    period: "2024 — Now",
    role: "Lead Mobile Engineer",
    company: "Lumen Financial",
    location: "Remote",
    notes:
      "Leading a team of four building consumer banking on Flutter. Owning architecture, CI/CD, and the design-engineering handoff.",
  },
  {
    period: "2022 — 2024",
    role: "Senior Flutter Developer",
    company: "Northwind Labs",
    location: "Lagos · Remote",
    notes:
      "Shipped six production apps across fintech and health. Wrote the in-house Flutter starter and component library still used today.",
  },
  {
    period: "2020 — 2022",
    role: "Mobile Developer",
    company: "Freelance",
    location: "Worldwide",
    notes:
      "Partnered with founders and studios across Europe and Africa to launch MVPs — most went from blank repo to App Store in under 90 days.",
  },
];

const skills = [
  "Flutter", "Dart", "Riverpod", "Bloc", "GoRouter",
  "Firebase", "Supabase", "GraphQL", "REST", "WebSockets",
  "Swift", "Kotlin", "Platform Channels", "FFI",
  "Figma", "Rive", "Lottie", "Fastlane", "GitHub Actions",
];

function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="noir-vignette pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[680px] px-6 py-16 sm:py-24">
        {/* Top bar */}
        <header className="mb-24 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-gold">TWA</span>
          <span>Flutter · Mobile · 2025</span>
        </header>

        {/* Hero */}
        <section className="mb-28">
          <div className="mb-10 flex items-center gap-5">
            <img
              src={portrait}
              alt="Tobi William Akeem"
              width={1024}
              height={1024}
              className="h-16 w-16 rounded-full object-cover ring-1 ring-border-strong"
            />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Available · Q3 2025
              </span>
              <span className="font-display text-sm text-foreground">
                Open to senior &amp; lead roles
              </span>
            </div>
          </div>

          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            Tobi William <span className="gradient-gold-text italic">Akeem</span>.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I'm a Flutter developer building cross-platform apps that feel
            considered, fast, and quietly luxurious. Five years shipping
            production mobile software for banks, founders, and field teams.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:hello@tobiakeem.dev"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Start a project
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-gold hover:text-gold"
            >
              See selected work
            </a>
          </div>
        </section>

        {/* Numbers strip */}
        <section className="mb-28 grid grid-cols-3 gap-6 border-y border-border-strong py-8">
          {[
            { k: "5y", v: "Shipping Flutter" },
            { k: "14", v: "Apps in production" },
            { k: "350k+", v: "Combined installs" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl text-gold sm:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </section>

        {/* Selected work */}
        <section id="work" className="mb-28">
          <SectionLabel index="01" title="Selected Work" />
          <ul className="mt-10 flex flex-col">
            {projects.map((p, i) => (
              <li
                key={p.name}
                className="group relative border-t border-border-strong py-8 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-gold sm:text-3xl">
                      {p.name}
                    </h3>
                  </div>
                  <span className="font-display text-xs text-gold">{p.year}</span>
                </div>
                <div className="mt-3 pl-10 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {p.role}
                </div>
                <p className="mt-4 pl-10 text-base leading-relaxed text-foreground/90">
                  {p.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 pl-10">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-28">
          <SectionLabel index="02" title="Experience" />
          <ol className="mt-10 flex flex-col gap-10">
            {experience.map((e) => (
              <li key={e.role + e.company} className="grid gap-2">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">
                  {e.period}
                </div>
                <h3 className="font-display text-xl text-foreground">
                  {e.role}{" "}
                  <span className="text-muted-foreground">— {e.company}</span>
                </h3>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {e.location}
                </div>
                <p className="mt-2 text-base leading-relaxed text-foreground/85">
                  {e.notes}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section className="mb-28">
          <SectionLabel index="03" title="Toolkit" />
          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border-strong bg-surface px-4 py-2 text-sm text-foreground/90 transition hover:border-gold hover:text-gold"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mb-28">
          <SectionLabel index="04" title="About" />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              I started building for mobile because the screen in your pocket is
              the most personal piece of software you'll ever touch. Every
              detail matters — the rhythm of an animation, the weight of a
              haptic, the patience of a loading state.
            </p>
            <p>
              I care about architecture as much as craft. The apps I'm proud of
              are the ones that read like a well-edited essay six months after
              shipping — clear seams, no dead code, no surprises.
            </p>
            <p>
              When I'm not in Dart, I'm reading about typography, tinkering with
              synths, or running long routes at dawn.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <SectionLabel index="05" title="Let's Talk" />
          <div className="mt-10 rounded-2xl border border-border-strong bg-surface p-8 sm:p-10">
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              Have a product worth obsessing over?{" "}
              <span className="gradient-gold-text">Let's build it.</span>
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactRow label="Email" value="hello@tobiakeem.dev" href="mailto:hello@tobiakeem.dev" />
              <ContactRow label="GitHub" value="@tobiakeem" href="https://github.com" />
              <ContactRow label="LinkedIn" value="in/tobiakeem" href="https://linkedin.com" />
              <ContactRow label="X / Twitter" value="@tobiakeem" href="https://x.com" />
            </div>
          </div>
        </section>

        <footer className="hairline flex flex-col items-start justify-between gap-3 pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2025 Tobi William Akeem</span>
          <span>Designed &amp; built in Flutter spirit ✦</span>
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-xs text-gold">{index}</span>
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {title}
      </span>
      <span className="ml-2 h-px flex-1 bg-border-strong" />
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between border-b border-border py-3 transition-colors hover:border-gold"
    >
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <span className="font-display text-sm text-foreground transition-colors group-hover:text-gold">
        {value} <span aria-hidden>↗</span>
      </span>
    </a>
  );
}
