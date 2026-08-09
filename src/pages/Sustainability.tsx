import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Leaf, Droplets, Wind, Recycle, TreePine, Globe, Sun, Zap,
  ArrowRight, Target, TrendingUp, Shield,
  Heart, Award
} from "lucide-react";
import sustainabilityHero from "@/assets/sustainability-hero.jpg.asset.json";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    icon: Leaf,
    title: "Clean Energy Transition",
    desc: "LPG is one of the cleanest conventional fuels, producing significantly lower carbon emissions compared to coal, wood, and kerosene. We actively promote LPG as a bridge fuel towards a cleaner future.",
    color: "primary" as const,
    stats: "40% Less CO₂",
  },
  {
    icon: Droplets,
    title: "Water & Air Quality",
    desc: "By replacing biomass fuels, LPG helps reduce indoor air pollution — a leading cause of respiratory illness. Our operations follow strict standards to protect water sources and air quality.",
    color: "accent" as const,
    stats: "Zero Particulates",
  },
  {
    icon: Recycle,
    title: "Circular Cylinder Economy",
    desc: "Our cylinders are designed for long life and are refurbished, inspected, and recirculated — minimizing waste. We recover and recycle end-of-life cylinders responsibly.",
    color: "primary" as const,
    stats: "15+ Year Lifespan",
  },
  {
    icon: TreePine,
    title: "Forest Conservation",
    desc: "Every household switching from firewood to LPG helps protect Bangladesh's forests. Our mission directly contributes to preserving biodiversity and preventing deforestation.",
    color: "accent" as const,
    stats: "1,000+ Trees Saved/Year",
  },
];

const initiatives = [
  { icon: Sun, title: "Solar-Powered Facilities", desc: "Installing solar panels across our plants and depots to reduce grid dependency." },
  { icon: Wind, title: "Emission Monitoring", desc: "Continuous monitoring of emissions at all bottling plants with real-time tracking systems." },
  { icon: Globe, title: "Community Programs", desc: "Educational outreach on clean cooking, safe LPG use, and environmental awareness." },
  { icon: Zap, title: "Energy Efficiency", desc: "Optimized logistics routes and fuel-efficient transport to minimize our carbon footprint." },
  { icon: Heart, title: "Employee Wellbeing", desc: "ISO 45001 certified workplace safety and health programs for our entire team." },
  { icon: Shield, title: "Regulatory Compliance", desc: "Exceeding government environmental standards with ISO 14001 certified management systems." },
];

const sdgGoals = [
  { number: "3", title: "Good Health & Wellbeing", desc: "Reducing indoor air pollution through clean fuel" },
  { number: "7", title: "Affordable & Clean Energy", desc: "Providing accessible LPG to millions" },
  { number: "13", title: "Climate Action", desc: "Lower emissions vs. traditional biomass fuels" },
  { number: "15", title: "Life on Land", desc: "Protecting forests by reducing firewood dependency" },
];

const Sustainability = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <img src={sustainabilityHero.url} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="container mx-auto px-4 relative z-10 py-24 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white border border-white/20 backdrop-blur-sm mb-6">
            <Leaf className="h-4 w-4 text-green-400" /> Our Commitment
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Sustainability</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Building a cleaner, greener Bangladesh — one flame at a time. Our commitment to environmental responsibility drives everything we do.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Vision Statement */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Our Sustainability Vision</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At Jamuna Gas, sustainability isn't just a policy — it's woven into our DNA. As Bangladesh's pioneer in LPG distribution, we understand the critical role clean energy plays in reducing environmental impact while powering progress.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <p className="text-muted-foreground leading-relaxed">
              LPG produces up to <strong className="text-foreground">40% fewer CO₂ emissions</strong> than coal and virtually eliminates particulate matter that causes respiratory disease. Every cylinder we deliver is a step towards a healthier planet and healthier communities.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Four Pillars */}
    <section className="py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
              <Target className="h-4 w-4 text-accent" /> Core Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Our Sustainability Pillars</h2>
            <p className="max-w-2xl mx-auto mt-3 text-lg text-white/50">Four foundational commitments that guide our environmental responsibility.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-8 group hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color === "primary" ? "from-primary to-primary/30" : "from-accent to-accent/30"} opacity-60`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${p.color === "primary" ? "from-primary/20 to-primary/5" : "from-accent/20 to-accent/5"} flex items-center justify-center`}>
                      <p.icon className={`h-7 w-7 ${p.color === "primary" ? "text-primary" : "text-accent"}`} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${p.color === "primary" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>
                      {p.stats}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{p.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Green Initiatives */}
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge"><Recycle className="h-4 w-4" /> Green Initiatives</span>
            <h2 className="section-title">What We're Doing</h2>
            <p className="section-subtitle">Concrete actions we're taking to minimize our environmental impact and build a sustainable future.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {initiatives.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="relative rounded-2xl border border-border/40 bg-card p-7 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* UN SDG Alignment */}
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge"><Globe className="h-4 w-4" /> Global Goals</span>
            <h2 className="section-title">UN Sustainable Development Goals</h2>
            <p className="section-subtitle">Our operations align with the United Nations Sustainable Development Goals, contributing to global targets.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sdgGoals.map((g, i) => (
            <ScrollReveal key={g.number} delay={i * 120}>
              <div className="relative rounded-2xl border border-border/40 bg-card p-8 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-extrabold text-primary">#{g.number}</span>
                </div>
                <h3 className="font-bold text-sm mb-1.5">{g.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Impact Numbers */}
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-4 border border-white/10">
              <TrendingUp className="h-4 w-4 text-accent" /> Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Sustainability by the Numbers</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "40%", label: "Less CO₂ vs Coal", icon: Wind },
            { value: "1.5M+", label: "Families Using Clean Fuel", icon: Heart },
            { value: "1,000+", label: "Trees Saved Annually", icon: TreePine },
            { value: "3", label: "ISO Certifications", icon: Award },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="text-center rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors h-full">
                <stat.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Join Our Green Journey</h2>
              <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">
                Every cylinder of Jamuna Gas is a step towards a cleaner, healthier Bangladesh. Switch to LPG today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-br from-white via-white to-white/90 text-primary font-bold px-10 rounded-xl h-13 shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 btn-shine group">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 px-10 rounded-xl h-13 backdrop-blur-sm transition-all duration-300">
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Sustainability;
