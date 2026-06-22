import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2, Paintbrush, Cylinder, Factory, Ship, Sprout, Store,
  ArrowRight, Network, MapPin, Calendar,
} from "lucide-react";

const companies = [
  {
    name: "Classic Paints",
    tagline: "Premium Decorative & Industrial Coatings",
    desc: "A trusted name in decorative, industrial, and protective paints — delivering durable finishes for homes, factories, and infrastructure across Bangladesh.",
    sectors: ["Decorative", "Industrial", "Protective"],
    icon: Paintbrush,
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    accent: "text-rose-500",
    location: "Dhaka, Bangladesh",
    since: "Since 2005",
  },
  {
    name: "JB Cylinder Ltd.",
    tagline: "LPG Cylinder Manufacturing",
    desc: "State-of-the-art manufacturing of high-quality LPG cylinders meeting international safety and quality standards, supplying domestic and industrial markets.",
    sectors: ["12 kg", "5.5 kg", "35–45 kg"],
    icon: Cylinder,
    gradient: "from-primary via-primary/80 to-accent",
    accent: "text-primary",
    location: "Kaligonj, Gazipur",
    since: "Since 2010",
  },
  {
    name: "JBRL",
    tagline: "Jamuna Bottlers & Refineries Ltd.",
    desc: "Modern refining and bottling operations powering Jamuna Group's energy distribution network with consistent quality and reliable throughput.",
    sectors: ["Refining", "Bottling", "Storage"],
    icon: Factory,
    gradient: "from-slate-700 via-slate-600 to-primary",
    accent: "text-slate-700",
    location: "Mongla, Bagerhat",
    since: "Since 2008",
  },
  {
    name: "JB Dredger Ltd.",
    tagline: "Marine Dredging Services",
    desc: "Professional dredging services for ports, rivers, and industrial waterways — supporting Bangladesh's blue economy with modern equipment and skilled crews.",
    sectors: ["Port Dredging", "River", "Industrial"],
    icon: Ship,
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    accent: "text-sky-600",
    location: "Chittagong",
    since: "Since 2014",
  },
  {
    name: "JB Agro Plantation Ltd.",
    tagline: "Sustainable Agriculture & Plantations",
    desc: "Large-scale agricultural plantations focused on sustainable farming, agroforestry, and contributing to food security and rural employment.",
    sectors: ["Plantation", "Agroforestry", "Crops"],
    icon: Sprout,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    accent: "text-emerald-600",
    location: "Multiple Districts",
    since: "Since 2016",
  },
  {
    name: "Jamuna Enterprise",
    tagline: "Trading & General Merchandise",
    desc: "The flagship trading arm of Jamuna Group — handling import, export, and distribution of essential commodities and industrial goods nationwide.",
    sectors: ["Trading", "Import", "Distribution"],
    icon: Store,
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    accent: "text-amber-600",
    location: "Dhaka, Bangladesh",
    since: "Since 1998",
  },
];

const SisterConcerns = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-foreground to-foreground/95 text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6">
            <Network className="h-4 w-4 text-accent" /> Jamuna Gas
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">Our Sister Concerns</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A diversified family of companies — building Bangladesh's industry, infrastructure, and agriculture under one trusted group.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-14 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              { v: "6+", l: "Sister Companies" },
              { v: "25+", l: "Years of Legacy" },
              { v: "10k+", l: "Employees" },
              { v: "64", l: "Districts Served" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-badge"><Building2 className="h-4 w-4" /> Group Companies</span>
            <h2 className="section-title">A Family of Industries</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Each company operates with the same commitment to quality, safety, and customer trust that defines the Jamuna Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {companies.map((c) => (
              <article
                key={c.name}
                className="group relative rounded-3xl border border-border/40 bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Cover */}
                <div className="relative h-44 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <c.icon className="h-20 w-20 text-white/40 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
                  </div>
                  <span className="absolute top-4 left-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {c.since}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-xl bg-muted/60 flex items-center justify-center shrink-0`}>
                      <c.icon className={`h-5 w-5 ${c.accent}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold leading-snug">{c.name}</h3>
                      <p className="text-xs text-muted-foreground">{c.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {c.sectors.map((s) => (
                      <span key={s} className="text-[10px] font-semibold uppercase tracking-wider bg-muted/60 text-muted-foreground rounded-full px-2.5 py-1">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {c.location}
                    </span>
                    <span className="text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Group Member <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border/30 bg-card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
            <span className="section-badge"><Network className="h-4 w-4" /> One Group, Many Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Partner With the Jamuna Group</h2>
            <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
              From energy and manufacturing to agriculture and trading — explore how our group companies can serve your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="premium" className="btn-shine h-12 px-7">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-7 rounded-xl">
                <Link to="/about">About Jamuna Gas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SisterConcerns;