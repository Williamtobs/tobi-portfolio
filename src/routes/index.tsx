import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tobi William Akeem — Flutter Developer" },
      {
        name: "description",
        content:
          "Tobi William Akeem is a mobile developer with 4 years of technical experience in building scalable mobile applications using flutter and currently learning Swift. I leverage my coding skills in creating technical solutions to problems for socio-economic good. Aside from my technical skills, I have acquired soft skills such as team-playing, communication, problem-solving, critical thinking, etc.",
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

type Project = {
  year: string;
  name: string;
  role: string;
  summary: string;
  stack: string[];
  storeUrl?: string;
};

const projects: Project[] = [
  {
    year: "2026",
    name: "Shop Society",
    role: "Mobile Engineer",
    summary:
      "Shop Society brings shops, reps, and customers together in one powerful community-driven platform. Discover products, share content, grow your brand, and finally get seen without fighting the algorithm. This is commerce… reimagined for small shops.",
    stack: ["Flutter", "Bloc", "Firebase", "Stripe", 'OAuth', "Dio", "WebSockets", "Rest API"],
    storeUrl: "https://apps.apple.com/us/app/shop-society/id6757849588",
  },
  {
    year: "2025",
    name: "LoveNest",
    role: "Lead Mobile Engineer",
    summary:
      "A dating app designed exclusively for single parents, Love Nest offers a safe, respectful and authentic space, where parenting, values and life choices come first.",
    stack: ["Flutter", "Bloc", "Firebase", "In-App Purchases", 'Stripe', "Dio", "WebSockets", "Rest API", "Rive", "OAuth"],
    storeUrl: "https://apps.apple.com/us/app/love-nest-single-parents/id6747092702",
  },
  {
    year: "2024",
    name: "O3 Cards",
    role: "Mobile Engineer",
    summary:
      "O3 Capital is Nigeria’s first non-bank based credit card issuing company, offering customers convenient payment cards and loan platform.",
    stack: ["Flutter", "Riverpod", "Firebase", "Dio", "WebSockets", "Rest API"],
    storeUrl: "https://apps.apple.com/us/app/o3cards/id1565911719",
  },
  {
    year: "2024",
    name: "Ecstasy | Virtual Dollar Card",
    role: "Lead Mobile Engineer",
    summary:
      "An app where you can securely pay online in dollars and handle everyday bills in one place",
    stack: ["Flutter", "Provider", "Dio", "WebSockets", "Rest API", "Secure Storage"],
    storeUrl: "https://apps.apple.com/us/app/ecstasy-virtual-dollar-card/id6448960100",
  },
  {
    year: "2023",
    name: "SekiApp",
    role: "Mobile Engineer",
    summary:
      "A digital exchange platform which allows users to trade over 200 categories of gift cards, generate Virtual Dollar Cards for international shopping, and pay local utility bills",
    stack: ["Flutter", "Riverpod", "Dio", "Rest API", "Secure Storage"],
    storeUrl: "https://apps.apple.com/us/app/sekiapp/id1622624126",
  },
];

const cvUrl = "https://docs.google.com/document/d/1v1PwBFTURCZy006_lccsM-mymLbeCwml3dNK6DOx7c8/edit?usp=sharing";

const experience = [
  {
    period: "2025 — Now",
    role: "Mobile Developer",
    company: "Freelance",
    location: "Worldwide",
    notes:
      "Partnered with founders and studios across Europe and Africa to launch MVPs — most went from blank repo to App Store in under 90 days.",
  },
  {
    period: "2024 — Now",
    role: "Senior Mobile Engineer",
    company: "Nativebrand Technology and Design Agency Ltd",
    location: "Lagos · Remote",
    notes:
      "Shipped 5 production apps across fintech and on-demand services. Led the mobile architecture for a rapidly growing startup, ensuring scalability and maintainability as the team expanded.",
  },
  {
    period: "2022 — 2023",
    role: "Flutter Developer - Lead Mobile Engineer",
    company: "Wiseki Technologies",
    location: "Ibadan · Hybrid",
    notes:
      "Took ownership of the mobile codebase, leading the development of a digital exchange platform with over 100k users. Implemented best practices and mentored junior developers, fostering a culture of code quality and continuous learning.",
  },
];

const skills = [
  "Flutter", "Dart", "Riverpod", "Bloc", "GoRouter",
  "Firebase", "Supabase", "GraphQL", "REST", "WebSockets",
  "Swift", "Kotlin", "Platform Channels", "FFI",
  "Figma", "Rive", "Lottie", "Fastlane", "GitHub Actions",
  "Clean Architecture", "TDD", "CI/CD", "Agile Methodologies",
  "Effective Communication", "Team Leadership", "Problem Solving", "Critical Thinking",
];

function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="noir-vignette pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[680px] px-6 py-16 sm:py-24">
        {/* Top bar */}
        <header className="mb-24 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-gold">TWA</span>
          <span>Flutter · Mobile · 2026</span>
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
                Available · Q2 2026
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
            I'm a mobile developer with 4 years of technical experience in building
            scalable mobile applications using flutter.
            I leverage my coding skills in creating technical solutions to problems
            for socio-economic good. Aside from my technical skills, I have acquired
            soft skills such as team-playing, communication, problem-solving,
            critical thinking, etc.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:akeemtobi6@gmail.com"
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
            { k: "4y", v: "Shipping Flutter" },
            { k: "10", v: "Apps in production" },
            { k: "100k+", v: "Combined installs" },
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
                {p.storeUrl ? (
                  <a
                    href={p.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
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
                  </a>
                ) : (
                  <>
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
                  </>
                )}
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
              <ContactRow label="Email" value="akeemtobi6@gmail.com" href="mailto:akeemtobi6@gmail.com" />
              <ContactRow label="GitHub" value="@williamtobs" href="https://github.com/williamtobs" />
              <ContactRow label="CV" value="View Google Doc" href={cvUrl} target="_blank" />
              <ContactRow label="LinkedIn" value="in/tobi-william" href="https://www.linkedin.com/in/tobi-william-806a341aa/" target="_blank" />
            </div>
          </div>
        </section>

        <footer className="hairline flex flex-col items-start justify-between gap-3 pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 Tobi William Akeem</span>
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
  target,
  rel,
}: {
  label: string;
  value: string;
  href: string;
  target?: string;
  rel?: string;
}) {
  const isExternal = href.startsWith("http");
  const targetProp = target ?? (isExternal ? "_blank" : undefined);
  const computedRel = rel ?? (targetProp === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      target={targetProp}
      rel={computedRel}
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
