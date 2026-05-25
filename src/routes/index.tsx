import { createFileRoute } from "@tanstack/react-router";
import { Phone, Wrench, Flame, Droplets, Bath, ShowerHead, ShieldCheck, Star, Clock, MapPin, Mail, ArrowRight, Hammer, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_DISPLAY = "(602) 400-0082";
const PHONE_HREF = "tel:+16024000082";

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Process />
      <Commercial />
      <Contact />
      <Footer />
      <MobileCallBar />
    </main>
  );
}

/* ---------------- Top bar (desktop) ---------------- */
function TopBar() {
  return (
    <div className="hidden md:block gradient-ink text-primary-foreground/90 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5 text-brass" /> Serving Greater Phoenix · Since 2006</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-brass" /> Phoenix, AZ</span>
        </div>
        <a href="mailto:cody@allveesplumbing.com" className="inline-flex items-center gap-1.5 hover:text-brass transition">
          <Mail className="size-3.5" /> cody@allveesplumbing.com
        </a>
      </div>
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold text-primary md:text-3xl">All Vee's</span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">Plumbing · Est. 2006</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#why" className="hover:text-primary transition">Why Us</a>
          <a href="#process" className="hover:text-primary transition">Process</a>
          <a href="#commercial" className="hover:text-primary transition">Commercial</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
        >
          <Phone className="size-4" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-10 md:grid-cols-12 md:gap-12 md:px-6 md:pb-24 md:pt-16">
        <div className="md:col-span-7 md:pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-brass" /> Phoenix's trusted plumber
          </span>
          <h1 className="mt-5 font-display text-[44px] leading-[1.02] font-medium tracking-tight text-primary text-balance sm:text-5xl md:text-[68px]">
            Plumbing done <em className="font-display italic text-brass">right</em><br />
            the first time.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Two decades of meticulous craftsmanship for Valley homes and businesses. From a single fixture to a full bathroom remodel — handled by a master plumber, not a dispatcher.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary/90">
              <Phone className="size-5" /> Call {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-4 text-base font-semibold text-primary shadow-soft transition hover:border-brass hover:text-primary">
              Request a quote <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 max-w-lg">
            <Stat k="19+" v="Years serving Phoenix" />
            <Stat k="40+" v="Years of plumbing craft" />
            <Stat k="A+" v="BBB accredited" />
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute -inset-6 -z-10 rounded-3xl gradient-brass opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <img
              src={heroImg}
              alt="All Vee's master plumber working on premium brass fixtures in an Arizona home"
              width={1080}
              height={1920}
              className="h-[440px] w-full object-cover md:h-[600px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-5">
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="flex -space-x-1 text-brass">
                  {[0,1,2,3,4].map(i => <Star key={i} className="size-4 fill-brass" />)}
                </div>
                <span className="text-sm font-medium">Trusted by Valley homeowners since 2006</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px hairline-brass opacity-60" />
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-semibold text-primary md:text-4xl">{k}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
    </div>
  );
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const items = [
    "Licensed & Insured",
    "BBB A+ Accredited",
    "Residential & Commercial",
    "Family-Owned",
    "Phoenix Local",
  ];
  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground md:px-6">
        {items.map((i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-brass" /> {i}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const SERVICES = [
  { icon: Flame, title: "Water Heaters", desc: "Repair, replacement and installation of tank water heaters built to last in Arizona's hard-water conditions." },
  { icon: Droplets, title: "Tankless Water Heaters", desc: "Endless hot water and lower utility bills with expertly installed tankless systems." },
  { icon: Wrench, title: "Water Softeners", desc: "Protect fixtures and appliances from Phoenix's hard water with a properly sized softener." },
  { icon: ShowerHead, title: "Reverse Osmosis", desc: "Clean, great-tasting drinking water with premium under-sink RO systems." },
  { icon: Bath, title: "Bathroom Remodels", desc: "Full bathroom remodels — from rough-in to fixtures — finished by a single trusted team." },
  { icon: Hammer, title: "Repairs & Installs", desc: "Toilets, garbage disposals, showers, faucets — installed and repaired right the first time." },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">What we do</span>
          <h2 className="mt-3 font-display text-4xl font-medium text-primary md:text-5xl">A complete plumbing service, done with care.</h2>
        </div>
        <a href={PHONE_HREF} className="hidden text-sm font-medium text-primary underline-offset-4 hover:underline md:inline-flex">
          Need it handled today? Call {PHONE_DISPLAY} →
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="group relative bg-card p-7 transition hover:bg-cream">
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-brass shadow-soft transition group-hover:bg-brass group-hover:text-primary">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */
function WhyUs() {
  const pillars = [
    { t: "Master craftsmanship", d: "Forty-plus combined years of plumbing experience on every job — residential or commercial." },
    { t: "Quality parts only", d: "We don't cut corners with cheap fittings. The job is done once, with parts built to last." },
    { t: "Straight answers", d: "Clear, up-front communication. Your questions are answered before any work begins." },
    { t: "Repeat-client business", d: "Most of our work comes from clients who have called us back, again and again, since 2006." },
  ];
  return (
    <section id="why" className="gradient-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:grid-cols-12 md:px-6 md:py-28">
        <div className="md:col-span-5">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">Why All Vee's</span>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl text-balance">
            We've earned our reputation one job at a time.
          </h2>
          <p className="mt-5 text-primary-foreground/75 leading-relaxed">
            All Vee's was built on a single premise: do quality work, with quality parts, and stand behind it. Two decades later, that's still how every job starts and ends.
          </p>
          <div className="mt-8 h-px hairline-brass" />
          <p className="mt-6 font-display italic text-2xl text-brass/90">"Done right the first time."</p>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map(p => (
              <li key={p.t} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 backdrop-blur">
                <ShieldCheck className="size-5 text-brass" />
                <h3 className="mt-3 font-display text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Call or request a quote", d: "Tell us what's happening. We'll listen, ask the right questions, and schedule a visit." },
    { n: "02", t: "Honest on-site diagnosis", d: "We assess the issue in person and walk you through the options — no upsells, no guesswork." },
    { n: "03", t: "Done right, once", d: "Quality parts, careful workmanship, a clean job site, and a guarantee you can trust." },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28">
      <div className="max-w-2xl">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">How it works</span>
        <h2 className="mt-3 font-display text-4xl font-medium text-primary md:text-5xl">Three steps. No surprises.</h2>
      </div>
      <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map(s => (
          <li key={s.n} className="relative rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="font-display text-5xl font-medium text-brass/80">{s.n}</div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-primary">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------- Commercial ---------------- */
function Commercial() {
  return (
    <section id="commercial" className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">For business</span>
          <h2 className="mt-3 font-display text-4xl font-medium text-primary md:text-5xl text-balance">
            A preferred plumbing contractor for some of the Valley's largest properties.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We've handled commercial plumbing on some of the largest mall and commercial projects in the Phoenix area. If you manage a property, a build-out, or a tenant improvement — we're set up to handle it.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90">
            Talk to a commercial estimator <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: Building2, t: "Mall & retail", d: "Tenant build-outs, fixture installs, repairs" },
              { i: Wrench, t: "Property mgmt", d: "Scheduled service & priority response" },
              { i: Flame, t: "Water heater fleets", d: "Commercial-grade installs & swaps" },
              { i: Droplets, t: "Water systems", d: "Softeners, RO, filtration at scale" },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-5">
                <Icon className="size-5 text-brass" />
                <div className="mt-3 font-display text-lg font-semibold text-primary">{t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28">
      <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-card p-7 shadow-elegant md:grid-cols-2 md:p-12">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">Get in touch</span>
          <h2 className="mt-3 font-display text-4xl font-medium text-primary md:text-5xl text-balance">
            Tell us what's going on. We'll take it from there.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Call directly for fastest response, or send a quick note and we'll get back to you the same business day.
          </p>

          <div className="mt-8 space-y-4">
            <a href={PHONE_HREF} className="flex items-center gap-4 rounded-xl border border-border bg-cream p-4 transition hover:border-brass">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-brass"><Phone className="size-5" /></span>
              <span>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="font-display text-xl font-semibold text-primary">{PHONE_DISPLAY}</div>
              </span>
            </a>
            <a href="mailto:cody@allveesplumbing.com" className="flex items-center gap-4 rounded-xl border border-border bg-cream p-4 transition hover:border-brass">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-brass"><Mail className="size-5" /></span>
              <span>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-medium text-primary">cody@allveesplumbing.com</div>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-cream p-4">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary text-brass"><MapPin className="size-5" /></span>
              <span>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="font-medium text-primary">18613 N 19th Ave #158445, Phoenix, AZ 85027</div>
              </span>
            </div>
          </div>
        </div>

        <form
          className="rounded-2xl bg-cream p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const body = encodeURIComponent(`Name: ${f.get("name")}\nPhone: ${f.get("phone")}\n\n${f.get("msg")}`);
            window.location.href = `mailto:cody@allveesplumbing.com?subject=Plumbing%20Request&body=${body}`;
          }}
        >
          <div className="space-y-4">
            <Field name="name" label="Name" placeholder="Your name" required />
            <Field name="email" label="Email" type="email" placeholder="you@example.com" required />
            <Field name="phone" label="Phone" type="tel" placeholder="(602) 000-0000" required />
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">How can we help?</label>
              <textarea
                name="msg"
                rows={4}
                required
                placeholder="A few details about the project or issue…"
                className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary/90"
          >
            Send request <ArrowRight className="size-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">Prefer to talk? <a href={PHONE_HREF} className="font-semibold text-primary underline-offset-4 hover:underline">Call {PHONE_DISPLAY}</a></p>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, required }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="gradient-ink text-primary-foreground/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="font-display text-2xl font-semibold text-primary-foreground">All Vee's Plumbing</div>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
            Premium residential & commercial plumbing across the greater Phoenix area. Family-trusted craftsmanship since 2006.
          </p>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">Services</div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {SERVICES.map(s => <li key={s.title}><a href="#services" className="text-primary-foreground/70 hover:text-brass transition">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-brass">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><a href={PHONE_HREF} className="hover:text-brass">{PHONE_DISPLAY}</a></li>
            <li><a href="mailto:cody@allveesplumbing.com" className="hover:text-brass">cody@allveesplumbing.com</a></li>
            <li>18613 N 19th Ave #158445<br />Phoenix, AZ 85027</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/50 md:flex-row md:px-6">
          <span>© {new Date().getFullYear()} All Vee's Plumbing Services. All rights reserved.</span>
          <span>Licensed & Insured · BBB A+ Accredited</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Mobile sticky call bar ---------------- */
function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a href={PHONE_HREF} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant">
          <Phone className="size-4" /> Call {PHONE_DISPLAY}
        </a>
        <a href="#contact" className="flex items-center justify-center rounded-full border border-primary/20 bg-card px-5 py-3.5 text-sm font-semibold text-primary">
          Quote
        </a>
      </div>
    </div>
  );
}
